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
            name: '光伏控制器SN',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '3',
            name: '光伏控制器型号',
            buttons: ['refresh'],
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '2',
            name: '光伏控制器厂商',
            buttons: ['refresh'],
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '2',
            name: '光伏控制器硬件版本',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '4',
            name: '光伏控制器软件版本',
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

export const paramsItems: any = [
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
            id: '1',
            name: '一般输入过压限值',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                unit: 'V',
              },
              type: 'string',
            },
          },
          {
            id: '1',
            name: '严重输入过压限值',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                unit: 'V',
              },
              type: 'string',
            },
          },
          {
            id: '1',
            name: '一般充电电流限值',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                unit: 'A',
              },
              type: 'string',
            },
          },
          {
            id: '1',
            name: '严重充电电流限值',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                unit: 'A',
              },
              type: 'string',
            },
          },
          {
            id: '1',
            name: '一般过温限值',
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
            name: '严重过温限值',
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
            name: '一般输入欠压限值',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                unit: 'V',
              },
              type: 'string',
            },
          },
          {
            id: '1',
            name: '严重输入欠压限值',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                unit: 'V',
              },
              type: 'string',
            },
          },
          {
            id: '1',
            name: '一般充电功率限值',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                unit: 'kW',
              },
              type: 'string',
            },
          },
          {
            id: '1',
            name: '严重充电功率限值',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                unit: 'kW',
              },
              type: 'string',
            },
          },
          {
            id: '1',
            name: '一般低温限值',
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
            name: '严重低温限值',
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
