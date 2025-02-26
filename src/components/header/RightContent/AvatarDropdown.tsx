import React, { useCallback, useEffect, useState } from 'react';
import {
  HomeOutlined,
  LogoutOutlined,
  MonitorOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Menu, Spin } from 'antd';
import { history, useModel } from 'umi';
import { stringify } from 'querystring';
import HeaderDropdown from '../../HeaderDropdown';
import styles from './index.less';
import type { MenuInfo } from 'rc-menu/lib/interface';
import { logout } from '@/services/session';
import { formatMessage } from '@/utils';
import HeadIcon from '@/assets/image/img_avatar.png';
import eventBus from '@/utils/eventBus';

export type GlobalHeaderRightProps = {
  menu?: boolean;
};

/**
 * 退出登录，并且将当前的 url 保存
 */
const loginOut = async () => {
  await logout();
  const { query = {}, pathname } = history.location;
  const { redirect } = query;
  // Note: There may be security issues, please note
  if (window.location.pathname !== '/user/login' && !redirect) {
    history.replace({
      pathname: '/user/login',
      search: stringify({
        redirect: pathname + '?' + stringify(query),
      }),
    });
  }
  window.location.reload();
};

const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({ menu }) => {
  const { initialState, setInitialState } = useModel('@@initialState');
  const { dispatch } = useModel('system');
  const [avatar, setAvatar] = useState('');

  const onMenuClick = useCallback(
    (event: MenuInfo) => {
      const { key } = event;
      if (key === 'logout') {
        setInitialState((s) => ({ ...s, currentUser: undefined, menus: undefined }));
        dispatch({ type: 'CHANGESTATE', payload: { tabList: [] } });
        loginOut();
        return;
      }
      history.push(`${key}`);
    },
    [setInitialState],
  );

  const loading = (
    <span className={`${styles.action} ${styles.account}`}>
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      />
    </span>
  );

  const changeAvatar = useCallback((value) => {
    setAvatar(value);
  }, []);

  useEffect(() => {
    setAvatar(initialState?.currentUser?.avatar || '');
  }, [initialState]);

  useEffect(() => {
    eventBus.on('changeAvatar', changeAvatar);
    return () => {
      eventBus.off('changeAvatar', changeAvatar);
    };
  }, []);

  if (!initialState) {
    return loading;
  }

  const { currentUser } = initialState;

  if (!currentUser || !currentUser.userName) {
    return loading;
  }

  const menuHeaderDropdown = (
    <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
      <Menu.Item key="logout">
        <LogoutOutlined />
        {formatMessage({ id: 'common.loginOut', defaultMessage: '退出登录' })}
      </Menu.Item>
    </Menu>
  );
  return (
    <HeaderDropdown overlay={menuHeaderDropdown}>
      <span className={`${styles.action} ${styles.account}`}>
        <Avatar className={styles.avatar} src={avatar || HeadIcon} alt="avatar" />
        <span className={`${styles.name} anticon`}>{currentUser.userName}</span>
      </span>
    </HeaderDropdown>
  );
};

export default AvatarDropdown;
