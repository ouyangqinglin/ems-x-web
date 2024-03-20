/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-15 16:40:51
 * @LastEditTime: 2024-03-19 15:28:48
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\state\PcsPv\index.tsx
 */

import React from 'react';
import Card from '@/components/Card';
import { Col, Row } from 'antd';
import Run from '@/components/Device/Run';
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
import RefreshData from '@/components/Device/RefreshData';
import { useDeviceData } from '@/hooks';

const Pcs: React.FC = () => {
  const { realTimeData, run } = useDeviceData();

  return (
    <>
      <RefreshData run={run} time={realTimeData?.refreshTime} />
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
