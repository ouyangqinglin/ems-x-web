/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-19 15:10:06
 * @LastEditTime: 2024-03-19 17:37:09
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\components\Device\RefreshData\index.tsx
 */

import React, { memo } from 'react';
import { RedoOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import styles from './index.less';

type RefreshDataType = {
  className?: string;
  time?: string;
  run?: (params?: any) => Promise<any>;
};

const RefreshData: React.FC<RefreshDataType> = (props) => {
  const { time = '', run, className = '' } = props;

  return (
    <>
      <div className={`tx-right px24 py16 ${styles.contain} ${className}`}>
        更新时间：{time}
        <Button className="ml12" icon={<RedoOutlined />} onClick={() => run?.()}>
          更新
        </Button>
      </div>
    </>
  );
};

export default memo(RefreshData);
