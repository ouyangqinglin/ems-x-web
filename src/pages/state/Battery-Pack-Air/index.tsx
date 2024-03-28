/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-15 16:40:51
 * @LastEditTime: 2024-03-16 11:29:44
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\state\pcs\index.tsx
 */

import React, { useState } from 'react';
import CardC from '@/components/Card';
import { Col, Row, Card } from 'antd';
import Run from '@/components/Device/Run';
import styles from './index.less';
import {
  baseInfoItems,
  funItems,
  individualExtremumItems,
  remoteSignalItems,
  statusItems,
  bmuOneV,
  bmuTwoV,
  bmuThreeV,
  bmuFourV,
  bmuFiveV,
  bmuSixV,
  bmuSevenV,
  bmuEightV,
  bmuNineV,
  bmuTenV,
  bmuOneT,
  bmuTwoT,
  bmuThreeT,
  bmuFourT,
  bmuFiveT,
  bmuSixT,
  bmuSevenT,
  bmuEightT,
  bmuNineT,
  bmuTenT,
} from './helper';
import { useDeviceData } from '@/hooks';
import RefreshData from '@/components/Device/RefreshData';
import SystemAlarm from '@/components/SystemAlarm';

const arr = new Array(24);
arr.fill(1);

const Pcs: React.FC = () => {
  const { realTimeData, run } = useDeviceData();

  const [activeTabKey, setActiveTabKey] = useState<string>('0');
  const vArr = [
    bmuOneV,
    bmuTwoV,
    bmuThreeV,
    bmuFourV,
    bmuFiveV,
    bmuSixV,
    bmuSevenV,
    bmuEightV,
    bmuNineV,
    bmuTenV,
  ];
  const tArr = [
    bmuOneT,
    bmuTwoT,
    bmuThreeT,
    bmuFourT,
    bmuFiveT,
    bmuSixT,
    bmuSevenT,
    bmuEightT,
    bmuNineT,
    bmuTenT,
  ];
  const snArr = [5900, 5910, 5920, 5930, 5940, 5950, 5960, 5970, 5980, 5990];
  const onTab1Change = (key: string) => {
    setActiveTabKey(key);
  };
  const tabList = [
    {
      key: '0',
      tab: 'BMU1',
    },
    {
      key: '1',
      tab: 'BMU2',
    },
    {
      key: '2',
      tab: 'BMU3',
    },
    {
      key: '3',
      tab: 'BMU4',
    },
    {
      key: '4',
      tab: 'BMU5',
    },
    {
      key: '5',
      tab: 'BMU6',
    },
    {
      key: '6',
      tab: 'BMU7',
    },
    {
      key: '7',
      tab: 'BMU8',
    },
    {
      key: '8',
      tab: 'BMU9',
    },
    {
      key: '9',
      tab: 'BMU10',
    },
  ];

  return (
    <>
      <RefreshData run={run} time={realTimeData?.refreshTime} />
      <div className="p24">
        <Row gutter={20}>
          <Col span={24}>
            <CardC className="h-full">
              <Run
                realTimeData={realTimeData}
                groupData={baseInfoItems}
                detailProps={{
                  column: 5,
                }}
              />
            </CardC>
          </Col>
        </Row>
        <Row gutter={20} className="mt24">
          <Col span={24}>
            <CardC className="h-full">
              <Run
                realTimeData={realTimeData}
                groupData={statusItems}
                detailProps={{
                  column: 5,
                }}
              />
            </CardC>
          </Col>
        </Row>
        <Row gutter={20} className="mt24">
          <Col span={24}>
            <CardC className="h-full">
              <Run
                realTimeData={realTimeData}
                groupData={individualExtremumItems}
                detailProps={{
                  column: 5,
                }}
              />
            </CardC>
          </Col>
        </Row>
        <Row gutter={20} className="mt24">
          <Col span={24}>
            <CardC className="h-full">
              <Run
                realTimeData={realTimeData}
                groupData={remoteSignalItems}
                detailProps={{
                  column: 6,
                }}
              />
            </CardC>
          </Col>
        </Row>
        <Row gutter={20} className="mt24">
          <Col span={24}>
            <CardC className="h-full">
              <Run
                realTimeData={realTimeData}
                groupData={funItems}
                detailProps={{
                  column: 4,
                }}
              />
            </CardC>
          </Col>
        </Row>
        <Row gutter={20} className="mt24">
          <Col span={24}>
            <Card
              tabList={tabList}
              className={styles.card}
              title="电池模块单体信息"
              activeTabKey={activeTabKey}
              onTabChange={onTab1Change}
            >
              <div className={styles.sn}>
                BMU SN: <span>{realTimeData[snArr[+activeTabKey]]}</span>
              </div>
              <div className={styles.table}>
                <div className={styles.first}>
                  <span>序号</span>
                  {arr.map((item, index) => {
                    return <span key={item}>{index + 1}</span>;
                  })}
                </div>
                <div className={styles.two}>
                  <span style={{ backgroundColor: '#f2f2f2' }}>电压(mV)</span>
                  {vArr[+activeTabKey].map((item) => {
                    return <span key={item}>{realTimeData[item]}</span>;
                  })}
                </div>
                <div className={styles.three}>
                  <span style={{ backgroundColor: '#f2f2f2' }}>温度(℃)</span>
                  {tArr[+activeTabKey].map((item) => {
                    return <span key={item}>{realTimeData[item]}</span>;
                  })}
                </div>
              </div>
            </Card>
          </Col>
        </Row>
        <div className="mt16">
          <SystemAlarm modelType="battery" realTimeData={realTimeData} />
        </div>
      </div>
    </>
  );
};

export default Pcs;
