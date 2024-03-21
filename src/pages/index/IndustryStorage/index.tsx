import React, { useEffect, useRef, useState } from 'react';
import { Card, Col, Row, DatePicker, Radio } from 'antd';
import styles from './index.less';
import Run from '@/components/Device/Run';
import {
  batteryItems,
  batterySysItems,
  incomeItems,
  loadItems,
  reduceItems,
  systemItems,
} from './helper';
import { useModel } from '@@/plugin-model/useModel';
import { useRequest } from '@@/plugin-request/request';
import { getDeviceData } from '@/services/device';
import Chart from '../Chart';
import SystemRunStatus from '../SystemRunStatus';
import batImg from '@/assets/image/station/overview/icon_储能电池.svg';
import batSystemImg from '@/assets/image/station/overview/icon_储能.svg';
import loadImg from '@/assets/image/station/overview/icon_负载1.svg';
import incomeImg from '@/assets/image/station/overview/icon_收益.svg';
import reduceImg from '@/assets/image/station/overview/icon_减排.svg';

const Index: React.FC = () => {
  const { config } = useModel('config');
  const { data: realTimeData, run } = useRequest(getDeviceData, {
    manual: true,
    pollingInterval: config.refreshTime * 1000,
  });

  return (
    <>
      <div className={styles.industry}>
        <Row gutter={12}>
          <Col span={8}>
            <Card className={styles.card} style={{ height: 198 }}>
              <div className={styles.icon}>
                <img src={batImg} alt="" />
                <span>储能电池</span>
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
          <Col span={8}>
            <Card className={styles.card} style={{ height: 198 }}>
              <div className={styles.icon}>
                <img src={batSystemImg} alt="" />
                <span>储能系统</span>
              </div>
              <Run
                realTimeData={realTimeData}
                groupData={batterySysItems}
                detailProps={{
                  column: 1,
                }}
              />
            </Card>
          </Col>
          <Col span={8}>
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
          <Col span={8}>
            <Card style={{ height: 412 }} className={styles.card}>
              <SystemRunStatus />
            </Card>
          </Col>
          <Col span={10}>
            <Card style={{ height: 412 }} className={styles.card}>
              <Chart />
            </Card>
          </Col>
          <Col span={6}>
            <div className={styles.right}>
              <Card style={{ height: 198 }} className={styles.card}>
                <div className={styles.icon}>
                  <img src={incomeImg} alt="" />
                  <span>收益</span>
                </div>
                <Run
                  realTimeData={realTimeData}
                  groupData={incomeItems}
                  detailProps={{
                    column: 1,
                  }}
                />
              </Card>
              <Card style={{ height: 198 }} className={styles.card}>
                <div className={styles.icon}>
                  <img src={reduceImg} alt="" />
                  <span>减排</span>
                </div>
                <Run
                  realTimeData={realTimeData}
                  groupData={reduceItems}
                  detailProps={{
                    column: 1,
                  }}
                />
              </Card>
            </div>
          </Col>
        </Row>
        <Row className="mt16">
          <Col span={24}>
            <Card className="h-full">
              <Run
                realTimeData={realTimeData}
                groupData={systemItems}
                detailProps={{
                  column: 5,
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
