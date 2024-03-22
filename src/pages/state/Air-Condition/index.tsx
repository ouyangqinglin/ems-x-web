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
import { useModel, useRequest } from 'umi';
import { getDeviceData } from '@/services/device';
import { baseInfoItems, statusItems } from './helper';
import { useDeviceData } from '@/hooks';
import RefreshData from '@/components/Device/RefreshData';
import SystemAlarm from "@/components/SystemAlarm";

const Pcs: React.FC = () => {
  const { config } = useModel('config');
  const { realTimeData, run } = useDeviceData();

  return (
    <>
      <RefreshData run={run} time={realTimeData?.refreshTime} />
      <div className="p24">
        <Row gutter={20}>
          <Col span={24}>
            <Card className="h-full">
              <Run
                realTimeData={realTimeData}
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
        <div className="mt16">
          <SystemAlarm modelType="aircondit" realTimeData={realTimeData}/>
        </div>
      </div>
    </>
  );
};

export default Pcs;
