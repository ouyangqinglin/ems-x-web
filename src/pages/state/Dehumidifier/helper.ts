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
        name: '除湿机SN',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '2',
        name: '除湿机厂商',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3',
        name: '除湿机型号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '4',
        name: '除湿机硬件版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5',
        name: '除湿机软件版本',
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
        name: '除湿机工作模式',
        type: 'property',
        "dataType": {
          "type": "enum",
          "specs": {
            "0": "升温型",
            "1": "降温型"
          }
        }
      },
      {
        id: '2',
        name: '除湿机工作状态',
        type: 'property',
        dataType: {
          "type": "enum",
          "specs": {
            "0": "运行",
            "1": "停止",
            "2": "故障"
          }
        }
      },
      {
        id: '3',
        name: '除湿机告警状态',
        type: 'property',
        dataType: {
          "type": "enum",
          "specs": {
            "0": "正常",
            "1": "告警",
            "255": "告警未使能"
          }
        }
      },
      {
        id: '4',
        name: '手动状态',
        type: 'property',
        dataType: {
          "type": "enum",
          "specs": {
            "0": "停用",
            "1": "启用",
          }
        }
      },
      {
        id: '5',
        name: '自动状态',
        type: 'property',
        dataType: {
          "type": "enum",
          "specs": {
            "0": "停用",
            "1": "启用",
          }
        }
      },
      {
        id: '6',
        name: '设置状态',
        type: 'property',
        dataType: {
          "type": "enum",
          "specs": {
            "0": "设置",
            "1": "正常"
          }
        }
      },
      {
        id: '7',
        name: '运行状态',
        type: 'property',
        dataType: {
          "type": "enum",
          "specs": {
            "0": "故障",
            "1": "运行"
          }
        }
      },
      {
        id: "HeaterWorkStatus",
        name: "加热器工作状态",
        type: "property",
        dataType: {
          "type": "enum",
          "specs": {
            "0": "停止",
            "1": "运行"
          }
        }
      },
      {
        id: "FanWorkStatus",
        name: "风扇工作状态",
        type: "property",
        dataType: {
          "type": "enum",
          "specs": {
            "0": "停止",
            "1": "运行"
          }
        }
      },
      {
        "id": "DeicingWorkStatus",
        "name": "除冰工作状态",
        "modelName": "除冰工作状态",
        "sortOrder": 8,
        "parentId": "statusInformation",
        "type": "property",
        "children": [],
        "dataType": {
          "type": "enum",
          "specs": {
            "0": "停止",
            "1": "运行"
          }
        }
      },
      {
        "id": "DehumidificationPoint",
        "name": "除湿启控值",
        "modelName": "除湿启控值",
        "sortOrder": 9,
        "parentId": "statusInformation",
        "type": "property",
        "children": [],
        "dataType": {
          "type": "double",
          "specs": {
            "unit": "%RH",
            "min": "0",
            "unitName": "",
            "max": "99.9",
            "step": "0.01"
          }
        }
      },
      {
        "id": "DehumidificationReturnDifference",
        "name": "除湿停止值",
        "modelName": "除湿停止值",
        "sortOrder": 10,
        "parentId": "statusInformation",
        "type": "property",
        "children": [],
        "dataType": {
          "type": "double",
          "specs": {
            "unit": "%RH",
            "min": "0",
            "unitName": "",
            "max": "99.9",
            "step": "0.01"
          }
        }
      },
      {
        "id": "TempWhenStartControl",
        "name": "温度启控值",
        "modelName": "温度启控值",
        "sortOrder": 11,
        "parentId": "statusInformation",
        "type": "property",
        "children": [],
        "dataType": {
          "type": "double",
          "specs": {
            "unit": "℃",
            "min": "0",
            "unitName": "温度",
            "max": "99.9",
            "step": "0.01"
          }
        }
      },
      {
        "id": "TempWhenStopControl",
        "name": "温度控制回差值",
        "modelName": "温度控制回差值",
        "sortOrder": 12,
        "parentId": "statusInformation",
        "type": "property",
        "children": [],
        "dataType": {
          "type": "double",
          "specs": {
            "unit": "℃",
            "min": "0",
            "unitName": "温度",
            "max": "20",
            "step": "0.01"
          }
        }
      },
      {
        "id": "CoolingPlateDeicingTemp",
        "name": "冷凝片除冰值",
        "modelName": "冷凝片除冰值",
        "sortOrder": 13,
        "parentId": "statusInformation",
        "type": "property",
        "children": [],
        "dataType": {
          "type": "double",
          "specs": {
            "unit": "℃",
            "min": "-9",
            "unitName": "温度",
            "max": "9",
            "step": "0.01"
          }
        }
      },
      {
        "id": "CoolingPlateTemp",
        "name": "制冷片温度测量值",
        "modelName": "制冷片温度测量值",
        "sortOrder": 14,
        "parentId": "statusInformation",
        "type": "property",
        "children": [],
        "dataType": {
          "type": "double",
          "specs": {
            "unit": "℃",
            "min": "-50",
            "unitName": "温度",
            "max": "100",
            "step": "0.01"
          }
        }
      },
      {
        "id": "EnvironmentTemperature",
        "name": "环境温度测量值",
        "modelName": "环境温度测量值",
        "sortOrder": 15,
        "parentId": "statusInformation",
        "type": "property",
        "children": [],
        "dataType": {
          "type": "double",
          "specs": {
            "unit": "℃",
            "min": "0",
            "unitName": "温度",
            "max": "99.9",
            "step": "0.01"
          }
        }
      },
      {
        "id": "Humidity",
        "name": "环境湿度测量值",
        "modelName": "环境湿度测量值",
        "sortOrder": 16,
        "parentId": "statusInformation",
        "type": "property",
        "children": [],
        "dataType": {
          "type": "double",
          "specs": {
            "unit": "%RH",
            "min": "0",
            "unitName": "",
            "max": "99.9",
            "step": "0.01"
          }
        }
      }
    ],
  },
];
