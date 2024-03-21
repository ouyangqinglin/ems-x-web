/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-16 09:42:18
 * @LastEditTime: 2024-03-20 16:26:43
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\state\Pcs\helper.ts
 */

import { DeviceModelDescribeType } from '@/types/device';

export const baseInfoItems: any = [
  {
    id: 'a',
    name: '基本信息',
    type: 'group',
    children: [
      {
        id: '3102',
        name: '变流器SN',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3112',
        name: '变流器厂商',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3122',
        name: '变流器型号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3134',
        name: '变流器额定功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kW',
          },
          type: 'string',
        },
      },
      {
        id: '3100',
        name: '与EMS通信状态',
        type: 'property',
        dataType: {
          specs: {
            0: '初始化',
            1: '断开',
            2: '连接',
          },
          type: 'enum',
        },
      },
      {
        id: '3101',
        name: '与EMS通信方式',
        type: 'property',
        dataType: {
          specs: {
            0: '485',
            1: '未知',
          },
          type: 'enum',
        },
      },
    ],
  },
];

export const versionItems: any = [
  {
    id: 'a',
    name: '版本信息',
    type: 'group',
    children: [
      {
        id: '3200',
        name: 'DSP-V版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3206',
        name: '硬件版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3201',
        name: 'DSP-B版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3207',
        name: 'ARM-V版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3202',
        name: 'DSP-D版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3208',
        name: 'ARM-B版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3203',
        name: 'CPLD-V版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3209',
        name: 'ARM-D版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3204',
        name: 'CPLD-B版本',
        type: 'property',
        span: 2,
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3205',
        name: 'CPLD-D版本',
        type: 'property',
        span: 2,
        dataType: {
          type: 'string',
        },
      },
    ],
  },
];

export const stateItems: any = [
  {
    id: 'a',
    name: '状态信息',
    type: 'group',
    children: [
      {
        id: '3413',
        name: '主从模式',
        type: 'property',
        dataType: {
          specs: {
            0: '从机',
            1: '主机',
          },
          type: 'enum',
        },
      },
      {
        id: '3412',
        name: '离并网模式',
        type: 'property',
        dataType: {
          specs: {
            0: '并网使能',
            1: '离网使能',
          },
          type: 'enum',
        },
      },
      {
        id: '3414',
        name: '输出模式',
        type: 'property',
        dataType: {
          specs: {
            0: '未初始化',
            1: '直流恒流',
            2: '直流恒压',
            3: '直流恒功率',
            4: '交流并网恒功率',
            5: '交流离网恒压',
          },
          type: 'enum',
        },
      },
      {
        id: '3401',
        name: '工作状态',
        type: 'property',
        dataType: {
          specs: {
            0: '停机',
            1: '故障',
            2: '运行',
          },
          type: 'enum',
        },
      },
      {
        id: '3411',
        name: '告警状态',
        type: 'property',
        span: 2,
        dataType: {
          specs: {
            0: '正常',
            1: '告警',
          },
          type: 'enum',
        },
      },
      {
        id: '3754',
        name: '设置有功功率',
        type: 'property',
        span: 2,
        dataType: {
          specs: {
            unit: 'kW',
          },
          type: 'string',
        },
      },
      {
        id: '3755',
        name: '设置无功功率',
        type: 'property',
        span: 2,
        dataType: {
          specs: {
            unit: 'kVar',
          },
          type: 'string',
        },
      },
    ],
  },
];

export const electricEnergyItems: any = [
  {
    id: 'a',
    name: '电能信息',
    type: 'group',
    children: [
      {
        id: '3750',
        name: '今日充电量',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kWh',
          },
          type: 'string',
        },
      },
      {
        id: '3751',
        name: '今日放电量',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kWh',
          },
          type: 'string',
        },
      },
      {
        id: '3752',
        name: '累计充电量',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kWh',
          },
          type: 'string',
        },
      },
      {
        id: '3753',
        name: '累计放电量',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kWh',
          },
          type: 'string',
        },
      },
    ],
  },
];

