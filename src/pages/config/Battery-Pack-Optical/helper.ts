/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-16 09:42:18
 * @LastEditTime: 2024-03-16 11:40:33
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\config\Pcs\helper.ts
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
            name: '电池组SN',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '1',
            name: '电池组型号',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '1',
            name: '电池组厂商',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '1',
            name: 'BCMU SN',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '1',
            name: 'BCMU 型号',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '1',
            name: 'BCMU 厂商',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '1',
            name: 'BCMU 硬件版本',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '1',
            name: 'BCMU 软件版本',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
        ],
      },
    ],
  },
];

export const batteryPackEnableItems: any = [
  {
    id: 'a',
    name: '电池组使能设置',
    type: 'group',
    showType: 2,
    children: [
      {
        id: 'a',
        name: '电池组使能设置',
        type: 'service',
        buttons: ['refresh', 'edit'],
        children: [
          {
            id: '1',
            name: '自启动功能使能',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'enum',
              specs: {
                1: 'mV',
                2: 'mV',
              },
            },
          },
        ]
      },
    ]
  }
]

export const batteryParamsItems: any = [
  {
    id: 'a',
    name: '电池组保护参数设置',
    type: 'group',
    showType: 2,
    children: [
      {
        id: 'a',
        name: '电池组使能状态',
        type: 'group',
        showType: 2,
        children: [
          {
            id: 'a',
            name: '电池组使能状态',
            type: 'service',
            showType: 2,
            buttons: ['refresh', 'edit'],
            children: [
              {
                id: '1',
                name: '电池组使能状态',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
            ]
          },
        ]
      },
      {
        id: 'a',
        name: '一级保护参数',
        type: 'group',
        showType: 2,
        children: [
          {
            id: 'a',
            name: '一级保护参数',
            type: 'service',
            buttons: ['refresh', 'edit'],
            children: [
              {
                id: '1',
                name: '单体过压一级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '单体过压一级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '单体欠压一级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '单体欠压一级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '总电压过压一级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '总电压过压一级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '总电压欠压一级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '总电压欠压一级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '单体压差过高一级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '单体压差过高一级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '总电压压差过高一级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '总电压压差过高一级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '充电过流一级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'A',
                  },
                },
              },
              {
                id: '1',
                name: '充电过流一级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'A',
                  },
                },
              },
              {
                id: '1',
                name: '放电过流一级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'A',
                  },
                },
              },
              {
                id: '1',
                name: '放电过流一级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'A',
                  },
                },
              },
              {
                id: '1',
                name: '充电过温一级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '充电过温一级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '充电欠温一级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '充电欠温一级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '放电过温一级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '放电过温一级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '放电欠温一级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '放电欠温一级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '温差过高一级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '温差过高一级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '极柱温度过高一级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '极柱温度过高一级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: 'SOC 过低一级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '%',
                  },
                },
              },
              {
                id: '1',
                name: 'SOC 过低一级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '%',
                  },
                },
              },
              {
                id: '1',
                name: '绝缘失效一级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'KΩ',
                  },
                },
              },
              {
                id: '1',
                name: '绝缘失效一级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'KΩ',
                  },
                },
              },
              {
                id: '1',
                name: '高压箱连接器温度过高一级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '高压箱连接器温度过高一级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
            ],
          }
        ]
      },
      {
        id: 'a',
        name: '二级保护参数',
        type: 'group',
        showType: 2,
        children: [
          {
            id: 'a',
            name: '二级保护参数',
            type: 'service',
            buttons: ['refresh', 'edit'],
            children: [
              {
                id: '1',
                name: '单体过压二级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '单体过压二级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '单体欠压二级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '单体欠压二级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '总电压过压二级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '总电压过压二级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '总电压欠压二级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '总电压欠压二级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '单体压差过高二级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '单体压差过高二级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '总电压压差过高二级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '总电压压差过高二级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '充电过流二级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'A',
                  },
                },
              },
              {
                id: '1',
                name: '充电过流二级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'A',
                  },
                },
              },
              {
                id: '1',
                name: '放电过流二级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'A',
                  },
                },
              },
              {
                id: '1',
                name: '放电过流二级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'A',
                  },
                },
              },
              {
                id: '1',
                name: '充电过温二级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '充电过温二级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '充电欠温二级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '充电欠温二级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '放电过温二级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '放电过温二级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '放电欠温二级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '放电欠温二级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '温差过高二级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '温差过高二级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '极柱温度过高二级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '极柱温度过高二级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: 'SOC 过低二级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '%',
                  },
                },
              },
              {
                id: '1',
                name: 'SOC 过低二级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '%',
                  },
                },
              },
              {
                id: '1',
                name: '绝缘失效二级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'KΩ',
                  },
                },
              },
              {
                id: '1',
                name: '绝缘失效二级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'KΩ',
                  },
                },
              },
              {
                id: '1',
                name: '高压箱连接器温度过高二级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '高压箱连接器温度过高二级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
            ],
          }
        ]
      },
      {
        id: 'a',
        name: '三级保护参数',
        type: 'group',
        showType: 2,
        children: [
          {
            id: 'a',
            name: '三级保护参数',
            type: 'service',
            buttons: ['refresh', 'edit'],
            children: [
              {
                id: '1',
                name: '单体过压三级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '单体过压三级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '单体欠压三级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '单体欠压三级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '总电压过压三级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '总电压过压三级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '总电压欠压三级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '总电压欠压三级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '单体压差过高三级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '单体压差过高三级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '总电压压差过高三级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '总电压压差过高三级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '充电过流三级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'A',
                  },
                },
              },
              {
                id: '1',
                name: '充电过流三级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'A',
                  },
                },
              },
              {
                id: '1',
                name: '放电过流三级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'A',
                  },
                },
              },
              {
                id: '1',
                name: '放电过流三级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'A',
                  },
                },
              },
              {
                id: '1',
                name: '充电过温三级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '充电过温三级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '充电欠温三级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '充电欠温三级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '放电过温三级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '放电过温三级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '放电欠温三级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '放电欠温三级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '温差过高三级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '温差过高三级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '极柱温度过高三级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '极柱温度过高三级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: 'SOC 过低三级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '%',
                  },
                },
              },
              {
                id: '1',
                name: 'SOC 过低三级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '%',
                  },
                },
              },
              {
                id: '1',
                name: '绝缘失效三级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'KΩ',
                  },
                },
              },
              {
                id: '1',
                name: '绝缘失效三级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'KΩ',
                  },
                },
              },
              {
                id: '1',
                name: '高压箱连接器温度过高三级报警门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '高压箱连接器温度过高三级恢复门限',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
            ],
          }
        ]
      },
      {
        id: 'a',
        name: 'EMS四级保护参数',
        type: 'group',
        showType: 2,
        children: [
          {
            id: 'a',
            name: 'EMS四级保护参数',
            type: 'service',
            buttons: ['refresh', 'edit'],
            children: [
              {
                id: '1',
                name: '单体过压四级保护限值',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '单体过压四级保护恢复值',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '单体欠压四级保护限值',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '单体欠压四级保护恢复值',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '总电压过压四级保护限值',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '总电压过压四级保护恢复值',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '总电压欠压四级保护限值',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '总电压欠压四级保护恢复值',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '单体压差过高四级保护限值',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '单体压差过高四级保护恢复值',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '总电压压差过高四级保护限值',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '总电压压差过高四级保护恢复值',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                id: '1',
                name: '充电过流四级保护限值',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'A',
                  },
                },
              },
              {
                id: '1',
                name: '充电过流四级保护恢复值',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'A',
                  },
                },
              },
              {
                id: '1',
                name: '放电过流四级保护限值',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'A',
                  },
                },
              },
              {
                id: '1',
                name: '放电过流四级保护恢复值',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'A',
                  },
                },
              },
              {
                id: '1',
                name: '充电过温四级保护限值',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '充电过温四级保护恢复值',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '充电欠温四级保护限值',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '充电欠温四级保护恢复值',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '放电过温四级保护限值',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '放电过温四级保护恢复值',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '放电欠温四级保护限值',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '放电欠温四级保护恢复值',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '温差过高四级保护限值',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '温差过高四级保护恢复值',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '极柱温度过高四级保护限值',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '极柱温度过高四级保护恢复值',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: 'SOC 过低四级保护限值',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '%',
                  },
                },
              },
              {
                id: '1',
                name: 'SOC 过低四级保护恢复值',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '%',
                  },
                },
              },
              {
                id: '1',
                name: '绝缘失效四级保护限值',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'KΩ',
                  },
                },
              },
              {
                id: '1',
                name: '绝缘失效四级保护恢复值',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'KΩ',
                  },
                },
              },
              {
                id: '1',
                name: '高压箱连接器温度过高四级保护限值',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
              {
                id: '1',
                name: '高压箱连接器温度过高四级保护恢复值',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '°C',
                  },
                },
              },
            ],
          }
        ]
      }
    ],
  },
];
