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
        name: '电池组型号',
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
          type: 'string',
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
        name: 'BCMU SN',
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
        name: 'BCMU厂商',
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
        name: 'BCMU型号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '8',
        name: 'BCMU硬件版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '9',
        name: 'BCMU软件版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '10',
        name: '电池模块个数',
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
        id: '3',
        type: 'property',
        name: 'Pack风扇状态反馈',
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
        id: '6',
        type: 'property',
        name: 'SOC',
        dataType: {
          type: 'string',
          specs: {
            unit: '%',
          },
        },
      },
      {
        id: '6',
        type: 'property',
        name: 'SOH',
        dataType: {
          type: 'string',
          specs: {
            unit: '%',
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
        name: '电柜开门次数',
        dataType: {
          type: 'string',
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
        name: '正极绝缘值',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kΩ',
          },
        },
      },
      {
        id: '17',
        type: 'property',
        name: '负极绝缘值',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kΩ',
          },
        },
      },
      {
        id: '17',
        type: 'property',
        name: '预充总压',
        dataType: {
          type: 'string',
          specs: {
            unit: 'V',
          },
        },
      },
      {
        id: '17',
        type: 'property',
        name: '高压箱温度1',
        dataType: {
          type: 'string',
          specs: {
            unit: '℃',
          },
        },
      },
      {
        id: '17',
        type: 'property',
        name: '高压箱温度2',
        dataType: {
          type: 'string',
          specs: {
            unit: '℃',
          },
        },
      },
      {
        id: '17',
        type: 'property',
        name: '高压箱温度3',
        dataType: {
          type: 'string',
          specs: {
            unit: '℃',
          },
        },
      },
      {
        id: '17',
        type: 'property',
        name: '高压箱温度4',
        dataType: {
          type: 'string',
          specs: {
            unit: '℃',
          },
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
          specs: {
            unit: '°C',
          },
        },
      },
      {
        id: '1',
        name: '单体温度差',
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
        name: '预充电阶段',
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
        name: '门禁状态',
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

export const funItems: any = [
  {
    type: 'group',
    id: 'a',
    name: '状态信息(风扇)',
    children: [
      {
        type: 'property',
        id: '1',
        name: 'BMU1风扇',
        dataType: {
          type: 'enum',
          specs: {
            0: '开',
            1: '关',
          },
        },
      },
      {
        type: 'property',
        id: '1',
        name: '电池模块风扇PWM占空比1',
        dataType: {
          type: 'string',
          specs: {
            unit: '%',
          },
        },
      },
      {
        type: 'property',
        id: '1',
        name: 'BMU6风扇',
        dataType: {
          type: 'enum',
          specs: {
            0: '开',
            1: '关',
          },
        },
      },
      {
        type: 'property',
        id: '1',
        name: '电池模块风扇PWM占空比6',
        dataType: {
          type: 'string',
          specs: {
            unit: '%',
          },
        },
      },
      {
        type: 'property',
        id: '1',
        name: 'BMU2风扇',
        dataType: {
          type: 'enum',
          specs: {
            0: '开',
            1: '关',
          },
        },
      },
      {
        type: 'property',
        id: '1',
        name: '电池模块风扇PWM占空比2',
        dataType: {
          type: 'string',
          specs: {
            unit: '%',
          },
        },
      },
      {
        type: 'property',
        id: '1',
        name: 'BMU7风扇',
        dataType: {
          type: 'enum',
          specs: {
            0: '开',
            1: '关',
          },
        },
      },
      {
        type: 'property',
        id: '1',
        name: '电池模块风扇PWM占空比7',
        dataType: {
          type: 'string',
          specs: {
            unit: '%',
          },
        },
      },
      {
        type: 'property',
        id: '1',
        name: 'BMU3风扇',
        dataType: {
          type: 'enum',
          specs: {
            0: '开',
            1: '关',
          },
        },
      },
      {
        type: 'property',
        id: '1',
        name: '电池模块风扇PWM占空比3',
        dataType: {
          type: 'string',
          specs: {
            unit: '%',
          },
        },
      },
      {
        type: 'property',
        id: '1',
        name: 'BMU8风扇',
        dataType: {
          type: 'enum',
          specs: {
            0: '开',
            1: '关',
          },
        },
      },
      {
        type: 'property',
        id: '1',
        name: '电池模块风扇PWM占空比8',
        dataType: {
          type: 'string',
          specs: {
            unit: '%',
          },
        },
      },
      {
        type: 'property',
        id: '1',
        name: 'BMU4风扇',
        dataType: {
          type: 'enum',
          specs: {
            0: '开',
            1: '关',
          },
        },
      },
      {
        type: 'property',
        id: '1',
        name: '电池模块风扇PWM占空比4',
        dataType: {
          type: 'string',
          specs: {
            unit: '%',
          },
        },
      },
      {
        type: 'property',
        id: '1',
        name: 'BMU9风扇',
        dataType: {
          type: 'enum',
          specs: {
            0: '开',
            1: '关',
          },
        },
      },
      {
        type: 'property',
        id: '1',
        name: '电池模块风扇PWM占空比9',
        dataType: {
          type: 'string',
          specs: {
            unit: '%',
          },
        },
      },
      {
        type: 'property',
        id: '1',
        name: 'BMU5风扇',
        dataType: {
          type: 'enum',
          specs: {
            0: '开',
            1: '关',
          },
        },
      },
      {
        type: 'property',
        id: '1',
        name: '电池模块风扇PWM占空比5',
        dataType: {
          type: 'string',
          specs: {
            unit: '%',
          },
        },
      },
      {
        type: 'property',
        id: '1',
        name: 'BMU10风扇',
        dataType: {
          type: 'enum',
          specs: {
            0: '开',
            1: '关',
          },
        },
      },
      {
        type: 'property',
        id: '1',
        name: '电池模块风扇PWM占空比10',
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
export const batteryModuleItems: any = [
  {
    type: 'group',
    id: 'a',
    name: '电池模块单体信息',
    children: [
      {
        type: 'group',
        id: '1',
        name: '电池模块单体信息',
        showType: 2,
        children: [
          {
            id: '2',
            type: 'service',
            showType: 2,
            children: [
              {
                type: 'property',
                name: '电池模块单体',
                buttons: ['edit'],
                id: '2',
                dataType: {
                  type: 'enum',
                  specs: {
                    0: 'BMU1',
                    1: 'BMU2',
                    2: 'BMU3',
                  },
                },
              },
              {
                type: 'property',
                name: 'BMU SN',
                id: '2',
                dataType: {
                  type: 'string',
                },
              },
            ],
          },
        ],
      },
      {
        type: 'group',
        id: '1',
        name: '电池模块单体信息表',
        showType: 2,
        children: [
          {
            id: '2',
            name: '序号表',
            type: 'service',
            showType: 2,
            children: [
              {
                type: 'property',
                name: '电压1',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压2',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压3',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压4',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压5',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压5',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压7',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压8',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压9',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压10',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压11',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压12',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压13',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压14',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压15',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压16',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压17',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压18',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压19',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压20',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压21',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压22',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压23',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压24',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '温度1',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '℃',
                  },
                },
              },
              {
                type: 'property',
                name: '温度2',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '℃',
                  },
                },
              },
              {
                type: 'property',
                name: '温度3',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '℃',
                  },
                },
              },
              {
                type: 'property',
                name: '温度4',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '℃',
                  },
                },
              },
              {
                type: 'property',
                name: '温度5',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '℃',
                  },
                },
              },
              {
                type: 'property',
                name: '温度6',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '℃',
                  },
                },
              },
              {
                type: 'property',
                name: '温度7',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '℃',
                  },
                },
              },
              {
                type: 'property',
                name: '温度8',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '℃',
                  },
                },
              },
              {
                type: 'property',
                name: '温度9',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '℃',
                  },
                },
              },
              {
                type: 'property',
                name: '温度10',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '℃',
                  },
                },
              },
              {
                type: 'property',
                name: '温度11',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '℃',
                  },
                },
              },
              {
                type: 'property',
                name: '温度12',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '℃',
                  },
                },
              },
              {
                type: 'property',
                name: '温度13',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '℃',
                  },
                },
              },
            ],
          },
        ],
      },
    ],
  },
];
