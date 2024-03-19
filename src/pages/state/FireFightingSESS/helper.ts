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
        name: '消防SN',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '2',
        name: '消防厂商',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3',
        name: '消防型号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '4',
        name: '硬件版本',
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
        name: '软件版本',
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
          "type": "enum",
          "specs": {
            "0": "断开",
            "1": "连接",
          }
        }
      },
      {
        id: '7',
        name: '与EMS通信方式',
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
        id: '1',
        name: '总有功功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'W',
          },
          type: 'string',
        },
      },
      {
        id: '2',
        name: '总有功功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'W',
          },
          type: 'string',
        },
      },
      {
        id: '3',
        name: '总无功功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'KVar',
          },
          type: 'string',
        },
      },
      {
        id: '4',
        name: '总视在功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'KVA',
          },
          type: 'string',
        },
      },
      {
        id: '5',
        name: '总功率因数',
        type: 'property',
        dataType: {
          specs: {
            unit: '',
          },
          type: 'string',
        },
      },
      {
        id: '6',
        name: '频率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'Hz',
          },
          type: 'string',
        },
      },
      {
        id: '7',
        name: 'A相电压',
        type: 'property',
        dataType: {
          specs: {
            unit: 'V',
          },
          type: 'string',
        },
      },
      {
        id: '8',
        name: 'A相电流',
        type: 'property',
        dataType: {
          specs: {
            unit: 'A',
          },
          type: 'string',
        },
      },
      {
        id: '9',
        name: 'A相有功功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'KW',
          },
          type: 'string',
        },
      },
      {
        id: '10',
        name: 'A相无功功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'KVar',
          },
          type: 'string',
        },
      },
      {
        id: '11',
        name: 'A相视在功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'KVA',
          },
          type: 'string',
        },
      },
      {
        id: '12',
        name: 'A相功率因数',
        type: 'property',
        dataType: {
          specs: {
            unit: '',
          },
          type: 'string',
        },
      },
      {
        id: '13',
        name: 'B相电压',
        type: 'property',
        dataType: {
          specs: {
            unit: 'V',
          },
          type: 'string',
        },
      },
      {
        id: '14',
        name: 'B相电流',
        type: 'property',
        dataType: {
          specs: {
            unit: 'A',
          },
          type: 'string',
        },
      },
      {
        id: '15',
        name: 'B相有功功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'KW',
          },
          type: 'string',
        },
      },
      {
        id: '16',
        name: 'B相无功功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'KVar',
          },
          type: 'string',
        },
      },
      {
        id: '17',
        name: 'B相视在功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'KVA',
          },
          type: 'string',
        },
      },
      {
        id: '18',
        name: 'B相功率因数',
        type: 'property',
        dataType: {
          specs: {
            unit: '',
          },
          type: 'string',
        },
      },
      {
        id: '13',
        name: 'C相电压',
        type: 'property',
        dataType: {
          specs: {
            unit: 'V',
          },
          type: 'string',
        },
      },
      {
        id: '14',
        name: 'C相电流',
        type: 'property',
        dataType: {
          specs: {
            unit: 'A',
          },
          type: 'string',
        },
      },
      {
        id: '15',
        name: 'C相有功功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'KW',
          },
          type: 'string',
        },
      },
      {
        id: '16',
        name: 'C相无功功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'KVar',
          },
          type: 'string',
        },
      },
      {
        id: '17',
        name: 'C相视在功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'KVA',
          },
          type: 'string',
        },
      },
      {
        id: '18',
        name: 'C相功率因数',
        type: 'property',
        dataType: {
          specs: {
            unit: '',
          },
          type: 'string',
        },
      },
      {
        id: '17',
        name: '正向有功电能',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kWh',
          },
          type: 'string',
        },
      },
      {
        id: '17',
        name: '正向无功电能',
        type: 'property',
        dataType: {
          specs: {
            unit: 'KVar',
          },
          type: 'string',
        },
      },
      {
        id: '17',
        name: '反向有功电能',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kWh',
          },
          type: 'string',
        },
      },
      {
        id: '17',
        name: '反向无功电能',
        type: 'property',
        dataType: {
          specs: {
            unit: 'KVar',
          },
          type: 'string',
        },
      },
    ],
  },
];