export const dcSideItems: any = [
  {
    id: 'a',
    name: '直流侧信息',
    type: 'group',
    children: [
      {
        id: '3503',
        name: '直流电压',
        type: 'property',
        dataType: {
          specs: {
            unit: 'V',
          },
          type: 'string',
        },
      },
      {
        id: '3504',
        name: '直流电流',
        type: 'property',
        dataType: {
          specs: {
            unit: 'A',
          },
          type: 'string',
        },
      },
      {
        id: '3505',
        name: '直流功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kW',
          },
          type: 'string',
        },
      },
      {
        id: '3500',
        name: '总母线电压',
        type: 'property',
        dataType: {
          specs: {
            unit: 'V',
          },
          type: 'string',
        },
      },
      {
        id: '3501',
        name: '正母线电压',
        type: 'property',
        dataType: {
          specs: {
            unit: 'V',
          },
          type: 'string',
        },
      },
      {
        id: '3502',
        name: '负母线电压',
        type: 'property',
        dataType: {
          specs: {
            unit: 'V',
          },
          type: 'string',
        },
      },
    ],
  },
];

export const tempItems: any = [
  {
    id: 'a',
    name: '温度信息',
    type: 'group',
    children: [
      {
        id: '3301',
        name: '环境温度',
        type: 'property',
        dataType: {
          specs: {
            unit: '℃',
          },
          type: 'string',
        },
      },
      {
        id: '3307',
        name: '内部温度1',
        type: 'property',
        dataType: {
          specs: {
            unit: '℃',
          },
          type: 'string',
        },
      },
      {
        id: '3308',
        name: '内部温度2',
        type: 'property',
        dataType: {
          specs: {
            unit: '℃',
          },
          type: 'string',
        },
      },
      {
        id: '3309',
        name: '内部温度3',
        type: 'property',
        dataType: {
          specs: {
            unit: '℃',
          },
          type: 'string',
        },
      },
    ],
  },
];

export const epsItems: any = [
  {
    id: 'a',
    name: 'EPS 侧信息',
    type: 'group',
    children: [
      {
        id: '3603',
        name: 'EPS A相电压',
        type: 'property',
        dataType: {
          specs: {
            unit: 'V',
          },
          type: 'string',
        },
      },
      {
        id: '3604',
        name: 'EPS B相电压',
        type: 'property',
        dataType: {
          specs: {
            unit: 'V',
          },
          type: 'string',
        },
      },
      {
        id: '3605',
        name: 'EPS C相电压',
        type: 'property',
        span: 2,
        dataType: {
          specs: {
            unit: 'V',
          },
          type: 'string',
        },
      },
      {
        id: '3606',
        name: 'EPS A相电流',
        type: 'property',
        dataType: {
          specs: {
            unit: 'A',
          },
          type: 'string',
        },
      },
      {
        id: '3607',
        name: 'EPS B相电流',
        type: 'property',
        dataType: {
          specs: {
            unit: 'A',
          },
          type: 'string',
        },
      },
      {
        id: '3608',
        name: 'EPS C相电流',
        type: 'property',
        span: 2,
        dataType: {
          specs: {
            unit: 'A',
          },
          type: 'string',
        },
      },
      {
        id: '3616',
        name: 'EPS A相视在功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kVA',
          },
          type: 'string',
        },
      },
      {
        id: '3617',
        name: 'EPS B相视在功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kVA',
          },
          type: 'string',
        },
      },
      {
        id: '3618',
        name: 'EPS C相视在功率',
        type: 'property',
        span: 2,
        dataType: {
          specs: {
            unit: 'kVA',
          },
          type: 'string',
        },
      },
      {
        id: '3619',
        name: 'EPS A相DCV',
        type: 'property',
        dataType: {
          specs: {
            unit: 'mV',
          },
          type: 'string',
        },
      },
      {
        id: '3620',
        name: 'EPS B相DCV',
        type: 'property',
        dataType: {
          specs: {
            unit: 'mV',
          },
          type: 'string',
        },
      },
      {
        id: '3621',
        name: 'EPS C相DCV',
        type: 'property',
        dataType: {
          specs: {
            unit: 'mV',
          },
          type: 'string',
        },
      },
      {
        id: '3622',
        name: 'EPS 频率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'hz',
          },
          type: 'string',
        },
      },
    ],
  },
];

