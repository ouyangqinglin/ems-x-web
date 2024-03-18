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
        name: '模块温度',
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

export const cSideItems: any = [
  {
    id: 'a',
    name: '交流侧信息',
    type: 'group',
    children: [
      {
        id: '1',
        name: '交流AB线电压有效值',
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
        name: '交流BC线电压有效值',
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
        name: '交流CA线电压有效值',
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
        name: '交流A相电流有效值',
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
        name: '交流B相电流有效值',
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
        name: '交流C相电流有效值',
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
        name: '交流输出有功功率',
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
        name: '交流输出无功功率',
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
        name: '交流输出视在功率',
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
        name: '交流电压频率',
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
