/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-16 09:42:18
 * @LastEditTime: 2024-05-27 16:42:42
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\state\PcsPv\helper.ts
 */

import { DeviceModelDescribeType } from '@/types/device';

export const baseInfoItems: any = [
  {
    id: 'a',
    name: '基本信息',
    type: 'group',
    children: [
      {
        id: '2610',
        name: '变流器SN',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '2620',
        name: '变流器厂商',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '2630',
        name: '变流器型号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '2640',
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
        id: '2641',
        name: '与EMS通信状态',
        type: 'property',
        dataType: {
          specs: {
            0: '正常',
            1: '失联',
          },
          type: 'enum',
        },
      },
      {
        id: '2642',
        name: '与EMS通信方式',
        type: 'property',
        dataType: {
          specs: {
            0: 'RS485',
            1: '未知',
          },
          type: 'enum',
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
        id: '2655',
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
        id: '2819',
        name: '离并网模式',
        type: 'property',
        dataType: {
          specs: {
            1: '离网',
            2: '并网',
            3: '并网（仅馈电）',
            4: '并网（仅市电充电）',
          },
          type: 'enum',
        },
      },
      {
        id: '2657',
        name: 'PV连接状态',
        type: 'property',
        dataType: {
          specs: {
            0: '没连接',
            1: '仅PV1',
            2: '仅PV2',
            3: '两路独立',
            4: '两路并接',
          },
          type: 'enum',
        },
      },
      {
        id: '2820',
        name: '工作状态',
        type: 'property',
        dataType: {
          specs: {
            0: '等待',
            1: '检查',
            2: '正常',
            3: '故障',
            4: '',
            5: '升级',
            6: '关机',
          },
          type: 'enum',
        },
      },
      {
        id: '2780',
        name: '电池类型',
        type: 'property',
        span: 2,
        dataType: {
          specs: {
            1: '铅酸电池',
            2: '磷酸铁锂电池',
          },
          type: 'enum',
        },
      },
      {
        id: '2777',
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
        id: '2778',
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
        id: '2666',
        name: 'PV日输出电量',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kWh',
          },
          type: 'string',
        },
      },
      {
        id: '2662',
        name: 'PV年输出电量',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kWh',
          },
          type: 'string',
        },
      },
      {
        id: '2660',
        name: 'PV总输出电量',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kWh',
          },
          type: 'string',
        },
      },
      {
        id: '2682',
        name: '逆变日输出EPS电量',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kWh',
          },
          type: 'string',
        },
      },
      {
        id: '2678',
        name: '逆变年输出EPS电量',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kWh',
          },
          type: 'string',
        },
      },
      {
        id: '2676',
        name: '逆变总输出EPS电量',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kWh',
          },
          type: 'string',
        },
      },
      {
        id: '2690',
        name: '逆变器日输出电量',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kWh',
          },
          type: 'string',
        },
      },
      {
        id: '2686',
        name: '逆变器年输出电量',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kWh',
          },
          type: 'string',
        },
      },
      {
        id: '2684',
        name: '逆变器总输出电量',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kWh',
          },
          type: 'string',
        },
      },
      {
        id: '2697',
        name: '逆变器日用电量',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kWh',
          },
          type: 'string',
        },
      },
      {
        id: '2693',
        name: '逆变器年用电量',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kWh',
          },
          type: 'string',
        },
      },
      {
        id: '2691',
        name: '逆变器总用电量',
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

export const pvSideItems: any = [
  {
    id: 'a',
    name: '光伏侧信息',
    type: 'group',
    children: [
      {
        id: '2710',
        name: 'PV1电压',
        type: 'property',
        dataType: {
          specs: {
            unit: 'V',
          },
          type: 'string',
        },
      },
      {
        id: '2711',
        name: 'PV2电压',
        type: 'property',
        dataType: {
          specs: {
            unit: 'V',
          },
          type: 'string',
        },
      },
      {
        id: '2712',
        name: 'PV3电压',
        type: 'property',
        dataType: {
          specs: {
            unit: 'V',
          },
          type: 'string',
        },
      },
      {
        id: '2713',
        name: 'PV4电压',
        type: 'property',
        dataType: {
          specs: {
            unit: 'V',
          },
          type: 'string',
        },
      },
      {
        id: '2714',
        name: 'PV5电压',
        type: 'property',
        dataType: {
          specs: {
            unit: 'V',
          },
          type: 'string',
        },
      },
      {
        id: '2715',
        name: 'PV6电压',
        type: 'property',
        dataType: {
          specs: {
            unit: 'V',
          },
          type: 'string',
        },
      },
      {
        id: '2716',
        name: 'PV7电压',
        type: 'property',
        dataType: {
          specs: {
            unit: 'V',
          },
          type: 'string',
        },
      },
      {
        id: '2717',
        name: 'PV8电压',
        type: 'property',
        dataType: {
          specs: {
            unit: 'V',
          },
          type: 'string',
        },
      },
      {
        id: '2720',
        name: 'PV1电流',
        type: 'property',
        dataType: {
          specs: {
            unit: 'A',
          },
          type: 'string',
        },
      },
      {
        id: '2721',
        name: 'PV2电流',
        type: 'property',
        dataType: {
          specs: {
            unit: 'A',
          },
          type: 'string',
        },
      },
      {
        id: '2722',
        name: 'PV3电流',
        type: 'property',
        dataType: {
          specs: {
            unit: 'A',
          },
          type: 'string',
        },
      },
      {
        id: '2723',
        name: 'PV4电流',
        type: 'property',
        dataType: {
          specs: {
            unit: 'A',
          },
          type: 'string',
        },
      },
      {
        id: '2724',
        name: 'PV5电流',
        type: 'property',
        dataType: {
          specs: {
            unit: 'A',
          },
          type: 'string',
        },
      },
      {
        id: '2725',
        name: 'PV6电流',
        type: 'property',
        dataType: {
          specs: {
            unit: 'A',
          },
          type: 'string',
        },
      },
      {
        id: '2726',
        name: 'PV7电流',
        type: 'property',
        dataType: {
          specs: {
            unit: 'A',
          },
          type: 'string',
        },
      },
      {
        id: '2727',
        name: 'PV8电流',
        type: 'property',
        dataType: {
          specs: {
            unit: 'A',
          },
          type: 'string',
        },
      },
      {
        id: '2730',
        name: 'PV输出总功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kW',
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
        id: '2705',
        name: '散热片温度',
        type: 'property',
        dataType: {
          specs: {
            unit: '℃',
          },
          type: 'string',
        },
      },
      {
        id: '2706',
        name: 'INV 模块温度',
        type: 'property',
        dataType: {
          specs: {
            unit: '℃',
          },
          type: 'string',
        },
      },
      {
        id: '2707',
        name: 'Boost 模块温度',
        type: 'property',
        dataType: {
          specs: {
            unit: '℃',
          },
          type: 'string',
        },
      },
      {
        id: '2708',
        name: '电池模块温度',
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

export const inverterSideItems: any = [
  {
    id: 'a',
    name: '逆变侧信息',
    type: 'group',
    children: [
      {
        id: '2770',
        name: '逆变有功功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kW',
          },
          type: 'string',
        },
      },
      {
        id: '2772',
        name: '逆变无功功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kW',
          },
          type: 'string',
        },
      },
      {
        id: '2774',
        name: '逆变功率因数',
        type: 'property',
        dataType: {
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
        id: '2742',
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
        id: '2743',
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
        id: '2744',
        name: 'EPS C相电压',
        type: 'property',
        dataType: {
          specs: {
            unit: 'V',
          },
          type: 'string',
        },
      },
      {
        id: '2745',
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
        id: '2746',
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
        id: '2747',
        name: 'EPS C相电流',
        type: 'property',
        dataType: {
          specs: {
            unit: 'A',
          },
          type: 'string',
        },
      },
      {
        id: '2749',
        name: 'EPS 有功功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kW',
          },
          type: 'string',
        },
      },
      {
        id: '2751',
        name: 'EPS 无功功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kVar',
          },
          type: 'string',
        },
      },
      {
        id: '2753',
        name: 'EPS功率因数',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '2748',
        name: 'EPS频率',
        type: 'property',
        dataType: {
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
        id: '2732',
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
        id: '2733',
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
        id: '2734',
        name: '电网C相电压',
        type: 'property',
        dataType: {
          specs: {
            unit: 'V',
          },
          type: 'string',
        },
      },
      {
        id: '2735',
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
        id: '2736',
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
        id: '2737',
        name: '电网C相电流',
        type: 'property',
        dataType: {
          specs: {
            unit: 'A',
          },
          type: 'string',
        },
      },
      {
        id: '2738',
        name: '电网RS线电压',
        type: 'property',
        dataType: {
          specs: {
            unit: 'V',
          },
          type: 'string',
        },
      },
      {
        id: '2739',
        name: '电网RT线电压',
        type: 'property',
        dataType: {
          specs: {
            unit: 'V',
          },
          type: 'string',
        },
      },
      {
        id: '2740',
        name: '电网ST线电压',
        type: 'property',
        dataType: {
          specs: {
            unit: 'V',
          },
          type: 'string',
        },
      },
      {
        id: '2741',
        name: '电网频率',
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

export const meterItems: any = [
  {
    id: 'a',
    name: '电表信息',
    type: 'group',
    children: [
      {
        id: '2800',
        name: '电表A相电压',
        type: 'property',
        dataType: {
          specs: {
            unit: 'V',
          },
          type: 'string',
        },
      },
      {
        id: '2802',
        name: '电表B相电压',
        type: 'property',
        dataType: {
          specs: {
            unit: 'V',
          },
          type: 'string',
        },
      },
      {
        id: '2804',
        name: '电表C相电压',
        type: 'property',
        dataType: {
          specs: {
            unit: 'V',
          },
          type: 'string',
        },
      },
      {
        id: '2801',
        name: '电表A相电流',
        type: 'property',
        dataType: {
          specs: {
            unit: 'A',
          },
          type: 'string',
        },
      },
      {
        id: '2803',
        name: '电表B相电流',
        type: 'property',
        dataType: {
          specs: {
            unit: 'A',
          },
          type: 'string',
        },
      },
      {
        id: '2805',
        name: '电表C相电流',
        type: 'property',
        dataType: {
          specs: {
            unit: 'A',
          },
          type: 'string',
        },
      },
      {
        id: '2809',
        name: '电表有功功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kW',
          },
          type: 'string',
        },
      },
      {
        id: '2811',
        name: '电表无功功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kVar',
          },
          type: 'string',
        },
      },
      {
        id: '2807',
        name: '电表视在功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kVA',
          },
          type: 'string',
        },
      },
      {
        id: '2814',
        name: '电表输出电量',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kW',
          },
          type: 'string',
        },
      },
      {
        id: '2816',
        name: '电网馈入电量',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kW',
          },
          type: 'string',
        },
      },
      {
        id: '2806',
        name: '电表频率',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '2818',
        name: '电表标志位',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
    ],
  },
];
