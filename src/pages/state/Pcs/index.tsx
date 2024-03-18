/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-15 16:40:51
 * @LastEditTime: 2024-03-18 14:17:13
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\state\pcs\index.tsx
 */

import React from 'react';
import Card from '@/components/Card';
import { Col, Row } from 'antd';
import Run from '@/components/Device/Run';
import { useModel, useRequest } from 'umi';
import { getDeviceData } from '@/services/device';
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

const Pcs: React.FC = () => {
  const { config } = useModel('config');
  const { data: realTimeData, run } = useRequest(getDeviceData, {
    manual: true,
    pollingInterval: config.refreshTime * 1000,
  });

  return (
    <>
      <div className="p24">
        <Row gutter={20}>
          <Col span={4}>
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
          <Col span={8}>
            <Card className="h-full">
              <Run
                realTimeData={realTimeData}
                groupData={versionItems}
                detailProps={{
                  column: 2,
                }}
              />
            </Card>
          </Col>
          <Col span={8}>
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
        <Card className="h-full">
          <Run
            realTimeData={realTimeData}
            groupData={gridSideItems}
            detailProps={{
              column: 4,
            }}
          />
        </Card>
      </div>
    </>
  );
};

export default Pcs;
