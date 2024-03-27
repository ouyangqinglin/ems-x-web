import React from 'react';
import YTProTable from '@/components/YTProTable';
import type { AlarmRecordDataType, ModelTypeEnum, DeviceType } from './config';
import { columns } from './config';
// import { getytOrder } from '@/services/equipment';

export type AlarmRecordProps = {
  modelType?: ModelTypeEnum;
  deviceType?: DeviceType;
  realTimeData?: any;
};

const mockDataSource = [
  {
    time: '2023-12-23 17:16:20',
    source: '2023-10-23 101342.log',
    alarmStatus: 1,
    alarmcontent: '这是告警',
  },
  {
    time: '2023-12-23 17:16:20',
    source: '2023-10-23 101342.log',
    alarmStatus: 0,
    alarmcontent: '这是告警',
  },
];
const AlarmRecord: React.FC<AlarmRecordProps> = () => {
  // const handleRequest = (params: any) => {
  //   return getytOrder({
  //     ...params,
  //   });
  // };
  return (
    <YTProTable<AlarmRecordDataType>
      columns={columns}
      toolBarRender={false}
      dataSource={mockDataSource}
      // request={handleRequest}
      scroll={{ y: 'auto' }}
    />
  );
};
export default AlarmRecord;
