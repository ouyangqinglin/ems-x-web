/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-16 09:42:18
 * @LastEditTime: 2024-05-21 17:41:23
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\config\EnergyManagementPv\helper.ts
 */

export type ConfigType = {
  start: string;
  end: string;
  mode: string;
  power?: string;
};

export const timeRangeFieldConfig = [
  { start: '11305', end: '11307', mode: '11309', power: '11310' },
  { start: '11311', end: '11313', mode: '11315', power: '11316' },
  { start: '11317', end: '11319', mode: '11321', power: '11322' },
  { start: '11323', end: '11325', mode: '11327', power: '11328' },
  { start: '11329', end: '11331', mode: '11333', power: '11334' },
  { start: '11335', end: '11337', mode: '11339', power: '11340' },
  { start: '11341', end: '11343', mode: '11345', power: '11346' },
  { start: '11347', end: '11349', mode: '11351', power: '11352' },
  { start: '11353', end: '11355', mode: '11357', power: '11358' },
  { start: '11359', end: '11361', mode: '11363', power: '11364' },
];

export const priceTimeRangeFieldConfig = [
  { start: '11508', end: '11510', mode: '11512' },
  { start: '11513', end: '11515', mode: '11517' },
  { start: '11518', end: '11520', mode: '11522' },
  { start: '11523', end: '11525', mode: '11527' },
  { start: '11528', end: '11530', mode: '11532' },
  { start: '11533', end: '11535', mode: '11537' },
  { start: '11538', end: '11540', mode: '11542' },
  { start: '11543', end: '11545', mode: '11547' },
  { start: '11548', end: '11550', mode: '11552' },
  { start: '11553', end: '11555', mode: '11557' },
];

// 自发自用模式参数设置
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
            id: '11259',
            name: '最大充电功率',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'double',
              specs: {
                unit: 'kW',
                min: '0',
                unitName: '千瓦',
                max: '10000000000',
                step: '0.1',
              },
            },
            sortOrder: 1,
          },
          {
            id: '11260',
            name: '最大放电功率',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'double',
              specs: {
                unit: 'kW',
                min: '0',
                unitName: '千瓦',
                max: '10000000000',
                step: '0.1',
              },
            },
            sortOrder: 2,
          },
          {
            id: '11261',
            name: '最高SOC',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'double',
              specs: {
                unit: '%',
                min: '-100',
                unitName: '百分比',
                max: '100',
                step: '0.1',
              },
            },
            sortOrder: 3,
          },
          {
            id: '11262',
            name: '最低SOC',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'double',
              specs: {
                unit: '%',
                min: '-100',
                unitName: '百分比',
                max: '100',
                step: '0.1',
              },
            },
            sortOrder: 4,
          },
        ],
      },
    ],
  },
];

// 削峰填谷模式参数设置
export const peakShavingValleyFillingItems: any = [
  {
    id: 'jfpgModeSet',
    name: '削峰填谷模式参数设置',
    type: 'group',
    children: [
      // [削峰填谷参数]最高SOC	50962	[削峰填谷参数]最高SOC
      // [削峰填谷参数]最低SOC	50963	[削峰填谷参数]最低SOC
      // [削峰填谷参数]充放电功率方式	51030	[削峰填谷参数]充放电功率方式	[1-最大功率,2-固定功率]
      {
        id: 'jfpgModeSet',
        name: '参数设置',
        type: 'service',
        buttons: ['refresh', 'edit'],
        children: [
          {
            id: '11300',
            name: '最高SOC',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'double',
              specs: {
                unit: '%',
                min: '0',
                unitName: '百分比',
                max: '100',
                enable: true,
              },
            },
          },
          {
            id: '11301',
            name: '最低SOC',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'double',
              specs: {
                unit: '%',
                min: '0',
                unitName: '百分比',
                max: '100',
                enable: true,
              },
            },
          },
          {
            id: '11302',
            name: '充放电功率方式',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'enum',
              specs: {
                '1': '最大功率',
                '2': '固定功率',
              },
            },
          },
        ],
      },
      {
        id: 'PeriodOfTime',
        name: '时间段设置(格式：hh:mm)',
        type: 'service',
        buttons: ['refresh', 'edit'],
        children: [
          {
            id: 'chargeMode',
            name: '时间段设置',
            type: 'property',
            required: false,
            dataType: {
              specs: {
                item: {
                  specs: [
                    {
                      id: 'time',
                      name: '运行时段',
                      dataType: {
                        specs: {
                          length: 11,
                        },
                        type: 'timeRange',
                      },
                    },
                    {
                      id: 'mode',
                      name: '充放电模式',
                      dataType: {
                        specs: {
                          // 0: '未启用',
                          1: '充电',
                          2: '放电',
                        },
                        type: 'enum',
                      },
                    },
                    {
                      id: 'power',
                      name: '固定功率',
                      dataType: {
                        specs: {
                          unit: 'kW',
                          min: '-100000',
                          unitName: '千瓦',
                          max: '10000000000',
                        },
                        type: 'double',
                      },
                    },
                  ],
                  type: 'struct',
                },
                size: 10,
              },
              type: 'array',
            },
          },
        ],
      },
    ],
  },
];

