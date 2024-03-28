/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-15 16:40:51
 * @LastEditTime: 2024-03-28 10:11:10
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\state\PcsSess\index.tsx
 */

import React from 'react';
import Card from '@/components/Card';
import { Col, Row } from 'antd';
import Run from '@/components/Device/Run';
import {
  baseInfoItems,
  cSideItems,
  dcSideItems,
  electricEnergyItems,
  stateItems,
  tempItems,
} from './helper';
import RefreshData from '@/components/Device/RefreshData';
import { useDeviceData } from '@/hooks';
import SystemAlarm from '@/components/SystemAlarm';

const Pcs: React.FC = () => {
  const { realTimeData, run } = useDeviceData();

  return (
    <>
      <RefreshData run={run} time={realTimeData?.refreshTime} />
      <div className="p24">
        <Row gutter={20}>
          <Col span={8}>
            <Card className="h-full">
              <Run
                realTimeData={realTimeData}
                groupData={baseInfoItems}
                detailProps={{
                  column: 2,
                }}
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card className="h-full">
              <Run
                realTimeData={realTimeData}
                groupData={stateItems}
                detailProps={{
                  column: 3,
                }}
              />
            </Card>
          </Col>
          <Col span={4}>
            <Card className="h-full">
              <Run
                realTimeData={realTimeData}
                groupData={electricEnergyItems}
                detailProps={{
                  column: 1,
                }}
              />
            </Card>
          </Col>
        </Row>
        <Row gutter={20} className="my20">
          <Col span={18}>
            <Card className="h-full">
              <Run
                realTimeData={realTimeData}
                groupData={dcSideItems}
                detailProps={{
                  column: 3,
                }}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card className="h-full">
              <Run
                realTimeData={realTimeData}
                groupData={tempItems}
                detailProps={{
                  column: 1,
                }}
              />
            </Card>
          </Col>
        </Row>
        <Card className="h-full mb20">
          <Run
            realTimeData={realTimeData}
            groupData={cSideItems}
            detailProps={{
              column: 3,
            }}
          />
        </Card>
        <SystemAlarm modelType="converter" realTimeData={realTimeData} deviceType={4} />
      </div>
    </>
  );
};

export default Pcs;
