/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-16 09:42:18
 * @LastEditTime: 2024-05-23 16:41:13
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\index\OpticalStorage\helper.ts
 */

export const pvItems: any = [
  {
    id: 'a',
    name: '',
    type: 'group',
    showType: 2,
    children: [
      {
        id: '1205',
        name: '今日发电量',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '1209',
        name: '累计发电量',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '1206',
        name: '今日用电量',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '1211',
        name: '累计用电量',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '1207',
        name: '今日自发自用量',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '1213',
        name: '累计自发自用量',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '1208',
        name: '今日自发自用率',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1215',
        name: '累计自发自用率',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1201',
        name: '光伏发电功率',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kW',
          },
        },
      },
      {
        id: '1202',
        name: '用电功率',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kW',
          },
        },
      },
      {
        id: '1204',
        name: '自发自用功率',
        type: 'property',
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

export const batteryItems: any = [
  {
    id: 'a',
    name: '',
    type: 'group',
    showType: 2,
    children: [
      {
        id: '1220',
        name: '今日电池充电量',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '1221',
        name: '今日电池放电量',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '1222',
        name: '累计电池充电量',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '1224',
        name: '累计电池放电量',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '3069',
        name: '电池充放电功率',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '1219',
        name: '电池剩余电能',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
    ],
  },
];

export const loadItems: any = [
  {
    id: 'a',
    name: '',
    type: 'group',
    showType: 2,
    children: [
      {
        id: '1228',
        name: '今日负载用电量',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '1229',
        name: '今日自给自足电量',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '1230',
        name: '今日自给自足率',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1231',
        name: '累计负载用电量',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1233',
        name: '累计自给自足电量',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1235',
        name: '累计自给自足率',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1226',
        name: '负载用电功率',
        type: 'property',
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

export const electricItems: any = [
  {
    id: 'a',
    name: '',
    type: 'group',
    showType: 2,
    children: [
      {
        id: '1241',
        name: '今日市电供电量',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '1242',
        name: '今日馈网电量',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '1243',
        name: '累计市电供电量',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '1245',
        name: '累计馈网电量',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '1239',
        name: '市电功率',
        type: 'property',
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

export const incomeItems: any = [
  {
    id: 'a',
    name: '',
    type: 'group',
    showType: 2,
    children: [
      {
        id: '1273',
        name: '今日光伏收益',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: '元',
          },
        },
      },
      {
        id: '1275',
        name: '今日节约电费',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: '元',
          },
        },
      },
      {
        id: '1285',
        name: '累计光伏收益',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: '元',
          },
        },
      },
      {
        id: '1287',
        name: '累计节约电费',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: '元',
          },
        },
      },
    ],
  },
];

export const reduceItems: any = [
  {
    id: 'a',
    name: '',
    type: 'group',
    showType: 2,
    children: [
      {
        id: '1400',
        name: '年CO₂减排量',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 't',
          },
        },
      },
      {
        id: '1402',
        name: '累计减排量',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 't',
          },
        },
      },
      {
        id: '1404',
        name: '年节约标准煤',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 't',
          },
        },
      },
      {
        id: '1406',
        name: '累计节约',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 't',
          },
        },
      },
      {
        id: '1408',
        name: '年等效植树',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: '棵',
          },
        },
      },
      {
        id: '1410',
        name: '累计等效植树',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: '棵',
          },
        },
      },
    ],
  },
];

export const systemItems: any = [
  {
    id: 'a',
    name: '状态信息',
    type: 'group',
    showType: 2,
    children: [
      {
        id: 'b',
        name: '系统',
        type: 'group',
        children: [
          {
            id: '1000',
            type: 'property',
            name: '设备SN',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '1010',
            type: 'property',
            name: '设备厂商',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '1020',
            type: 'property',
            name: '设备型号',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '1501',
            type: 'property',
            name: '工作模式',
            dataType: {
              type: 'enum',
              specs: {
                0: '削峰填谷',
                1: '备电',
                2: '手动控制',
                3: '自发自用',
                4: '全额上网',
              },
            },
          },
          {
            id: '1502',
            type: 'property',
            name: '工作状态',
            dataType: {
              type: 'enum',
              specs: {
                0: '故障',
                1: '运行',
                2: '运行/充电',
                3: '运行/放电',
                4: '待机',
                5: '停机',
                6: '急停',
              },
            },
          },
          {
            id: '1057',
            type: 'property',
            name: 'EMS SN',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '1067',
            type: 'property',
            name: 'EMS型号',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '1077',
            type: 'property',
            name: 'EMS 硬件版本',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '1078',
            type: 'property',
            name: 'EMS 软件版本',
            dataType: {
              type: 'string',
            },
          },
        ],
      },
    ],
  },
];

export const systemOtherItems: any = [
  {
    id: 'other',
    name: 'other',
    type: 'group',
    showType: 2,
    children: [
      {
        id: 'c',
        name: '变流器',
        type: 'group',
        children: [
          {
            id: '2610',
            name: '变流器SN',
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '2620',
            name: '变流器厂商',
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '2630',
            name: '变流器型号',
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '2819',
            type: 'property',
            name: '离并网模式',
            dataType: {
              type: 'enum',
              specs: {
                1: '离网',
                2: '并网',
                3: '并网(仅馈电)',
                4: '并网(仅市电充电)',
              },
            },
          },
          {
            id: '2820',
            type: 'property',
            name: '工作状态',
            dataType: {
              type: 'enum',
              specs: {
                0: '等待',
                1: '检查',
                2: '正常',
                3: '故障',
                5: '升级',
                6: '关机',
              },
            },
          },
          {
            id: '2643',
            name: '硬件版本',
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '2644',
            name: '软件版本',
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
        ],
      },
      {
        id: 'c',
        name: '电池',
        type: 'group',
        children: [
          {
            id: '3000',
            name: '电池SN',
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '3010',
            name: '电池厂商',
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '3020',
            name: '电池型号',
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '3700',
            name: '工作模式',
            type: 'property',
            dataType: {
              type: 'enum',
              specs: {
                1: '正常',
                2: '核容',
                3: '均衡',
                4: '调试',
              },
            },
          },
          {
            id: '3701',
            type: 'property',
            name: '工作状态',
            dataType: {
              type: 'enum',
              specs: {
                0: '运行',
                1: '运行/充电',
                2: '运行/放电',
                3: '待机',
                4: '停止',
                5: '故障',
              },
            },
          },
          {
            id: '3032',
            name: 'BMS SN',
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '3042',
            name: 'BMS 厂商',
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '3052',
            name: 'BMS型号',
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '3062',
            name: 'BMS硬件版本',
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '3063',
            name: 'BMS软件版本',
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
        ],
      },
      {
        id: 'c',
        name: '空调',
        type: 'group',
        children: [
          {
            id: '5500',
            name: '空调SN',
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '5510',
            name: '空调厂商',
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '5520',
            name: '空调型号',
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '5560',
            name: '工作状态',
            type: 'property',
            dataType: {
              type: 'enum',
              specs: {
                0: '停止',
                1: '运行',
                2: '故障',
              },
            },
          },
        ],
      },
    ],
  },
];
