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
            id: '50400',
            name: '控制模式',
            type: 'property',
            dataType: {
              type: 'enum',
              specs: {
                0: '本地',
                1: '远程',
              },
            },
          },
          {
            id: '50401',
            name: '工作模式',
            type: 'property',
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
            id: '50402',
            name: '工作状态',
            type: 'property',
            dataType: {
              type: 'enum',
              specs: {
                0: '启动',
                1: '待机',
                2: '停止',
                3: '急停',
                4: '复位',
              },
            },
          },
          {
            id: '50400',
            name: '系统控制模式切换',
            type: 'property',
            buttons: ['edit'],
            dataType: {
              type: 'enum',
              specs: {
                0: '本地',
                1: '远程',
              },
            },
          },
          {
            id: '50401',
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
            id: '50402',
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
                4: '复位',
              },
            },
          },
          // {
          //   id: '8',
          //   name: '系统能量统计初始化',
          //   type: 'property',
          //   buttons: ['refresh'],
          //   dataType: {
          //     type: 'string',
          //   },
          // },
          {
            id: '50416',
            name: '系统复位',
            buttons: ['refresh'],
            type: 'property',
            dataType: {
              type: 'enum',
              specs: {
                1: '有效',
              },
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
            id: '50414',
            name: '工作状态',
            type: 'property',
            dataType: {
              specs: {
                1: '正常',
                2: '核容',
                3: '均衡',
                4: '调试',
              },
              type: 'enum',
            },
          },
          {
            id: '50414',
            name: '电池工作状态控制',
            type: 'property',
            buttons: ['edit'],
            dataType: {
              specs: {
                1: '正常',
                2: '充电',
                3: '放电',
                4: '待机',
                5: '停止',
              },
              type: 'enum',
            },
          },
        ],
      },
    ],
  },
];
