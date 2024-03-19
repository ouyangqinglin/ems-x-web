import React, { useEffect, useRef, useState } from 'react';
import { Card, Col, Row } from 'antd';
import styles from './index.less';
import Chart from '../Chart'
import Run from "@/components/Device/Run";
import {pvItems, batteryItems, loadItems} from "./helper";
import {useModel} from "@@/plugin-model/useModel";
import {useRequest} from "@@/plugin-request/request";
import {getDeviceData} from "@/services/device";
import pvImg from '@/assets/image/station/overview/icon_光伏1.svg'
import batImg from '@/assets/image/station/overview/icon_储能.svg'
import loadImg from '@/assets/image/station/overview/icon_负载1.svg'

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
                <img src={pvImg} alt=""/>
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
                <img src={batImg} alt=""/>
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
                <img src={loadImg} alt=""/>
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
          <Col span={6}>
            <Card style={{ height: 412 }} className={styles.card}>

            </Card>
          </Col>
          <Col span={14}>
            <Card style={{ height: 412 }} className={styles.card}>
              <Chart />
            </Card>
          </Col>
          <Col span={4}>
            <div className={styles.right}>
              <Card style={{ height: 200 }} className={styles.card}>

              </Card>
              <Card style={{ height: 200 }} className={styles.card}>

              </Card>
            </div>
          </Col>
        </Row>

        <Card className={styles.card}>

        </Card>
      </div>
    </>
  );
};

export default Index;
