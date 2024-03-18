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
        id: "x8",
        name: "消防喷射信号",
        type: "property",
        dataType: {
          "type": "enum",
          "specs": {
            "0": "正常",
            "1": "开启"
          }
        }
      },
      {
        id: '1',
        name: '消防工作状态',
        type: 'property',
        dataType: {
          "type": "enum",
          "specs": {
            "0": "运行",
            "1": "停止",
            "2": "故障",
          }
        }
      },
      {
        id: "alms",
        name: "消防告警状态",
        type: "property",
        dataType: {
          "type": "enum",
          "specs": {
            "0": "正常",
            "1": "告警"
          }
        }
      },
      {
        id: "bmNum",
        name: "电池箱号",
        type: "property",
        dataType: {
          "type": "long",
          "specs": {}
        }
      },
      {
        id: "SensorStatus",
        name: "状态标志",
        type: "property",
        dataType: {
          "type": "enum",
          "specs": {
            "0": "正在自检",
            "1": "工作正常",
            "2": "设备故障",
            "3": "探测到报警信息(一级报警)",
            "4": "探测到报警信息(二级报警)"
          }
        }
      }, {
        id: "x9",
        name: "电池箱消防运行状态",
        type: "property",
        dataType: {
          "type": "enum",
          "specs": {
            "0": "正常",
            "1": "故障"
          }
        }
      },
      {
        id: "x17",
        name: "电池箱消防告警状态",
        type: "property",
        dataType: {
          "type": "enum",
          "specs": {
            "0": "正常",
            "1": "告警"
          }
        }
      }, {
        id: "SensorPhotoelectricSmokeStatus",
        name: "光电烟雾传感器状态",
        type: "property",
        dataType: {
          "type": "enum",
          "specs": {
            "0": "正常",
            "1": "故障"
          }
        }
      }, {
        id: "x20",
        name: "光电烟雾传感器报警状态",
        type: "property",
        dataType: {
          "type": "enum",
          "specs": {
            "0": "正常",
            "1": "告警"
          }
        }
      }, {
        id: "COSensorStatus",
        name: "一氧化碳传感器状态",
        type: "property",
        dataType: {
          "type": "enum",
          "specs": {
            "0": "正常",
            "1": "故障"
          }
        }
      },
      {
        id: "x22",
        name: "一氧化碳传感器报警状态",
        type: "property",
        dataType: {
          "type": "enum",
          "specs": {
            "0": "正常",
            "1": "告警"
          }
        }
      },
      {
        id: "SensorHighTemperatureStatus",
        name: "温度传感器状态",
        type: "property",
        dataType: {
          "type": "enum",
          "specs": {
            "0": "正常",
            "1": "故障"
          }
        }
      },
      {
        id: "x24",
        name: "温度传感器高温报警状态",
        type: "property",
        dataType: {
          "type": "enum",
          "specs": {
            "0": "正常",
            "1": "告警"
          }
        }
      },
      {
        id: "SensorLeakageElectrolyteStatus",
        name: "电解液传感器状态",
        type: "property",
        dataType: {
          "type": "enum",
          "specs": {
            "0": "正常",
            "1": "故障"
          }
        }
      },
      {
        id: "x26",
        name: "电解液传感器报警状态",
        type: "property",
        dataType: {
          "type": "enum",
          "specs": {
            "0": "正常",
            "1": "报警"
          }
        }
      },
      {
        id: "Temperature",
        name: "温度数值",
        type: "property",
        dataType: {
          "type": "double",
          "specs": {
            "unit": "℃",
            "min": "0",
            "unitName": "摄氏度",
            "max": "10000000000"
          }
        }
      },
      {
        id: "DetectorCo",
        name: "一氧化碳数值",
        type: "property",
        dataType: {
          "type": "double",
          "specs": {}
        }
      },
      {
        id: "x29",
        name: "Life信号",
        type: "property",
        dataType: {
          "type": "double",
          "specs": {}
        }
      },

    ],
  },
];
