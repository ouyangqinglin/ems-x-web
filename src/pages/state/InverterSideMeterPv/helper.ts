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
        name: '电表SN',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '2',
        name: '电表厂商',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3',
        name: '电表型号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '4',
        name: '电表序号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5',
        name: '电表地址',
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

export const eleInfoItems: any = [
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
        id: '2',
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
        id: '3',
        name: '当前组合有功尖电能',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kWh',
          },
          type: 'string',
        },
      },
      {
        id: '4',
        name: '当前组合有功峰电能',
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
        name: '当前组合有功平电能',
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
        name: '当前组合有功谷电能',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kWh',
          },
          type: 'string',
        },
      },
      {
        id: '7',
        name: '当前组合有功总电能',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kWh',
          },
          type: 'string',
        },
      },
      {
        id: '8',
        name: '当前正向有功尖电能',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kWh',
          },
          type: 'string',
        },
      },
      {
        id: '9',
        name: '当前正向有功峰电能',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kWh',
          },
          type: 'string',
        },
      },
      {
        id: '10',
        name: '当前正向有功平电能',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kWh',
          },
          type: 'string',
        },
      },
      {
        id: '11',
        name: '当前正向有功谷电能',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kWh',
          },
          type: 'string',
        },
      },
      {
        id: '12',
        name: '当前正向总有功电能',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kWh',
          },
          type: 'string',
        },
      },
      {
        id: '13',
        name: '当前反向有功尖电能',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kWh',
          },
          type: 'string',
        },
      },
      {
        id: '14',
        name: '当前反向有功峰电能',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kWh',
          },
          type: 'string',
        },
      },
      {
        id: '15',
        name: '当前反向有功平电能',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kWh',
          },
          type: 'string',
        },
      },
      {
        id: '16',
        name: '当前反向有功谷电能',
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
        name: '当前反向总有功电能',
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