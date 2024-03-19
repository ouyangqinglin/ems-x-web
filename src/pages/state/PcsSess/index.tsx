/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-15 16:40:51
 * @LastEditTime: 2024-03-19 17:37:49
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\state\PcsSess\index.tsx
 */

import React from 'react';
import Card from '@/components/Card';
import { Col, Row } from 'antd';
import Run from '@/components/Device/Run';
import { useModel, useRequest } from 'umi';
import { getDeviceData } from '@/services/device';
import {
  baseInfoItems,
  cSideItems,
  dcSideItems,
  electricEnergyItems,
  stateItems,
  tempItems,
} from './helper';
import RefreshData from '@/components/Device/RefreshData';

const Pcs: React.FC = () => {
  const { config } = useModel('config');
  const { data: realTimeData, run } = useRequest(getDeviceData, {
    manual: true,
    pollingInterval: config.refreshTime * 1000,
  });

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
      </div>
    </>
  );
};

export default Pcs;
