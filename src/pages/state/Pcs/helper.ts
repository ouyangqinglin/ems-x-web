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
        name: '变流器SN',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '2',
        name: '变流器厂商',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3',
        name: '变流器型号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '4',
        name: '变流器额定功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kW',
          },
          type: 'string',
        },
      },
      {
        id: '5',
        name: '与EMS通信状态',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '6',
        name: '与EMS通信方式',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
    ],
  },
];

export const versionItems: any = [
  {
    id: 'a',
    name: '版本信息',
    type: 'group',
    children: [
      {
        id: '1',
        name: 'DSP-V版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '2',
        name: '硬件版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3',
        name: 'DSP-B版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '4',
        name: 'ARM-V版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5',
        name: 'DSP-D版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '6',
        name: 'ARM-B版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '7',
        name: 'CPLD-V版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '8',
        name: 'ARM-D版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '9',
        name: 'CPLD-B版本',
        type: 'property',
        span: 2,
        dataType: {
          type: 'string',
        },
      },
      {
        id: '10',
        name: 'CPLD-D版本',
        type: 'property',
        span: 2,
        dataType: {
          type: 'string',
        },
      },
    ],
  },
];

export const stateItems: any = [
  {
    id: 'a',
    name: '状态信息',
    type: 'group',
    children: [
      {
        id: '1',
        name: '主从模式',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5',
        name: '离并网模式',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '2',
        name: '输出模式',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '6',
        name: '工作状态',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3',
        name: '告警状态',
        type: 'property',
        span: 2,
        dataType: {
          type: 'string',
        },
      },
      {
        id: '4',
        name: '设置有功功率',
        type: 'property',
        span: 2,
        dataType: {
          specs: {
            unit: 'kW',
          },
          type: 'string',
        },
      },
      {
        id: '4',
        name: '设置无功功率',
        type: 'property',
        span: 2,
        dataType: {
          specs: {
            unit: 'kVar',
          },
          type: 'string',
        },
      },
    ],
  },
];

export const electricEnergyItems: any = [
  {
    id: 'a',
    name: '电能信息',
    type: 'group',
    children: [
      {
        id: '1',
        name: '今日充电量',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kWh',
          },
          type: 'string',
        },
      },
      {
        id: '5',
        name: '今日放电量',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kWh',
          },
          type: 'string',
        },
      },
      {
        id: '2',
        name: '累计充电量',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kWh',
          },
          type: 'string',
        },
      },
      {
        id: '6',
        name: '累计放电量',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kWh',
          },
          type: 'string',
        },
      },
    ],
  },
];

export const dcSideItems: any = [
  {
    id: 'a',
    name: '直流侧信息',
    type: 'group',
    children: [
      {
        id: '1',
        name: '直流电压',
        type: 'property',
        dataType: {
          specs: {
            unit: 'V',
          },
          type: 'string',
        },
      },
      {
        id: '5',
        name: '直流电流',
        type: 'property',
        dataType: {
          specs: {
            unit: 'A',
          },
          type: 'string',
        },
      },
      {
        id: '2',
        name: '直流功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kW',
          },
          type: 'string',
        },
      },
      {
        id: '6',
        name: '总母线电压',
        type: 'property',
        dataType: {
          specs: {
            unit: 'V',
          },
          type: 'string',
        },
      },
      {
        id: '6',
        name: '正母线电压',
        type: 'property',
        dataType: {
          specs: {
            unit: 'V',
          },
          type: 'string',
        },
      },
      {
        id: '6',
        name: '负母线电压',
        type: 'property',
        dataType: {
          specs: {
            unit: 'V',
          },
          type: 'string',
        },
      },
    ],
  },
];

export const tempItems: any = [
  {
    id: 'a',
    name: '温度信息',
    type: 'group',
    children: [
      {
        id: '1',
        name: '环境温度',
        type: 'property',
        dataType: {
          specs: {
            unit: '℃',
          },
          type: 'string',
        },
      },
      {
        id: '5',
        name: '内部温度1',
        type: 'property',
        dataType: {
          specs: {
            unit: '℃',
          },
          type: 'string',
        },
      },
      {
        id: '2',
        name: '内部温度2',
        type: 'property',
        dataType: {
          specs: {
            unit: '℃',
          },
          type: 'string',
        },
      },
      {
        id: '6',
        name: '内部温度3',
        type: 'property',
        dataType: {
          specs: {
            unit: '℃',
          },
          type: 'string',
        },
      },
    ],
  },
];

