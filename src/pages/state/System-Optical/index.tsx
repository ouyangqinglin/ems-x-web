/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-15 16:40:51
 * @LastEditTime: 2024-03-16 11:29:44
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\state\pcs\index.tsx
 */

import React from 'react';
import Card from '@/components/Card';
import { Col, Row } from 'antd';
import Run from '@/components/Device/Run';
import { baseInfoItems, statusItems, reductionItems, incomeItems } from './helper';
import SystemAlarm from '@/components/SystemAlarm';
import RefreshData from '@/components/Device/RefreshData';
import { useDeviceData } from '@/hooks';
import { useModel } from 'umi';

const Pcs: React.FC = () => {
  const { realTimeData, run, loading } = useDeviceData();
  const { deviceData } = useModel('device');

  return (
    <>
      <RefreshData run={run} time={realTimeData?.refreshTime} loading={loading} />
      <div className="p24">
        <Row gutter={20}>
          <Col span={24}>
            <Card className="h-full">
              <Run
                realTimeData={{
                  ...realTimeData,
                  upperComputerConnect: deviceData?.status,
                }}
                groupData={baseInfoItems}
                detailProps={{
                  column: 5,
                }}
              />
            </Card>
          </Col>
        </Row>
        <Row gutter={20} className="mt24">
          <Col span={24}>
            <Card className="h-full">
              <Run
                realTimeData={realTimeData}
                groupData={statusItems}
                detailProps={{
                  column: 5,
                }}
              />
            </Card>
          </Col>
        </Row>
        <Row gutter={20} className="mt24">
          <Col span={24}>
            <Card className="h-full">
              <Run
                realTimeData={realTimeData}
                groupData={incomeItems}
                detailProps={{
                  column: 5,
                }}
              />
            </Card>
          </Col>
        </Row>
        <Row gutter={20} className="mt24">
          <Col span={24}>
            <Card className="h-full">
              <Run
                realTimeData={realTimeData}
                groupData={reductionItems}
                detailProps={{
                  column: 6,
                }}
              />
            </Card>
          </Col>
        </Row>
        <SystemAlarm modelType="system" deviceType={0} realTimeData={realTimeData} />
      </div>
    </>
  );
};

export default Pcs;