export const gridSideItems: any = [
  {
    id: 'a',
    name: '电网侧信息',
    type: 'group',
    children: [
      {
        id: '3702',
        name: '电网A相有功功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kW',
          },
          type: 'string',
        },
      },
      {
        id: '3703',
        name: '电网B相有功功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kW',
          },
          type: 'string',
        },
      },
      {
        id: '3704',
        name: '电网C相有功功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kW',
          },
          type: 'string',
        },
      },
      {
        id: '3711',
        name: '电网总有功功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kW',
          },
          type: 'string',
        },
      },
      {
        id: '3708',
        name: '电网A相无功功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kVar',
          },
          type: 'string',
        },
      },
      {
        id: '3709',
        name: '电网B相无功功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kVar',
          },
          type: 'string',
        },
      },
      {
        id: '3710',
        name: '电网C相无功功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kVar',
          },
          type: 'string',
        },
      },
      {
        id: '3712',
        name: '电网总无功功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kVar',
          },
          type: 'string',
        },
      },
      {
        id: '3705',
        name: '电网A相视在功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kVA',
          },
          type: 'string',
        },
      },
      {
        id: '3706',
        name: '电网B相视在功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kVA',
          },
          type: 'string',
        },
      },
      {
        id: '3707',
        name: '电网C相视在功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kVA',
          },
          type: 'string',
        },
      },
      {
        id: '3713',
        name: '电网总视在功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kVA',
          },
          type: 'string',
        },
      },
      {
        id: '3722',
        name: '电网A相功率因数',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3723',
        name: '电网B相功率因数',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3724',
        name: '电网C相功率因数',
        type: 'property',
        span: 2,
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3714',
        name: '电网A相电压',
        type: 'property',
        dataType: {
          specs: {
            unit: 'V',
          },
          type: 'string',
        },
      },
      {
        id: '3715',
        name: '电网B相电压',
        type: 'property',
        dataType: {
          specs: {
            unit: 'V',
          },
          type: 'string',
        },
      },
      {
        id: '3716',
        name: '电网C相电压',
        type: 'property',
        span: 2,
        dataType: {
          specs: {
            unit: 'V',
          },
          type: 'string',
        },
      },
      {
        id: '3725',
        name: '电网A相电流',
        type: 'property',
        dataType: {
          specs: {
            unit: 'A',
          },
          type: 'string',
        },
      },
      {
        id: '3726',
        name: '电网B相电流',
        type: 'property',
        dataType: {
          specs: {
            unit: 'A',
          },
          type: 'string',
        },
      },
      {
        id: '3727',
        name: '电网C相电流',
        type: 'property',
        span: 2,
        dataType: {
          specs: {
            unit: 'A',
          },
          type: 'string',
        },
      },
      {
        id: '3728',
        name: '电网A相DCI',
        type: 'property',
        dataType: {
          specs: {
            unit: 'mA',
          },
          type: 'string',
        },
      },
      {
        id: '3729',
        name: '电网B相DCI',
        type: 'property',
        dataType: {
          specs: {
            unit: 'mA',
          },
          type: 'string',
        },
      },
      {
        id: '3730',
        name: '电网C相DCI',
        type: 'property',
        span: 2,
        dataType: {
          specs: {
            unit: 'mA',
          },
          type: 'string',
        },
      },
      {
        id: '3700',
        name: '电网频率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'hz',
          },
          type: 'string',
        },
      },
      {
        id: '3701',
        name: '当前电网相序',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
    ],
  },
];
