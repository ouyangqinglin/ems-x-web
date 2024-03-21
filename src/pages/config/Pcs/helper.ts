/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-16 09:42:18
 * @LastEditTime: 2024-03-21 11:45:36
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
            id: '3102',
            name: '变流器SN',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '3122',
            name: '变流器型号',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '3112',
            name: '变流器厂商',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '3206',
            name: '硬件版本',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '3207',
            name: 'ARM-V版本',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '3208',
            name: 'ARM-B版本',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '3209',
            name: 'ARM-D版本',
            type: 'property',
            buttons: ['refresh'],
            span: 2,
            dataType: {
              type: 'string',
            },
          },
          {
            id: '3200',
            name: 'DSP-V版本',
            buttons: ['refresh'],
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '3201',
            name: 'DSP-B版本',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '3202',
            name: 'DSP-D版本',
            type: 'property',
            buttons: ['refresh'],
            span: 2,
            dataType: {
              type: 'string',
            },
          },
          {
            id: '3203',
            name: 'CPLD-V版本',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '3204',
            name: 'CPLD-B版本',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '3205',
            name: 'CPLD-D版本',
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

export const pcsParamsItems: any = [
  {
    id: 'a',
    name: '变流器参数设置',
    type: 'group',
    children: [
      {
        id: 'a',
        name: '变流器参数设置',
        type: 'service',
        buttons: ['refresh', 'edit'],
        children: [
          {
            id: '50718',
            name: '有功功率设置',
            type: 'property',
            buttons: ['refresh', 'edit'],
            span: 3,
            dataType: {
              specs: {
                unit: 'kW',
              },
              type: 'string',
            },
          },
          {
            id: '50301',
            name: '无功补偿方式',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                0: '无功电流模式',
                1: '功率因数模式',
                2: '无功功率模式',
              },
              type: 'enum',
            },
          },
          {
            id: '50303',
            name: '无功补偿电流',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '50302',
            name: '无功补偿功率因数',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '50304',
            name: '无功功率设置',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                unit: 'kVar',
              },
              type: 'string',
            },
          },
        ],
      },
    ],
  },
];
