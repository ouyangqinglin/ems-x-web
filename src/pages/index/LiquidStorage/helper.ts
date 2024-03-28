/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-16 09:42:18
 * @LastEditTime: 2024-03-16 10:52:13
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\state\Pcs\helper.ts
 */

export const batteryItems: any = [
  {
    id: 'a',
    name: '',
    type: 'group',
    showType: 2,
    children: [
      {
        id: '403',
        name: '今日充电量',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '405',
        name: '今日放电量',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '328',
        name: '可放电能量',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '518',
        name: '储能电池功率',
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

export const batterySysItems: any = [
  {
    id: 'a',
    name: '',
    type: 'group',
    showType: 2,
    children: [
      {
        id: '330',
        name: '今日系统充电量',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '332',
        name: '今日系统放电量',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '313',
        name: '系统总有功功率',
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

export const loadItems: any = [
  {
    id: 'a',
    name: '',
    type: 'group',
    showType: 2,
    children: [
      {
        id: '348',
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
        id: '350',
        name: '累计负载用电量',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '347',
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

export const incomeItems: any = [
  {
    id: 'a',
    name: '',
    type: 'group',
    showType: 2,
    children: [
      {
        id: '1408',
        name: '今日系统充电费用',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: '元',
          },
        },
      },
      {
        id: '1508',
        name: '今日系统放电收入',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: '元',
          },
        },
      },
      {
        id: '1420',
        name: '累计系统充电总费用',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: '元',
          },
        },
      },
      {
        id: '1506',
        name: '累计系统放电总收入',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: '元',
          },
        },
      },
      {
        id: '1512',
        name: '今日收益',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: '元',
          },
        },
      },
      {
        id: '1520',
        name: '累计收益',
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
        id: '204',
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
        id: '206',
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
        id: '208',
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
        id: '210',
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
        id: '212',
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
        id: '214',
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
            id: '100',
            type: 'property',
            name: '设备SN',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '110',
            type: 'property',
            name: '设备厂商',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '120',
            type: 'property',
            name: '设备型号',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '400',
            type: 'property',
            name: '工作模式',
            dataType: {
              type: 'enum',
              specs: {
                0: '本地',
                1: '远程',
              },
            },
          },
          {
            id: '339',
            type: 'property',
            name: '工作状态',
            dataType: {
              type: 'enum',
              specs: {
                0: '故障',
                1: '启动',
                2: '待机',
                3: '停止',
                4: '急停',
                5: '复位',
              },
            },
          },
          {
            id: '130',
            type: 'property',
            name: 'EMS SN',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '140',
            type: 'property',
            name: 'EMS型号',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '150',
            type: 'property',
            name: 'EMS 硬件版本',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '151',
            type: 'property',
            name: 'EMS 软件版本',
            dataType: {
              type: 'string',
            },
          },
        ],
      },
      {
        id: 'c',
        name: '变流器',
        type: 'group',
        children: [
          {
            id: '3102',
            name: '变流器SN',
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '3112',
            name: '变流器厂商',
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '3122',
            name: '变流器型号',
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '342',
            name: '离并网模式',
            type: 'property',
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
            id: '3401',
            name: '工作状态',
            type: 'property',
            dataType: {
              type: 'enum',
              specs: {
                0: '停机',
                1: '故障',
                2: '运行',
              },
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
            id: '5161',
            name: '电池SN',
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '5171',
            name: '电池厂商',
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '5181',
            name: '电池型号',
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '5297',
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
            id: '5298',
            name: '工作状态',
            type: 'property',
            dataType: {
              type: 'enum',
              specs: {
                1: '启动',
                2: '充电',
                3: '放电',
                4: '待机',
                5: '停止',
              },
            },
          },
          {
            id: '5200',
            name: 'BMS SN',
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '5210',
            name: 'BMS 厂商',
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '5286',
            name: 'BMS型号',
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '5220',
            name: 'BMS硬件版本',
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '5221',
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
            id: '30002',
            name: '空调SN',
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '30012',
            name: '空调厂商',
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '30039',
            name: '空调型号',
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '30049',
            name: '控制模式',
            type: 'property',
            dataType: {
              type: 'enum',
              specs: {
                0: '手动',
                1: '自动',
              },
            },
          },
          {
            id: '30024',
            name: '工作状态',
            type: 'property',
            dataType: {
              type: 'enum',
              specs: {
                0: '停止',
                1: '运行',
              },
            },
          },
        ],
      },
    ],
  },
];
