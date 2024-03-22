import { Space, Button, Modal, Tree } from 'antd';
import React, { useEffect, useState } from 'react';
import { useModel } from 'umi';
import Avatar from './AvatarDropdown';
import styles from './index.less';
import moment from 'moment';

export type SiderTheme = 'light' | 'dark';

const GlobalHeaderRight: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const [tiem, setTime] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = moment().format('YYYY-MM-DD dddd');
      setTime(currentTime as any);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  if (!initialState || !initialState.settings) {
    return null;
  }
  const { navTheme, layout } = initialState.settings;
  let className = styles.right;

  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onTreeSelect = (data) => {
    console.log('data>>', data);
  };
  return (
    <>
      <Space className={className} size={16}>
        <Button type="link" onClick={showModal}>
          数据导出
        </Button>
        <span>{tiem}</span>
        <Avatar menu />
      </Space>
      <Modal title="选择导出数据页面" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Tree
          checkable
          fieldNames={{ title: 'label', key: 'key' }}
          treeData={initialState?.antMenus}
          onSelect={onTreeSelect}
          defaultExpandAll
        />
      </Modal>
    </>
  );
};

export default GlobalHeaderRight;
