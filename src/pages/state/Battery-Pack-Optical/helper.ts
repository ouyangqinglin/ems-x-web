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
        id: '3000',
        name: '电池堆SN',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3010',
        name: '电池堆厂商',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3020',
        name: '电池堆型号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3030',
        name: '与EMS通信状态',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            0: '正常',
            1: '失联',
          },
        },
      },
      {
        id: '3031',
        name: '与EMS通信方式',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            0: '以太网',
            1: 'CAN',
            2: '485',
          },
        },
      },
      {
        id: '3032',
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
        id: '3042',
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
        id: '3052',
        name: 'BCMU型号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3062',
        name: 'BCMU硬件版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3063',
        name: 'BCMU软件版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3064',
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
        id: '3700',
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
        id: '3701',
        type: 'property',
        name: '工作状态',
        dataType: {
          type: 'enum',
          specs: {
            0: '运行',
            1: '运行/充电',
            2: '运行/放电',
            3: '待机',
            4: '停止',
            5: '故障',
          },
        },
      },
      {
        id: '3066',
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
        id: '3067',
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
        id: '3068',
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
        id: '3069',
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
        id: '3070',
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
        id: '3071',
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
        id: '3072',
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
        id: '3073',
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
        id: '3074',
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
        id: '3075',
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
        id: '3076',
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
        id: '3077',
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
        id: '3078',
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
        id: '3079',
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
        id: '3081',
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
        id: '3084',
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
        id: '3085',
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
        id: '3086',
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
        id: '3087',
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
        id: '3088',
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
        id: '3089',
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
        id: '3090',
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
        id: '3091',
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
        id: '3092',
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
        id: '3093',
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
        id: '3094',
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
        id: '3095',
        name: '最高单体电压编号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3096',
        name: '最高单体电压BMU编号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3097',
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
        id: '3098',
        name: '最低单体电压编号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3099',
        name: '最低单体电压BMU编号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3100',
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
        id: '3101',
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
        id: '3102',
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
        id: '3103',
        name: '最高单体温度编号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3104',
        name: '最高单体温度BMU编号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3105',
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
        id: '3106',
        name: '最低单体温度编号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3107',
        name: '最低单体温度BMU编号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3108',
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
        id: '3109',
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
        id: '3110',
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
        id: '3111',
        name: '最高电池电压模块编号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3112',
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
        id: '3113',
        name: '最低电池电压模块编号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3114',
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
        id: '3115',
        name: '最高电池温度模块编号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3116',
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
        id: '3117',
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
        id: '3118',
        name: '预充电阶段',
        dataType: {
          type: 'enum',
          specs: {
            0: '断网',
            1: '启动并网',
            2: '并网中',
            3: '并网成功',
            4: '并网失败',
          },
        },
      },
      {
        type: 'property',
        id: '3119',
        name: '预充接触器状态',
        dataType: {
          type: 'enum',
          specs: {
            0: '闭合',
            1: '断开',
          },
        },
      },
      {
        type: 'property',
        id: '3120',
        name: '隔开开关反馈状态',
        dataType: {
          type: 'enum',
          specs: {
            0: '闭合',
            1: '断开',
          },
        },
      },
      {
        type: 'property',
        id: '3121',
        name: '正极接触器状态',
        dataType: {
          type: 'enum',
          specs: {
            0: '闭合',
            1: '断开',
          },
        },
      },
      {
        type: 'property',
        id: '3122',
        name: '负极接触器状态',
        dataType: {
          type: 'enum',
          specs: {
            0: '闭合',
            1: '断开',
          },
        },
      },
      {
        type: 'property',
        id: '3123',
        name: '接触器KM状态',
        dataType: {
          type: 'enum',
          specs: {
            0: '闭合',
            1: '断开',
          },
        },
      },
      {
        type: 'property',
        id: '3124',
        name: '接触器KP状态',
        dataType: {
          type: 'enum',
          specs: {
            0: '闭合',
            1: '断开',
          },
        },
      },
      {
        type: 'property',
        id: '3125',
        name: '接触器K状态',
        dataType: {
          type: 'enum',
          specs: {
            0: '闭合',
            1: '断开',
          },
        },
      },
      {
        type: 'property',
        id: '1',
        name: 'BMS急停信号',
        dataType: {
          type: 'string',
        },
      },
    ],
  },
];
