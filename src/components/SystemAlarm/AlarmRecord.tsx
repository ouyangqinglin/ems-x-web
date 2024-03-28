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
      scroll={{ y: 'auto' }}
    />
  );
};
export default AlarmRecord;
