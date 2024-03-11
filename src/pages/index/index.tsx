import React, { useEffect, useRef, useState } from 'react';
import moment from 'moment';
import { Card, Col, Row, Button, DatePicker, message, Radio } from 'antd';
import { ReloadOutlined, DeleteOutlined, SendOutlined } from '@ant-design/icons';
import styles from './index.less';
import sysRun from '@/assets/image/sys_run.png';
import * as echarts from 'echarts';
import TimeButtonGroup, { TimeType } from '@/components/TimeButtonGroup';
import { useToggle } from 'ahooks';
import { getDeviceData, chartPowerData, chartElectricData } from '@/services/report';

const Index: React.FC = () => {
  const [showDatePicker, { set }] = useToggle(true);
  const [now, setNow] = useState(moment());
  const [date, setDate] = useState(moment());
  const [picker, setPicker] = useState<
    'year' | 'month' | 'time' | 'date' | 'week' | 'quarter' | undefined
  >();
  const [timeType, setTimeType] = useState<TimeType>(TimeType.DAY);
  const [chartType, setChartType] = useState(0);

  const [alarmStatus, setAlarmStatus] = useState({});
  const [deviceData, setDeviceData] = useState({});
  const [storageBat, setStorageBat] = useState({});
  const [storageSys, setStorageSys] = useState({});
  const [incomeInfo, setIncomeInfo] = useState({});
  const [loadInfo, setLoadInfo] = useState({});
  const [reductionInfo, setReductionInfo] = useState({});
  const [runStatus, setRunStatus] = useState({});
  const domRef = useRef();
  let myChart = null,
    timerOne = useRef(),
    timerTwo = useRef(),
    timerHome = useRef();
  let arr1 = [],
    arr2 = [];
  const optionBat = {
    legend: {
      data: ['充放电功率'],
      icon: 'circle',
      top: '8%',
    },
    tooltip: {
      show: true,
      trigger: 'axis',
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: true,
        data: [],
        axisLine: {
          lineStyle: {
            color: '#E7E7E7',
          },
        },
        axisLabel: {
          textStyle: {
            color: '#000',
          },
        },
      },
    ],
    yAxis: {
      name: `功率（单位kW）`,
      type: 'value',
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
        },
      },
    },
    series: [
      {
        name: '充放电功率',
        symbol: 'none',
        type: 'line',
        itemStyle: {
          color: '#007dff',
        },
        data: [],
      },
    ],
  };
  function getHomeData() {
    if (timerHome?.current) clearInterval(timerHome.current);
    getDeviceData()
      .then((res) => {
        setAlarmStatus(res?.Data?.alarm_status);
        setDeviceData(res?.Data?.device_data);
        setStorageBat(res?.Data?.energy_storage_battery);
        setStorageSys(res?.Data?.energy_storage_system);
        setIncomeInfo(res?.Data?.income_info);
        setLoadInfo(res?.Data?.load_info);
        setReductionInfo(res?.Data?.reduction_info);
        setRunStatus(res?.Data?.run_status);
        setNow(moment());
      })
      .finally(() => {
        timerHome.current = setInterval(() => getHomeData(), 1000);
      });
  }

  function getChartPower() {
    if (timerOne?.current) clearInterval(timerOne.current);
    chartPowerData()
      .then((res) => {
        if (optionBat.xAxis[0].data.includes(res?.Data?.time)) {
        } else {
          optionBat.xAxis[0].data.push(res?.Data?.time);
          optionBat.series[0].data.push(res?.Data?.value);
          optionBat.legend.data = ['充放电功率'];
          chartTnit();
        }
      })
      .finally(() => {
        timerOne.current = setInterval(() => {
          getChartPower();
        }, 1000);
      });
  }
  function getChartEle() {
    if (timerTwo?.current) clearInterval(timerTwo.current);
    chartElectricData()
      .then((res) => {
        if (optionBat.xAxis[0].data.includes(res?.Data?.time)) {
        } else {
          optionBat.xAxis[0].data.push(res?.Data?.time);
          arr1.push(res?.Data?.charge_amount?.value);
          arr2.push(res?.Data?.discharge_amount?.value);
          let itemOne = {
            name: '充电量',
            symbol: 'none',
            type: 'line',
            data: arr1,
          };
          optionBat.series.push(itemOne);
          let itemTwo = {
            name: '放电量',
            symbol: 'none',
            type: 'line',
            data: arr2,
          };
          optionBat.series.push(itemTwo);
          optionBat.legend.data = ['充电量', '放电量'];
          chartTnit();
        }
      })
      .finally(() => {
        timerTwo.current = setInterval(() => {
          getChartEle();
        }, 1000);
      });
  }
  useEffect(() => {
    // getChartPower()
    // getHomeData()
  }, []);
  useEffect(() => {
    myChart = echarts.init(domRef.current);
    let currentIndex = -1;
    const dataLen = optionBat.series[0].length;
    const timer = setInterval(() => {
      if (dataLen) {
        currentIndex = (currentIndex + 1) % dataLen; // 取余 循环展示
        myChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex,
        });
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [timeType]);

  const handleRadio = (e) => {
    setChartType(e.target.value);
    clearData(e.target.value);
    if (e.target.value === 1) getChartEle();
    else getChartPower();
  };

  function clearData(v) {
    if (myChart) {
      myChart.dispose();
      myChart = null;
    }
    clearInterval(timerOne.current);
    clearInterval(timerTwo.current);
    arr1 = [];
    arr2 = [];
    optionBat.xAxis[0].data = [];
    optionBat.series[0].data = [];
    optionBat.legend.data = [];
    optionBat.yAxis.name = ['功率（单位kW）', '电量（单位kWh）'][+v];
  }

  const onChange = (value) => {
    console.log(value ? value.format('YYYY-MM-DD') : moment().format('YYYY-MM-DD'));
    setDate(value);
  };
  const timeTypeChange = (type: TimeType) => {
    console.log(type);
    console.log(date ? date.format('YYYY-MM-DD') : moment().format('YYYY-MM-DD'));
    setTimeType(type);
    switch (type) {
      case TimeType.DAY:
        setPicker('date');
        set(true);
        break;
      case TimeType.MONTH:
        setPicker('month');
        set(true);
        break;
      case TimeType.YEAR:
        setPicker('year');
        set(true);
        break;
      case TimeType.TOTAL:
        set(false);
        break;
    }
  };
  function onRefresh() {
    clearData(chartType);
    getHomeData();
    if (chartType === 1) getChartEle();
    else getChartPower();
    message.success('刷新成功');
    setNow(moment());
  }
  const chartTnit = () => {
    myChart = echarts.init(domRef.current);
    myChart.setOption(optionBat, true);
  };
  return (
    <>
      <div className={styles.home}>
        <Row gutter={12}>
          <Col span={6}>
            <Card style={{ height: 150 }}>
              <div className={styles.flex}>
                <Row align="middle" justify="space-between">
                  <Button icon={<ReloadOutlined />} onClick={() => onRefresh()}>
                    刷新
                  </Button>
                  <div>数据更新时间：</div>
                  <div>{now.format('YYYY-MM-DD HH:mm:ss')}</div>
                </Row>
                <Row align="middle" justify="space-between" className="mt10">
                  <div>上位机通信：</div>
                  <Button icon={<SendOutlined />}>通信设置</Button>
                  <Button icon={<DeleteOutlined />}>断开</Button>
                </Row>
              </div>
            </Card>
          </Col>
          <Col span={6}>
            <Card style={{ height: 150 }}>
              <div className={styles.title}>储能电池</div>
              <div className={styles.info}>
                <div>
                  今日充电量(kWh): <span>{storageBat?.today_charge_amount}</span>
                </div>
                <div>
                  今日放电量(kWh): <span>{storageBat?.today_discharge_amount}</span>
                </div>
                <div>
                  可放电能量(kWh):<span>{storageBat?.available_discharge_capacity}</span>
                </div>
                <div>
                  储能电池功率(kW): <span>{storageBat?.energy_storage_battery_power}</span>
                </div>
              </div>
            </Card>
          </Col>
          <Col span={6}>
            <Card style={{ height: 150 }}>
              <div className={styles.title}>储能系统</div>
              <div className={styles.info}>
                <div>
                  今日系统充电量(kWh):<span>{storageSys?.today_system_charge_amount}</span>
                </div>
                <div>
                  今日系统放电量(kWh):<span>{storageSys?.today_system_discharge_amount}</span>
                </div>
                <div>
                  系统总有功功率(kW): <span>{storageSys?.system_total_active_power}</span>
                </div>
              </div>
            </Card>
          </Col>
          <Col span={6}>
            <Card style={{ height: 150 }}>
              <div className={styles.title}>负载</div>
              <div className={styles.info}>
                <div>
                  今日负载用电量(kWh): <span>{loadInfo?.today_load_used_amount}</span>
                </div>
                <div>
                  累计负载用电量(kWh):<span>{loadInfo?.total_load_used_amount}</span>
                </div>
                <div>
                  负载用电功率(kW):<span>{loadInfo?.load_used_power}</span>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        <Row gutter={12} className="mt12" align="top">
          <Col span={6}>
            <Card style={{ height: 450 }}>
              <div className={styles.sys}>
                <img src={sysRun} alt="" />
              </div>
            </Card>
          </Col>
          <Col span={14}>
            <Card style={{ height: 450 }}>
              <div className={styles.chartBox}>
                <div className={styles.title}>实时功率/充放电量</div>
                <div className={styles.chart} ref={domRef}></div>
                <div className={styles.radio}>
                  <Radio.Group
                    onChange={handleRadio}
                    optionType="button"
                    buttonStyle="solid"
                    value={chartType}
                  >
                    <Radio.Button value={0}>充放电功率</Radio.Button>
                    <Radio.Button value={1}>充放电量</Radio.Button>
                  </Radio.Group>
                </div>
                <div className={styles.time}>
                  {showDatePicker && (
                    <DatePicker defaultValue={date} onChange={onChange} picker={picker} />
                  )}
                  <TimeButtonGroup
                    style={{
                      marginLeft: 20,
                    }}
                    onChange={timeTypeChange}
                  />
                </div>
              </div>
            </Card>
          </Col>
          <Col span={4}>
            <div className={styles.right}>
              <Card style={{ height: 220 }}>
                <div className={styles.title}>收益</div>
                <div className={styles.info}>
                  <div>
                    今日系统充电费用(￥): <span>{incomeInfo?.today_charge_fee}</span>
                  </div>
                  <div>
                    今日系统放电收入(￥): <span>{incomeInfo?.today_discharge_income}</span>
                  </div>
                  <div>
                    累计系统充电总费用(￥): <span>{incomeInfo?.total_charge_fee}</span>
                  </div>
                  <div>
                    累计系统放电总收入(￥): <span>{incomeInfo?.total_discharge_income}</span>
                  </div>
                  <div>
                    今日收益(￥): <span>{incomeInfo?.today_income}</span>
                  </div>
                  <div>
                    累计收益(￥): <span>{incomeInfo?.total_income}</span>
                  </div>
                </div>
              </Card>
              <Card style={{ height: 220 }}>
                <div className={styles.title}>减排</div>
                <div className={styles.info}>
                  <div>
                    年CO2减排量(t):<span>{reductionInfo?.year_co2_reduction}</span>
                  </div>
                  <div>
                    累萌葫减排量(t):<span>{reductionInfo?.total_co2_reduction}</span>
                  </div>
                  <div>
                    年节约标准煤(t):<span>{reductionInfo?.year_save_coal}</span>
                  </div>
                  <div>
                    累计节约(t): <span>{reductionInfo?.total_save_coal}</span>
                  </div>
                  <div>
                    年等效植树(棵):<span>{reductionInfo?.year_tree_plant}</span>
                  </div>
                  <div>
                    累计等效植树(棵): <span>{reductionInfo?.total_tree_plant}</span>
                  </div>
                </div>
              </Card>
            </div>
          </Col>
        </Row>

        <Card className="mt12">
          <Row>
            <Col span={3}>
              <div className={styles.title}>系统</div>
            </Col>
            <Col span={4}>
              <div className={styles.info}>
                <div>设备SN: {deviceData?.ems_info?.sn}</div>
                <div>EMS SN: {deviceData?.ems_info?.ems_sn}</div>
              </div>
            </Col>
            <Col span={4}>
              <div className={styles.info}>
                <div>设备厂商: {deviceData?.ems_info?.manufacturer}</div>
                <div>EMS型号: {deviceData?.ems_info?.ems_model}</div>
              </div>
            </Col>
            <Col span={4}>
              <div className={styles.info}>
                <div>设备型号: {deviceData?.ems_info?.model}</div>
                <div>EMS 硬件版本: {deviceData?.ems_info?.hardware_version}</div>
              </div>
            </Col>
            <Col span={4}>
              <div className={styles.info}>
                <div>工作模式: {deviceData?.ems_info?.work_mode}</div>
                <div>EMS 软件版本: {deviceData?.ems_info?.software_version}</div>
              </div>
            </Col>
            <Col span={5}>
              <div className={styles.info}>
                <div>工作状态: {deviceData?.ems_info?.work_status}</div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={3}>
              <div className={styles.title}>变流器</div>
            </Col>
            <Col span={4}>
              <div className={styles.info}>
                <div>变流器SN: {deviceData?.pcs_info?.sn}</div>
              </div>
            </Col>
            <Col span={4}>
              <div className={styles.info}>
                <div>变流器厂商: {deviceData?.pcs_info?.manufacturer}</div>
              </div>
            </Col>
            <Col span={4}>
              <div className={styles.info}>
                <div>变流器型号: {deviceData?.pcs_info?.model}</div>
              </div>
            </Col>
            <Col span={4}>
              <div className={styles.info}>
                <div>离并网模式: {deviceData?.pcs_info?.work_mode}</div>
              </div>
            </Col>
            <Col span={5}>
              <div className={styles.info}>
                <div>工作状态: {deviceData?.pcs_info?.work_status}</div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={3}>
              <div className={styles.title}>电池</div>
            </Col>
            <Col span={4}>
              <div className={styles.info}>
                <div>电池SN: {deviceData?.battery_info?.sn}</div>
                <div>BMS SN: {deviceData?.battery_info?.bms_sn}</div>
              </div>
            </Col>
            <Col span={4}>
              <div className={styles.info}>
                <div>电池厂商: {deviceData?.battery_info?.manufacturer}</div>
                <div>BMS厂商:: {deviceData?.battery_info?.bms_manufacturer}</div>
              </div>
            </Col>
            <Col span={4}>
              <div className={styles.info}>
                <div>电池型号:: {deviceData?.battery_info?.model}</div>
                <div>BMS型号: {deviceData?.battery_info?.bms_model}</div>
              </div>
            </Col>
            <Col span={4}>
              <div className={styles.info}>
                <div>工作模式: {deviceData?.battery_info?.work_mode}</div>
              </div>
            </Col>
            <Col span={5}>
              <div className={styles.info}>
                <div>工作状态: {deviceData?.battery_info?.work_status}</div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={3}>
              <div className={styles.title}>空调</div>
            </Col>
            <Col span={4}>
              <div className={styles.info}>
                <div>空调SN: {deviceData?.air_condition_info?.sn}</div>
              </div>
            </Col>
            <Col span={4}>
              <div className={styles.info}>
                <div>厂商: {deviceData?.air_condition_info?.manufacturer}</div>
              </div>
            </Col>
            <Col span={4}>
              <div className={styles.info}>
                <div>空调型号: {deviceData?.air_condition_info?.model}</div>
              </div>
            </Col>
            <Col span={4}>
              <div className={styles.info}>
                <div>控制模式: {deviceData?.air_condition_info?.control_mode}</div>
              </div>
            </Col>
            <Col span={5}>
              <div className={styles.info}>
                <div>工作状态: {deviceData?.air_condition_info?.WorkStatus}</div>
              </div>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
};

export default Index;
