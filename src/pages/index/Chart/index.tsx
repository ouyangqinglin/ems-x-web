import React, { useEffect, useRef, useState } from 'react';
import styles from './index.less';
import { useToggle } from 'ahooks';
import moment from 'moment/moment';
import TimeButtonGroup, { TimeType } from '@/components/TimeButtonGroup';
import { getDeviceData } from '@/services/device';
import * as echarts from 'echarts';
import { DatePicker, Radio } from 'antd';

let arr1 = localStorage.getItem('arr1') ? JSON.parse(localStorage.getItem('arr1')) : [],
  arr2 = localStorage.getItem('arr2') ? JSON.parse(localStorage.getItem('arr2')) : [],
  arr3 = localStorage.getItem('arr3') ? JSON.parse(localStorage.getItem('arr3')) : [],
  arrTime = localStorage.getItem('arrTime') ? JSON.parse(localStorage.getItem('arrTime')) : [],
  myChart = null;

const day = new Date().getDate();
if (!localStorage.getItem('day')) localStorage.setItem('day', day);
else {
  if (+day !== +localStorage.getItem('day')) {
    localStorage.setItem('day', day);
    arr1 = [];
    arr2 = [];
    arr3 = [];
    arrTime = [];
  }
}
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
    left: 28,
    top: '24%',
    right: 2,
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: true,
      data: [],
      axisLine: {
        lineStyle: {
          color: '#BBBBBB',
        },
      },
      axisLabel: {
        textStyle: {
          color: '#909399',
        },
      },
    },
  ],
  yAxis: {
    name: `单位(kW)`,
    type: 'value',
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      textStyle: {
        color: '#909399',
      },
    },
    splitLine: {
      lineStyle: {
        type: 'solid',
        color: ['#E9E9E9'],
      },
    },
  },
  series: [],
};

const seriesLine = [
  {
    name: '充放电功率',
    symbol: 'none',
    type: 'line',
    itemStyle: {
      color: '#007dff',
    },
    data: [],
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
    name: '充电量',
    symbol: 'none',
    type: 'bar',
    stack: 'one',
    color: '#007dff',
    data: [],
    barWidth: 12,
  },
  {
    name: '放电量',
    symbol: 'none',
    type: 'bar',
    stack: 'one',
    color: '#3cd599',
    data: [],
    barWidth: 12,
  },
];
const Index: React.FC = () => {
  const [showDatePicker, { set }] = useToggle(false);
  const [date, setDate] = useState(moment());
  const [picker, setPicker] = useState<
    'year' | 'month' | 'time' | 'date' | 'week' | 'quarter' | undefined
  >();
  // const [timeType, setTimeType] = useState<TimeType>(TimeType.TOTAL);
  const [chartType, setChartType] = useState(0);
  const domRef = useRef();
  const timerOne = useRef();
  const newChartType = useRef(chartType);
  useEffect(() => {
    getChartData();
  }, []);
  useEffect(() => {
    // 更新最新的state值到ref中
    newChartType.current = chartType;
  });

  useEffect(() => {
    chartInit(chartType);
  }, [chartType]);
  function getChartData(v) {
    if (timerOne?.current) clearInterval(timerOne.current);
    getDeviceData(1, { id: 313 })
      .then((res) => {
        if (+res.code === 200) {
          arrTime.push(res?.data?.refreshTime?.slice(11));
          arr1.push(res?.data[313]);
          arr2.push(res?.data[334]);
          arr3.push(res?.data[336]);
          localStorage.setItem('arrTime', JSON.stringify(arrTime));
          localStorage.setItem('arr1', JSON.stringify(arr1));
          localStorage.setItem('arr2', JSON.stringify(arr2));
          localStorage.setItem('arr3', JSON.stringify(arr3));
          optionBat.xAxis[0].data = arrTime;
          seriesLine[0].data = arr1; // 充放电功率
          seriesBar[0].data = arr2; // 充
          seriesBar[1].data = arr3; // 放
          chartInit(v);
        }
      })
      .finally(() => {
        timerOne.current = setInterval(() => getChartData(newChartType.current), 60000);
      });
  }

  const changeChartType = (e) => {
    if (myChart) {
      myChart.dispose();
      myChart = null;
    }
    setChartType(() => e.target.value);
    chartInit(e.target.value);
  };

  function chartInit(v) {
    if (v && +v === 1) {
      optionBat.yAxis.name = '单位(kWh)';
      optionBat.series = seriesBar;
      optionBat.legend.data = ['充电量', '放电量'];
    } else {
      optionBat.series = seriesLine;
      optionBat.yAxis.name = '单位(kW)';
      optionBat.legend.data = ['充放电功率'];
    }
    if (domRef?.current) {
      myChart = echarts.init(domRef.current);
      myChart.setOption(optionBat, true);
    }
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

  return (
    <>
      <div className={styles.chartBox}>
        <div className={styles.chart} ref={domRef}></div>
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
          {showDatePicker && <DatePicker defaultValue={date} onChange={onChange} picker={picker} />}
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

export default Index;