// 手动模式参数设置
export const manualModeItems: any = [
  {
    id: 'ManualMode',
    name: '手动模式设置',
    type: 'group',
    children: [
      {
        id: 'ManualModeSetting',
        name: '手动模式设置',
        type: 'service',
        buttons: ['refresh', 'edit'],
        children: [
          {
            id: '11400',
            name: '充电功率',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'double',
              specs: {
                unit: 'kW',
                min: '0',
                unitName: '千瓦',
                max: '10000000000',
                step: '0.1',
              },
            },
          },
          {
            id: '11401',
            name: '放电功率',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'double',
              specs: {
                unit: 'kW',
                min: '0',
                unitName: '千瓦',
                max: '10000000000',
                step: '0.1',
              },
            },
          },
        ],
      },
    ],
  },
];

// 尖峰平谷时段用电电价设置
export const elePriceItems: any = [
  {
    id: 'PeakAndValleyPeriodSetting',
    name: '尖峰平谷时段用电电价设置',
    type: 'group',
    children: [
      // 用电尖电价设置	50900	用电尖电价设置
      // 用电峰电价设置	50901	用电峰电价设置
      // 用电平电价设置	50902	用电平电价设置
      // 用电谷电价设置	50903	用电谷电价设置
      {
        id: 'PeakAndValleyTimeSettings',
        name: '用电电价设置',
        type: 'service',
        buttons: ['refresh', 'edit'],
        children: [
          {
            id: '11500',
            name: '尖电价',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'double',
              specs: {
                unit: '元/kWh',
                min: '0',
                unitName: '元/千瓦时',
                max: '10000000000',
                step: '0.1',
              },
            },
          },
          {
            id: '11501',
            name: '峰电价',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'double',
              specs: {
                unit: '元/kWh',
                min: '0',
                unitName: '元/千瓦时',
                max: '10000000000',
                step: '0.1',
              },
            },
          },
          {
            id: '11502',
            name: '平电价',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'double',
              specs: {
                unit: '元/kWh',
                min: '0',
                unitName: '元/千瓦时',
                max: '10000000000',
                step: '0.1',
              },
            },
          },
          {
            id: '11503',
            name: '谷电价',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'double',
              specs: {
                unit: '元/kWh',
                min: '0',
                unitName: '元/千瓦时',
                max: '10000000000',
                step: '0.1',
              },
            },
          },
        ],
      },
      // 馈电尖电价设置	50904	馈电尖电价设置
      // 馈电峰电价设置	50905	馈电峰电价设置
      // 馈电平电价设置	50906	馈电平电价设置
      // 馈电谷电价设置	50907	馈电谷电价设置
      {
        id: 'PeakAndValleyTimeSettings',
        name: '馈电电价设置',
        type: 'service',
        buttons: ['refresh', 'edit'],
        children: [
          {
            id: '11504',
            name: '尖电价',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'double',
              specs: {
                unit: '元/kWh',
                min: '0',
                unitName: '元/千瓦时',
                max: '10000000000',
                step: '0.1',
              },
            },
          },
          {
            id: '11505',
            name: '峰电价',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'double',
              specs: {
                unit: '元/kWh',
                min: '0',
                unitName: '元/千瓦时',
                max: '10000000000',
                step: '0.1',
              },
            },
          },
          {
            id: '11506',
            name: '平电价',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'double',
              specs: {
                unit: '元/kWh',
                min: '0',
                unitName: '元/千瓦时',
                max: '10000000000',
                step: '0.1',
              },
            },
          },
          {
            id: '11507',
            name: '谷电价',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'double',
              specs: {
                unit: '元/kWh',
                min: '0',
                unitName: '元/千瓦时',
                max: '10000000000',
                step: '0.1',
              },
            },
          },
        ],
      },
      // 时间段设置
      {
        id: 'ElectrovalenceTimeFrame',
        name: '时间段设置(格式：hh:mm)',
        type: 'service',
        buttons: ['refresh', 'edit'],
        form: {
          span: 24,
        },
        children: [
          {
            id: 'priceMode',
            name: '时间段设置',
            type: 'property',
            required: false,
            dataType: {
              specs: {
                item: {
                  specs: [
                    {
                      id: 'time',
                      name: '运行时段',
                      dataType: {
                        specs: {
                          length: 11,
                        },
                        type: 'timeRange',
                      },
                    },
                    {
                      id: 'mode',
                      name: '电价类型',
                      dataType: {
                        specs: {
                          // 0: '未启用',
                          1: '尖',
                          2: '峰',
                          3: '平',
                          4: '谷',
                        },
                        type: 'enum',
                      },
                    },
                  ],
                  type: 'struct',
                },
                size: 10,
              },
              type: 'array',
            },
          },
        ],
      },
    ],
  },
];
