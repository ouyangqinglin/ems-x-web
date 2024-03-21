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
        name: '设备SN',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '2',
        name: '设备厂商',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3',
        name: '设备型号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '4',
        name: '本机IP',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5',
        name: '系统时间',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '6',
        name: '额定功率',
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
        name: '额定容量',
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
        name: '主从标识',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '8',
        name: '设备ID',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '9',
        name: '外网IP',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '10',
        name: 'EMS SN',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '11',
        name: 'EMS 型号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '13',
        name: 'EMS 硬件版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '14',
        name: 'EMS 软件版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '15',
        name: '4G-IMEI号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '16',
        name: '上位机通信',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '17',
        name: '云平台通信',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '18',
        name: '永泰云通信',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '19',
        name: '灯板通信',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '20',
        name: '变流器通信',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '21',
        name: 'BMS 通信',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '22',
        name: '空调通信',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '23',
        name: '消防通信',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '25',
        name: '电网侧电表通信',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '26',
        name: '逆变侧电表通信',
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
    name: '状态信息',
    type: 'group',
    children: [
      {
        id: 'b',
        name: '系统',
        type: 'group',
        children: [
          {
            id: '1',
            type: 'property',
            name: '系统控制模式',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '2',
            type: 'property',
            name: '系统工作模式',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '3',
            type: 'property',
            name: '系统工作状态',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '4',
            type: 'property',
            name: '系统告警状态',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '5',
            type: 'property',
            name: '电池组工作状态',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '6',
            type: 'property',
            name: '光伏发电功率',
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
            name: '用电功率',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kW',
              },
            },
          },
          {
            id: '8',
            type: 'property',
            name: '自发自用功率',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kW',
              },
            },
          },
          {
            id: '9',
            type: 'property',
            name: '今日发电量',
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
            name: '今日用电量',
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
            name: '今日自发自用电量',
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
            name: '今日自发自用率',
            dataType: {
              type: 'string',
              specs: {
                unit: '%',
              },
            },
          },
          {
            id: '13',
            type: 'property',
            name: '累计发电量',
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
            name: '累计用电量',
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
            name: '累计自发自用电量',
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
            name: '累计自发自用率',
            dataType: {
              type: 'string',
              specs: {
                unit: '%',
              },
            },
          },
          {
            id: '17',
            type: 'property',
            name: '电池SOC',
            dataType: {
              type: 'string',
              specs: {
                unit: '%',
              },
            },
          },
          {
            id: '18',
            type: 'property',
            name: '电池SOH',
            dataType: {
              type: 'string',
              specs: {
                unit: '%',
              },
            },
          },
          {
            id: '19',
            type: 'property',
            name: '电池充放电功率',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kW',
              },
            },
          },
          {
            id: '20',
            type: 'property',
            name: '电池剩余电能',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '21',
            type: 'property',
            name: '今日电池充电量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '22',
            type: 'property',
            name: '今日电池放电量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '23',
            type: 'property',
            name: '累计电池充电量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '24',
            type: 'property',
            name: '累计电池放电量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '25',
            type: 'property',
            name: '负载用电功率',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kW',
              },
            },
          },
          {
            id: '26',
            type: 'property',
            name: '今日负载用电量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '27',
            type: 'property',
            name: '今日自给自足电量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '28',
            type: 'property',
            name: '今日自给自足率',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '29',
            type: 'property',
            name: '累计负载用电量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '30',
            type: 'property',
            name: '累计自给自足电量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '31',
            type: 'property',
            name: '累计自给自足率',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '32',
            type: 'property',
            name: '逆变侧有功功率',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kW',
              },
            },
          },
          {
            id: '33',
            type: 'property',
            name: '逆变侧无功功率',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kW',
              },
            },
          },
          {
            id: '33',
            type: 'property',
            name: '逆变侧视在功率',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kW',
              },
            },
          },
          {
            id: '33',
            type: 'property',
            name: '市电功率',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kW',
              },
            },
          },
          {
            id: '33',
            type: 'property',
            name: '今日市电供电量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '33',
            type: 'property',
            name: '今日市电馈网电量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '33',
            type: 'property',
            name: '累计市电供电量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '33',
            type: 'property',
            name: '累计市电馈网电量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '33',
            type: 'property',
            name: '电网侧电表有功功率',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kW',
              },
            },
          },
          {
            id: '33',
            type: 'property',
            name: '电网侧电表当前正向总有功电能',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '33',
            type: 'property',
            name: '电网侧电表当前反向总有功电能',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '33',
            type: 'property',
            name: '防逆流启动',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '33',
            type: 'property',
            name: '防逆流启动',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '33',
            type: 'property',
            name: '防过流启动',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '33',
            type: 'property',
            name: '防逆流阈值',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kW',
              },
            },
          },
          {
            id: '33',
            type: 'property',
            name: '系统设置有功功率',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kW',
              },
            },
          },
          {
            id: '33',
            type: 'property',
            name: '系统设置无功功率',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kVar',
              },
            },
          },
          {
            id: '33',
            type: 'property',
            name: '市电开关',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '33',
            type: 'property',
            name: '直流开关',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '33',
            type: 'property',
            name: '负载开关',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '33',
            type: 'property',
            name: '电气急停信号',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '33',
            type: 'property',
            name: '辅助供电开关',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '33',
            type: 'property',
            name: 'EMS直流供电开关',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '33',
            type: 'property',
            name: '站控消防',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '33',
            type: 'property',
            name: '交流防雷器状态',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '33',
            type: 'property',
            name: '直流防雷器状态',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '33',
            type: 'property',
            name: '可燃气体排风扇开关',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '33',
            type: 'property',
            name: '水浸报警',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '33',
            type: 'property',
            name: '门禁开关',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '33',
            type: 'property',
            name: '电池柜开门次数',
            dataType: {
              type: 'string',
            },
          },
        ],
      },
      {
        id: 'c',
        name: '变流器',
        type: 'group',
        children: [
          {
            id: '34',
            type: 'property',
            name: '变流器离并网模式',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '35',
            type: 'property',
            name: '变流器工作状态',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '36',
            type: 'property',
            name: '变流器告警状态',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '37',
            type: 'property',
            name: '电网交流 A 相电压',
            dataType: {
              type: 'string',
              specs: {
                unit: 'V',
              },
            },
          },
          {
            id: '38',
            type: 'property',
            name: '电网交流 B 相电压',
            dataType: {
              type: 'string',
              specs: {
                unit: 'V',
              },
            },
          },
          {
            id: '39',
            type: 'property',
            name: '电网交流 C 相电压',
            dataType: {
              type: 'string',
              specs: {
                unit: 'V',
              },
            },
          },
          {
            id: '40',
            type: 'property',
            name: '电网交流 A 相电流',
            dataType: {
              type: 'string',
              specs: {
                unit: 'A',
              },
            },
          },
          {
            id: '41',
            type: 'property',
            name: '电网交流 B 相电流',
            dataType: {
              type: 'string',
              specs: {
                unit: 'A',
              },
            },
          },
          {
            id: '42',
            type: 'property',
            name: '电网交流 C 相电流',
            dataType: {
              type: 'string',
              specs: {
                unit: 'A',
              },
            },
          },
        ],
      },
      {
        id: 'd',
        type: 'group',
        name: '电池',
        children: [
          {
            id: '45',
            type: 'property',
            name: '电池组工作模式',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '47',
            type: 'property',
            name: '电池组告警状态',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '48',
            type: 'property',
            name: '电池总电压',
            dataType: {
              type: 'string',
              specs: {
                unit: 'V',
              },
            },
          },
          {
            id: '49',
            type: 'property',
            name: '电池总电流',
            dataType: {
              type: 'string',
              specs: {
                unit: 'A',
              },
            },
          },
          {
            id: '50',
            type: 'property',
            name: '电池总功率',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kW',
              },
            },
          },
          {
            id: '51',
            type: 'property',
            name: '正极绝缘电阻',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kΩ',
              },
            },
          },
          {
            id: '52',
            type: 'property',
            name: '负极绝缘电阻',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kΩ',
              },
            },
          },
          {
            id: '53',
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
            id: '54',
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
            id: '55',
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
            id: '56',
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
            id: '57',
            type: 'property',
            name: '最高单体电压',
            dataType: {
              type: 'string',
              specs: {
                unit: 'mV',
              },
            },
          },
          {
            id: '58',
            type: 'property',
            name: '最低单体电压',
            dataType: {
              type: 'string',
              specs: {
                unit: 'mV',
              },
            },
          },
          {
            id: '59',
            type: 'property',
            name: '平均单体电压',
            dataType: {
              type: 'string',
              specs: {
                unit: 'mV',
              },
            },
          },
          {
            id: '60',
            type: 'property',
            name: '单体电压差',
            dataType: {
              type: 'string',
              specs: {
                unit: 'mV',
              },
            },
          },
          {
            id: '61',
            type: 'property',
            name: '最高单体温度',
            dataType: {
              type: 'string',
              specs: {
                unit: '℃',
              },
            },
          },
          {
            id: '62',
            type: 'property',
            name: '最低单体温度',
            dataType: {
              type: 'string',
              specs: {
                unit: '℃',
              },
            },
          },
          {
            id: '63',
            type: 'property',
            name: '平均单体温度',
            dataType: {
              type: 'string',
              specs: {
                unit: '℃',
              },
            },
          },
          {
            id: '64',
            type: 'property',
            name: '单体温度差',
            dataType: {
              type: 'string',
              specs: {
                unit: '℃',
              },
            },
          },
        ],
      },
      {
        type: 'group',
        name: '空调',
        id: 'e',
        children: [
          {
            id: '65',
            type: 'property',
            name: '空调机组控制模式',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '66',
            type: 'property',
            name: '空调机组工作状态',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '67',
            type: 'property',
            name: '空调告警状态',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '68',
            type: 'property',
            name: '室外温度',
            dataType: {
              type: 'string',
              specs: {
                unit: '°C',
              },
            },
          },
          {
            id: '69',
            type: 'property',
            name: '室外温度',
            dataType: {
              type: 'string',
              specs: {
                unit: '°C',
              },
            },
          },
          {
            id: '70',
            type: 'property',
            name: '回风温度',
            dataType: {
              type: 'string',
              specs: {
                unit: '°C',
              },
            },
          },
          {
            id: '72',
            type: 'property',
            name: '冷凝盘管温度',
            dataType: {
              type: 'string',
              specs: {
                unit: '°C',
              },
            },
          },
          {
            id: '73',
            type: 'property',
            name: '湿度',
            dataType: {
              type: 'string',
              specs: {
                unit: '%',
              },
            },
          },
        ],
      },
      {
        type: 'group',
        id: 'f',
        name: '消防',
        children: [
          {
            id: '74',
            type: 'property',
            name: '消防告警状态',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '75',
            type: 'property',
            name: '主机报警状态',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '76',
            type: 'property',
            name: '总故障标志',
            dataType: {
              type: 'string',
            },
          },
        ],
      },
    ],
  },
];

