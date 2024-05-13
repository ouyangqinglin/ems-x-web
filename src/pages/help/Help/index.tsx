/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-15 16:40:51
 * @LastEditTime: 2024-05-13 09:32:19
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\help\Help\index.tsx
 */

import styles from './index.less';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { useModel, useRequest } from 'umi';
import { getEmsVersion } from './service';

const Help: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const { data: version } = useRequest(getEmsVersion);

  return (
    <>
      <div className={styles.title}>
        {initialState?.currentUser?.systemInfo?.title}&nbsp;
        {initialState?.currentUser?.systemInfo?.version}
      </div>
      <div className={styles.subTitle}>适配&nbsp;EMSV{version}&nbsp;通信盒</div>
      <div className={styles.download}>
        <Button type="primary" shape="round" icon={<DownloadOutlined />} size="large">
          用户手册
        </Button>
      </div>
    </>
  );
};

export default Help;
