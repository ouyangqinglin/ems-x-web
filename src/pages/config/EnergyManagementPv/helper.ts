/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-16 09:42:18
 * @LastEditTime: 2024-03-16 11:40:33
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\config\Pcs\helper.ts
 */

import { DeviceModelDescribeType } from '@/types/device';

/// 自发自用模式参数设置
export const spontaneousSelfUseItems: any = [
  {
    id: 'eS19',
    name: '自发自用模式参数设置',
    type: 'group',
    children: [
      {
        id: 'eS19',
        name: '自发自用模式参数设置',
        type: 'service',
        buttons: ['refresh', 'edit'],
        children: [
          {
            id: "e70",
            name: "最大充电功率",
            buttons: ['refresh', 'edit'],
            dataType: {
              type: "double",
              specs: {
                unit: "kW",
                min: "0",
                unitName: "千瓦",
                max: "10000000000",
                step: "0.1"
              }
            },
            sortOrder: 1
          },
          {
            id: "e80",
            name: "最大放电功率",
            buttons: ['refresh', 'edit'],
            dataType: {
              type: "double",
              specs: {
                unit: "kW",
                min: "0",
                unitName: "千瓦",
                max: "10000000000",
                step: "0.1"
              }
            },
            sortOrder: 2
          },
          {
            id: "e81",
            name: "最高SOC",
            buttons: ['refresh', 'edit'],
            dataType: {
              type: "double",
              specs: {
                unit: "%",
                min: "-100",
                unitName: "百分比",
                max: "100",
                step: "0.1"
              }
            },
            sortOrder: 3
          },
          {
            id: "e82",
            name: "最低SOC",
            buttons: ['refresh', 'edit'],
            dataType: {
              type: "double",
              specs: {
                unit: "%",
                min: "-100",
                unitName: "百分比",
                max: "100",
                step: "0.1"
              }
            },
            sortOrder: 4
          }
        ],
      },
    ],
  },
];

export const peakShavingValleyFillingItems: any = [
  {
    id: 'jfpgModeSet',
    name: '削峰填谷模式参数设置',
    type: 'group',
    children: [
      {
        id: 'jfpgModeSet',
        name: '削峰填谷模式参数设置',
        type: 'service',
        buttons: ['refresh', 'edit'],
        children: [
          {
            id: "peakShavingAndValleyFillingModeMaximumSOC",
            name: "最高SOC",
            type: "property",
            buttons: ['refresh', 'edit'],
            dataType: {
              type: "double",
              specs: {
                unit: "%",
                min: "0",
                unitName: "百分比",
                max: "100"
              }
            }
          },
          {
            id: "peakShavingAndValleyFillingModeLowestSOC",
            name: "最低SOC",
            type: "property",
            buttons: ['refresh', 'edit'],
            dataType: {
              type: "double",
              specs: {
                unit: "%",
                min: "0",
                unitName: "百分比",
                max: "100"
              }
            }
          },
          {
            id: "PeriodOfTime",
            name: "削峰填谷模式充放电时段",
            type: "property",
            dataType: {
              type: "array",
              specs: {
                item: {
                  specs: [
                    {
                      dataType: {
                        specs: {
                          "length": 11
                        },
                        type: "timeRange"
                      },
                      name: "运行时段",
                      id: "pcsRunningTimeFrame",
                    },
                    {
                      dataType: {
                        specs: {
                          0: "放电",
                          1: "充电"
                        },
                        type: "enum"
                      },
                      name: "充放电模式",
                      id: "CorD"
                    },
                    {
                      dataType: {
                        specs: {
                          unit: "kW",
                          min: "-100000",
                          unitName: "千瓦",
                          max: "10000000000"
                        },
                        type: "double"
                      },
                      name: "充放电执行功率",
                      id: "executionPower"
                    }
                  ],
                  type: "struct"
                },
                size: 10
              }
            }
          }
        ],
      },
    ],
  },
];

