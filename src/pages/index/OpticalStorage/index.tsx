import React from 'react';
import { Card, Col, Row } from 'antd';
import styles from './index.less';
import Chart from '../Chart';
import CardC from '@/components/Card';
import Run from '@/components/Device/Run';
import {
  pvItems,
  batteryItems,
  loadItems,
  systemItems,
  incomeItems,
  electricItems,
  reduceItems,
  systemOtherItems,
} from './helper';
import pvImg from '@/assets/image/station/overview/icon_pv_img.svg';
import batImg from '@/assets/image/station/overview/icon_bat_system_img.svg';
import loadImg from '@/assets/image/station/overview/icon_load_img.svg';
import electricImg from '@/assets/image/station/overview/icon_electric_img.svg';
import incomeImg from '@/assets/image/station/overview/icon_income_img.svg';
import reduceImg from '@/assets/image/station/overview/icon_reduce_img.svg';
import SystemAlarm from '@/components/SystemAlarm';
import { useDeviceData } from '@/hooks';
import SystemRunStatus from '../SystemRunStatusOptical';
import RefreshData from '@/components/Device/RefreshData';
const Index: React.FC = () => {
  const { realTimeData, run, loading } = useDeviceData({ isInterval: false });
  return (
    <>
      <RefreshData showDeviceModel run={run} time={realTimeData?.refreshTime} loading={loading} />
      <div className={styles.optical}>
        <Row gutter={12}>
          <Col span={12}>
            <Card className={styles.card} style={{ height: 218 }}>
              <div className={styles.icon}>
                <img src={pvImg} alt="" />
                <span className={styles.title}>光伏</span>
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
            <Card className={styles.card} style={{ height: 218 }}>
              <div className={styles.icon}>
                <img src={batImg} alt="" />
                <span className={styles.title}>电池</span>
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
            <Card className={styles.card} style={{ height: 218 }}>
              <div className={styles.icon}>
                <img src={loadImg} alt="" />
                <span className={styles.title}>负载</span>
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
              <SystemRunStatus data={realTimeData} />
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
                  <span className={styles.title}>电网</span>
                </div>
                <Run
                  realTimeData={realTimeData}
                  groupData={electricItems}
                  detailProps={{
                    column: 1,
                  }}
                />
              </Card>
              <Card style={{ height: 200 }} className={styles.card}>
                <div className={styles.icon}>
                  <img src={incomeImg} alt="" />
                  <span className={styles.title}>收益</span>
                </div>
                <Run
                  realTimeData={realTimeData}
                  groupData={incomeItems}
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
            <CardC className="h-full" style={{ height: 198 }}>
              <Run
                realTimeData={realTimeData}
                groupData={systemItems}
                detailProps={{
                  column: 5,
                }}
              />
            </CardC>
          </Col>
          <Col span={6}>
            <Card className={styles.card} style={{ height: 198 }}>
              <div className={styles.icon}>
                <img src={reduceImg} alt="" />
                <span className={styles.title}>减排</span>
              </div>
              <Run
                realTimeData={realTimeData}
                groupData={reduceItems}
                detailProps={{
                  column: 1,
                }}
              />
            </Card>
          </Col>
        </Row>
        <Row className="mt16">
          <Col span={24}>
            <CardC className="h-full">
              <Run
                realTimeData={realTimeData}
                groupData={systemOtherItems}
                detailProps={{
                  column: 5,
                }}
              />
            </CardC>
          </Col>
        </Row>
      </div>
      <div className="mt16">
        <SystemAlarm modelType="index" deviceType={0} realTimeData={realTimeData} />
      </div>
    </>
  );
};

export default Index;
