/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-16 09:42:18
 * @LastEditTime: 2024-04-26 14:27:32
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
            id: '3020',
            name: '电池组型号',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '3010',
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
                        id: '12000',
                        name: '单体过压一级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12001',
                        name: '单体过压一级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12002',
                        name: '单体欠压一级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12003',
                        name: '单体欠压一级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12004',
                        name: '总电压过压一级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12005',
                        name: '总电压过压一级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12006',
                        name: '总电压欠压一级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12007',
                        name: '总电压欠压一级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12008',
                        name: '单体压差过高一级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12009',
                        name: '单体压差过高一级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12010',
                        name: '总电压压差过高一级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12011',
                        name: '总电压压差过高一级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12012',
                        name: '充电过流一级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'A',
                          },
                        },
                      },
                      {
                        id: '12013',
                        name: '充电过流一级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'A',
                          },
                        },
                      },
                      {
                        id: '12014',
                        name: '放电过流一级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'A',
                          },
                        },
                      },
                      {
                        id: '12015',
                        name: '放电过流一级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'A',
                          },
                        },
                      },
                      {
                        id: '12016',
                        name: '充电过温一级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12017',
                        name: '充电过温一级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12018',
                        name: '充电欠温一级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12019',
                        name: '充电欠温一级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12020',
                        name: '放电过温一级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12021',
                        name: '放电过温一级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12022',
                        name: '放电欠温一级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12023',
                        name: '放电欠温一级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12024',
                        name: '温差过高一级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12025',
                        name: '温差过高一级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12026',
                        name: '极柱温度过高一级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12027',
                        name: '极柱温度过高一级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12028',
                        name: 'SOC 过低一级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '%',
                          },
                        },
                      },
                      {
                        id: '12029',
                        name: 'SOC 过低一级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '%',
                          },
                        },
                      },
                      {
                        id: '12030',
                        name: '绝缘失效一级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'KΩ',
                          },
                        },
                      },
                      {
                        id: '12031',
                        name: '绝缘失效一级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'KΩ',
                          },
                        },
                      },
                      {
                        id: '12032',
                        name: '高压箱连接器温度过高一级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12033',
                        name: '高压箱连接器温度过高一级恢复门限',
                        type: 'property',
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
                        id: '12100',
                        name: '单体过压二级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12101',
                        name: '单体过压二级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12102',
                        name: '单体欠压二级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12103',
                        name: '单体欠压二级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12104',
                        name: '总电压过压二级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12105',
                        name: '总电压过压二级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12106',
                        name: '总电压欠压二级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12107',
                        name: '总电压欠压二级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12108',
                        name: '单体压差过高二级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12109',
                        name: '单体压差过高二级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12110',
                        name: '总电压压差过高二级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12111',
                        name: '总电压压差过高二级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12112',
                        name: '充电过流二级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'A',
                          },
                        },
                      },
                      {
                        id: '12113',
                        name: '充电过流二级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'A',
                          },
                        },
                      },
                      {
                        id: '12114',
                        name: '放电过流二级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'A',
                          },
                        },
                      },
                      {
                        id: '12115',
                        name: '放电过流二级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'A',
                          },
                        },
                      },
                      {
                        id: '12116',
                        name: '充电过温二级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12117',
                        name: '充电过温二级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12118',
                        name: '充电欠温二级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12119',
                        name: '充电欠温二级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12120',
                        name: '放电过温二级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12121',
                        name: '放电过温二级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12122',
                        name: '放电欠温二级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12123',
                        name: '放电欠温二级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12124',
                        name: '温差过高二级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12125',
                        name: '温差过高二级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12126',
                        name: '极柱温度过高二级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12127',
                        name: '极柱温度过高二级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12128',
                        name: 'SOC 过低二级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '%',
                          },
                        },
                      },
                      {
                        id: '12129',
                        name: 'SOC 过低二级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '%',
                          },
                        },
                      },
                      {
                        id: '12130',
                        name: '绝缘失效二级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'KΩ',
                          },
                        },
                      },
                      {
                        id: '12131',
                        name: '绝缘失效二级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'KΩ',
                          },
                        },
                      },
                      {
                        id: '12132',
                        name: '高压箱连接器温度过高二级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12133',
                        name: '高压箱连接器温度过高二级恢复门限',
                        type: 'property',
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
                        id: '12200',
                        name: '单体过压三级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12201',
                        name: '单体过压三级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12202',
                        name: '单体欠压三级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12203',
                        name: '单体欠压三级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12204',
                        name: '总电压过压三级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12205',
                        name: '总电压过压三级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12206',
                        name: '总电压欠压三级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12207',
                        name: '总电压欠压三级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12208',
                        name: '单体压差过高三级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12209',
                        name: '单体压差过高三级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12210',
                        name: '总电压压差过高三级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12211',
                        name: '总电压压差过高三级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12212',
                        name: '充电过流三级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'A',
                          },
                        },
                      },
                      {
                        id: '12213',
                        name: '充电过流三级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'A',
                          },
                        },
                      },
                      {
                        id: '12214',
                        name: '放电过流三级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'A',
                          },
                        },
                      },
                      {
                        id: '12215',
                        name: '放电过流三级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'A',
                          },
                        },
                      },
                      {
                        id: '12216',
                        name: '充电过温三级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12217',
                        name: '充电过温三级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12218',
                        name: '充电欠温三级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12219',
                        name: '充电欠温三级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12220',
                        name: '放电过温三级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12221',
                        name: '放电过温三级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12222',
                        name: '放电欠温三级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12223',
                        name: '放电欠温三级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12224',
                        name: '温差过高三级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12225',
                        name: '温差过高三级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12226',
                        name: '极柱温度过高三级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12227',
                        name: '极柱温度过高三级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12228',
                        name: 'SOC 过低三级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '%',
                          },
                        },
                      },
                      {
                        id: '12229',
                        name: 'SOC 过低三级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '%',
                          },
                        },
                      },
                      {
                        id: '12230',
                        name: '绝缘失效三级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'KΩ',
                          },
                        },
                      },
                      {
                        id: '12231',
                        name: '绝缘失效三级恢复门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'KΩ',
                          },
                        },
                      },
                      {
                        id: '12232',
                        name: '高压箱连接器温度过高三级报警门限',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12233',
                        name: '高压箱连接器温度过高三级恢复门限',
                        type: 'property',
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
                        id: '12300',
                        name: '单体过压四级保护限值',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12301',
                        name: '单体过压四级保护恢复值',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12302',
                        name: '单体欠压四级保护限值',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12303',
                        name: '单体欠压四级保护恢复值',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12304',
                        name: '总电压过压四级保护限值',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12305',
                        name: '总电压过压四级保护恢复值',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12306',
                        name: '总电压欠压四级保护限值',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12307',
                        name: '总电压欠压四级保护恢复值',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12308',
                        name: '单体压差过高四级保护限值',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12309',
                        name: '单体压差过高四级保护恢复值',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12310',
                        name: '总电压压差过高四级保护限值',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12311',
                        name: '总电压压差过高四级保护恢复值',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'mV',
                          },
                        },
                      },
                      {
                        id: '12312',
                        name: '充电过流四级保护限值',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'A',
                          },
                        },
                      },
                      {
                        id: '12313',
                        name: '充电过流四级保护恢复值',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'A',
                          },
                        },
                      },
                      {
                        id: '12314',
                        name: '放电过流四级保护限值',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'A',
                          },
                        },
                      },
                      {
                        id: '12315',
                        name: '放电过流四级保护恢复值',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'A',
                          },
                        },
                      },
                      {
                        id: '12316',
                        name: '充电过温四级保护限值',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12317',
                        name: '充电过温四级保护恢复值',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12318',
                        name: '充电欠温四级保护限值',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12319',
                        name: '充电欠温四级保护恢复值',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12320',
                        name: '放电过温四级保护限值',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12321',
                        name: '放电过温四级保护恢复值',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12322',
                        name: '放电欠温四级保护限值',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12323',
                        name: '放电欠温四级保护恢复值',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12324',
                        name: '温差过高四级保护限值',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12325',
                        name: '温差过高四级保护恢复值',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12326',
                        name: '极柱温度过高四级保护限值',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12327',
                        name: '极柱温度过高四级保护恢复值',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12328',
                        name: 'SOC 过低四级保护限值',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '%',
                          },
                        },
                      },
                      {
                        id: '12329',
                        name: 'SOC 过低四级保护恢复值',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '%',
                          },
                        },
                      },
                      {
                        id: '12330',
                        name: '绝缘失效四级保护限值',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'KΩ',
                          },
                        },
                      },
                      {
                        id: '12331',
                        name: '绝缘失效四级保护恢复值',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: 'KΩ',
                          },
                        },
                      },
                      {
                        id: '12332',
                        name: '高压箱连接器温度过高四级保护限值',
                        type: 'property',
                        dataType: {
                          type: 'string',
                          specs: {
                            unit: '°C',
                          },
                        },
                      },
                      {
                        id: '12333',
                        name: '高压箱连接器温度过高四级保护恢复值',
                        type: 'property',
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
