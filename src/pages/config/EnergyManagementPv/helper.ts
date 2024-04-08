/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-16 09:42:18
 * @LastEditTime: 2024-03-16 11:40:33
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\config\Pcs\helper.ts
 */

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
        form: {
          span: 6,
        },
        children: [
          // [削峰填谷参数]时段1-开始时间	50964	[削峰填谷参数]时段1-开始时间	hh:mm
          // [削峰填谷参数]时段1-结束时间	50966	[削峰填谷参数]时段1-结束时间	hh:mm
          // [削峰填谷参数]时段1-充放电模式	50968	[削峰填谷参数]时段1-充放电模式	[10-未启用,0-放电,1-充电,]
          // [削峰填谷参数]时段1-固定功率	50969	[削峰填谷参数]时段1-固定功率
          {
            id: '11305',
            name: '1 开始时间',
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
            id: '11307',
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
            id: '11309',
            name: '充放电模式',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'enum',
              specs: {
                0: '放电',
                1: '充电',
                10: '未启用',
              },
            },
          },
          {
            id: '11310',
            name: '固定功率',
            buttons: ['refresh', 'edit'],
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
          // [削峰填谷参数]时段2-开始时间	50970	[削峰填谷参数]时段2-开始时间	hh:mm
          // [削峰填谷参数]时段2-结束时间	50972	[削峰填谷参数]时段2-结束时间	hh:mm
          // [削峰填谷参数]时段2-充放电模式	50974	[削峰填谷参数]时段2-充放电模式	[10-未启用,0-放电,1-充电,]
          // [削峰填谷参数]时段2-固定功率	50965	[削峰填谷参数]时段2-固定功率
          {
            id: '11311',
            name: '2 开始时间',
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
            id: '11313',
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
            id: '11315',
            name: '充放电模式',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'enum',
              specs: {
                0: '放电',
                1: '充电',
                10: '未启用',
              },
            },
          },
          {
            id: '11316',
            name: '固定功率',
            buttons: ['refresh', 'edit'],
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
          // [削峰填谷参数]时段3-开始时间	50976	[削峰填谷参数]时段3-开始时间	hh:mm
          // [削峰填谷参数]时段3-结束时间	50978	[削峰填谷参数]时段3-结束时间	hh:mm
          // [削峰填谷参数]时段3-充放电模式	50980	[削峰填谷参数]时段3-充放电模式	[10-未启用,0-放电,1-充电,]
          // [削峰填谷参数]时段3-固定功率	50981	[削峰填谷参数]时段3-固定功率
          {
            id: '11317',
            name: '3 开始时间',
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
            id: '11319',
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
            id: '11321',
            name: '充放电模式',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'enum',
              specs: {
                0: '放电',
                1: '充电',
                10: '未启用',
              },
            },
          },
          {
            id: '11322',
            name: '固定功率',
            buttons: ['refresh', 'edit'],
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
          // [削峰填谷参数]时段4-开始时间	50982	[削峰填谷参数]时段4-开始时间	hh:mm
          // [削峰填谷参数]时段4-结束时间	50984	[削峰填谷参数]时段4-结束时间	hh:mm
          // [削峰填谷参数]时段4-充放电模式	50986	[削峰填谷参数]时段4-充放电模式	[10-未启用,0-放电,1-充电,]
          // [削峰填谷参数]时段4-固定功率	50967	[削峰填谷参数]时段4-固定功率
          {
            id: '11323',
            name: '4 开始时间',
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
            id: '11325',
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
            id: '11327',
            name: '充放电模式',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'enum',
              specs: {
                0: '放电',
                1: '充电',
                10: '未启用',
              },
            },
          },
          {
            id: '11328',
            name: '固定功率',
            buttons: ['refresh', 'edit'],
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
          // [削峰填谷参数]时段5-开始时间	50988	[削峰填谷参数]时段5-开始时间	hh:mm
          // [削峰填谷参数]时段5-结束时间	50990	[削峰填谷参数]时段5-结束时间	hh:mm
          // [削峰填谷参数]时段5-充放电模式	50992	[削峰填谷参数]时段5-充放电模式	[10-未启用,0-放电,1-充电,]
          // [削峰填谷参数]时段5-固定功率	50993	[削峰填谷参数]时段5-固定功率
          {
            id: '11329',
            name: '5 开始时间',
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
            id: '11331',
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
            id: '11333',
            name: '充放电模式',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'enum',
              specs: {
                0: '放电',
                1: '充电',
                10: '未启用',
              },
            },
          },
          {
            id: '11334',
            name: '固定功率',
            buttons: ['refresh', 'edit'],
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
          // [削峰填谷参数]时段6-开始时间	50994	[削峰填谷参数]时段6-开始时间	hh:mm
          // [削峰填谷参数]时段6-结束时间	50996	[削峰填谷参数]时段6-结束时间	hh:mm
          // [削峰填谷参数]时段6-充放电模式	50998	[削峰填谷参数]时段6-充放电模式	[10-未启用,0-放电,1-充电,]
          // [削峰填谷参数]时段6-固定功率	50999	[削峰填谷参数]时段6-固定功率
          {
            id: '11335',
            name: '6 开始时间',
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
            id: '11337',
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
            id: '11339',
            name: '充放电模式',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'enum',
              specs: {
                0: '放电',
                1: '充电',
                10: '未启用',
              },
            },
          },
          {
            id: '11340',
            name: '固定功率',
            buttons: ['refresh', 'edit'],
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
          // [削峰填谷参数]时段7-开始时间	51000	[削峰填谷参数]时段7-开始时间	hh:mm
          // [削峰填谷参数]时段7-结束时间	51002	[削峰填谷参数]时段7-结束时间	hh:mm
          // [削峰填谷参数]时段7-充放电模式	51004	[削峰填谷参数]时段7-充放电模式	[10-未启用,0-放电,1-充电,]
          // [削峰填谷参数]时段7-固定功率	51005	[削峰填谷参数]时段7-固定功率
          {
            id: '11341',
            name: '7 开始时间',
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
            id: '11343',
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
            id: '11345',
            name: '充放电模式',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'enum',
              specs: {
                0: '放电',
                1: '充电',
                10: '未启用',
              },
            },
          },
          {
            id: '11346',
            name: '固定功率',
            buttons: ['refresh', 'edit'],
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
          // [削峰填谷参数]时段8-开始时间	51006	[削峰填谷参数]时段8-开始时间	hh:mm
          // [削峰填谷参数]时段8-结束时间	51008	[削峰填谷参数]时段8-结束时间	hh:mm
          // [削峰填谷参数]时段8-充放电模式	51010	[削峰填谷参数]时段8-充放电模式	[10-未启用,0-放电,1-充电,]
          // [削峰填谷参数]时段8-固定功率	51011	[削峰填谷参数]时段8-固定功率
          {
            id: '11347',
            name: '8 开始时间',
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
            id: '11349',
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
            id: '11351',
            name: '充放电模式',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'enum',
              specs: {
                0: '放电',
                1: '充电',
                10: '未启用',
              },
            },
          },
          {
            id: '11352',
            name: '固定功率',
            buttons: ['refresh', 'edit'],
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
          // [削峰填谷参数]时段9-开始时间	51012	[削峰填谷参数]时段9-开始时间	hh:mm
          // [削峰填谷参数]时段9-结束时间	51014	[削峰填谷参数]时段9-结束时间	hh:mm
          // [削峰填谷参数]时段9-充放电模式	51016	[削峰填谷参数]时段9-充放电模式	[10-未启用,0-放电,1-充电,]
          // [削峰填谷参数]时段9-固定功率	51017	[削峰填谷参数]时段9-固定功率
          {
            id: '11353',
            name: '9 开始时间',
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
            id: '11355',
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
            id: '11357',
            name: '充放电模式',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'enum',
              specs: {
                0: '放电',
                1: '充电',
                10: '未启用',
              },
            },
          },
          {
            id: '11358',
            name: '固定功率',
            buttons: ['refresh', 'edit'],
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
          // [削峰填谷参数]时段10-开始时间	51018	[削峰填谷参数]时段10-开始时间	hh:mm
          // [削峰填谷参数]时段10-结束时间	51020	[削峰填谷参数]时段10-结束时间	hh:mm
          // [削峰填谷参数]时段10-充放电模式	51022	[削峰填谷参数]时段10-充放电模式	[10-未启用,0-放电,1-充电,]
          // [削峰填谷参数]时段10-固定功率	51023	[削峰填谷参数]时段10-固定功率
          {
            id: '11359',
            name: '10 开始时间',
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
            id: '11361',
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
            id: '11363',
            name: '充放电模式',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'enum',
              specs: {
                0: '放电',
                1: '充电',
                10: '未启用',
              },
            },
          },
          {
            id: '11364',
            name: '固定功率',
            buttons: ['refresh', 'edit'],
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
        children: [
          // [尖峰平谷参数]时段1-开始时间	50908	[尖峰平谷参数]时段1-开始时间	hh:mm
          // [尖峰平谷参数]时段1-结束时间	50910	[尖峰平谷参数]时段1-结束时间	hh:mm
          // [尖峰平谷参数]时段1-电价类型	50912	[尖峰平谷参数]时段1-电价类型	[0-未启用,1-尖,2-峰,3-平,4-谷]
          {
            id: '11508',
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
            id: '11510',
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
            id: '11512',
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
            id: '11513',
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
            id: '11515',
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
            id: '11517',
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
            id: '11518',
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
            id: '11520',
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
            id: '11522',
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
            id: '11523',
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
            id: '11525',
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
            id: '11527',
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
            id: '11528',
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
            id: '11530',
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
            id: '11532',
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
            id: '11533',
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
            id: '11535',
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
            id: '11537',
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
            id: '11538',
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
            id: '11540',
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
            id: '11542',
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
            id: '11543',
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
            id: '11545',
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
            id: '11547',
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
            id: '11548',
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
            id: '11550',
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
            id: '11552',
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
            id: '11553',
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
            id: '11555',
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
            id: '11557',
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
