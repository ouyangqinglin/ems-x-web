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
            id: '30002',
            name: '空调SN',
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '30012',
            name: '空调厂商',
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '30039',
            name: '空调型号',
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '30022',
            name: '空调硬件版本',
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '30023',
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
            id: '51200',
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
            id: '51201',
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
            id: '51202',
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
            id: '51203',
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
            id: '51204',
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
            id: '51205',
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
            id: '51206',
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
            id: '51207',
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
            id: '51208',
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
            id: '51209',
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
            id: '51210',
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
            id: '51211',
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
            id: '51212',
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
            id: '51213',
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
            id: '51216',
            name: '开始时间1(HH:MM)',
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
            id: '51218',
            name: '结束时间1(HH:MM)',
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
            id: '51220',
            name: '开始时间2(HH:MM)',
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
            id: '51222',
            name: '结束时间2(HH:MM)',
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
            id: '51224',
            name: '开始时间3(HH:MM)',
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
            id: '51226',
            name: '结束时间3(HH:MM)',
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
            id: '51228',
            name: '开始时间4(HH:MM)',
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
            id: '51230',
            name: '结束时间4(HH:MM)',
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
            id: '51232',
            name: '开始时间5(HH:MM)',
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
            id: '51234',
            name: '结束时间5(HH:MM)',
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
