/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-16 09:42:18
 * @LastEditTime: 2024-03-16 10:52:13
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\state\Pcs\helper.ts
 */

export const baseInfoItems: any = [
  {
    id: 'a',
    name: '基本信息',
    type: 'group',
    children: [
      {
        id: '5161',
        name: '电池堆SN',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5171',
        name: '电池堆厂商',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5181',
        name: '电池组型号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5159',
        name: '与EMS通信状态',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5160',
        name: '与EMS通信方式',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5200',
        name: 'BCMU SN',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kW',
          },
        },
      },
      {
        id: '5210',
        name: 'BCMU厂商',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '5286',
        name: 'BCMU型号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5220',
        name: 'BCMU硬件版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5221',
        name: 'BCMU软件版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5191',
        name: '电池模块个数',
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
    name: '状态信息(遥测)',
    type: 'group',
    children: [
      {
        id: '5296',
        type: 'property',
        name: 'BMS控制模式',
        dataType: {
          type: 'enum',
          specs: {
            0: '本地',
            1: '远程',
          },
        },
      },
      {
        id: '5297',
        type: 'property',
        name: '工作模式',
        dataType: {
          type: 'enum',
          specs: {
            1: '正常',
            2: '核容',
            3: '均衡',
            4: '调试',
          },
        },
      },
      {
        id: '5298',
        type: 'property',
        name: '工作状态',
        dataType: {
          type: 'enum',
          specs: {
            1: '启动',
            2: '充电',
            3: '放电',
            4: '待机',
            5: '停止',
          },
        },
      },
      {
        id: '5301',
        type: 'property',
        name: '告警状态',
        dataType: {
          type: 'enum',
          specs: {
            0: '正常',
            1: '告警',
          },
        },
      },
      {
        id: '5303',
        type: 'property',
        name: 'Pack风扇状态反馈',
        dataType: {
          type: 'enum',
          specs: {
            0: '正常',
            1: '告警',
          },
        },
      },
      {
        id: '5240',
        type: 'property',
        name: '总电压',
        dataType: {
          type: 'string',
          specs: {
            unit: 'V',
          },
        },
      },
      {
        id: '5241',
        type: 'property',
        name: '总电流',
        dataType: {
          type: 'string',
          specs: {
            unit: 'A',
          },
        },
      },
      {
        id: '5260',
        type: 'property',
        name: '总功率',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kW',
          },
        },
      },
      {
        id: '5242',
        type: 'property',
        name: 'SOC',
        dataType: {
          type: 'string',
          specs: {
            unit: '%',
          },
        },
      },
      {
        id: '5243',
        type: 'property',
        name: 'SOH',
        dataType: {
          type: 'string',
          specs: {
            unit: '%',
          },
        },
      },
      {
        id: '5285',
        type: 'property',
        name: '额定容量',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '5223',
        type: 'property',
        name: '可充电能量',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '5224',
        type: 'property',
        name: '可放电能量',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '5227',
        type: 'property',
        name: '电柜开门次数',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5236',
        type: 'property',
        name: '最近一次充电量',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '5237',
        type: 'property',
        name: '最近一次放电量',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '5228',
        type: 'property',
        name: '今日充电量',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '5230',
        type: 'property',
        name: '今日放电量',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '5232',
        type: 'property',
        name: '累计充电量',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '5234',
        type: 'property',
        name: '累计放电量',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '5245',
        type: 'property',
        name: '正极绝缘值',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kΩ',
          },
        },
      },
      {
        id: '5246',
        type: 'property',
        name: '负极绝缘值',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kΩ',
          },
        },
      },
      {
        id: '5238',
        type: 'property',
        name: '预充总压',
        dataType: {
          type: 'string',
          specs: {
            unit: 'V',
          },
        },
      },
      {
        id: '5247',
        type: 'property',
        name: '高压箱温度1',
        dataType: {
          type: 'string',
          specs: {
            unit: '℃',
          },
        },
      },
      {
        id: '5192',
        type: 'property',
        name: '高压箱温度2',
        dataType: {
          type: 'string',
          specs: {
            unit: '℃',
          },
        },
      },
      {
        id: '5193',
        type: 'property',
        name: '高压箱温度3',
        dataType: {
          type: 'string',
          specs: {
            unit: '℃',
          },
        },
      },
      {
        id: '5194',
        type: 'property',
        name: '高压箱温度4',
        dataType: {
          type: 'string',
          specs: {
            unit: '℃',
          },
        },
      },
      {
        id: '5225',
        type: 'property',
        name: '最大允许充电电流',
        dataType: {
          type: 'string',
          specs: {
            unit: 'A',
          },
        },
      },
      {
        id: '5226',
        type: 'property',
        name: '最大允许放电电流',
        dataType: {
          type: 'string',
          specs: {
            unit: 'A',
          },
        },
      },
      {
        id: '5258',
        type: 'property',
        name: '最大允许充电功率',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kW',
          },
        },
      },
      {
        id: '5259',
        type: 'property',
        name: '最大允许放电功率',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kW',
          },
        },
      },
    ],
  },
];

