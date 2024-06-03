/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-15 16:40:51
 * @LastEditTime: 2024-06-03 09:31:00
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\state\Battery-Pack-Optical\index.tsx
 */

import React, { useState } from 'react';
import Card from '@/components/Card';
import { Col, Row, Card as AntCard } from 'antd';
import Run from '@/components/Device/Run';
import {
  baseInfoItems,
  individualExtremumItems,
  remoteSignalItems,
  statusItems,
  bmuSns,
  bmuVoltages,
  bmuTemps,
} from './helper';
import SystemAlarm from '@/components/SystemAlarm';
import RefreshData from '@/components/Device/RefreshData';
import { useDeviceData } from '@/hooks';
import styles from './index.less';

const tabList: {
  key: string;
  tab: string;
}[] = [];
Array.from({ length: 10 }).forEach((_, index) => {
  tabList.push({
    key: index + '',
    tab: `BMU${index + 1}`,
  });
});

const Pcs: React.FC = () => {
  const { realTimeData, run, loading } = useDeviceData();
  const [activeTabKey, setActiveTabKey] = useState<string>('0');

  const onTab1Change = (key: string) => {
    setActiveTabKey(key);
  };

  return (
    <>
      <RefreshData run={run} time={realTimeData?.refreshTime} loading={loading} />
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
        <Row gutter={20} className="mt24">
          <Col span={24}>
            <Card className="h-full">
              <Run
                realTimeData={realTimeData}
                groupData={individualExtremumItems}
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
                groupData={remoteSignalItems}
                detailProps={{
                  column: 6,
                }}
              />
            </Card>
          </Col>
        </Row>
        <Row gutter={20} className="mt24">
          <Col span={24}>
            <AntCard
              tabList={tabList}
              className={styles.card}
              title="电池模块单体信息"
              activeTabKey={activeTabKey}
              onTabChange={onTab1Change}
            >
              <div className={styles.sn}>
                BMU SN: <span>{realTimeData[bmuSns[+activeTabKey]]}</span>
              </div>
              <div className={styles.table}>
                <div className={styles.first}>
                  <span>序号</span>
                  {Array.from({ length: 24 }).map((_, index) => {
                    return <span key={index}>{index + 1}</span>;
                  })}
                </div>
                <div className={styles.two}>
                  <span style={{ backgroundColor: '#f2f2f2' }}>电压(mV)</span>
                  {bmuVoltages[+activeTabKey].map((item) => {
                    return <span key={item}>{realTimeData[item]}</span>;
                  })}
                </div>
                <div className={styles.three}>
                  <span style={{ backgroundColor: '#f2f2f2' }}>温度(℃)</span>
                  {bmuTemps[+activeTabKey].map((item) => {
                    return <span key={item}>{realTimeData[item]}</span>;
                  })}
                </div>
              </div>
            </AntCard>
          </Col>
        </Row>
        <div className="mt24">
          <SystemAlarm modelType="battery" deviceType={0} realTimeData={realTimeData} />
        </div>
      </div>
    </>
  );
};

export default Pcs;
