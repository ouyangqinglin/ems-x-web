/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-16 09:42:18
 * @LastEditTime: 2024-03-16 10:52:13
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
        id: '1',
        name: '空调SN',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '2',
        name: '空调厂商',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3',
        name: '空调型号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '4',
        name: '空调硬件版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5',
        name: '空调软件版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '6',
        name: '与EMS通信状态',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '6',
        name: '与EMS通信方式',
        type: 'property',
        dataType: {
          type: 'string',
        },
      }
    ],
  },
];

export const statusItems: any = [
  {
    id: 'a',
    name: '状态信息',
    type: 'group',
    children: [
      {
        id: '50',
        type: 'property',
        name: '空调机组控制模式',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1',
        type: 'property',
        name: '空调机组工作状态',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '2',
        type: 'property',
        name: '空调告警状态',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3',
        type: 'property',
        name: '内风机运行状态',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '4',
        type: 'property',
        name: '外风机运行状态',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5',
        type: 'property',
        name: '自检状态',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '6',
        type: 'property',
        name: '制冷运行状态',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '7',
        type: 'property',
        name: '制热运行状态',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '8',
        type: 'property',
        name: '除湿状态',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '9',
        type: 'property',
        name: '排氢运行状态',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '10',
        type: 'property',
        name: '干接点告警输出状态',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '11',
        type: 'property',
        name: '室外温度',
        dataType: {
          type: 'string',
          specs: {
            unit: '°C',
          },
        },
      },
      {
        id: '11',
        type: 'property',
        name: '室内温度',
        dataType: {
          type: 'string',
          specs: {
            unit: '°C',
          },
        },
      },
      {
        id: '11',
        type: 'property',
        name: '冷凝盘管温度',
        dataType: {
          type: 'string',
          specs: {
            unit: '°C',
          },
        },
      },
      {
        id: '11',
        type: 'property',
        name: '回风温度',
        dataType: {
          type: 'string',
          specs: {
            unit: '°C',
          },
        },
      },
      {
        id: '11',
        type: 'property',
        name: '压缩机/加热器电流',
        dataType: {
          type: 'string',
          specs: {
            unit: 'A',
          },
        },
      },
      {
        id: '11',
        type: 'property',
        name: '内风机电流',
        dataType: {
          type: 'string',
          specs: {
            unit: 'A',
          },
        },
      },
      {
        id: '11',
        type: 'property',
        name: '外风机电流',
        dataType: {
          type: 'string',
          specs: {
            unit: 'A',
          },
        },
      },
      {
        id: '12',
        type: 'property',
        name: '电源电压',
        dataType: {
          type: 'string',
          specs: {
            unit: 'V',
          },
        },
      },
      {
        id: '13',
        type: 'property',
        name: '蒸发盘管温度',
        dataType: {
          type: 'string',
          specs: {
            unit: '°C',
          },
        },
      },
      {
        id: '14',
        type: 'property',
        name: '内风机转速',
        dataType: {
          type: 'string',
          specs: {
            unit: 'RPM',
          },
        },
      },
      {
        id: '14',
        type: 'property',
        name: '外风机转速',
        dataType: {
          type: 'string',
          specs: {
            unit: 'RPM',
          },
        },
      },
      {
        id: '14',
        type: 'property',
        name: '变频压缩机转速',
        dataType: {
          type: 'string',
          specs: {
            unit: 'RPM',
          },
        },
      },
      {
        id: '15',
        type: 'property',
        name: '设备累计运行时间',
        dataType: {
          type: 'string',
          specs: {
            unit: '天',
          },
        },
      },
      {
        id: '16',
        type: 'property',
        name: '压缩机累计运行时间',
        dataType: {
          type: 'string',
          specs: {
            unit: 'H',
          },
        },
      },
      {
        id: '16',
        type: 'property',
        name: '加热器累计运行时间',
        dataType: {
          type: 'string',
          specs: {
            unit: 'H',
          },
        },
      },
      {
        id: '16',
        type: 'property',
        name: '内风机累计运行时间',
        dataType: {
          type: 'string',
          specs: {
            unit: 'H',
          },
        },
      },
      {
        id: '16',
        type: 'property',
        name: '外风机累计运行时间',
        dataType: {
          type: 'string',
          specs: {
            unit: 'H',
          },
        },
      },
    ],
  },
];
