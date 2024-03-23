import React from 'react';
import type { ModelTypeEnum } from './config';
import type { TabsProps } from 'antd';
import AlarmRecord from './AlarmRecord';
import AlarmStatus from './AlarmStatus';
import { Tabs, Card } from 'antd';
import { formatMessage } from '@/utils';
import styles from './index.less';
export type SystemAlarmProps = {
  modelType?: ModelTypeEnum;
  realTimeData?: any;
};

const SystemAlarm: React.FC<SystemAlarmProps> = (props) => {
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
    <Card className={styles.alarmCard}>
      <Tabs items={items} />
    </Card>
  );
};

export default SystemAlarm;
