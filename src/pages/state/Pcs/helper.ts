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
        name: '变流器SN',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '2',
        name: '变流器厂商',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3',
        name: '变流器型号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '4',
        name: '变流器额定功率',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kW',
          },
          type: 'string',
        },
      },
      {
        id: '5',
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
      },
    ],
  },
];

export const versionItems: any = [
  {
    id: 'a',
    name: '版本信息',
    type: 'group',
    children: [
      {
        id: '1',
        name: 'DSP-V版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '2',
        name: '硬件版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3',
        name: 'DSP-B版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '4',
        name: 'ARM-V版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5',
        name: 'DSP-D版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '6',
        name: 'ARM-B版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '7',
        name: 'CPLD-V版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '8',
        name: 'ARM-D版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '9',
        name: 'CPLD-B版本',
        type: 'property',
        span: 2,
        dataType: {
          type: 'string',
        },
      },
      {
        id: '10',
        name: 'CPLD-D版本',
        type: 'property',
        span: 2,
        dataType: {
          type: 'string',
        },
      },
    ],
  },
];
