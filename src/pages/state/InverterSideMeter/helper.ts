/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-16 09:42:18
 * @LastEditTime: 2024-03-16 10:52:13
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\state\Pcs\helper.ts
 */
export const baseInfoItems: any = [
  {
    id: 'a',
    name: '基本信息',
    type: 'group',
    children: [
      {
        id: '30180',
        name: '电表SN',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '30209',
        name: '电表厂商',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '30219',
        name: '电表型号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '30201',
        name: '电表序号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '30202',
        name: '电表地址',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '30203',
        name: '与EMS通信状态',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '初始化',
            '1': '断开',
            '2': '连接',
          },
        },
      },
      {
        id: '30204',
        name: '与EMS通信方式',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': 'RS485',
            '1': '未知',
          },
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
        id: '30263',
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
        id: '30271',
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
        id: '30279',
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
        id: '30287',
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
        id: '30256',
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
        id: '30250',
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
        id: '30253',
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
        id: '30257',
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
        id: '30265',
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
        id: '30273',
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
        id: '30281',
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
        id: '30251',
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
        id: '30254',
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
        id: '30259',
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
        id: '30267',
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
        id: '30275',
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
        id: '30283',
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
        id: '30252',
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
        id: '30255',
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
        id: '30261',
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
        id: '30269',
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
        id: '30277',
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
        id: '30285',
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
        id: '30289',
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
        id: '30291',
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
        id: '30293',
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
        id: '30295',
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
        id: '30352',
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
        id: '30353',
        name: '今日放电量',
        type: 'property',
        span: 3,
        dataType: {
          specs: {
            unit: 'kWh',
          },
          type: 'string',
        },
      },
      {
        id: '30354',
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
        id: '30356',
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
        id: '30358',
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
        id: '30360',
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
        id: '30362',
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
        id: '30364',
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
        id: '30366',
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
        id: '30368',
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
        id: '30370',
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
        id: '30372',
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
        id: '30374',
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
        id: '30376',
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
        id: '30378',
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
        id: '30380',
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
        id: '30382',
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
