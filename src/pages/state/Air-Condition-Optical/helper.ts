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
        id: '5500',
        name: '空调SN',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5510',
        name: '空调厂商',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5520',
        name: '空调型号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5530',
        name: '空调硬件版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5531',
        name: '空调软件版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5532',
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
        id: '5533',
        name: '与EMS通信方式',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            0: '485',
            1: '未知',
          },
        },
      },
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
        id: '5560',
        type: 'property',
        name: '空调机组工作状态',
        dataType: {
          dataType: {
            type: 'enum',
            specs: {
              0: '停止',
              1: '运行',
              2: '故障',
            },
          },
        },
      },
      {
        id: '5534',
        type: 'property',
        name: '空调告警状态',
        dataType: {
          type: 'enum',
          specs: {
            0: '正常',
            1: '告警',
          },
        },
      },
      {
        id: '5535',
        type: 'property',
        name: '内风机运行状态',
        dataType: {
          type: 'enum',
          specs: {
            0: '停止',
            1: '运行',
          },
        },
      },
      {
        id: '5536',
        type: 'property',
        name: '外风机运行状态',
        dataType: {
          type: 'enum',
          specs: {
            0: '停止',
            1: '运行',
          },
        },
      },
      {
        id: '5539',
        type: 'property',
        name: '自检状态',
        dataType: {
          type: 'enum',
          specs: {
            0: '停止',
            1: '运行',
          },
        },
      },
      {
        id: '5540',
        type: 'property',
        name: '制冷运行状态',
        dataType: {
          type: 'enum',
          specs: {
            0: '停止',
            1: '运行',
          },
        },
      },
      {
        id: '5541',
        type: 'property',
        name: '制热运行状态',
        dataType: {
          type: 'enum',
          specs: {
            0: '停止',
            1: '运行',
          },
        },
      },
      {
        id: '5542',
        type: 'property',
        name: '除湿状态',
        dataType: {
          type: 'enum',
          specs: {
            0: '停止',
            1: '运行',
          },
        },
      },
      {
        id: '5543',
        type: 'property',
        name: '排氢运行状态',
        dataType: {
          type: 'enum',
          specs: {
            0: '停止',
            1: '运行',
          },
        },
      },
      {
        id: '5544',
        type: 'property',
        name: '干接点告警输出状态',
        dataType: {
          type: 'enum',
          specs: {
            0: '停止',
            1: '运行',
          },
        },
      },
      {
        id: '5537',
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
        id: 'fffff',
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
        id: '5546',
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
        id: '5545',
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
        id: '5547',
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
        id: '5548',
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
        id: '5549',
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
        id: '5550',
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
        id: '5551',
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
        id: '5552',
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
        id: '5553',
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
        id: '5554',
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
        id: '5555',
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
        id: '5556',
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
        id: '5557',
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
        id: '5558',
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
        id: '5559',
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
