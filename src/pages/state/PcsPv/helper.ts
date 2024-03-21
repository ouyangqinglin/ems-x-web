/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-16 09:42:18
 * @LastEditTime: 2024-03-19 13:54:53
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
        name: 'PV连接状态',
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
        name: '电池类型',
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
        name: 'PV日输出电量(',
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
        name: 'PV年输出电量',
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
        name: 'PV总输出电量',
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
        name: '逆变日输出EPS电量',
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
        name: '逆变年输出EPS电量',
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
        name: '逆变总输出EPS电量',
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
        name: '逆变器日输出电量',
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
        name: '逆变器年输出电量',
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
        name: '逆变器总输出EPS电量',
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
        name: '逆变器日用电量',
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
        name: '逆变器年用电量',
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
        name: '逆变器总用电量',
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

export const pvSideItems: any = [
  {
    id: 'a',
    name: '光伏侧信息',
    type: 'group',
    children: [
      {
        id: '6',
        name: 'PV1电压',
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
        name: 'PV2电压',
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
        name: 'PV3电压',
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
        name: 'PV4电压',
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
        name: 'PV5电压',
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
        name: 'PV6电压',
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
        name: 'PV7电压',
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
        name: 'PV8电压',
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
        name: 'PV1电流',
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
        name: 'PV2电流',
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
        name: 'PV3电流',
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
        name: 'PV4电流',
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
        name: 'PV5电流',
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
        name: 'PV6电流',
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
        name: 'PV7电流',
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
        name: 'PV8电流',
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
        name: 'PV输出总功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kW',
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

export const inverterSideItems: any = [
  {
    id: 'a',
    name: '逆变侧信息',
    type: 'group',
    children: [
      {
        id: '1',
        name: '逆变有功功率',
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
        name: '逆变无功功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kW',
          },
          type: 'string',
        },
      },
      {
        id: '2',
        name: '逆变视在功率',
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
        name: '逆变功率因数',
        type: 'property',
        dataType: {
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
        dataType: {
          specs: {
            unit: 'A',
          },
          type: 'string',
        },
      },
      {
        id: '6',
        name: 'EPS 有功功率',
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
        name: 'EPS 无功功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kVar',
          },
          type: 'string',
        },
      },
      {
        id: '6',
        name: 'EPS 视在功率',
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
        name: 'EPS功率因数',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '6',
        name: 'EPS频率',
        type: 'property',
        dataType: {
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
        dataType: {
          specs: {
            unit: 'A',
          },
          type: 'string',
        },
      },
      {
        id: '1',
        name: '电网RS线电压',
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
        name: '电网RT线电压',
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
        name: '电网ST线电压',
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
        name: '电网有功功率',
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
        name: '电网无功功率',
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
        name: '电网视在功率',
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
        name: '电网功率因数',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
    ],
  },
];

export const meterItems: any = [
  {
    id: 'a',
    name: '电表信息',
    type: 'group',
    children: [
      {
        id: '1',
        name: '电表A相电压',
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
        name: '电表B相电压',
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
        name: '电表C相电压',
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
        name: '电表A相电流',
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
        name: '电表B相电流',
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
        name: '电表C相电流',
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
        name: '电表有功功率',
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
        name: '电表无功功率',
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
        name: '电表视在功率',
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
        name: '电表输出电量',
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
        name: '电网馈入电量',
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
        name: '电表频率',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1',
        name: '电表标志位',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
    ],
  },
];
