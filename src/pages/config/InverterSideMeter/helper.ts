/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-16 09:42:18
 * @LastEditTime: 2024-03-16 11:40:33
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\config\Pcs\helper.ts
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
            id: '30180',
            name: '电表SN',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '30219',
            name: '电表型号',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '30209',
            name: '电表厂商',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '30201',
            name: '电表序号',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '30202',
            name: '电表地址',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
        ],
      },
    ],
  },
];

export const inverterSidMetParamsItems: any = [
  {
    id: 'a',
    name: '参数设置',
    type: 'group',
    children: [
      {
        id: 'a',
        name: '参数设置',
        type: 'service',
        buttons: ['refresh', 'edit'],
        children: [
          {
            id: '52302',
            name: '电流变比',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                unit: '',
              },
              type: 'string',
            },
          },
          {
            id: '52303',
            name: '电压变比',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                unit: '',
              },
              type: 'string',
            },
          },
        ],
      },
    ],
  },
];
