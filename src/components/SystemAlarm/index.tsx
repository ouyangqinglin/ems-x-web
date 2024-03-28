import React from 'react';
import type { ModelTypeEnum, DeviceType } from './config';
import type { TabsProps } from 'antd';
import AlarmRecord from './AlarmRecord';
import AlarmStatus from './AlarmStatus';
import { Tabs } from 'antd';
import { formatMessage } from '@/utils';
import styles from './index.less';
import { ReactComponent as NormalStatusIcon } from '@/assets/image/device/normal_status.svg';
import { ReactComponent as AlarmStatusIcon } from '@/assets/image/device/alarm_status.svg';
import { ReactComponent as AlarmerStatusIcon } from '@/assets/image/device/alarmer_status.svg';
import { ReactComponent as AlarmestStatusIcon } from '@/assets/image/device/alarmest_status.svg';

export type SystemAlarmProps = {
  deviceType?: DeviceType;
  modelType?: ModelTypeEnum;
  realTimeData?: any;
};

const SystemAlarm: React.FC<SystemAlarmProps> = (props) => {
  const tabBar = (
    <div className={styles.status}>
      <span>
        <NormalStatusIcon />
        正常状态
      </span>
      <span>
        <AlarmestStatusIcon />
        严重告警
      </span>
      <span>
        <AlarmerStatusIcon />
        中等告警
      </span>
      <span>
        <AlarmStatusIcon />
        一般告警
      </span>
    </div>
  );
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: formatMessage({ id: 'alarm.status', defaultMessage: '告警状态' }),
      children: <AlarmStatus {...props} />,
    },
    {
      key: '2',
      label: formatMessage({ id: 'alarm.record', defaultMessage: '告警记录' }),
      children: <AlarmRecord {...props} />,
    },
  ];

  return (
    <div className="card-wrap shadow p20 h-full">
      <Tabs items={items} tabBarExtraContent={tabBar} />
    </div>
  );
};

export default SystemAlarm;
