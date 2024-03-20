import React from 'react';
import { SystemAlarmStatusItem } from './config';
import Detail from '@/components/Detail';
import { Row, Col } from 'antd';
import type { DeviceDataType, ModelTypeEnum } from './config';
import { ReactComponent as AlarmStatusIcon } from '@/assets/image/device/alarm_status.svg';
import { ReactComponent as NormalStatusIcon } from '@/assets/image/device/normal_status.svg';



export type SystemAlarmProps = {
  modelType?: keyof typeof ModelTypeEnum;
  deviceData?: DeviceDataType;
};
//mock
const defaultDeviceData = {
  0: 'normal',
  1: 'normal',
  2: 'alarm',
  3: 'normal',
  4: 'alarm',
  5: 'normal',
  6: 'alarm',
  7: 'normal',
  8: 'alarm',
  9: 'normal',
  10: 'alarm',
  11: 'normal',
  12: 'alarm',
  13: 'normal',
  14: 'alarm',
  15: 'normal',
  16: 'alarm',
  17: 'normal',
  18: 'alarm',
  19: 'normal',
  20: 'alarm',
  21: 'normal',
  22: 'alarm',
  23: 'normal',
  24: 'alarm',
  25: 'normal',
  26: 'alarm',
  27: 'normal',
  28: 'alarm',
  29: 'normal',
  30: 'alarm',
  31: 'normal',
  32: 'alarm',
  33: 'normal',
  34: 'alarm',
  35: 'normal',
  36: 'alarm',
};
const AlarmStatus: React.FC = () => {
  const statusRender = (status: number) => {
    const result = defaultDeviceData[status as keyof typeof defaultDeviceData];
    return result == 'normal' ? <NormalStatusIcon width={14} height={14}/> : <AlarmStatusIcon width={14} height={14}/>;
  };
  return (
    <>
      {SystemAlarmStatusItem.map((item) => {
        return (
          <>
            <Detail.Label key={item.id} title={item.name} className="mt16" />
            <Row gutter={[24, 12]}>
              {item.children.map((i) => {
                return (
                  <Col span={4} key={i.id}>
                    <span>{i.name}</span>
                    <span className='ml16' style={{verticalAlign:'middle'}}>{statusRender(i.status)}</span>
                  </Col>
                );
              })}
            </Row>
          </>
        );
      })}
    </>
  );
};
export default AlarmStatus;
