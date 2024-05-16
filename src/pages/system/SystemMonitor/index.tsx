import React, { useEffect, useState } from 'react';
import moment from 'moment';
import styles from './index.less';
import { Card, Col, Row } from 'antd';
import CCard from '@/components/Card';
import Run from '@/components/Device/Run';
import TypeChart from '@/components/Chart/TypeChart';
import { getSystemMonitor } from '@/services/system';
import cpuImg from '@/assets/image/system/monitor-cpu.svg';
import memoryImg from '@/assets/image/system/monitor-memory.svg';
import diskImg from '@/assets/image/system/monitor-disk.svg';
import cloudImg from '@/assets/image/system/monitor-cloud.svg';
import {
  cpuItems,
  diskItems,
  memoryItem,
  ethZeroItems,
  systemInfoItems,
  options,
} from '@/pages/system/SystemMonitor/helper';
let arrCpuTime = localStorage.getItem('arrCpuTime')
    ? JSON.parse(localStorage.getItem('arrCpuTime'))
    : [],
  arrCpuData = localStorage.getItem('arrCpuData')
    ? JSON.parse(localStorage.getItem('arrCpuData'))
    : [];
const day = new Date().getDate();
if (!localStorage.getItem('day')) localStorage.setItem('day', day);
else {
  if (+day !== +localStorage.getItem('day')) {
    localStorage.setItem('day', day);
    arrCpuTime = [];
    arrCpuData = [];
  }
}
let timer: any = null;
const SystemMonitor: React.FC = () => {
  const [realTimeData, setRealTimeData] = useState({});
  const [netList, setNetList] = useState([]);
  const [processList, setProcessList] = useState([]);
  const [date, setDate] = useState(moment());
  const [chartData, setChartData] = useState([]);
  function getSystemInfo() {
    getSystemMonitor()
      .then((res) => {
        if (res.data?.netInfo && res.data?.netInfo.length) {
          if (res.data.netInfo.length < 4) {
            const spaceItem = {
              name: '--',
              ip: '',
              mask: '',
              gateway: '',
              packetsRecv: '',
              packetsSent: '',
            };
            for (let i = res.data.netInfo.length; i < 4; i++) {
              res.data.netInfo.push(spaceItem);
            }
          }
        }
        arrCpuTime.push(res.data?.refreshTime);
        arrCpuData.push(res.data?.cpuPercent);
        localStorage.setItem('arrCpuTime', JSON.stringify(arrCpuTime));
        localStorage.setItem('arrCpuData', JSON.stringify(arrCpuData));
        const chartCpuData = [
          {
            name: 'CPU占线率',
            data: arrCpuData?.map?.((item, index) => ({
              label: arrCpuTime[index],
              value: +item?.slice(0, -1),
            })),
          },
        ];
        setChartData(chartCpuData);
        setNetList(res.data.netInfo);
        setProcessList(res.data.ProcessInfo.ProcessList);
        setRealTimeData({ ...res.data, ...res.data?.sysInfo, ...res.data?.ProcessInfo });
      })
      .finally(() => {
        clearInterval(timer);
        timer = setInterval(() => {
          getSystemInfo();
        }, 5000);
      });
  }
  useEffect(() => {
    getSystemInfo();
  }, []);

  return (
    <>
      <div className={styles.monitor}>
        <Row gutter={16}>
          <Col span={18}>
            <Row gutter={16}>
              <Col span={8}>
                <Card style={{ height: 136 }} className={styles.card}>
                  <div className={styles.icon}>
                    <img src={cpuImg} alt="" />
                  </div>
                  <Run
                    realTimeData={realTimeData}
                    groupData={cpuItems}
                    detailProps={{
                      column: 1,
                      labelStyle: {},
                    }}
                  />
                </Card>
              </Col>
              <Col span={8}>
                <Card style={{ height: 136 }} className={styles.card}>
                  <div className={styles.icon}>
                    <img src={memoryImg} alt="" />
                  </div>
                  <Run
                    realTimeData={realTimeData}
                    groupData={memoryItem}
                    detailProps={{
                      column: 1,
                      labelStyle: {},
                    }}
                  />
                </Card>
              </Col>
              <Col span={8}>
                <Card style={{ height: 136 }} className={styles.card}>
                  <div className={styles.icon}>
                    <img src={diskImg} alt="" />
                  </div>
                  <Run
                    realTimeData={realTimeData}
                    groupData={diskItems}
                    detailProps={{
                      column: 1,
                      labelStyle: {},
                    }}
                  />
                </Card>
              </Col>
            </Row>
            <div style={{ height: 240 }} className="mt16">
              <CCard className="h-full">
                <p>网卡情况</p>
                <Row gutter={20}>
                  {netList.map((item, index) => {
                    return (
                      <Col span={6} key={index}>
                        <p style={{ fontWeight: 600 }}>{item.name}</p>
                        <Run
                          realTimeData={{
                            ...item,
                          }}
                          key={index}
                          groupData={ethZeroItems}
                          detailProps={{
                            column: 1,
                          }}
                        />
                      </Col>
                    );
                  })}
                </Row>
              </CCard>
            </div>
          </Col>
          <Col span={6}>
            <div style={{ height: 392 }}>
              <CCard className="h-full">
                <p>系统信息</p>
                <div className={styles.cloudBox}>
                  <img className={styles.cloud} src={cloudImg} alt="" />
                </div>
                <Run
                  realTimeData={{
                    ...realTimeData,
                  }}
                  groupData={systemInfoItems}
                  detailProps={{
                    column: 1,
                  }}
                />
              </CCard>
            </div>
          </Col>
        </Row>
        <Row gutter={16} className="mt16">
          <Col span={18}>
            <div style={{ height: 400 }}>
              <CCard className="h-full">
                <div className={styles.chart}>
                  <TypeChart date={date} option={options} data={chartData} step={1} />
                </div>
              </CCard>
            </div>
          </Col>
          <Col span={6}>
            <div style={{ height: 400 }}>
              <CCard className="h-full">
                <div className={styles.thread}>
                  <p>线程使用情况 TOP5</p>
                  <p>(总线程数:{realTimeData.totalProcess}个)</p>
                </div>
                <div className={styles.threadTable}>
                  <div className={styles.item}>
                    <p>名称</p>
                    <p>PID</p>
                    <p>CPU (%)</p>
                  </div>
                  {processList.map((item, index) => {
                    return (
                      <div className={styles.item} style={{ marginTop: 10 }} key={index}>
                        <div className={styles.threadName} title={item.name}>
                          {item.name}
                        </div>
                        <div>{item.pid}</div>
                        <div>{item.cpuPercent}</div>
                      </div>
                    );
                  })}
                </div>
              </CCard>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SystemMonitor;
