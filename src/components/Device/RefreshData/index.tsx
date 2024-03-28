/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-19 15:10:06
 * @LastEditTime: 2024-03-28 16:18:02
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\components\Device\RefreshData\index.tsx
 */

import React, { memo } from 'react';
import { RedoOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';
import styles from './index.less';
import { useBoolean } from 'ahooks';
import { RequestCode } from '@/utils/dictionary';
import { useRequest } from 'umi';
import { getSystemStatus } from '@/services/device';
type RefreshDataType = {
  className?: string;
  time?: string;
  showDeviceModel?: boolean;
  run?: (params?: any) => Promise<any> | undefined;
  loading?: boolean;
};

const RefreshData: React.FC<RefreshDataType> = (props) => {
  const { time = '', run, className = '', showDeviceModel = false, loading = false } = props;

  const { data: deviceData } = useRequest(getSystemStatus, { manual: false });
  const [runLoading, { setFalse, setTrue }] = useBoolean(false);

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
      <div className={`px24 py16 ${styles.flex} ${className}`}>
        <div className={styles.label}>
          {showDeviceModel ? `设备型号：${deviceData?.deviceModel || '--'}` : ''}
        </div>
        <div>
          更新时间（本地）：{time}
          <Button
            loading={loading || runLoading}
            className="ml12"
            icon={<RedoOutlined />}
            onClick={onClick}
          >
            更新
          </Button>
        </div>
      </div>
    </>
  );
};

export default memo(RefreshData);
