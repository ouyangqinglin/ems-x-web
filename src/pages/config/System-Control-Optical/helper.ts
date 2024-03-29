/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-16 09:42:18
 * @LastEditTime: 2024-03-16 11:40:33
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\config\Pcs\helper.ts
 */

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
            id: '11000',
            name: '控制模式',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'enum',
              specs: {
                0: '本地',
                1: '远程',
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
          {
            id: '11000',
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
          {
            id: '11002',
            name: '系统工作模式切换',
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
          {
            id: '11004',
            name: '系统复位',
            showType: 7,
            buttons: ['edit'],
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
            id: '1',
            name: '工作状态',
            type: 'property',
            buttons: ['refresh'],
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
            showType: 7,
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