export const individualExtremumItems: any = [
  {
    id: 'a',
    name: '状态信息(单体极值)',
    type: 'group',
    children: [
      {
        id: '5250',
        name: '最高单体电压值',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'mV',
          },
        },
      },
      {
        id: '5249',
        name: '最高单体电压编号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5195',
        name: '最高单体电压BMU编号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5252',
        name: '最低单体电压值',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'mV',
          },
        },
      },
      {
        id: '5251',
        name: '最低单体电压编号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5196',
        name: '最低单体电压BMU编号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5262',
        name: '平均单体电压',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'mV',
          },
        },
      },
      {
        id: '5263',
        name: '单体电压差',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'mV',
          },
        },
      },
      {
        id: '5254',
        name: '最高单体温度值',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: '°C',
          },
        },
      },
      {
        id: '5253',
        name: '最高单体温度编号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5197',
        name: '最高单体温度BMU编号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5256',
        name: '最低单体温度值',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: '°C',
          },
        },
      },
      {
        id: '5255',
        name: '最低单体温度编号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5198',
        name: '最低单体温度BMU编号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5257',
        name: '平均单体温度',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: '°C',
          },
        },
      },
      {
        id: '5263',
        name: '单体温度差',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: '°C',
          },
        },
      },
      {
        id: '5269',
        name: '最高电池模块电压',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'V',
          },
        },
      },
      {
        id: '5273',
        name: '最高电池电压模块编号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5271',
        name: '最低电池模块电压',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'V',
          },
        },
      },
      {
        id: '5274',
        name: '最低电池电压模块编号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5275',
        name: '最高电池模块温度',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: '°C',
          },
        },
      },
      {
        id: '5277',
        name: '最高电池温度模块编号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5279',
        name: '最低电池模块温度',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: '°C',
          },
        },
      },
      {
        id: '5280',
        name: '最低电池温度模块编号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
    ],
  },
];

