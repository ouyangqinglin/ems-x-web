import React from 'react';
import { useMemo } from 'react';
import * as alarmStatusConfig from './alarmStatusConfig';
import Detail from '@/components/Detail';
import { Row, Col } from 'antd';
import type { ModelTypeEnum } from './config';
import { ReactComponent as AlarmStatusIcon } from '@/assets/image/device/alarm_status.svg';
import { ReactComponent as NormalStatusIcon } from '@/assets/image/device/normal_status.svg';
import styles from './index.less';
export type SystemAlarmProps = {
  modelType?: ModelTypeEnum;
  realTimeData?: any;
};

const AlarmStatus: React.FC<SystemAlarmProps> = ({ modelType = 'system', realTimeData = {} }) => {
  const alarm = useMemo(() => {
    const AlarmStatusItem =
      alarmStatusConfig[`${modelType}AlarmStatusItem` as keyof typeof alarmStatusConfig];
    const statusRender = (status: string) => {
      const result = realTimeData[status as keyof typeof realTimeData];
      if (result == 0) {
        return <NormalStatusIcon width={14} height={14} />;
      } else if (result == 1) {
        return <AlarmStatusIcon width={14} height={14} />;
      } else {
        return <span style={{ verticalAlign: 'super' }}>--</span>;
      }
    };
    return AlarmStatusItem.map((item) => {
      return (
        <>
          {!item.hideTitle ? (
            <Detail.Label key={item.name} title={item.name} className="mt16" />
          ) : (
            ''
          )}
          <Row gutter={[24, 12]}>
            {item.children.map((i) => {
              return (
                <Col xs={{ span: 6 }} lg={{ span: 4 }} key={i.name}>
                  <span className={styles.lable}>{i.name}</span>
                  <span className="ml16" style={{ verticalAlign: 'middle' }}>
                    {statusRender(i.status)}
                  </span>
                </Col>
              );
            })}
          </Row>
        </>
      );
    });
  }, [modelType, realTimeData]);

  return <>{alarm}</>;
};
export default AlarmStatus;
