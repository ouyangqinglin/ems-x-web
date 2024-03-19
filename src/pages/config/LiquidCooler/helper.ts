/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-16 09:42:18
 * @LastEditTime: 2024-03-16 11:40:33
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\config\LiquidCooler\helper.ts
 */

import { DeviceModelDescribeType } from '@/types/device';

export const baseInfoItems: any = [
  {
    id: 'a',
    name: '基本信息',
    type: 'group',
    children: [
      {
        id: 'a',
        name: '基本信息',
        type: 'service',
        buttons: ['refresh'],
        children: [
          {
            id: '1',
            name: '液冷机SN',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '2',
            name: '液冷机型号',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '3',
            name: '液冷机厂商',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '4',
            name: '液冷机硬件版本',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '5',
            name: '液冷机软件版本',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '6',
            name: '软件编码',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '7',
            name: '压缩机软件版本',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '8',
            name: '压缩机软件编码',
            buttons: ['refresh'],
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
        ],
      },
    ],
  },
];

export const liquidCooParamsItems: any = [
  {
    id: 'RunningSetting',
    name: '运行设置',
    type: 'group',
    children: [
      {
        id: 'RunFixedValueSet',
        name: '运行设置',
        type: 'service',
        buttons: ['refresh', 'edit'],
        children: [
          {
            id: "ID",
            name: "液冷机ID",
            modelName: "液冷机ID",
            sortOrder: 1,
            parentId: "RunFixedValueSet",
            type: "property",
            buttons: ['refresh', 'edit'],
            dataType: {
              type: "long",
              specs: {}
            }
          },
          {
            id: "BAUD",
            name: "波特率",
            modelName: "波特率",
            sortOrder: 2,
            parentId: "RunFixedValueSet",
            type: "property",
            buttons: ['refresh', 'edit'],
            dataType: {
              type: "enum",
              specs: {
                2: "4800",
                3: "9600",
                4: "19200",
                5: "38400",
                6: "57600"
              }
            },
            "showType": 5
          },
          {
            id: "ControlTemperatureSelection",
            name: "控制温度选择",
            modelName: "控制温度选择",
            sortOrder: 3,
            parentId: "RunFixedValueSet",
            type: "property",
            buttons: ['refresh', 'edit'],
            dataType: {
              type: "enum",
              specs: {
                0: "电芯平均温度",
                1: "出水温度",
                2: "回水温度",
                3: "电芯权重温度"
              }
            },
            "showType": 5
          },
          {
            id: "CellMaxTemperature",
            name: "电芯最大温度",
            modelName: "电芯最大温度值",
            sortOrder: 4,
            parentId: "RunFixedValueSet",
            type: "property",
            buttons: ['refresh', 'edit'],
            dataType: {
              type: "double",
              specs: {
                unit: "℃",
                min: "-400",
                unitName: "温度",
                max: "1250",
                step: "0.01"
              }
            }
          },
          {
            id: "CellMinTemperature",
            name: "电芯最小温度",
            modelName: "电芯最小温度值",
            sortOrder: 5,
            parentId: "RunFixedValueSet",
            type: "property",
            buttons: ['refresh', 'edit'],
            dataType: {
              type: "double",
              specs: {
                unit: "℃",
                min: "-400",
                unitName: "温度",
                max: "1250",
                step: "0.01"
              }
            }
          },
          {
            id: "RefrigerationPoint",
            name: "水温制冷点",
            modelName: "水温制冷点",
            sortOrder: 6,
            parentId: "RunFixedValueSet",
            type: "property",
            buttons: ['refresh', 'edit'],
            dataType: {
              type: "double",
              specs: {
                unit: "℃",
                min: "50",
                unitName: "温度",
                max: "350",
                step: "0.01"
              }
            }
          },
          {
            id: "heatingPoint",
            name: "水温加热点",
            modelName: "水温加热点",
            sortOrder: 7,
            parentId: "RunFixedValueSet",
            type: "property",
            buttons: ['refresh', 'edit'],
            dataType: {
              type: "double",
              specs: {
                unit: "℃",
                min: "50",
                unitName: "温度",
                max: "350",
                step: "0.01"
              }
            }
          },
          {
            id: "CoolingReturnDifference",
            name: "制冷回差",
            modelName: "制冷回差",
            sortOrder: 8,
            parentId: "RunFixedValueSet",
            type: "property",
            buttons: ['refresh', 'edit'],
            dataType: {
              type: "double",
              specs: {
                unit: "℃",
                min: "10",
                unitName: "温度",
                max: "100",
                step: "0.01"
              }
            }
          },
          {
            id: "HeatingReturnDifference",
            name: "加热回差",
            modelName: "加热回差",
            sortOrder: 9,
            parentId: "RunFixedValueSet",
            type: "property",
            buttons: ['refresh', 'edit'],
            dataType: {
              type: "double",
              specs: {
                unit: "℃",
                min: "10",
                unitName: "温度",
                max: "100",
                step: "0.01"
              }
            }
          }
        ],
      },
    ],
  },
];
