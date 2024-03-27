/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-15 16:40:51
 * @LastEditTime: 2024-03-16 11:29:44
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\help\Help\index.tsx
 */

import React, { useState } from 'react';
import styles from './index.less'
import { Button, } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
// import { ConfigProviderProps } from 'antd/lib/config-provider';
// type SizeType = ConfigProviderProps['componentSize'];

const Help: React.FC = () => {
  // const [size] = useState<SizeType>('large');

  return (
    <>
      <div className={styles.title}>YT-ESS-EMS工商储能量管理系统上位机软件&nbsp;V1.0</div>
      <div className={styles.subTitle}>适配&nbsp;EMSV1.0&nbsp;通信盒</div>
      <div className={styles.download}>
        {/* <Button type="primary" icon={<DownloadOutlined />} size={size}>Download</Button> */}
      </div>
    </>
  );
};

export default Help;
