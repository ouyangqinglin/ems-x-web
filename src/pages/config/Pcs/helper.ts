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
            id: '1',
            name: '变流器SN',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '3',
            name: '变流器型号',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '2',
            name: '变流器厂商',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '2',
            name: '硬件版本',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '4',
            name: 'ARM-V版本',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '6',
            name: 'ARM-B版本',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '8',
            name: 'ARM-D版本',
            type: 'property',
            buttons: ['refresh'],
            span: 2,
            dataType: {
              type: 'string',
            },
          },
          {
            id: '1',
            name: 'DSP-V版本',
            buttons: ['refresh'],
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '3',
            name: 'DSP-B版本',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '5',
            name: 'DSP-D版本',
            type: 'property',
            buttons: ['refresh'],
            span: 2,
            dataType: {
              type: 'string',
            },
          },
          {
            id: '7',
            name: 'CPLD-V版本',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '9',
            name: 'CPLD-B版本',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '10',
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
            id: '1',
            name: '直流电压过压保护点',
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
            id: '1',
            name: '直流电压欠压保护点',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                unit: 'V',
              },
              type: 'string',
            },
          },
        ],
      },
    ],
  },
];