export const epsItems: any = [
  {
    id: 'a',
    name: 'EPS 侧信息',
    type: 'group',
    children: [
      {
        id: '1',
        name: 'EPS A相电压',
        type: 'property',
        dataType: {
          specs: {
            unit: 'V',
          },
          type: 'string',
        },
      },
      {
        id: '5',
        name: 'EPS B相电压',
        type: 'property',
        dataType: {
          specs: {
            unit: 'V',
          },
          type: 'string',
        },
      },
      {
        id: '2',
        name: 'EPS C相电压',
        type: 'property',
        span: 2,
        dataType: {
          specs: {
            unit: 'V',
          },
          type: 'string',
        },
      },
      {
        id: '6',
        name: 'EPS A相电流',
        type: 'property',
        dataType: {
          specs: {
            unit: 'A',
          },
          type: 'string',
        },
      },
      {
        id: '6',
        name: 'EPS B相电流',
        type: 'property',
        dataType: {
          specs: {
            unit: 'A',
          },
          type: 'string',
        },
      },
      {
        id: '6',
        name: 'EPS C相电流',
        type: 'property',
        span: 2,
        dataType: {
          specs: {
            unit: 'A',
          },
          type: 'string',
        },
      },
      {
        id: '6',
        name: 'EPS A相视在功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kVA',
          },
          type: 'string',
        },
      },
      {
        id: '6',
        name: 'EPS B相视在功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kVA',
          },
          type: 'string',
        },
      },
      {
        id: '6',
        name: 'EPS C相视在功率',
        type: 'property',
        span: 2,
        dataType: {
          specs: {
            unit: 'kVA',
          },
          type: 'string',
        },
      },
      {
        id: '6',
        name: 'EPS A相DCV',
        type: 'property',
        dataType: {
          specs: {
            unit: 'mV',
          },
          type: 'string',
        },
      },
      {
        id: '6',
        name: 'EPS B相DCV',
        type: 'property',
        dataType: {
          specs: {
            unit: 'mV',
          },
          type: 'string',
        },
      },
      {
        id: '6',
        name: 'EPS C相DCV',
        type: 'property',
        dataType: {
          specs: {
            unit: 'mV',
          },
          type: 'string',
        },
      },
      {
        id: '6',
        name: 'EPS 频率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'hz',
          },
          type: 'string',
        },
      },
    ],
  },
];

export const gridSideItems: any = [
  {
    id: 'a',
    name: '电网侧信息',
    type: 'group',
    children: [
      {
        id: '1',
        name: '电网A相有功功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kW',
          },
          type: 'string',
        },
      },
      {
        id: '1',
        name: '电网B相有功功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kW',
          },
          type: 'string',
        },
      },
      {
        id: '1',
        name: '电网C相有功功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kW',
          },
          type: 'string',
        },
      },
      {
        id: '1',
        name: '电网总有功功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kW',
          },
          type: 'string',
        },
      },
      {
        id: '1',
        name: '电网A相无功功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kVar',
          },
          type: 'string',
        },
      },
      {
        id: '1',
        name: '电网B相无功功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kVar',
          },
          type: 'string',
        },
      },
      {
        id: '1',
        name: '电网C相无功功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kVar',
          },
          type: 'string',
        },
      },
      {
        id: '1',
        name: '电网总无功功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kVar',
          },
          type: 'string',
        },
      },
      {
        id: '1',
        name: '电网A相视在功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kVA',
          },
          type: 'string',
        },
      },
      {
        id: '1',
        name: '电网B相视在功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kVA',
          },
          type: 'string',
        },
      },
      {
        id: '1',
        name: '电网C相视在功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kVA',
          },
          type: 'string',
        },
      },
      {
        id: '1',
        name: '电网总视在功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kVA',
          },
          type: 'string',
        },
      },
      {
        id: '1',
        name: '电网A相功率因数',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1',
        name: '电网B相功率因数',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1',
        name: '电网C相功率因数',
        type: 'property',
        span: 2,
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1',
        name: '电网A相电压',
        type: 'property',
        dataType: {
          specs: {
            unit: 'V',
          },
          type: 'string',
        },
      },
      {
        id: '1',
        name: '电网B相电压',
        type: 'property',
        dataType: {
          specs: {
            unit: 'V',
          },
          type: 'string',
        },
      },
      {
        id: '1',
        name: '电网C相电压',
        type: 'property',
        span: 2,
        dataType: {
          specs: {
            unit: 'V',
          },
          type: 'string',
        },
      },
      {
        id: '1',
        name: '电网A相电流',
        type: 'property',
        dataType: {
          specs: {
            unit: 'A',
          },
          type: 'string',
        },
      },
      {
        id: '1',
        name: '电网B相电流',
        type: 'property',
        dataType: {
          specs: {
            unit: 'A',
          },
          type: 'string',
        },
      },
      {
        id: '1',
        name: '电网C相电流',
        type: 'property',
        span: 2,
        dataType: {
          specs: {
            unit: 'A',
          },
          type: 'string',
        },
      },
      {
        id: '1',
        name: '电网A相DCI',
        type: 'property',
        dataType: {
          specs: {
            unit: 'mA',
          },
          type: 'string',
        },
      },
      {
        id: '1',
        name: '电网B相DCI',
        type: 'property',
        dataType: {
          specs: {
            unit: 'mA',
          },
          type: 'string',
        },
      },
      {
        id: '1',
        name: '电网C相DCI',
        type: 'property',
        span: 2,
        dataType: {
          specs: {
            unit: 'mA',
          },
          type: 'string',
        },
      },
      {
        id: '1',
        name: '电网频率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'hz',
          },
          type: 'string',
        },
      },
      {
        id: '1',
        name: '当前电网相序',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
    ],
  },
];
