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
    name: '系统当前工作模式和状态',
    type: 'group',
    children: [
      {
        id: 'a',
        name: '系统当前工作模式和状态',
        type: 'service',
        buttons: ['refresh'],
        children: [
          {
            id: '1',
            name: '控制模式',
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '3',
            name: '工作模式',
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '2',
            name: '工作状态',
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '2',
            name: '系统控制模式切换',
            type: 'property',
            buttons: ['edit'],
            dataType: {
              type: 'enum',
              specs: {
                0: '削峰填谷',
                1: '备电',
                2: '手动控制',
              },
            },
          },
          {
            id: '4',
            name: '系统工作模式切换',
            type: 'property',
            buttons: ['edit'],
            dataType: {
              type: 'enum',
              specs: {
                0: '削峰填谷',
                1: '备电',
                2: '手动控制',
              },
            },
          },
          {
            id: '6',
            name: '系统工作状态控制',
            type: 'property',
            buttons: ['edit'],
            dataType: {
              type: 'enum',
              specs: {
                0: '启动',
                1: '待机',
                2: '停止',
                3: '急停',
              },
            },
          },
          {
            id: '8',
            name: '系统能量统计初始化',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '1',
            name: '系统复位',
            buttons: ['refresh'],
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

export const batteryModeItems: any = [
  {
    id: 'a',
    name: '电池当前工作模式和状态',
    type: 'group',
    children: [
      {
        id: 'a',
        name: '电池当前工作模式和状态',
        type: 'service',
        buttons: ['refresh'],
        children: [
          {
            id: '1',
            name: '工作状态',
            type: 'property',
            dataType: {
              specs: {
                0: '充电',
                1: '启动',
                2: '放电',
              },
              type: 'enum',
            },
          },
          {
            id: '1',
            name: '电池工作状态控制',
            type: 'property',
            buttons: ['edit'],
            dataType: {
              specs: {
                0: '充电',
                1: '启动',
                2: '放电',
              },
              type: 'enum',
            },
          },
        ],
      },
    ],
  },
];