export const incomeItems: any = [
  {
    name: '收益统计',
    type: 'group',
    id: 'a',
    children: [
      {
        name: '昨日光伏收益',
        type: 'property',
        id: '1',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        name: '昨日节约电费',
        type: 'property',
        id: '1',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        name: '今日光伏收益',
        type: 'property',
        id: '1',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        name: '今日节约电费',
        type: 'property',
        id: '1',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        name: '上月光伏收益',
        type: 'property',
        id: '1',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        name: '上月节约电费',
        type: 'property',
        id: '1',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        name: '当月光伏收益',
        type: 'property',
        id: '1',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        name: '当月节约电费',
        type: 'property',
        id: '1',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        name: '累计光伏收益',
        type: 'property',
        id: '1',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        name: '累计节约电费',
        type: 'property',
        id: '1',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
    ],
  },
];

export const reductionItems = [
  {
    name: '减排',
    type: 'group',
    id: 'a',
    children: [
      {
        name: '年CO₂减排量',
        type: 'property',
        id: '1',
        dataType: {
          type: 'string',
          specs: {
            unit: 't',
          },
        },
      },
      {
        name: '累计减排量',
        type: 'property',
        id: '1',
        dataType: {
          type: 'string',
          specs: {
            unit: 't',
          },
        },
      },
      {
        name: '年节约标准煤',
        type: 'property',
        id: '1',
        dataType: {
          type: 'string',
          specs: {
            unit: 't',
          },
        },
      },
      {
        name: '累计节约',
        type: 'property',
        id: '1',
        dataType: {
          type: 'string',
          specs: {
            unit: 't',
          },
        },
      },
      {
        name: '年等效植树',
        type: 'property',
        id: '1',
        dataType: {
          type: 'string',
          specs: {
            unit: '棵',
          },
        },
      },
      {
        name: '累计等效植树',
        type: 'property',
        id: '1',
        dataType: {
          type: 'string',
          specs: {
            unit: '棵',
          },
        },
      },
    ],
  },
];
