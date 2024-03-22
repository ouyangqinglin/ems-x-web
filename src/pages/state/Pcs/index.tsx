/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-15 16:40:51
 * @LastEditTime: 2024-03-22 16:15:26
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\state\pcs\index.tsx
 */

import React from 'react';
import Card from '@/components/Card';
import { Col, Row } from 'antd';
import Run from '@/components/Device/Run';
import {
  baseInfoItems,
  dcSideItems,
  electricEnergyItems,
  epsItems,
  gridSideItems,
  stateItems,
  tempItems,
  versionItems,
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
          <Col span={5}>
            <Card className="h-full">
              <Run
                realTimeData={realTimeData}
                groupData={baseInfoItems}
                detailProps={{
                  column: 1,
                }}
              />
            </Card>
          </Col>
          <Col span={5}>
            <Card className="h-full">
              <Run
                realTimeData={realTimeData}
                groupData={versionItems}
                detailProps={{
                  column: 1,
                }}
              />
            </Card>
          </Col>
          <Col span={9}>
            <Card className="h-full">
              <Run
                realTimeData={realTimeData}
                groupData={stateItems}
                detailProps={{
                  column: 2,
                }}
              />
            </Card>
          </Col>
          <Col span={5}>
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
          <Col span={14}>
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
          <Col span={10}>
            <Card className="h-full">
              <Run
                realTimeData={realTimeData}
                groupData={tempItems}
                detailProps={{
                  column: 2,
                }}
              />
            </Card>
          </Col>
        </Row>
        <Card className="h-full mb20">
          <Run
            realTimeData={realTimeData}
            groupData={epsItems}
            detailProps={{
              column: 4,
            }}
          />
        </Card>
        <Card className="h-full mb20">
          <Run
            realTimeData={realTimeData}
            groupData={gridSideItems}
            detailProps={{
              column: 4,
            }}
          />
        </Card>
        <SystemAlarm modelType="converter" realTimeData={realTimeData} />
      </div>
    </>
  );
};

export default Pcs;
