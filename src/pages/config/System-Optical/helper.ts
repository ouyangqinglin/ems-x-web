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
            id: '1000',
            name: '设备SN',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '1010',
            name: '设备厂商',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '1020',
            name: '设备型号',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '1057',
            name: 'EMS SN',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '1067',
            name: 'EMS 型号',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '1077',
            name: 'EMS硬件版本',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '1078',
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

const commonEnumType: any = {
  specs: {
    0: '使能',
    1: '禁止',
  },
  type: 'enum',
};
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
            id: '11100',
            name: '自启动功能使能',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: commonEnumType,
          },
          {
            id: '11101',
            name: '市电充电功能使能',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: commonEnumType,
          },
          {
            id: '11102',
            name: '向电网馈电功能使能',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: commonEnumType,
          },
          {
            id: '11103',
            name: '离网工作功能使能',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: commonEnumType,
          },
          {
            id: '11104',
            name: '并网工作功能使能',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: commonEnumType,
          },
          {
            id: '11106',
            name: '防逆流启动',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: commonEnumType,
          },
          {
            id: '11107',
            name: '防过流启动',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: commonEnumType,
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
            id: '11200',
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
            id: '11201',
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
            id: '11202',
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
            id: '11250',
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
            id: '11251',
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
            id: '11252',
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
