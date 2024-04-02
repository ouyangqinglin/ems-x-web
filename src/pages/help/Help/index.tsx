/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-15 16:40:51
 * @LastEditTime: 2024-03-16 11:29:44
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\help\Help\index.tsx
 */

import styles from './index.less';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { useModel } from 'umi';

const Help: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const onClick = () => {
    console.log("systemNameEN === ", initialState?.currentUser?.systemInfo?.title);
    console.log("version === ", initialState?.currentUser?.systemInfo?.version);
  };

  return (
    <>
      <div className={styles.title}>
        {initialState?.currentUser?.systemInfo?.title}&nbsp;
        {initialState?.currentUser?.systemInfo?.version}
      </div>
      <div className={styles.subTitle}>适配&nbsp;EMSV1.0&nbsp;通信盒</div>
      <div className={styles.download}>
        <Button
          type="primary"
          shape="round"
          icon={<DownloadOutlined />}
          size="large"
          onClick={onClick}
        >
          用户手册
        </Button>
      </div>
    </>
  );
};

export default Help;
