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
  bmuOneT,
  bmuTwoT,
  bmuThreeT,
  bmuFourT,
  bmuFiveT,
} from './helper';
import { useDeviceData } from '@/hooks';
import RefreshData from '@/components/Device/RefreshData';
import SystemAlarm from '@/components/SystemAlarm';

const arr = new Array(24),
  arrT = new Array(5);
arr.fill(1);
arrT.fill(1);

const Pcs: React.FC = () => {
  const { realTimeData, run } = useDeviceData();

  const [activeTabKey, setActiveTabKey] = useState<string>('0');
  const vArr = [bmuOneV, bmuTwoV, bmuThreeV, bmuFourV, bmuFiveV];
  const tArr = [bmuOneT, bmuTwoT, bmuThreeT, bmuFourT, bmuFiveT];
  const snArr = [5900, 5910, 5920, 5930, 5940];
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
                  {vArr[+activeTabKey].slice(0, 24).map((item) => {
                    return <span key={item}>{realTimeData[item]}</span>;
                  })}
                </div>
                <div className={styles.first}>
                  <span style={{ borderTop: 'none' }}>序号</span>
                  {arr.map((item, index) => {
                    return (
                      <span key={item} style={{ borderTop: 'none' }}>
                        {index + 25}
                      </span>
                    );
                  })}
                </div>
                <div className={styles.two}>
                  <span style={{ backgroundColor: '#f2f2f2' }}>电压(mV)</span>
                  {vArr[+activeTabKey].slice(24).map((item) => {
                    return <span key={item}>{realTimeData[item]}</span>;
                  })}
                </div>

                <div className={styles.first} style={{ marginTop: '12px' }}>
                  <span>序号</span>
                  {arr.map((item, index) => {
                    return <span key={item}>{index + 1}</span>;
                  })}
                </div>
                <div className={styles.two}>
                  <span style={{ backgroundColor: '#f2f2f2' }}>温度(℃)</span>
                  {tArr[+activeTabKey].slice(0, 24).map((item) => {
                    return <span key={item}>{realTimeData[item]}</span>;
                  })}
                </div>
                <div className={styles.first}>
                  <span style={{ borderTop: 'none' }}>序号</span>
                  {arrT.map((item, index) => {
                    return (
                      <span key={item} style={{ borderTop: 'none' }}>
                        {index + 25}
                      </span>
                    );
                  })}
                </div>
                <div className={styles.two}>
                  <span style={{ backgroundColor: '#f2f2f2' }}>温度(℃)</span>
                  {tArr[+activeTabKey].slice(24).map((item) => {
                    return <span key={item}>{realTimeData[item]}</span>;
                  })}
                </div>
              </div>
            </Card>
          </Col>
        </Row>
        <div className="mt16">
          <SystemAlarm modelType="battery" deviceType={2} realTimeData={realTimeData} />
        </div>
      </div>
    </>
  );
};

export default Pcs;
