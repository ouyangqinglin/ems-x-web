/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-19 15:10:06
 * @LastEditTime: 2024-03-20 17:42:47
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\components\Device\RefreshData\index.tsx
 */

import React, { memo } from 'react';
import { RedoOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';
import styles from './index.less';
import { useBoolean } from 'ahooks';
import { RequestCode } from '@/utils/dictionary';

type RefreshDataType = {
  className?: string;
  time?: string;
  run?: (params?: any) => Promise<any> | undefined;
};

const RefreshData: React.FC<RefreshDataType> = (props) => {
  const { time = '', run, className = '' } = props;

  const [loading, { setFalse, setTrue }] = useBoolean(false);

  const onClick = () => {
    setTrue();
    const request = run?.();
    if (request && request.then) {
      request
        ?.then?.((res) => {
          if (res.code == RequestCode.Success) {
            message.success('刷新成功');
          }
        })
        ?.finally?.(() => {
          setFalse();
        });
    } else {
      message.error('暂无数据');
      setFalse();
    }
  };

  return (
    <>
      <div className={`tx-right px24 py16 ${styles.contain} ${className}`}>
        更新时间：{time}
        <Button loading={loading} className="ml12" icon={<RedoOutlined />} onClick={onClick}>
          更新
        </Button>
      </div>
    </>
  );
};

export default memo(RefreshData);
