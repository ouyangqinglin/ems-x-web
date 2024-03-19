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
        name: '空调SN',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '2',
        name: '空调厂商',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3',
        name: '空调型号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '4',
        name: '空调硬件版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5',
        name: '空调软件版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '6',
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
      {
        id: '7',
        name: '制冷输入功率',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '8',
        name: '制冷量',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '9',
        name: '加热量',
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
        id: '50',
        type: 'property',
        name: '空调机组控制模式',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1',
        type: 'property',
        name: '空调机组工作状态',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '2',
        type: 'property',
        name: '空调告警状态',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3',
        type: 'property',
        name: '内风机运行状态',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '4',
        type: 'property',
        name: '外风机运行状态',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5',
        type: 'property',
        name: '压缩机运行状态',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '6',
        type: 'property',
        name: '电加热运行状态',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '7',
        type: 'property',
        name: '应急风机运行状态',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '8',
        type: 'property',
        name: '内风机运行状态',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '9',
        type: 'property',
        name: '外风机运行状态',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '10',
        type: 'property',
        name: '压缩机运行状态',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '11',
        type: 'property',
        name: '电加热运行状态',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '12',
        type: 'property',
        name: '应急风机运行状态',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '13',
        type: 'property',
        name: '盘管温度',
        dataType: {
          type: 'string',
          specs: {
            unit: '°C',
          },
        },
      },
      {
        id: '14',
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
        id: '15',
        type: 'property',
        name: '冷凝温度',
        dataType: {
          type: 'string',
          specs: {
            unit: '°C',
          },
        },
      },
      {
        id: '16',
        type: 'property',
        name: '室内温度',
        dataType: {
          type: 'string',
          specs: {
            unit: '°C',
          },
        },
      },
      {
        id: '17',
        type: 'property',
        name: '排气温度',
        dataType: {
          type: 'string',
          specs: {
            unit: '°C',
          },
        },
      },
      {
        id: '18',
        type: 'property',
        name: '湿度',
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
        name: '交流电压',
        dataType: {
          type: 'string',
          specs: {
            unit: 'V',
          },
        },
      },
      {
        id: '20',
        type: 'property',
        name: '直流电压',
        dataType: {
          type: 'string',
          specs: {
            unit: 'V',
          },
        },
      },
      {
        id: '21',
        type: 'property',
        name: '电流',
        dataType: {
          type: 'string',
          specs: {
            unit: 'A',
          },
        },
      },
    ],
  },
];
