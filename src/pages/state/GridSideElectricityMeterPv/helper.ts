/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-16 09:42:18
 * @LastEditTime: 2024-05-24 18:07:51
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\state\GridSideElectricityMeterPv\helper.ts
 */
export const baseInfoItems: any = [
  {
    id: 'a',
    name: '基本信息',
    type: 'group',
    children: [
      {
        id: '5035',
        name: '电表SN',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5045',
        name: '电表厂商',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5055',
        name: '电表型号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5065',
        name: '电表序号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5066',
        name: '电表地址',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5067',
        name: '与EMS通信状态',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            0: '连接',
            1: '断开',
          },
        },
      },
      {
        id: '5068',
        name: '与EMS通信方式',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '485',
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
        id: '5200',
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
        id: '5202',
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
        id: '5204',
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
        id: '5206',
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
        id: '5208',
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
        id: '5209',
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
        id: '5212',
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
        id: '5215',
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
        id: '5221',
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
        id: '5227',
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
        id: '5233',
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
        id: '5210',
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
        id: '5213',
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
        id: '5217',
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
        id: '5223',
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
        id: '5229',
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
        id: '5235',
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
        id: '5211',
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
        id: '5214',
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
        id: '5219',
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
        id: '5225',
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
        id: '5231',
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
        id: '5237',
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
        id: '5239',
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
        id: '5241',
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
        id: '5243',
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
        id: '5245',
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
        id: '5247',
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
        id: '5249',
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
        id: '5251',
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
        id: '5253',
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
        id: '5255',
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
        id: '5257',
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
        id: '5259',
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
        id: '5261',
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
        id: '5263',
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
        id: '5265',
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
        id: '5267',
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
        id: '5270',
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
        id: '5272',
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
        id: '5274',
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
        id: '5276',
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
        id: '5278',
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
        id: '5280',
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
