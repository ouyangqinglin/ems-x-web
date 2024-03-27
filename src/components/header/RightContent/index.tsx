import { Space, Button, Modal, Tree, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { useModel } from 'umi';
import Avatar from './AvatarDropdown';
import styles from './index.less';
export type SiderTheme = 'light' | 'dark';
import { getSystemTime, exportData } from '@/services/device';
import { useRequest } from 'umi';
import moment from 'moment';

const GlobalHeaderRight: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const { data: systemDate } = useRequest(getSystemTime, { manual: false });
  const [time, setTime] = useState();
  const [checkData, setCheckData] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    let timer: any = null;
    if (systemDate) {
      setTime(systemDate);
      timer = setInterval(() => {
        const dataFormat = 'YYYY/MM/DD HH:mm:ss';
        setTime(
          (prevTime) => moment(prevTime, dataFormat).add(1, 'seconds').format(dataFormat) as any,
        );
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [systemDate]);

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
    if (!checkData.length) {
      message.info('请至少选择一项进行导出！');
      return;
    }
    exportData(checkData).catch(() => {
      message.error('导出失败！');
    });
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onTreeSelect = (data: string[]) => {
    setCheckData(data);
  };
  return (
    <>
      <Space className={className} size={16}>
        <Button type="link" onClick={showModal}>
          数据导出
        </Button>
        <span>系统时间：{time || '--'}</span>
        <Avatar menu />
      </Space>
      <Modal title="选择导出数据页面" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Tree
          checkable
          fieldNames={{ title: 'label', key: 'sourceId' }}
          treeData={initialState?.antMenus}
          onCheck={onTreeSelect}
          defaultExpandAll
        />
      </Modal>
    </>
  );
};

export default GlobalHeaderRight;
