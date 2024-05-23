import React, { useEffect, useMemo, useRef, useState } from 'react';
import styles from './index.less';
import { useToggle } from 'ahooks';
import moment from 'moment/moment';
import TimeButtonGroup, { TimeType } from '@/components/TimeButtonGroup';
import { getIndexChart } from '@/services/device';
import * as echarts from 'echarts';
import { DatePicker, Radio } from 'antd';
import TypeChart from '@/components/Chart/TypeChart';

const arr1 = [],
  arr2 = [],
  arr3 = [];
const optionBat = {
  legend: {
    data: ['充放电功率'],
    icon: 'circle',
    top: '16%',
  },
  tooltip: {
    show: true,
    trigger: 'axis',
  },
  grid: {
    bottom: '10%',
    left: 6,
    top: '24%',
    right: 16,
  },
  yAxis: {
    name: `单位(kW)`,
    type: 'value',
  },
  dataZoom: [
    {
      type: 'inside',
    },
    {
      start: 0,
      end: 100,
      height: 15,
      bottom: 10,
    },
  ],
  series: [],
};

const seriesLine = [
  {
    symbol: 'none',
    type: 'line',
    name: '充放电功率',
    itemStyle: {
      color: '#007dff',
    },
    areaStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#f4f8ff' },
          { offset: 0.5, color: '#f0f5ff' },
          { offset: 1, color: '#eff4ff' },
        ]),
      },
    },
  },
];

const seriesBar = [
  {
    symbol: 'none',
    type: 'line',
    color: '#007dff',
    name: '充电量',
  },
  {
    symbol: 'none',
    type: 'line',
    color: '#3cd599',
    name: '放电量',
  },
];

const Chart: React.FC<ChartType> = (props) => {
  const [showDatePicker, { set }] = useToggle(true);
  const [date, setDate] = useState(moment());
  const [picker, setPicker] = useState<
    'year' | 'month' | 'time' | 'date' | 'week' | 'quarter' | undefined
  >();
  const [timeType, setTimeType] = useState<TimeType>(TimeType.DAY);
  const [chartType, setChartType] = useState(0);
  const [chartData, setChartData] = useState([]);
  const timerOne = useRef();
  const newChartType = useRef(chartType);
  useEffect(() => {
    getData();
  }, [chartType, timeType]);

  function computedTime(time: string, type: number): string {
    const d = new Date();
    const year = d.getFullYear(); // 获取当前年份，例如：2021
    const month =
      (d.getMonth() + 1).toString().length === 1 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1; // 获取当前月份，注意需要加1，例如：9
    const day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate(); // 获取当前日期，例如：22
    if (type === 0) {
      // '2024-05-16 00:00:00'
      return `${year}-${month}-${day} ${time}:00:00`;
    }
    if (type === 1) {
      // '2024-05-16'
      if (+time < 10) return `${year}-${month}-0${time}`;
      else return `${year}-${month}-${time}`;
    }
    if (type === 2) {
      // '2024-01'
      if (+time < 10) return `${year}-0${time}`;
      else return `${year}-${time}`;
    }
    if (type === 3) {
      return time;
    }
    return '';
  }
  function getData() {
    if (timerOne?.current) clearInterval(timerOne.current);
    getIndexChart({ TimeType: timeType, DataType: chartType })
      .then((res) => {
        if (res?.data?.powerData && chartType === 0) {
          // 充放电功率
          const powerData = res?.data?.powerData;
          for (const key in powerData) {
            if (powerData.hasOwnProperty(key))
              arr1.push({
                label:
                  timeType === 0
                    ? computedTime(key, timeType)
                    : computedTime(key.slice(0, -1), timeType),
                value: +powerData[key],
              });
          }
        }
        if (res?.data?.chargeData && chartType === 1) {
          // 充电量
          const chargeData = res?.data?.chargeData;
          for (const key in chargeData) {
            if (chargeData.hasOwnProperty(key))
              arr2.push({
                label:
                  timeType === 0
                    ? computedTime(key, timeType)
                    : computedTime(key.slice(0, -1), timeType),
                value: +chargeData[key],
              });
          }
        }
        if (res?.data?.disChargeData && chartType === 1) {
          // 放电量
          const disChargeData = res?.data?.disChargeData;
          for (const key in disChargeData) {
            if (disChargeData.hasOwnProperty(key))
              arr3.push({
                label:
                  timeType === 0
                    ? computedTime(key, timeType)
                    : computedTime(key.slice(0, -1), timeType),
                value: +disChargeData[key],
              });
          }
        }
        const chartDataLeft = [
          {
            name: '充放电功率',
            data: arr1,
          },
        ];
        const chartDataRight = [
          {
            name: '充电量',
            data: arr2,
          },
          {
            name: '放电量',
            data: arr3,
          },
        ];
        if (+newChartType.current === 1) setChartData(chartDataRight);
        else setChartData(chartDataLeft);
      })
      .finally(() => {
        if (timeType === 0) timerOne.current = setInterval(() => getData(), 900000);
      });
  }
  useEffect(() => {
    // 更新最新的state值到ref中
    newChartType.current = chartType;
  });

  const changeChartType = (e) => {
    if (+e.target.value === 1) {
      optionBat.yAxis.name = '单位(kWh)';
      optionBat.legend.data = ['充电量', '放电量'];
    } else {
      optionBat.yAxis.name = '单位(kW)';
      optionBat.legend.data = ['充放电功率'];
    }
    setChartType(() => e.target.value);
  };

  const onChange = (value) => {
    // console.log(value ? value.format('YYYY-MM-DD') : moment().format('YYYY-MM-DD'));
    setDate(value);
  };
  const timeTypeChange = (type: TimeType) => {
    // console.log(date ? date.format('YYYY-MM-DD') : moment().format('YYYY-MM-DD'));
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
        set(true);
        break;
    }
  };

  const chartOption = useMemo(() => {
    return +chartType === 1
      ? { ...optionBat, ...{ series: seriesBar } }
      : { ...optionBat, ...{ series: seriesLine } };
  }, [chartType]);

  return (
    <>
      <div className={styles.chartBox}>
        <div className={styles.chart}>
          <TypeChart
            type={timeType}
            date={date}
            key={chartType}
            option={chartOption}
            data={chartData}
            step={1}
          />
        </div>
        <div className={styles.radio}>
          <Radio.Group
            onChange={changeChartType}
            optionType="button"
            buttonStyle="solid"
            value={chartType}
          >
            <Radio.Button value={0}>充放电功率</Radio.Button>
            <Radio.Button value={1}>充放电量</Radio.Button>
          </Radio.Group>
        </div>
        <div className={styles.time}>
          {!showDatePicker && (
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
    </>
  );
};

export default Chart;
