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
        id: '1',
        name: '今日充电量',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh'
          }
        },
      },
      {
        id: '1',
        name: '今日放电量',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh'
          }
        },
      },
      {
        id: '1',
        name: '可放电能量',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh'
          }
        },
      },
      {
        id: '1',
        name: '储能电池功率',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kW'
          }
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
        id: '1',
        name: '今日系统充电量',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh'
          }
        },
      },
      {
        id: '1',
        name: '今日系统放电量',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh'
          }
        },
      },
      {
        id: '1',
        name: '系统总有功功率',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kW'
          }
        },
      },
    ],
  },
]

export const loadItems: any = [
  {
    id: 'a',
    name: '',
    type: 'group',
    showType: 2,
    children: [
      {
        id: '1',
        name: '今日负载用电量',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh'
          }
        },
      },
      {
        id: '1',
        name: '累计负载用电量',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh'
          }
        },
      },
      {
        id: '1',
        name: '负载用电功率',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kW'
          }
        },
      },
    ],
  },
]

export const incomeItems: any = [
  {
    id: 'a',
    name: '',
    type: 'group',
    showType: 2,
    children: [
      {
        id: '1',
        name: '今日系统充电费用',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: '元'
          }
        },
      },
      {
        id: '1',
        name: '今日系统放电收入',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: '元'
          }
        },
      },
      {
        id: '1',
        name: '累计系统充电总费用',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: '元'
          }
        },
      },
      {
        id: '1',
        name: '累计系统放电总收入',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: '元'
          }
        },
      },
      {
        id: '1',
        name: '今日收益',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: '元'
          }
        },
      },
      {
        id: '1',
        name: '累计收益',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: '元'
          }
        },
      },
    ],
  },
]

export const reduceItems: any = [
  {
    id: 'a',
    name: '',
    type: 'group',
    showType: 2,
    children: [
      {
        id: '1',
        name: '年CO₂减排量',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 't'
          }
        },
      },
      {
        id: '1',
        name: '累计减排量',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 't'
          }
        },
      },
      {
        id: '1',
        name: '年节约标准煤',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 't'
          }
        },
      },
      {
        id: '1',
        name: '累计节约',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 't'
          }
        },
      },
      {
        id: '1',
        name: '年等效植树',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: '棵'
          }
        },
      },
      {
        id: '1',
        name: '累计等效植树',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: '棵'
          }
        },
      },
    ],
  },
]

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
            id: '1',
            type: 'property',
            name: '设备SN',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '2',
            type: 'property',
            name: '设备厂商',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '3',
            type: 'property',
            name: '设备型号',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '4',
            type: 'property',
            name: '工作模式',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '5',
            type: 'property',
            name: '工作状态',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '6',
            type: 'property',
            name: 'EMS SN',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '7',
            type: 'property',
            name: 'EMS型号',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '8',
            type: 'property',
            name: 'EMS 硬件版本',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '9',
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
            id: 'b',
            name: '变流器SN',
            type: 'property',
            dataType: {
              type: 'string'
            }
          },
          {
            id: 'b',
            name: '变流器厂商',
            type: 'property',
            dataType: {
              type: 'string'
            }
          },
          {
            id: 'b',
            name: '变流器型号',
            type: 'property',
            dataType: {
              type: 'string'
            }
          },
          {
            id: 'b',
            name: '离并网模式',
            type: 'property',
            dataType: {
              type: 'string'
            }
          },
          {
            id: 'b',
            name: '工作状态',
            type: 'property',
            dataType: {
              type: 'string'
            }
          },
          {
            id: 'b',
            name: '硬件版本',
            type: 'property',
            dataType: {
              type: 'string'
            }
          },
          {
            id: 'b',
            name: '软件版本',
            type: 'property',
            dataType: {
              type: 'string'
            }
          },
        ]
      },
      {
        id: 'c',
        name: '电池',
        type: 'group',
        children: [
          {
            id: 'b',
            name: '电池SN',
            type: 'property',
            dataType: {
              type: 'string'
            }
          },
          {
            id: 'b',
            name: '电池厂商',
            type: 'property',
            dataType: {
              type: 'string'
            }
          },
          {
            id: 'b',
            name: '电池型号',
            type: 'property',
            dataType: {
              type: 'string'
            }
          },
          {
            id: 'b',
            name: '工作模式',
            type: 'property',
            dataType: {
              type: 'string'
            }
          },
          {
            id: 'b',
            name: '工作状态',
            type: 'property',
            dataType: {
              type: 'string'
            }
          },
          {
            id: 'b',
            name: 'BMS SN',
            type: 'property',
            dataType: {
              type: 'string'
            }
          },
          {
            id: 'b',
            name: 'BMS 厂商',
            type: 'property',
            dataType: {
              type: 'string'
            }
          },
          {
            id: 'b',
            name: 'BMS型号',
            type: 'property',
            dataType: {
              type: 'string'
            }
          },
          {
            id: 'b',
            name: 'BMS硬件版本',
            type: 'property',
            dataType: {
              type: 'string'
            }
          },
          {
            id: 'b',
            name: 'BMS软件版本',
            type: 'property',
            dataType: {
              type: 'string'
            }
          },
        ]
      },
      {
        id: 'c',
        name: '空调',
        type: 'group',
        children: [
          {
            id: 'b',
            name: '空调SN',
            type: 'property',
            dataType: {
              type: 'string'
            }
          },
          {
            id: 'b',
            name: '空调厂商',
            type: 'property',
            dataType: {
              type: 'string'
            }
          },
          {
            id: 'b',
            name: '空调型号',
            type: 'property',
            dataType: {
              type: 'string'
            }
          },
          {
            id: 'b',
            name: '控制模式',
            type: 'property',
            dataType: {
              type: 'string'
            }
          },
          {
            id: 'b',
            name: '工作状态',
            type: 'property',
            dataType: {
              type: 'string'
            }
          },
        ]
      },
    ],
  },
]

