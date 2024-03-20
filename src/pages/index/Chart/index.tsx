import React, {useEffect, useRef, useState} from "react";
import styles from './index.less';
import {useToggle} from "ahooks";
import moment from "moment/moment";
import TimeButtonGroup, { TimeType } from '@/components/TimeButtonGroup';
import * as echarts from 'echarts';
import {DatePicker, Radio} from "antd";
let arr1 = [], arr2 = [], myChart = null
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
    right: 2
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
        color: ['#E9E9E9']
      },
    },
  },
  series: []
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
        color: new echarts.graphic.LinearGradient(
        0, 0, 0, 1,
        [
          {offset: 0, color: '#f4f8ff'},
          {offset: 0.5, color: '#f0f5ff'},
          {offset: 1, color: '#eff4ff'}
          ]
        )
      }
    },
  },
]

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
    barWidth: 12
  }
]
const Index: React.FC = () => {
  const [showDatePicker, { set }] = useToggle(true);
  const [date, setDate] = useState(moment());
  const [picker, setPicker] = useState<
    'year' | 'month' | 'time' | 'date' | 'week' | 'quarter' | undefined
  >();
  const [timeType, setTimeType] = useState<TimeType>(TimeType.DAY);
  const [chartType, setChartType] = useState(0);
  const domRef = useRef();
  let timerOne = useRef(), timerTwo = useRef()
  useEffect(() => {
    getChartLine()
  }, [])
  function getChartLine() {
    // if (timerOne?.current) clearInterval(timerOne.current);
    for(let i = 0; i < 16; i++) {
      optionBat.xAxis[0].data.push(i);
      seriesLine[0].data.push((Math.random() * 10).toFixed(2));
    }
    optionBat.series = seriesLine
    optionBat.legend.data = ['充放电功率'];
    chartInit();
  }
  function getChartBat() {
    // if (timerTwo?.current) clearInterval(timerTwo.current);
    for (let i = 0; i < 16; i++) {
      optionBat.xAxis[0].data.push(`${i}:00`);
      arr1.push(-(Math.random() * 10).toFixed(2));
      arr2.push((Math.random() * 10).toFixed(2));
    }
    seriesBar[0].data = arr1
    seriesBar[1].data = arr2
    optionBat.yAxis.name = '单位(kWh)'
    optionBat.series = seriesBar;
    optionBat.legend.data = ['充电量', '放电量'];
    chartInit();
  }

  const handleRadio = (e) => {
    setChartType(e.target.value);
    clearData(e.target.value);
  };

  function clearData(v) {
    if (myChart) {
      myChart.dispose();
      myChart = null;
    }
    // if (timerOne.current) clearInterval(timerOne.current);
    // if (timerTwo.current) clearInterval(timerTwo.current);
    arr1 = [];
    arr2 = [];
    optionBat.xAxis[0].data = [];
    seriesLine[0].data = [];
    seriesBar[0].data = []
    seriesBar[1].data = []
    optionBat.yAxis.name = ['单位(kW)', '单位(kWh)'][+v];
    if (+v === 1) getChartBat()
    else getChartLine()
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

  function chartInit() {
    myChart = echarts.init(domRef.current);
    myChart.setOption(optionBat, true);
  };

  return (
    <>
      <div className={styles.chartBox}>
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
            <DatePicker defaultValue={date} onChange={onChange} picker={picker}/>
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
  )
}

export default Index