export const backupModeItems: any = [
  {
    id: "BackupPowerModeSetting",
    name: "备电模式设置",
    type: 'group',
    children: [
      {
        id: "BackupPowerModeSetting",
        name: "备电模式设置",
        type: 'service',
        buttons: ['refresh', 'edit'],
        children: [
          {
            "id": "BackupChargingPower",
            "name": "充电功率",
            buttons: ['refresh', 'edit'],
            "dataType": {
              "type": "double",
              "specs": {
                "unit": "kW",
                "min": "0",
                "unitName": "千瓦",
                "max": "10000000000",
                "step": "0.1"
              }
            },
            "sortOrder": 1
          },
          {
            "id": "BackupDischargePower",
            "name": "放电功率",
            buttons: ['refresh', 'edit'],
            "dataType": {
              "type": "double",
              "specs": {
                "unit": "kW",
                "min": "0",
                "unitName": "千瓦",
                "max": "10000000000",
                "step": "0.1"
              }
            },
            "sortOrder": 2
          },
          {
            "id": "BackupHighestSOC",
            "name": "最高SOC",
            buttons: ['refresh', 'edit'],
            "dataType": {
              "type": "double",
              "specs": {
                "unit": "%",
                "min": "-100",
                "unitName": "百分比",
                "max": "100",
                "step": "0.1"
              }
            },
            "sortOrder": 3
          },
          {
            "id": "BackupMinimumSOC",
            "name": "最低SOC",
            buttons: ['refresh', 'edit'],
            "dataType": {
              "type": "double",
              "specs": {
                "unit": "%",
                "min": "-100",
                "unitName": "百分比",
                "max": "100",
                "step": "0.1"
              }
            },
            "sortOrder": 4
          }
        ],
      }
    ]
  },
];

/// 手动模式参数设置
export const manualModeItems: any = [
  {
    "id": "ManualMode",
    "name": "手动模式设置",
    "type": "group",
    "children": [
      {
        "id": "ManualModeSetting",
        "name": "手动模式设置",
        "type": "service",
        buttons: ['refresh', 'edit'],
        "children": [
          {
            "id": "ChargingPower",
            "name": "充电功率",
            "type": "property",
            buttons: ['refresh', 'edit'],
            "dataType": {
              "type": "double",
              "specs": {
                "unit": "kW",
                "min": "0",
                "unitName": "千瓦",
                "max": "10000000000",
                "step": "0.1"
              }
            }
          },
          {
            "id": "DischargePower",
            "name": "放电功率",
            "type": "property",
            buttons: ['refresh', 'edit'],
            "dataType": {
              "type": "double",
              "specs": {
                "unit": "kW",
                "min": "0",
                "unitName": "千瓦",
                "max": "10000000000",
                "step": "0.1"
              }
            }
          }
        ],
      }
    ]
  },
];

