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
        id: 'a',
        name: '基本信息',
        type: 'service',
        buttons: ['refresh'],
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
        ],
      },
    ],
  },
];

export const runValueItems: any = [
  {
    id: 'a',
    name: '运行定值设置',
    type: 'group',
    children: [
      {
        id: 'a',
        name: '运行定值设置',
        type: 'service',
        buttons: ['refresh', 'edit'],
        children: [
          {
            id: '1',
            name: '制冷点',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                unit: '℃',
              },
              type: 'string',
            },
          },
          {
            id: '1',
            name: '制冷回差',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                unit: '℃',
              },
              type: 'string',
            },
          },
          {
            id: '1',
            name: '加热点',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                unit: '℃',
              },
              type: 'string',
            },
          },
          {
            id: '1',
            name: '加热回差',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                unit: '℃',
              },
              type: 'string',
            },
          },
          {
            id: '1',
            name: '除湿点',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                unit: '℃',
              },
              type: 'string',
            },
          },
          {
            id: '1',
            name: '除湿回差',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                unit: '℃',
              },
              type: 'string',
            },
          },
          {
            id: '1',
            name: '高温告警温度值',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                unit: '℃',
              },
              type: 'string',
            },
          },
          {
            id: '1',
            name: '低温告警温度值',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                unit: '℃',
              },
              type: 'string',
            },
          },
          {
            id: '1',
            name: '高湿告警值',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                unit: '℃',
              },
              type: 'string',
            },
          },
          {
            id: '1',
            name: '除湿使能',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '1',
            name: '内风机提前运转温度',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                unit: '℃',
              },
              type: 'string',
            },
          },
          {
            id: '1',
            name: '待机模式内风机状态',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                0: '1',
                1: '2',
              },
              type: 'enum',
            },
          },
          {
            id: '1',
            name: '通信波特率',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                0: '1',
                1: '2',
              },
              type: 'enum',
            },
          },
          {
            id: '1',
            name: '外部告警选项',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '1',
            name: '排氢间隔时间',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              type: 'string',
              specs: {
                unit: 'H',
              },
            },
          },
          {
            id: '1',
            name: '排氢工作时间',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              type: 'string',
              specs: {
                unit: 'Min',
              },
            },
          },
          {
            id: '1',
            name: '电压告警高限',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              type: 'string',
              specs: {
                unit: 'V',
              },
            },
          },
          {
            id: '1',
            name: '电压告警低限',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              type: 'string',
              specs: {
                unit: 'V',
              },
            },
          },
          {
            id: '1',
            name: '设备通信地址',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '1',
            name: '换热启动温度',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              type: 'string',
              specs: {
                unit: '°C',
              },
            },
          },
          {
            id: '1',
            name: '换热温度回差',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              type: 'string',
              specs: {
                unit: '°C',
              },
            },
          },
          {
            id: '1',
            name: '换热启动温差',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              type: 'string',
              specs: {
                unit: '°C',
              },
            },
          },
          {
            id: '1',
            name: '换热温差回差',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              type: 'string',
              specs: {
                unit: '°C',
              },
            },
          },
        ],
      },
    ],
  },
];
