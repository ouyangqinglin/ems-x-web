/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-16 09:42:18
 * @LastEditTime: 2024-04-26 11:40:46
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\config\EnergyManagement\helper.ts
 */

export const timeRangeFieldConfig = [
  { start: '50964', end: '50966', mode: '50968', power: '50969' },
  { start: '50970', end: '50972', mode: '50974', power: '50975' },
  { start: '50976', end: '50978', mode: '50980', power: '50981' },
  { start: '50982', end: '50984', mode: '50986', power: '50987' },
  { start: '50988', end: '50990', mode: '50992', power: '50993' },
  { start: '50994', end: '50996', mode: '50998', power: '50999' },
  { start: '51000', end: '51002', mode: '51004', power: '51005' },
  { start: '51006', end: '51008', mode: '51010', power: '51011' },
  { start: '51012', end: '51014', mode: '51016', power: '51017' },
  { start: '51018', end: '51020', mode: '51022', power: '51023' },
];

// 自发自用模式参数设置 - 暂时不写
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
            id: 'e70',
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
            id: 'e80',
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
            id: 'e81',
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
            id: 'e82',
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
            id: '50962',
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
            id: '50963',
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
            id: '51030',
            name: '充放电功率方式',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'enum',
              specs: {
                1: '最大功率',
                2: '固定功率',
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
                          0: '放电',
                          1: '充电',
                          // 10: '未启用',
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

// 备电模式参数设置
export const backupModeItems: any = [
  {
    id: 'BackupPowerModeSetting',
    name: '备电模式设置',
    type: 'group',
    children: [
      {
        id: 'BackupPowerModeSetting',
        name: '备电模式设置',
        type: 'service',
        buttons: ['refresh', 'edit'],
        children: [
          {
            id: '51024',
            name: '充电功率',
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
            id: '51025',
            name: '放电功率',
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
            id: '51026',
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
            id: '51027',
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
            id: '51028',
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
            id: '51029',
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
            id: '50900',
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
            id: '50901',
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
            id: '50902',
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
            id: '50903',
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
            id: '50904',
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
            id: '50905',
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
            id: '50906',
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
            id: '50907',
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
        children: [
          // [尖峰平谷参数]时段1-开始时间	50908	[尖峰平谷参数]时段1-开始时间	hh:mm
          // [尖峰平谷参数]时段1-结束时间	50910	[尖峰平谷参数]时段1-结束时间	hh:mm
          // [尖峰平谷参数]时段1-电价类型	50912	[尖峰平谷参数]时段1-电价类型	[0-未启用,1-尖,2-峰,3-平,4-谷]
          {
            id: '50908',
            name: '1  开始时间',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                length: 5,
              },
              type: 'string',
            },
          },
          {
            id: '50910',
            name: '结束时间',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                length: 5,
              },

              type: 'string',
            },
          },
          {
            id: '50912',
            name: '电价类型',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'enum',
              specs: {
                0: '未启用',
                1: '尖',
                2: '峰',
                3: '平',
                4: '谷',
              },
            },
          },
          // [尖峰平谷参数]时段2-开始时间	50913	[尖峰平谷参数]时段2-开始时间	hh:mm
          // [尖峰平谷参数]时段2-结束时间	50915	[尖峰平谷参数]时段2-结束时间	hh:mm
          // [尖峰平谷参数]时段2-电价类型	50917	[尖峰平谷参数]时段2-电价类型	[0-未启用,1-尖,2-峰,3-平,4-谷]
          {
            id: '50913',
            name: '2  开始时间',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                length: 5,
              },

              type: 'string',
            },
          },
          {
            id: '50915',
            name: '结束时间',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                length: 5,
              },

              type: 'string',
            },
          },
          {
            id: '50917',
            name: '电价类型',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'enum',
              specs: {
                0: '未启用',
                1: '尖',
                2: '峰',
                3: '平',
                4: '谷',
              },
            },
          },
          // [尖峰平谷参数]时段3-开始时间	50918	[尖峰平谷参数]时段3-开始时间	hh:mm
          // [尖峰平谷参数]时段3-结束时间	50920	[尖峰平谷参数]时段3-结束时间	hh:mm
          // [尖峰平谷参数]时段3-电价类型	50922	[尖峰平谷参数]时段3-电价类型	[0-未启用,1-尖,2-峰,3-平,4-谷]
          {
            id: '50918',
            name: '3  开始时间',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                length: 5,
              },

              type: 'string',
            },
          },
          {
            id: '50920',
            name: '结束时间',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                length: 5,
              },

              type: 'string',
            },
          },
          {
            id: '50922',
            name: '电价类型',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'enum',
              specs: {
                0: '未启用',
                1: '尖',
                2: '峰',
                3: '平',
                4: '谷',
              },
            },
          },
          // [尖峰平谷参数]时段4-开始时间	50923	[尖峰平谷参数]时段4-开始时间	hh:mm
          // [尖峰平谷参数]时段4-结束时间	50925	[尖峰平谷参数]时段4-结束时间	hh:mm
          // [尖峰平谷参数]时段4-电价类型	50927	[尖峰平谷参数]时段4-电价类型	[0-未启用,1-尖,2-峰,3-平,4-谷]
          {
            id: '50923',
            name: '4  开始时间',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                length: 5,
              },

              type: 'string',
            },
          },
          {
            id: '50925',
            name: '结束时间',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                length: 5,
              },

              type: 'string',
            },
          },
          {
            id: '50927',
            name: '电价类型',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'enum',
              specs: {
                0: '未启用',
                1: '尖',
                2: '峰',
                3: '平',
                4: '谷',
              },
            },
          },
          // [尖峰平谷参数]时段5-开始时间	50928	[尖峰平谷参数]时段5-开始时间	hh:mm
          // [尖峰平谷参数]时段5-结束时间	50930	[尖峰平谷参数]时段5-结束时间	hh:mm
          // [尖峰平谷参数]时段5-电价类型	50932	[尖峰平谷参数]时段5-电价类型	[0-未启用,1-尖,2-峰,3-平,4-谷]
          {
            id: '50928',
            name: '5  开始时间',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                length: 5,
              },

              type: 'string',
            },
          },
          {
            id: '50930',
            name: '结束时间',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                length: 5,
              },

              type: 'string',
            },
          },
          {
            id: '50932',
            name: '电价类型',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'enum',
              specs: {
                0: '未启用',
                1: '尖',
                2: '峰',
                3: '平',
                4: '谷',
              },
            },
          },
          // [尖峰平谷参数]时段6-开始时间	50933	[尖峰平谷参数]时段6-开始时间	hh:mm
          // [尖峰平谷参数]时段6-结束时间	50935	[尖峰平谷参数]时段6-结束时间	hh:mm
          // [尖峰平谷参数]时段6-电价类型	50937	[尖峰平谷参数]时段6-电价类型	[0-未启用,1-尖,2-峰,3-平,4-谷]
          {
            id: '50933',
            name: '6  开始时间',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                length: 5,
              },

              type: 'string',
            },
          },
          {
            id: '50935',
            name: '结束时间',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                length: 5,
              },

              type: 'string',
            },
          },
          {
            id: '50937',
            name: '电价类型',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'enum',
              specs: {
                0: '未启用',
                1: '尖',
                2: '峰',
                3: '平',
                4: '谷',
              },
            },
          },
          // [尖峰平谷参数]时段7-开始时间	50938	[尖峰平谷参数]时段7-开始时间	hh:mm
          // [尖峰平谷参数]时段7-结束时间	50940	[尖峰平谷参数]时段7-结束时间	hh:mm
          // [尖峰平谷参数]时段7-电价类型	50942	[尖峰平谷参数]时段7-电价类型	[0-未启用,1-尖,2-峰,3-平,4-谷]
          {
            id: '50938',
            name: '7  开始时间',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                length: 5,
              },

              type: 'string',
            },
          },
          {
            id: '50940',
            name: '结束时间',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                length: 5,
              },

              type: 'string',
            },
          },
          {
            id: '50942',
            name: '电价类型',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'enum',
              specs: {
                0: '未启用',
                1: '尖',
                2: '峰',
                3: '平',
                4: '谷',
              },
            },
          },
          // [尖峰平谷参数]时段8-开始时间	50943	[尖峰平谷参数]时段8-开始时间	hh:mm
          // [尖峰平谷参数]时段8-结束时间	50945	[尖峰平谷参数]时段8-结束时间	hh:mm
          // [尖峰平谷参数]时段8-电价类型	50947	[尖峰平谷参数]时段8-电价类型	[0-未启用,1-尖,2-峰,3-平,4-谷]
          {
            id: '50943',
            name: '8  开始时间',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                length: 5,
              },

              type: 'string',
            },
          },
          {
            id: '50945',
            name: '结束时间',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                length: 5,
              },

              type: 'string',
            },
          },
          {
            id: '50947',
            name: '电价类型',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'enum',
              specs: {
                0: '未启用',
                1: '尖',
                2: '峰',
                3: '平',
                4: '谷',
              },
            },
          },
          // [尖峰平谷参数]时段9-开始时间	50948	[尖峰平谷参数]时段9-开始时间	hh:mm
          // [尖峰平谷参数]时段9-结束时间	50950	[尖峰平谷参数]时段9-结束时间	hh:mm
          // [尖峰平谷参数]时段9-电价类型	50952	[尖峰平谷参数]时段9-电价类型	[0-未启用,1-尖,2-峰,3-平,4-谷]
          {
            id: '50948',
            name: '9  开始时间',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                length: 5,
              },

              type: 'string',
            },
          },
          {
            id: '50950',
            name: '结束时间',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                length: 5,
              },

              type: 'string',
            },
          },
          {
            id: '50952',
            name: '电价类型',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'enum',
              specs: {
                0: '未启用',
                1: '尖',
                2: '峰',
                3: '平',
                4: '谷',
              },
            },
          },
          // [尖峰平谷参数]时段10-开始时间	50953	[尖峰平谷参数]时段10-开始时间	hh:mm
          // [尖峰平谷参数]时段10-结束时间	50955	[尖峰平谷参数]时段10-结束时间	hh:mm
          // [尖峰平谷参数]时段10-电价类型	50957	[尖峰平谷参数]时段10-电价类型	[0-未启用,1-尖,2-峰,3-平,4-谷]
          {
            id: '50953',
            name: '10  开始时间',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                length: 5,
              },

              type: 'string',
            },
          },
          {
            id: '50955',
            name: '结束时间',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                length: 5,
              },

              type: 'string',
            },
          },
          {
            id: '50957',
            name: '电价类型',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'enum',
              specs: {
                0: '未启用',
                1: '尖',
                2: '峰',
                3: '平',
                4: '谷',
              },
            },
          },
        ],
      },
    ],
  },
];