export const elePriceItems: any = [
  {
    "id": "PeakAndValleyPeriodSetting",
    "name": "尖峰平谷时段用电电价设置",
    "type": "group",
    "children": [
      {
        "id": "PeakAndValleyTimeSettings",
        "name": "用电电价设置",
        "type": "service",
        buttons: ['refresh', 'edit'],
        "children": [
          {
            "id": "SharpElectrovalence",
            "name": "尖电价",
            "type": "property",
            buttons: ['refresh', 'edit'],
            "dataType": {
              "type": "double",
              "specs": {
                "unit": "元/kWh",
                "min": "0",
                "unitName": "元/千瓦时",
                "max": "10000000000",
                "step": "0.1"
              }
            }
          },
          {
            "id": "PeakElectrovalence",
            "name": "峰电价",
            "type": "property",
            buttons: ['refresh', 'edit'],
            "dataType": {
              "type": "double",
              "specs": {
                "unit": "元/kWh",
                "min": "0",
                "unitName": "元/千瓦时",
                "max": "10000000000",
                "step": "0.1"
              }
            }
          },
          {
            "id": "FlatElectrovalence",
            "name": "平电价",
            "type": "property",
            buttons: ['refresh', 'edit'],
            "dataType": {
              "type": "double",
              "specs": {
                "unit": "元/kWh",
                "min": "0",
                "unitName": "元/千瓦时",
                "max": "10000000000",
                "step": "0.1"
              }
            }
          },
          {
            "id": "ValleyElectrovalence",
            "name": "谷电价",
            "type": "property",
            buttons: ['refresh', 'edit'],
            "dataType": {
              "type": "double",
              "specs": {
                "unit": "元/kWh",
                "min": "0",
                "unitName": "元/千瓦时",
                "max": "10000000000",
                "step": "0.1"
              }
            }
          },
          {
            "id": "ElectrovalenceTimeFrame",
            "name": "电价时段",
            "type": "property",
            buttons: ['refresh', 'edit'],
            "dataType": {
              "type": "array",
              "specs": {
                "item": {
                  "specs": [
                    {
                      "dataType": {
                        "specs": {
                          "length": 11
                        },
                        "type": "timeRange"
                      },
                      "name": "时段",
                      "id": "TimeFrame"
                    },
                    {
                      "dataType": {
                        "specs": {
                          "0": "尖",
                          "1": "峰",
                          "2": "平",
                          "3": "谷"
                        },
                        "type": "enum"
                      },
                      "name": "电价类型",
                      "id": "ElectrovalenceType"
                    }
                  ],
                  "type": "struct"
                },
                "size": 10
              }
            }
          }
        ],
      },
      {
        "id": "PeakAndValleyTimeSettings",
        "name": "馈电电价设置",
        "type": "service",
        buttons: ['refresh', 'edit'],
        "children": [
          {
            "id": "SharpElectrovalence",
            "name": "尖电价",
            "type": "property",
            buttons: ['refresh', 'edit'],
            "dataType": {
              "type": "double",
              "specs": {
                "unit": "元/kWh",
                "min": "0",
                "unitName": "元/千瓦时",
                "max": "10000000000",
                "step": "0.1"
              }
            }
          },
          {
            "id": "PeakElectrovalence",
            "name": "峰电价",
            "type": "property",
            buttons: ['refresh', 'edit'],
            "dataType": {
              "type": "double",
              "specs": {
                "unit": "元/kWh",
                "min": "0",
                "unitName": "元/千瓦时",
                "max": "10000000000",
                "step": "0.1"
              }
            }
          },
          {
            "id": "FlatElectrovalence",
            "name": "平电价",
            "type": "property",
            buttons: ['refresh', 'edit'],
            "dataType": {
              "type": "double",
              "specs": {
                "unit": "元/kWh",
                "min": "0",
                "unitName": "元/千瓦时",
                "max": "10000000000",
                "step": "0.1"
              }
            }
          },
          {
            "id": "ValleyElectrovalence",
            "name": "谷电价",
            "type": "property",
            buttons: ['refresh', 'edit'],
            "dataType": {
              "type": "double",
              "specs": {
                "unit": "元/kWh",
                "min": "0",
                "unitName": "元/千瓦时",
                "max": "10000000000",
                "step": "0.1"
              }
            }
          },
          {
            "id": "ElectrovalenceTimeFrame",
            "name": "电价时段",
            "type": "property",
            buttons: ['refresh', 'edit'],
            "dataType": {
              "type": "array",
              "specs": {
                "item": {
                  "specs": [
                    {
                      "dataType": {
                        "specs": {
                          "length": 11
                        },
                        "type": "timeRange"
                      },
                      "name": "时段",
                      "id": "TimeFrame"
                    },
                    {
                      "dataType": {
                        "specs": {
                          "0": "尖",
                          "1": "峰",
                          "2": "平",
                          "3": "谷"
                        },
                        "type": "enum"
                      },
                      "name": "电价类型",
                      "id": "ElectrovalenceType"
                    }
                  ],
                  "type": "struct"
                },
                "size": 10
              }
            }
          }
        ],
      }
    ]
  }
];