import * as echarts from 'echarts';

export const cpuItems: any = [
  {
    id: 'a',
    name: '',
    type: 'group',
    showType: 2,
    children: [
      {
        id: 'cpuPercent',
        name: 'CPU使用率',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: '%',
          },
        },
      },
    ],
  },
];

export const memoryItem: any = [
  {
    id: 'b',
    name: '',
    type: 'group',
    showType: 2,
    children: [
      {
        id: 'memPercent',
        name: '内存使用率',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: '%',
          },
        },
      },
      {
        id: 'usageMem',
        name: '内存使用量',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'M',
          },
        },
      },
      {
        id: 'totalMem',
        name: '总量',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'M',
          },
        },
      },
    ],
  },
];

export const diskItems: any = [
  {
    id: 'b',
    name: '',
    type: 'group',
    showType: 2,
    children: [
      {
        id: 'diskPercent',
        name: '硬盘使用率',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: '%',
          },
        },
      },
      {
        id: 'usageSize',
        name: '硬盘使用量',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'G',
          },
        },
      },
      {
        id: 'totalSize',
        name: '总量',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'G',
          },
        },
      },
    ],
  },
];

export const ethZeroItems: any = [
  {
    id: 'name',
    name: '',
    type: 'group',
    showType: 2,
    children: [
      {
        id: 'ip',
        name: 'IP地址',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: 'mask',
        name: '子网掩码',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: 'gateway',
        name: '默认网关',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: 'packetsRecv',
        name: '接收包数',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: 'packetsSent',
        name: '发送包数',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
    ],
  },
];

export const systemInfoItems: any = [
  {
    id: 'a',
    name: '',
    type: 'group',
    showType: 2,
    children: [
      {
        id: 'name',
        name: '系统名称',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: 'softVer',
        name: '软件版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: 'hardVer',
        name: '硬件版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: 'kernelVer',
        name: '内核版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: 'time',
        name: '系统时间',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: 'startTime',
        name: '开机时间',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: 'runTime',
        name: '运行时长',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
    ],
  },
];

export const options: any = {
  legend: {
    data: ['CPU占线率'],
    icon: 'circle',
  },
  tooltip: {
    show: true,
    trigger: 'axis',
  },
  grid: {
    bottom: '15%',
    right: 14,
  },
  yAxis: {
    name: `单位(%)`,
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
    },
  ],
  series: [
    {
      symbol: 'none',
      type: 'line',
      name: 'CPU占线率',
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
  ],
};
