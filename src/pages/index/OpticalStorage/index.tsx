import React, { useEffect, useRef, useState } from 'react';
import { Card, Col, Row } from 'antd';
import styles from './index.less';
import Chart from '../Chart';
import Run from '@/components/Device/Run';
import { pvItems, batteryItems, loadItems, systemItems } from './helper';
import { useModel } from '@@/plugin-model/useModel';
import { useRequest } from '@@/plugin-request/request';
import { getDeviceData } from '@/services/device';
import pvImg from '@/assets/image/station/overview/icon_光伏1.svg';
import batImg from '@/assets/image/station/overview/icon_储能.svg';
import loadImg from '@/assets/image/station/overview/icon_负载1.svg';
import electricImg from '@/assets/image/station/overview/icon_市电.svg';
import incomeImg from '@/assets/image/station/overview/icon_收益.svg';
import reduceImg from '@/assets/image/station/overview/icon_减排.svg';
import SystemRunStatus from '@/pages/index/SystemRunStatus';

const Index: React.FC = () => {
  const { config } = useModel('config');
  const { data: realTimeData, run } = useRequest(getDeviceData, {
    manual: true,
    pollingInterval: config.refreshTime * 1000,
  });

  return (
    <>
      <div className={styles.optical}>
        <Row gutter={12}>
          <Col span={12}>
            <Card className={styles.card} style={{ height: 198 }}>
              <div className={styles.icon}>
                <img src={pvImg} alt="" />
                <span>光伏</span>
              </div>
              <Run
                realTimeData={realTimeData}
                groupData={pvItems}
                detailProps={{
                  column: 2,
                }}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card className={styles.card} style={{ height: 198 }}>
              <div className={styles.icon}>
                <img src={batImg} alt="" />
                <span>电池</span>
              </div>
              <Run
                realTimeData={realTimeData}
                groupData={batteryItems}
                detailProps={{
                  column: 1,
                }}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card className={styles.card} style={{ height: 198 }}>
              <div className={styles.icon}>
                <img src={loadImg} alt="" />
                <span>负载</span>
              </div>
              <Run
                realTimeData={realTimeData}
                groupData={loadItems}
                detailProps={{
                  column: 1,
                }}
              />
            </Card>
          </Col>
        </Row>
        <Row gutter={12} className="mt16" align="top">
          <Col span={7}>
            <Card style={{ height: 412 }} className={styles.card}>
              <SystemRunStatus />
            </Card>
          </Col>
          <Col span={11}>
            <Card style={{ height: 412 }} className={styles.card}>
              <Chart />
            </Card>
          </Col>
          <Col span={6}>
            <div className={styles.right}>
              <Card style={{ height: 200 }} className={styles.card}>
                <div className={styles.icon}>
                  <img src={electricImg} alt="" />
                  <span>电网</span>
                </div>
                <Run
                  realTimeData={realTimeData}
                  groupData={loadItems}
                  detailProps={{
                    column: 1,
                  }}
                />
              </Card>
              <Card style={{ height: 200 }} className={styles.card}>
                <div className={styles.icon}>
                  <img src={incomeImg} alt="" />
                  <span>收益</span>
                </div>
                <Run
                  realTimeData={realTimeData}
                  groupData={loadItems}
                  detailProps={{
                    column: 1,
                  }}
                />
              </Card>
            </div>
          </Col>
        </Row>

        <Row gutter={12} className="mt16">
          <Col span={18}>
            <Card className="h-full" style={{ height: 248 }}>
              <Run
                realTimeData={realTimeData}
                groupData={systemItems}
                detailProps={{
                  column: 5,
                }}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card className={styles.card} style={{ height: 248 }}>
              <div className={styles.icon}>
                <img src={reduceImg} alt="" />
                <span>减排</span>
              </div>
              <Run
                realTimeData={realTimeData}
                groupData={loadItems}
                detailProps={{
                  column: 1,
                }}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Index;
