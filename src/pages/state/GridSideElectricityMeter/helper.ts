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
        id: '30190',
        name: '电表SN',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '30229',
        name: '电表厂商',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '30239',
        name: '电表型号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '30205',
        name: '电表序号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '30206',
        name: '电表地址',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '30207',
        name: '与EMS通信状态',
        type: 'property',
        dataType: {
          "type": "enum",
          "specs": {
            "0": "初始化",
            "1": "断开",
            "2": "连接",
          }
        }
      },
      {
        id: '30208',
        name: '与EMS通信方式',
        type: 'property',
        dataType: {
          "type": "enum",
          "specs": {
            "0": "RS485",
            "1": "未知",
          }
        }
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
        id: '30463',
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
        id: '30471',
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
        id: '30479',
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
        id: '30487',
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
        id: '30456',
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
        id: '30450',
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
        id: '30453',
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
        id: '30457',
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
        id: '30465',
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
        id: '30473',
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
        id: '30481',
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
        id: '30451',
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
        id: '30454',
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
        id: '30459',
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
        id: '30467',
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
        id: '30475',
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
        id: '30483',
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
        id: '30452',
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
        id: '30455',
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
        id: '30461',
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
        id: '30469',
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
        id: '30477',
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
        id: '30485',
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
        id: '30489',
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
        id: '30491',
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
        id: '30493',
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
        id: '30495',
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
        id: '30702',
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
        id: '30703',
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
        id: '30704',
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
        id: '30706',
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
        id: '30708',
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
        id: '30710',
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
        id: '30712',
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
        id: '30714',
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
        id: '30716',
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
        id: '30718',
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
        id: '30720',
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
        id: '30722',
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
        id: '30724',
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
        id: '30726',
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
        id: '30728',
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
        id: '30730',
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
        id: '30732',
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