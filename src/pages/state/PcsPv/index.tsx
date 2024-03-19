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
  electricEnergyItems,
  epsItems,
  gridSideItems,
  inverterSideItems,
  meterItems,
  pvSideItems,
  stateItems,
  tempItems,
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
                groupData={stateItems}
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
                groupData={electricEnergyItems}
                detailProps={{
                  column: 3,
                }}
              />
            </Card>
          </Col>
        </Row>
        <Card className="h-full my20">
          <Run
            realTimeData={realTimeData}
            groupData={pvSideItems}
            detailProps={{
              column: 8,
            }}
          />
        </Card>
        <Row gutter={20}>
          <Col span={10}>
            <Card className="mb20">
              <Run
                realTimeData={realTimeData}
                groupData={tempItems}
                detailProps={{
                  column: 2,
                }}
              />
            </Card>
            <Card className="">
              <Run
                realTimeData={realTimeData}
                groupData={inverterSideItems}
                detailProps={{
                  column: 2,
                }}
              />
            </Card>
          </Col>
          <Col span={14}>
            <Card className="h-full">
              <Run
                realTimeData={realTimeData}
                groupData={epsItems}
                detailProps={{
                  column: 3,
                }}
              />
            </Card>
          </Col>
        </Row>
        <Card className="h-full my20">
          <Run
            realTimeData={realTimeData}
            groupData={gridSideItems}
            detailProps={{
              column: 6,
            }}
          />
        </Card>
        <Card className="h-full">
          <Run
            realTimeData={realTimeData}
            groupData={meterItems}
            detailProps={{
              column: 6,
            }}
          />
        </Card>
      </div>
    </>
  );
};

export default Pcs;
