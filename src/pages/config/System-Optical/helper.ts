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
            name: '设备SN',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '3',
            name: '设备厂商',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '2',
            name: '设备型号',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '2',
            name: 'EMS SN',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '4',
            name: 'EMS 型号',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '6',
            name: 'EMS硬件版本',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '8',
            name: 'EMS软件版本',
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

export const systemEnableItems: any = [
  {
    id: 'a',
    name: '系统使能设置',
    type: 'group',
    children: [
      {
        id: 'a',
        name: '系统使能设置',
        type: 'service',
        buttons: ['refresh', 'edit'],
        children: [
          {
            id: '1',
            name: '自启动功能使能',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                0: 'kW',
                1: 'kW',
              },
              type: 'enum',
            },
          },
          {
            id: '1',
            name: '市电充电功能使能',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                0: 'kW',
                1: 'kW',
              },
              type: 'enum',
            },
          },
          {
            id: '1',
            name: '向电网馈电功能使能',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                0: 'kW',
                1: 'kW',
              },
              type: 'enum',
            },
          },
          {
            id: '1',
            name: '离网工作功能使能',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                0: 'kW',
                1: 'kW',
              },
              type: 'enum',
            },
          },
          {
            id: '1',
            name: '并网工作功能使能',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                0: 'kW',
                1: 'kW',
              },
              type: 'enum',
            },
          },
          {
            id: '1',
            name: '防逆流启动',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                0: 'kW',
                1: 'kW',
              },
              type: 'enum',
            },
          },
          {
            id: '1',
            name: '防过流启动',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                0: 'kW',
                1: 'kW',
              },
              type: 'enum',
            },
          },
        ],
      },
    ],
  },
];

export const systemParamsItems: any = [
  {
    id: 'a',
    name: '系统参数设置',
    type: 'group',
    children: [
      {
        id: 'a',
        name: '系统参数设置',
        type: 'service',
        buttons: ['refresh', 'edit'],
        children: [
          {
            id: '1',
            name: '防逆流阈值',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                unit: 'kW',
              },
              type: 'string',
            },
          },
          {
            id: '1',
            name: '变压器最大负荷',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                unit: 'kW',
              },
              type: 'string',
            },
          },
          {
            id: '1',
            name: '需量启动功率',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                unit: 'kW',
              },
              type: 'string',
            },
          },
        ],
      },
    ],
  },
];

export const otherParamsItems: any = [
  {
    id: 'a',
    name: '其他参数设置',
    type: 'group',
    children: [
      {
        id: 'a',
        name: '其他参数设置',
        type: 'service',
        buttons: ['refresh', 'edit'],
        children: [
          {
            id: '1',
            name: '数据上报频率(云平台)',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                unit: 'S',
              },
              type: 'string',
            },
          },
          {
            id: '1',
            name: '数据上报频率(永泰云平台)',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                unit: 'S',
              },
              type: 'string',
            },
          },
          {
            id: '1',
            name: '数据刷新频率(上位机软件)',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                unit: 'S',
              },
              type: 'string',
            },
          },
        ],
      },
    ],
  },
];

export const timeSetItems: any = [
  {
    id: 'a',
    name: '校时设置',
    type: 'group',
    children: [
      {
        id: 'a',
        name: '校时设置',
        type: 'service',
        buttons: ['refresh', 'edit'],
        children: [
          {
            id: '1',
            name: '校时时间',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'timestamp',
            },
          },
        ],
      },
    ],
  },
];
