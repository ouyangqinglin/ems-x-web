import styles from './index.less';
import { Select } from 'antd';
import { useModel } from 'umi';
import { getSystemStatus } from '@/services/device';
import { useEffect, useMemo, useState } from 'react';
import { ReactComponent as AlarmStatusIcon } from '@/assets/image/device/alarmest_status.svg';
import { ReactComponent as NormalStatusIcon } from '@/assets/image/device/normal_status.svg';
import { useLocation } from '@/hooks';

const options = [
  { label: '关闭', value: 0 },
  { label: '1s', value: 1 },
  { label: '2s', value: 2 },
  { label: '3s', value: 3 },
  { label: '5s', value: 5 },
  { label: '7s', value: 7 },
  { label: '9s', value: 9 },
  { label: '10s', value: 10 },
  { label: '12s', value: 12 },
  { label: '13s', value: 13 },
  { label: '15s', value: 15 },
];
// import { useDeviceData } from '@/hooks';
export default () => {
  const { data: page } = useModel('page');
  const { config, dispatch } = useModel('config');
  const { dispatch: dispatchDevice } = useModel('device');
  const [statusInfo, setStatusInfo] = useState({
    status: false,
    deviceSn: '',
    connectType: '',
    address: '',
  });
  const { pathname } = useLocation();

  const showRefreshRate = useMemo(() => {
    return /^\/(index|state|optical-index|liquid-index)/.test(pathname);
  }, [pathname]);

  const requestSystemStatus = async () => {
    let isError = false;
    try {
      const res = await getSystemStatus();
      if (res.code === 200) {
        setStatusInfo(res.data);
        dispatchDevice({ payload: { status: res.data?.status } });
      } else {
        isError = true;
      }
    } catch {
      isError = true;
    }
    return isError;
  };
  useEffect(() => {
    if (!config.refreshTime) {
      requestSystemStatus();
      return;
    }
    requestSystemStatus();
    const timer = setInterval(async () => {
      const isError = await requestSystemStatus();
      (isError || !page?.isVisible) && clearInterval(timer);
    }, config.refreshTime * 1000);
    return () => {
      clearInterval(timer);
    };
  }, [config.refreshTime]);

  const changeRefreshRate = (value: number) => {
    dispatch({ payload: { refreshTime: value } });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.left_content}>
        <span>{statusInfo?.connectType ? '打开成功：' : '串口未打开'}</span>
        <span className={styles.connectType}>{statusInfo?.connectType}</span>
        <span className={styles.address}>{statusInfo?.address}</span>
      </div>
      <div className={styles.right_content}>
        <div>
          <span>通信状态：</span>
          <span style={{ verticalAlign: 'middle' }}>
            {statusInfo?.status ? <NormalStatusIcon /> : <AlarmStatusIcon />}
          </span>
          <span className="ml5">{statusInfo?.status ? '连接正常' : '连接失败'}</span>
        </div>
        <div>
          <span>SN：</span>
          <span>{statusInfo?.deviceSn}</span>
        </div>
        <div style={{ display: showRefreshRate ? 'block' : 'none' }}>
          <span>自动刷新频率：</span>
          <Select
            style={{ width: '70px' }}
            defaultValue={config.refreshTime}
            onChange={changeRefreshRate}
            options={options}
          />
        </div>
      </div>
    </div>
  );
};
