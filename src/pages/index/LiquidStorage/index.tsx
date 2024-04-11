import React from 'react';
import { Card, Col, Row } from 'antd';
import styles from './index.less';
import Run from '@/components/Device/Run';
import CardC from '@/components/Card';
import SystemAlarm from '@/components/SystemAlarm';
import {
  batteryItems,
  batterySysItems,
  incomeItems,
  loadItems,
  reduceItems,
  systemItems,
} from './helper';
import Chart from '../Chart';
import RefreshData from '@/components/Device/RefreshData';
import SystemRunStatus from '../LiquidSystemRunStatus';
import batImg from '@/assets/image/station/overview/icon_bat_img.svg';
import batSystemImg from '@/assets/image/station/overview/icon_bat_system_img.svg';
import loadImg from '@/assets/image/station/overview/icon_load_img.svg';
import incomeImg from '@/assets/image/station/overview/icon_income_img.svg';
import reduceImg from '@/assets/image/station/overview/icon_reduce_img.svg';
import { useDeviceData } from '@/hooks';
const Index: React.FC = () => {
  const { realTimeData, run, loading } = useDeviceData();

  return (
    <>
      <RefreshData showDeviceModel run={run} time={realTimeData?.refreshTime} loading={loading} />
      <div className={styles.liquid}>
        <Row gutter={16}>
          <Col span={8}>
            <Card className={styles.card} style={{ height: 198 }}>
              <div className={styles.icon}>
                <img src={batImg} alt="" />
                <span className={styles.title}>储能电池</span>
              </div>
              <Run
                realTimeData={realTimeData}
                groupData={batteryItems}
                detailProps={{
                  column: 1,
                  labelStyle: {},
                }}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card className={styles.card} style={{ height: 198 }}>
              <div className={styles.icon}>
                <img src={batSystemImg} alt="" />
                <span className={styles.title}>储能系统</span>
              </div>
              <Run
                realTimeData={realTimeData}
                groupData={batterySysItems}
                detailProps={{
                  column: 1,
                  labelStyle: {},
                }}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card className={styles.card} style={{ height: 198 }}>
              <div className={styles.icon}>
                <img src={loadImg} alt="" />
                <span className={styles.title}>负载</span>
              </div>
              <Run
                realTimeData={realTimeData}
                groupData={loadItems}
                detailProps={{
                  column: 1,
                  labelStyle: {},
                }}
              />
            </Card>
          </Col>
        </Row>
        <Row gutter={16} className="mt16" align="top">
          <Col span={8}>
            <Card style={{ height: 412 }} className={styles.card}>
              <SystemRunStatus data={realTimeData} />
            </Card>
          </Col>
          <Col span={10}>
            <Card style={{ height: 412 }} className={styles.card}>
              <Chart run={run} />
            </Card>
          </Col>
          <Col span={6}>
            <div className={styles.right}>
              <Card style={{ height: 198 }} className={styles.card}>
                <div className={styles.icon}>
                  <img src={incomeImg} alt="" />
                  <span className={styles.title}>收益</span>
                </div>
                <Run
                  realTimeData={realTimeData}
                  groupData={incomeItems}
                  detailProps={{
                    column: 1,
                    ellipsis: true,
                  }}
                />
              </Card>
              <Card style={{ height: 198 }} className={styles.card}>
                <div className={styles.icon}>
                  <img src={reduceImg} alt="" />
                  <span className={styles.title}>减排</span>
                </div>
                <Run
                  realTimeData={realTimeData}
                  groupData={reduceItems}
                  detailProps={{
                    column: 1,
                    ellipsis: true,
                  }}
                />
              </Card>
            </div>
          </Col>
        </Row>
        <Row className="mt16">
          <Col span={24}>
            <CardC className="h-full">
              <Run
                realTimeData={realTimeData}
                groupData={systemItems}
                detailProps={{
                  column: 5,
                }}
              />
            </CardC>
          </Col>
        </Row>
        <div className="mt16">
          <SystemAlarm modelType="index" deviceType={2} realTimeData={realTimeData} />
        </div>
      </div>
    </>
  );
};

export default Index;
