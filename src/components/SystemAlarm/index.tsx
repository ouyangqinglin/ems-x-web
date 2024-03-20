import React from 'react';
import type { DeviceDataType, ModelTypeEnum } from './config';
import type { TabsProps } from 'antd';
import AlarmRecord from './AlarmRecord';
import AlarmStatus from './AlarmStatus';
import { Tabs, Card } from 'antd';
import { formatMessage } from '@/utils';

export type SystemAlarmProps = {
  modelType?: keyof typeof ModelTypeEnum;
  deviceData?: DeviceDataType;
};

const SystemAlarm: React.FC<SystemAlarmProps> = (props) => {
  
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: formatMessage({ id: 'common', defaultMessage: '告警状态' }),
      children: <AlarmStatus {...props} />,
    },
    {
      key: '2',
      label: formatMessage({ id: 'common', defaultMessage: '告警记录' }),
      children: <AlarmRecord {...props} />,
    },
  ];

  return (
    <Card>
      <Tabs items={items} />
    </Card>
  );
};

export default SystemAlarm;
