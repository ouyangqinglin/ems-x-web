/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-16 09:42:18
 * @LastEditTime: 2024-04-11 13:42:39
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\config\Battery-Pack-Optical\helper.ts
 */

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
            id: '3000',
            name: '电池组SN',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '3010',
            name: '电池组型号',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '3020',
            name: '电池组厂商',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '3032',
            name: 'BCMU SN',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '3052',
            name: 'BCMU 型号',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '3042',
            name: 'BCMU 厂商',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '3062',
            name: 'BCMU 硬件版本',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '3063',
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
            id: '11950',
            name: '自启动功能使能',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'enum',
              specs: {
                0: '禁止',
                1: '使能',
              },
            },
          },
        ],
      },
    ],
  },
];

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
                id: '11951',
                name: '电池组使能状态',
                type: 'property',
                buttons: ['refresh', 'edit'],
                dataType: {
                  type: 'enum',
                  specs: {
                    0: '禁止',
                    1: '使能',
                  },
                },
              },
            ],
          },
        ],
      },
      {
        id: 'a',
        name: '电池组保护参数设置',
        type: 'group',
        showType: 2,
        children: [
          {
            id: 'a',
            name: '电池组保护参数tab',
            type: 'tab',
            showType: 2,
            children: [
              {
                id: 'protectParams1',
                name: '一级保护参数',
                type: 'tabItem',
                children: [
                  {
                    id: 'a',
                    name: '一级保护参数',
                    modelName: '一级保护参数',
                    type: 'service',
                    buttons: ['refresh', 'edit'],
                    children: [
                      {
                        id: '53001',
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
                        id: '53002',
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
                        id: '53003',
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
                        id: '53004',
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
                        id: '53005',
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
                        id: '53006',
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
                        id: '53007',
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
                        id: '53008',
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
                        id: '53009',
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
                        id: '53010',
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
                        id: '53011',
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
                        id: '53012',
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
                        id: '53013',
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
                        id: '53014',
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
                        id: '53015',
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
                        id: '53016',
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
                        id: '53017',
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
                        id: '53018',
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
                        id: '53019',
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
                        id: '53020',
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
                        id: '53021',
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
                        id: '53022',
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
                        id: '53023',
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
                        id: '53024',
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
                        id: '53025',
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
                        id: '53026',
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
                        id: '53027',
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
                        id: '53028',
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
                        id: '53029',
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
                        id: '53030',
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
                        id: '53031',
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
                        id: '53032',
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
                        id: '53033',
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
                        id: '53034',
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
                  },
                ],
              },
              {
                id: 'protectParams2',
                name: '二级保护参数',
                type: 'tabItem',
                children: [
                  {
                    id: 'b',
                    name: '二级保护参数',
                    modelName: '二级保护参数',
                    type: 'service',
                    buttons: ['refresh', 'edit'],
                    children: [
                      {
                        id: '53035',
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
                        id: '53036',
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
                        id: '53037',
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
                        id: '53038',
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
                        id: '53039',
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
                        id: '53040',
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
                        id: '53041',
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
                        id: '53042',
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
                        id: '53043',
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
                        id: '53044',
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
                        id: '53045',
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
                        id: '53046',
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
                        id: '53047',
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
                        id: '53048',
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
                        id: '53049',
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
                        id: '53050',
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
                        id: '53051',
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
                        id: '53052',
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
                        id: '53053',
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
                        id: '53054',
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
                        id: '53055',
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
                        id: '53056',
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
                        id: '53057',
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
                        id: '53058',
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
                        id: '53059',
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
                        id: '53060',
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
                        id: '53061',
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
                        id: '53062',
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
                        id: '53063',
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
                        id: '53064',
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
                        id: '53065',
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
                        id: '53066',
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
                        id: '53067',
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
                        id: '53068',
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
                  },
                ],
              },
              {
                id: 'protectParams3',
                name: '三级保护参数',
                type: 'tabItem',
                children: [
                  {
                    id: 'c',
                    name: '三级保护参数',
                    modelName: '三级保护参数',
                    type: 'service',
                    buttons: ['refresh', 'edit'],
                    children: [
                      {
                        id: '53069',
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
                        id: '53070',
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
                        id: '53071',
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
                        id: '53072',
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
                        id: '53073',
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
                        id: '53074',
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
                        id: '53075',
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
                        id: '53076',
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
                        id: '53077',
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
                        id: '53078',
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
                        id: '53079',
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
                        id: '53080',
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
                        id: '53081',
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
                        id: '53082',
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
                        id: '53083',
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
                        id: '53084',
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
                        id: '53085',
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
                        id: '53086',
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
                        id: '53087',
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
                        id: '53088',
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
                        id: '53089',
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
                        id: '53090',
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
                        id: '53091',
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
                        id: '53092',
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
                        id: '53093',
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
                        id: '53094',
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
                        id: '53095',
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
                        id: '53096',
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
                        id: '53097',
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
                        id: '53098',
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
                        id: '53099',
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
                        id: '53100',
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
                        id: '53101',
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
                        id: '53102',
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
                  },
                ],
              },
              {
                id: 'protectParams4',
                name: 'EMS四级保护参数',
                type: 'tabItem',
                children: [
                  {
                    id: 'd',
                    name: 'EMS四级保护参数',
                    modelName: 'EMS四级保护参数',
                    type: 'service',
                    buttons: ['refresh', 'edit'],
                    children: [
                      {
                        id: '53103',
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
                        id: '53104',
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
                        id: '53105',
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
                        id: '53106',
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
                        id: '53107',
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
                        id: '53108',
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
                        id: '53109',
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
                        id: '53110',
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
                        id: '53111',
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
                        id: '53112',
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
                        id: '53113',
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
                        id: '53114',
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
                        id: '53115',
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
                        id: '53116',
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
                        id: '53117',
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
                        id: '53118',
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
                        id: '53119',
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
                        id: '53120',
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
                        id: '53121',
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
                        id: '53122',
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
                        id: '53123',
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
                        id: '53124',
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
                        id: '53125',
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
                        id: '53126',
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
                        id: '53127',
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
                        id: '53128',
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
                        id: '53129',
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
                        id: '53130',
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
                        id: '53131',
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
                        id: '53132',
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
                        id: '53133',
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
                        id: '53134',
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
                        id: '53135',
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
                        id: '53136',
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
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