export const remoteSignalItems: any = [
  {
    type: 'group',
    id: 'a',
    name: '状态信息(遥信)',
    children: [
      {
        type: 'property',
        id: '5324',
        name: '充放电指示',
        dataType: {
          type: 'enum',
          specs: {
            0: '静置',
            1: '放电',
            2: '充电',
          },
        },
      },
      {
        type: 'property',
        id: '5325',
        name: '预充电阶段',
        dataType: {
          type: 'string',
        },
      },
      {
        type: 'property',
        id: '5326',
        name: '主接触器状态',
        dataType: {
          type: 'enum',
          specs: {
            0: '断开',
            1: '闭合',
          },
        },
      },
      {
        type: 'property',
        id: '5327',
        name: '预充接触器状态',
        dataType: {
          type: 'enum',
          specs: {
            0: '断开',
            1: '闭合',
          },
        },
      },
      {
        type: 'property',
        id: '5328',
        name: '门禁状态',
        dataType: {
          type: 'enum',
          specs: {
            0: '断开',
            1: '闭合',
          },
        },
      },
      {
        type: 'property',
        id: '5329',
        name: '直流断路器状态',
        dataType: {
          type: 'enum',
          specs: {
            0: '断开',
            1: '闭合',
          },
        },
      },
      {
        type: 'property',
        id: '5330',
        name: '交流断路器状态',
        dataType: {
          type: 'enum',
          specs: {
            0: '断开',
            1: '闭合',
          },
        },
      },
      {
        type: 'property',
        id: '5331',
        name: '接触器状态',
        dataType: {
          type: 'enum',
          specs: {
            0: '正常',
            1: '故障',
          },
        },
      },
      {
        type: 'property',
        id: '5400[13,14]',
        name: '气溶胶信号',
        dataType: {
          type: 'enum',
          specs: {
            0: '正常',
            1: '告警',
          },
        },
      },
      {
        type: 'property',
        id: '5331',
        name: '电气急停信号',
        dataType: {
          type: 'enum',
          specs: {
            0: '正常',
            1: '故障',
          },
        },
      },
      {
        type: 'property',
        id: '5332',
        name: 'BMS急停信号',
        dataType: {
          type: 'enum',
          specs: {
            0: '正常',
            1: '故障',
          },
        },
      },
      {
        type: 'property',
        id: '5333',
        name: '水浸信号',
        dataType: {
          type: 'enum',
          specs: {
            0: '断开',
            1: '闭合',
          },
        },
      },
      {
        type: 'property',
        id: '5334',
        name: '交流防雷器故障',
        dataType: {
          type: 'string',
        },
      },
    ],
  },
];

