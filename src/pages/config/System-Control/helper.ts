/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-16 09:42:18
 * @LastEditTime: 2024-04-09 16:00:36
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\config\System-Control\helper.ts
 */

export const baseInfoItems: any = [
  {
    id: 'a',
    name: '系统当前工作模式和状态',
    type: 'group',
    children: [
      {
        type: 'propertyGroup',
        showType: 2,
        name: '系统当前工作模式和状态',
        id: 'sdkas',
        children: [
          {
            id: '50400',
            name: '控制模式',
            buttons: ['refresh'],
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
            buttons: ['refresh'],
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
            buttons: ['refresh'],
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
        ],
      },
      {
        type: 'service',
        id: 'basdsad',
        name: 'sadd',
        showType: 2,
        children: [
          {
            id: '50400',
            name: '系统控制模式切换',
            type: 'property',
            showType: 7,
            buttons: ['edit'],
            dataType: {
              type: 'enum',
              specs: {
                0: '本地',
                1: '远程',
              },
            },
          },
        ],
      },
      {
        type: 'service',
        id: 'basdsad',
        name: 'sadd',
        showType: 2,
        children: [
          {
            id: '50401',
            name: '系统工作模式切换',
            type: 'property',
            showType: 7,
            buttons: ['edit'],
            dataType: {
              type: 'enum',
              specs: {
                0: '削峰填谷',
                1: '备电',
                2: '手动控制',
              },
            },
            disabled: "$data['50400'] != 0",
          },
        ],
      },
      {
        type: 'service',
        id: 'basdsad',
        name: 'sadd',
        showType: 2,
        children: [
          {
            id: '50402',
            name: '系统工作状态控制',
            type: 'property',
            buttons: ['edit'],
            showType: 7,
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
            disabled: "$data['50400']!=0",
          },
        ],
      },
      {
        type: 'propertyGroup',
        showType: 2,
        name: '',
        id: 'sdkas',
        children: [
          {
            id: '50122',
            name: '系统能量统计初始时间',
            buttons: ['refresh'],
            type: 'property',
            dataType: {
              type: 'timestamp',
            },
          },
        ],
      },
      {
        type: 'service',
        id: 'basdsad',
        name: 'sadd',
        showType: 2,
        children: [
          {
            id: '50067',
            name: '能量统计初始化',
            buttons: ['edit'],
            type: 'property',
            showType: 7,
            dataType: {
              type: 'enum',
              specs: {
                1: '有效',
              },
            },
            disabled: "$data['50400']!=0 || $data['50401']!=2",
            tip: '仅系统工作模式为手动控制可用',
          },
        ],
      },
      {
        type: 'service',
        id: 'basdsad',
        name: 'sadd',
        showType: 2,
        children: [
          {
            id: '50416',
            name: '系统复位',
            buttons: ['edit'],
            type: 'property',
            showType: 7,
            dataType: {
              type: 'enum',
              specs: {
                1: '有效',
              },
            },
            tip: '仅系统工作模式为手动控制可用',
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
    tip: '仅系统工作模式为手动控制可用',
    children: [
      {
        type: 'propertyGroup',
        showType: 2,
        name: '系统当前工作模式和状态',
        id: 'sdkas',
        children: [
          {
            id: '50415',
            name: '工作状态',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              specs: {
                1: '启动',
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
      {
        type: 'service',
        id: 'basdsad',
        name: 'sadd',
        showType: 2,
        children: [
          {
            id: '50415',
            name: '电池工作状态控制',
            showType: 7,
            type: 'property',
            buttons: ['edit'],
            dataType: {
              specs: {
                1: '启动',
                2: '充电',
                3: '放电',
                4: '待机',
                5: '停止',
              },
              type: 'enum',
            },
            disabled: "$data['50400']!=0 || $data['50401']!=2",
          },
        ],
      },
    ],
  },
];
