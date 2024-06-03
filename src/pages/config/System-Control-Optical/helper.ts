/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-16 09:42:18
 * @LastEditTime: 2024-06-03 14:30:33
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\config\System-Control-Optical\helper.ts
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
            id: '11000',
            name: '控制模式',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'enum',
              specs: {
                1: '就地',
                2: '远程',
              },
            },
          },
          {
            id: '11001',
            name: '工作模式',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'enum',
              specs: {
                0: '削峰填谷',
                1: '备电',
                2: '手动控制',
                3: '自发自用',
                4: '售电模式',
              },
            },
          },
          {
            id: '11002',
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
            id: '11000',
            name: '系统控制模式切换',
            type: 'property',
            showType: 7,
            buttons: ['edit'],
            dataType: {
              type: 'enum',
              specs: {
                1: '就地',
                2: '远程',
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
            id: '11001',
            name: '系统工作模式切换',
            showType: 7,
            type: 'property',
            buttons: ['edit'],
            dataType: {
              type: 'enum',
              specs: {
                0: '削峰填谷',
                1: '备电',
                2: '手动控制',
                3: '自发自用',
                4: '售电模式',
              },
            },
            disabled: "$data['11000'] != 0",
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
            id: '11002',
            name: '系统工作状态切换',
            showType: 7,
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
            disabled: "$data['11000']!=0",
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
            id: '1503',
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
            id: '11003',
            name: '能量统计初始化',
            buttons: ['edit'],
            type: 'property',
            showType: 7,
            dataType: {
              type: 'enum',
              specs: {
                1: '执行',
              },
            },
            disabled: "$data['11000']!=0 || $data['11001']!=2",
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
            id: '11004',
            name: '系统复位',
            showType: 7,
            buttons: ['edit'],
            type: 'property',
            dataType: {
              type: 'enum',
              specs: {
                1: '执行',
              },
            },
          },
        ],
      },
      // {
      //   id: '11003',
      //   name: '系统能量统计初始化',
      //   type: 'property',
      //   buttons: ['refresh'],
      //   showType: 7,
      //   dataType: {
      //     type: 'enum',
      //     specs: {
      //       11003: '执行'
      //     }
      //   },
      // },
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
        id: 'tian',
        type: 'propertyGroup',
        showType: 2,
        name: 'sds',
        children: [
          {
            id: '11008',
            name: '工作状态',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              specs: {
                1: '启动',
                2: '充电',
                3: '放电',
              },
              type: 'enum',
            },
          },
        ],
      },
      {
        type: 'service',
        id: 'basdssad',
        name: 'sasdd',
        showType: 2,
        children: [
          {
            id: '11008',
            name: '电池工作状态控制',
            type: 'property',
            showType: 7,
            buttons: ['edit'],
            dataType: {
              specs: {
                1: '启动',
                2: '充电',
                3: '放电',
              },
              type: 'enum',
            },
            disabled: "$data['11000']!=0 || $data['11001']!=2",
          },
        ],
      },
    ],
  },
];