export const funItems: any = [
  {
    type: 'group',
    id: 'a',
    name: '状态信息(风扇)',
    children: [
      {
        type: 'property',
        id: '5314',
        name: 'BMU1风扇',
        dataType: {
          type: 'enum',
          specs: {
            0: '关',
            1: '开',
          },
        },
      },
      {
        type: 'property',
        id: '5304',
        name: '电池模块风扇PWM占空比1',
        dataType: {
          type: 'string',
          specs: {
            unit: '%',
          },
        },
      },
      {
        type: 'property',
        id: '5319',
        name: 'BMU6风扇',
        dataType: {
          type: 'enum',
          specs: {
            0: '关',
            1: '开',
          },
        },
      },
      {
        type: 'property',
        id: '5309',
        name: '电池模块风扇PWM占空比6',
        dataType: {
          type: 'string',
          specs: {
            unit: '%',
          },
        },
      },
      {
        type: 'property',
        id: '5315',
        name: 'BMU2风扇',
        dataType: {
          type: 'enum',
          specs: {
            0: '关',
            1: '开',
          },
        },
      },
      {
        type: 'property',
        id: '5305',
        name: '电池模块风扇PWM占空比2',
        dataType: {
          type: 'string',
          specs: {
            unit: '%',
          },
        },
      },
      {
        type: 'property',
        id: '5320',
        name: 'BMU7风扇',
        dataType: {
          type: 'enum',
          specs: {
            0: '关',
            1: '开',
          },
        },
      },
      {
        type: 'property',
        id: '5310',
        name: '电池模块风扇PWM占空比7',
        dataType: {
          type: 'string',
          specs: {
            unit: '%',
          },
        },
      },
      {
        type: 'property',
        id: '5316',
        name: 'BMU3风扇',
        dataType: {
          type: 'enum',
          specs: {
            0: '关',
            1: '开',
          },
        },
      },
      {
        type: 'property',
        id: '5306',
        name: '电池模块风扇PWM占空比3',
        dataType: {
          type: 'string',
          specs: {
            unit: '%',
          },
        },
      },
      {
        type: 'property',
        id: '5321',
        name: 'BMU8风扇',
        dataType: {
          type: 'enum',
          specs: {
            0: '关',
            1: '开',
          },
        },
      },
      {
        type: 'property',
        id: '5311',
        name: '电池模块风扇PWM占空比8',
        dataType: {
          type: 'string',
          specs: {
            unit: '%',
          },
        },
      },
      {
        type: 'property',
        id: '5317',
        name: 'BMU4风扇',
        dataType: {
          type: 'enum',
          specs: {
            0: '关',
            1: '开',
          },
        },
      },
      {
        type: 'property',
        id: '5307',
        name: '电池模块风扇PWM占空比4',
        dataType: {
          type: 'string',
          specs: {
            unit: '%',
          },
        },
      },
      {
        type: 'property',
        id: '5322',
        name: 'BMU9风扇',
        dataType: {
          type: 'enum',
          specs: {
            0: '关',
            1: '开',
          },
        },
      },
      {
        type: 'property',
        id: '5312',
        name: '电池模块风扇PWM占空比9',
        dataType: {
          type: 'string',
          specs: {
            unit: '%',
          },
        },
      },
      {
        type: 'property',
        id: '5318',
        name: 'BMU5风扇',
        dataType: {
          type: 'enum',
          specs: {
            0: '关',
            1: '开',
          },
        },
      },
      {
        type: 'property',
        id: '5308',
        name: '电池模块风扇PWM占空比5',
        dataType: {
          type: 'string',
          specs: {
            unit: '%',
          },
        },
      },
      {
        type: 'property',
        id: '5323',
        name: 'BMU10风扇',
        dataType: {
          type: 'enum',
          specs: {
            0: '关',
            1: '开',
          },
        },
      },
      {
        type: 'property',
        id: '5313',
        name: '电池模块风扇PWM占空比10',
        dataType: {
          type: 'string',
          specs: {
            unit: '%',
          },
        },
      },
    ],
  },
];
export const batteryModuleItems: any = [
  {
    type: 'group',
    id: 'a',
    name: '电池模块单体信息',
    children: [
      {
        type: 'group',
        id: '1',
        name: '电池模块单体信息',
        showType: 2,
        children: [
          {
            id: '2',
            type: 'service',
            showType: 2,
            children: [
              {
                type: 'property',
                name: '电池模块单体',
                buttons: ['edit'],
                id: '2',
                dataType: {
                  type: 'enum',
                  specs: {
                    0: 'BMU1',
                    1: 'BMU2',
                    2: 'BMU3',
                  },
                },
              },
              {
                type: 'property',
                name: 'BMU SN',
                id: '2',
                dataType: {
                  type: 'string',
                },
              },
            ],
          },
        ],
      },
      {
        type: 'group',
        id: '1',
        name: '电池模块单体信息表',
        showType: 2,
        children: [
          {
            id: '2',
            name: '序号表',
            type: 'service',
            showType: 2,
            children: [
              {
                type: 'property',
                name: '电压1',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压2',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压3',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压4',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压5',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压5',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压7',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压8',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压9',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压10',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压11',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压12',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压13',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压14',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压15',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压16',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压17',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压18',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压19',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压20',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压21',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压22',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压23',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '电压24',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: 'mV',
                  },
                },
              },
              {
                type: 'property',
                name: '温度1',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '℃',
                  },
                },
              },
              {
                type: 'property',
                name: '温度2',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '℃',
                  },
                },
              },
              {
                type: 'property',
                name: '温度3',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '℃',
                  },
                },
              },
              {
                type: 'property',
                name: '温度4',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '℃',
                  },
                },
              },
              {
                type: 'property',
                name: '温度5',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '℃',
                  },
                },
              },
              {
                type: 'property',
                name: '温度6',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '℃',
                  },
                },
              },
              {
                type: 'property',
                name: '温度7',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '℃',
                  },
                },
              },
              {
                type: 'property',
                name: '温度8',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '℃',
                  },
                },
              },
              {
                type: 'property',
                name: '温度9',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '℃',
                  },
                },
              },
              {
                type: 'property',
                name: '温度10',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '℃',
                  },
                },
              },
              {
                type: 'property',
                name: '温度11',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '℃',
                  },
                },
              },
              {
                type: 'property',
                name: '温度12',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '℃',
                  },
                },
              },
              {
                type: 'property',
                name: '温度13',
                id: '2',
                dataType: {
                  type: 'string',
                  specs: {
                    unit: '℃',
                  },
                },
              },
            ],
          },
        ],
      },
    ],
  },
];
