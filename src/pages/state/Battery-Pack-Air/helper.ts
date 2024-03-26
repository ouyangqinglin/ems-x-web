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
          type: 'enum',
          specs: {
            0: '初始化',
            1: '断开',
            2: '连接',
          },
        },
      },
      {
        id: '5160',
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
          type: 'enum',
          specs: {
            0: '断网',
            1: '启动并网',
            2: '离网中',
            3: '并网成功',
            4: '并网失败',
          },
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
      // {
      //   type: 'property',
      //   id: '5331',
      //   name: '接触器状态',
      //   dataType: {
      //     type: 'enum',
      //     specs: {
      //       0: '正常',
      //       1: '故障',
      //     },
      //   },
      // },
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

export const bmuOneV: any = [
  5500, 5501, 5502, 5503, 5504, 5505, 5506, 5507, 5508, 5509, 5510, 5511, 5512, 5513, 5514, 5515,
  5516, 5517, 5518, 5519, 5520, 5521, 5522, 5523,
];
export const bmuTwoV: any = [
  5524, 5525, 5526, 5527, 5528, 5529, 5530, 5531, 5532, 5533, 5534, 5535, 5536, 5537, 5538, 5539,
  5540, 5541, 5542, 5543, 5544, 5545, 5546, 5547,
];
export const bmuThreeV: any = [
  5548, 5549, 5550, 5551, 5552, 5553, 5554, 5555, 5556, 5557, 5558, 5559, 5560, 5561, 5562, 5563,
  5564, 5565, 5566, 5567, 5568, 5569, 5570, 5571,
];
export const bmuFourV: any = [
  5572, 5573, 5574, 5575, 5576, 5577, 5578, 5579, 5580, 5581, 5582, 5583, 5584, 5588, 5586, 5587,
  5588, 5589, 5590, 5591, 5592, 5593, 5594, 5595,
];
export const bmuFiveV: any = [
  5596, 5597, 5598, 5599, 5600, 5601, 5602, 5603, 5604, 5605, 5606, 5607, 5608, 5609, 5610, 5611,
  5612, 5613, 5614, 5615, 5616, 5617, 5618, 5619,
];
export const bmuSixV: any = [
  5620, 5621, 5622, 5623, 5624, 5625, 5626, 5627, 5628, 5629, 5630, 5631, 5632, 5633, 5634, 5635,
  5636, 5637, 5638, 5639, 5640, 5641, 5642, 5643,
];
export const bmuSevenV: any = [
  5644, 5645, 5646, 5647, 5648, 5649, 5650, 5651, 5652, 5653, 5654, 5655, 5656, 5657, 5658, 5659,
  5660, 5661, 5662, 5663, 5664, 5665, 5666, 5667,
];
export const bmuEightV: any = [
  5668, 5669, 5670, 5671, 5672, 5673, 5674, 5675, 5676, 5677, 5678, 5679, 5680, 5681, 5682, 5683,
  5684, 5685, 5686, 5687, 5688, 5689, 5690, 5691,
];
export const bmuNineV: any = [
  5692, 5693, 5694, 5695, 5696, 5697, 5698, 5699, 5700, 5701, 5702, 5703, 5704, 5705, 5706, 5707,
  5708, 5709, 5710, 5711, 5712, 5713, 5714, 5715,
];
export const bmuTenV: any = [
  5716, 5717, 5718, 5719, 5720, 5721, 5722, 5723, 5724, 5725, 5726, 5727, 5728, 5729, 5730, 5731,
  5732, 5733, 5734, 5735, 5736, 5737, 5738, 5739,
];
export const bmuOneT: any = [
  5740, 5741, 5742, 5743, 5744, 5745, 5746, 5747, 5748, 5749, 5750, 5751, 5752,
];
export const bmuTwoT: any = [
  5753, 5754, 5755, 5756, 5757, 5758, 5759, 5760, 5761, 5762, 5763, 5764, 5765,
];
export const bmuThreeT: any = [
  5766, 5767, 5768, 5769, 5770, 5771, 5772, 5773, 5774, 5775, 5776, 5777, 5778,
];
export const bmuFourT: any = [
  5779, 5780, 5781, 5782, 5783, 5784, 5785, 5786, 5787, 5788, 5789, 5790, 5791,
];
export const bmuFiveT: any = [
  5792, 5793, 5794, 5795, 5796, 5797, 5798, 5799, 5800, 5801, 5802, 5803, 5804,
];
export const bmuSixT: any = [
  5805, 5806, 5807, 5808, 5809, 5810, 5811, 5812, 5813, 5814, 5815, 5816, 5817,
];
export const bmuSevenT: any = [
  5818, 5819, 5820, 5821, 5822, 5823, 5824, 5825, 5826, 5827, 5828, 5829, 5830,
];
export const bmuEightT: any = [
  5831, 5832, 5833, 5834, 5835, 5836, 5837, 5838, 5839, 5840, 5841, 5842, 5843,
];
export const bmuNineT: any = [
  5844, 5845, 5846, 5847, 5848, 5849, 5850, 5851, 5852, 5853, 5854, 5855, 5856,
];
export const bmuTenT: any = [
  5857, 5858, 5859, 5860, 5861, 5862, 5863, 5864, 5865, 5866, 5867, 5868, 5869,
];
