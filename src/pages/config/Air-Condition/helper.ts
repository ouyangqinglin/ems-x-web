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
            name: '高温点',
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
            name: '低温点',
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
            name: '高湿点',
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
            name: '内风机停止点',
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
            name: '高温开启值',
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
            name: '高温关闭值',
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
            name: '低温开启值',
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
            name: '低温关闭值',
            buttons: ['refresh', 'edit'],
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
    ],
  },
];

export const runTimeSetItems: any = [
  {
    id: 'a',
    name: '运行时间设置',
    type: 'group',
    children: [
      {
        id: 'a',
        name: '运行时间设置',
        type: 'service',
        buttons: ['refresh', 'edit'],
        children: [
          {
            id: '1',
            name: '开始时间1',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                unit: '℃',
              },
              type: 'timestamp',
            },
          },
          {
            id: '1',
            name: '结束时间1',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                unit: '℃',
              },
              type: 'timestamp',
            },
          },
          {
            id: '1',
            name: '开始时间2',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                unit: '℃',
              },
              type: 'timestamp',
            },
          },
          {
            id: '1',
            name: '结束时间2',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                unit: '℃',
              },
              type: 'timestamp',
            },
          },
          {
            id: '1',
            name: '开始时间3',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                unit: '℃',
              },
              type: 'timestamp',
            },
          },
          {
            id: '1',
            name: '结束时间3',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                unit: '℃',
              },
              type: 'timestamp',
            },
          },
          {
            id: '1',
            name: '开始时间4',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                unit: '℃',
              },
              type: 'timestamp',
            },
          },
          {
            id: '1',
            name: '结束时间4',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                unit: '℃',
              },
              type: 'timestamp',
            },
          },
          {
            id: '1',
            name: '开始时间5',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                unit: '℃',
              },
              type: 'timestamp',
            },
          },
          {
            id: '1',
            name: '结束时间5',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                unit: '℃',
              },
              type: 'timestamp',
            },
          },
        ],
      },
    ],
  },
];
