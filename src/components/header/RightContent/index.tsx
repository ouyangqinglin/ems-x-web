import { Space, Button, Modal, Tree, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { useModel } from 'umi';
import Avatar from './AvatarDropdown';
import styles from './index.less';
export type SiderTheme = 'light' | 'dark';
import { getSystemTime, exportData } from '@/services/device';

const GlobalHeaderRight: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const [tiem, setTime] = useState();
  const [checkData, setCheckData] = useState<string[]>([]);
  const { config } = useModel('config');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const requestSystemTime = () => {
    return getSystemTime()
      .then((res) => {
        setTime(res.data);
        return true;
      })
      .catch(() => {
        return false;
      });
  };
  useEffect(() => {
    requestSystemTime();
    const timer = setInterval(() => {
      const isNoError = requestSystemTime();
      !isNoError && clearInterval(timer);
    }, config.refreshTime * 1000);
    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config.refreshTime]);

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
        <span>{tiem}</span>
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
