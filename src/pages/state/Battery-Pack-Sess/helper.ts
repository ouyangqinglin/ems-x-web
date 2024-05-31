/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-16 09:42:18
 * @LastEditTime: 2024-03-16 10:52:13
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\state\Pcs\helper.ts
 */

import { DeviceModelDescribeType } from '@/types/device';

export const baseInfoItems: any = [
  {
    id: 'a',
    name: '基本信息',
    type: 'group',
    children: [
      {
        id: '1',
        name: '电池堆SN',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '2',
        name: '电池堆厂商',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3',
        name: '电池堆型号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '4',
        name: '与EMS通信状态',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            0: '初始化',
            1: '断开',
            2: '连接',
          },
        },
      },
      {
        id: '5',
        name: '与EMS通信方式',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '6',
        name: 'BAU SN',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kW',
          },
        },
      },
      {
        id: '6',
        name: 'BAU厂商',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '7',
        name: 'BAU型号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '8',
        name: 'BAU硬件版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '9',
        name: 'BAU软件版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '10',
        name: '电池簇个数',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
    ],
  },
];

export const statusItems: any = [
  {
    id: 'a',
    name: '状态信息(遥测)',
    type: 'group',
    children: [
      {
        id: '50',
        type: 'property',
        name: 'BMS控制模式',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1',
        type: 'property',
        name: '工作模式',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '2',
        type: 'property',
        name: '工作状态',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3',
        type: 'property',
        name: '告警状态',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '4',
        type: 'property',
        name: '总电压',
        dataType: {
          type: 'string',
          specs: {
            unit: 'V',
          },
        },
      },
      {
        id: '5',
        type: 'property',
        name: '总电流',
        dataType: {
          type: 'string',
          specs: {
            unit: 'A',
          },
        },
      },
      {
        id: '6',
        type: 'property',
        name: '总功率',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kW',
          },
        },
      },
      {
        id: '7',
        type: 'property',
        name: '额定容量',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '8',
        type: 'property',
        name: '可充电能量',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '9',
        type: 'property',
        name: '可放电能量',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '10',
        type: 'property',
        name: '最近一次充电量',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '11',
        type: 'property',
        name: '最近一次放电量',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '12',
        type: 'property',
        name: '今日充电量',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '13',
        type: 'property',
        name: '今日放电量',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '14',
        type: 'property',
        name: '累计充电量',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '15',
        type: 'property',
        name: '累计放电量',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '16',
        type: 'property',
        name: '氢气浓度',
        dataType: {
          type: 'string',
          specs: {
            unit: 'ppm',
          },
        },
      },
      {
        id: '17',
        type: 'property',
        name: '电柜开门次数',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '18',
        type: 'property',
        name: '最大允许充电电流',
        dataType: {
          type: 'string',
          specs: {
            unit: 'A',
          },
        },
      },
      {
        id: '19',
        type: 'property',
        name: '最大允许放电电流',
        dataType: {
          type: 'string',
          specs: {
            unit: 'A',
          },
        },
      },
      {
        id: '20',
        type: 'property',
        name: '最大允许充电功率',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kW',
          },
        },
      },
      {
        id: '21',
        type: 'property',
        name: '最大允许放电功率',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kW',
          },
        },
      },
    ],
  },
];

export const individualExtremumItems: any = [
  {
    id: 'a',
    name: '状态信息(单体极值)',
    type: 'group',
    children: [
      {
        id: '1',
        name: '最高单体电压值',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'mV',
          },
        },
      },
      {
        id: '1',
        name: '最高单体电压编号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1',
        name: '最高单体电压BMU编号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1',
        name: '最高单体电压簇编号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1',
        name: '最低单体电压值',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'mV',
          },
        },
      },
      {
        id: '1',
        name: '最高单体电压值',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'mV',
          },
        },
      },
      {
        id: '1',
        name: '最低单体电压编号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1',
        name: '最低单体电压BMU编号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1',
        name: '最低单体电压簇编号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1',
        name: '平均单体电压',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'mV',
          },
        },
      },
      {
        id: '1',
        name: '单体电压差',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'mV',
          },
        },
      },
      {
        id: '1',
        name: '最高单体电压值',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'mV',
          },
        },
      },
      {
        id: '1',
        name: '最高单体电压编号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1',
        name: '最高单体电压BMU编号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1',
        name: '最低单体电压值',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'mV',
          },
        },
      },
      {
        id: '1',
        name: '最低单体电压编号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1',
        name: '最低单体电压BMU编号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1',
        name: '平均单体电压',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'mV',
          },
        },
      },
      {
        id: '1',
        name: '单体电压差',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'mV',
          },
        },
      },
      {
        id: '1',
        name: '最高单体温度值',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: '°C',
          },
        },
      },
      {
        id: '1',
        name: '最高单体温度编号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1',
        name: '最高单体温度BMU编号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1',
        name: '最低单体温度值',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: '°C',
          },
        },
      },
      {
        id: '1',
        name: '最低单体温度编号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1',
        name: '最低单体温度BMU编号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1',
        name: '平均单体温度',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1',
        name: '单体温度差',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1',
        name: '最高电池模块电压',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'V',
          },
        },
      },
      {
        id: '1',
        name: '最高电池电压模块编号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1',
        name: '最低电池模块电压',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'V',
          },
        },
      },
      {
        id: '1',
        name: '最低电池电压模块编号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1',
        name: '最高电池模块温度',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: '°C',
          },
        },
      },
      {
        id: '1',
        name: '最高电池温度模块编号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1',
        name: '最低电池模块温度',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: '°C',
          },
        },
      },
      {
        id: '1',
        name: '最低电池温度模块编号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
    ],
  },
];

export const remoteSignalItems: any = [
  {
    type: 'group',
    id: 'a',
    name: '状态信息(遥信)',
    children: [
      {
        type: 'property',
        id: '1',
        name: '充放电指示',
        dataType: {
          type: 'string',
        },
      },
      {
        type: 'property',
        id: '1',
        name: '门禁状态',
        dataType: {
          type: 'string',
        },
      },
      {
        type: 'property',
        id: '1',
        name: '主接触器状态',
        dataType: {
          type: 'string',
        },
      },
      {
        type: 'property',
        id: '1',
        name: '预充接触器状态',
        dataType: {
          type: 'string',
        },
      },
      {
        type: 'property',
        id: '1',
        name: '直流断路器状态',
        dataType: {
          type: 'string',
        },
      },
      {
        type: 'property',
        id: '1',
        name: '交流断路器状态',
        dataType: {
          type: 'string',
        },
      },
      {
        type: 'property',
        id: '1',
        name: '接触器状态',
        dataType: {
          type: 'string',
        },
      },
      {
        type: 'property',
        id: '1',
        name: '气溶胶信号',
        dataType: {
          type: 'string',
        },
      },
      {
        type: 'property',
        id: '1',
        name: '电气急停信号',
        dataType: {
          type: 'string',
        },
      },
      {
        type: 'property',
        id: '1',
        name: 'BMS急停信号',
        dataType: {
          type: 'string',
        },
      },
      {
        type: 'property',
        id: '1',
        name: '水浸信号',
        dataType: {
          type: 'string',
        },
      },
      {
        type: 'property',
        id: '1',
        name: '交流防雷器故障',
        dataType: {
          type: 'string',
        },
      },
    ],
  },
];
