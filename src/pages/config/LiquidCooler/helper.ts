/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-16 09:42:18
 * @LastEditTime: 2024-03-16 11:40:33
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\config\LiquidCooler\helper.ts
 */
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
            id: '32002',
            name: '液冷机SN',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '32035',
            name: '液冷机型号',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '32012',
            name: '液冷机厂商',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '32022',
            name: '液冷机硬件版本',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '32024',
            name: '液冷机软件版本',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '32023',
            name: '软件编码',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '32407',
            name: '压缩机软件版本',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '32408',
            name: '压缩机软件编码',
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

export const liquidCooParamsItems: any = [
  {
    id: 'RunningSetting',
    name: '运行设置',
    type: 'group',
    children: [
      {
        id: 'RunFixedValueSet',
        name: '运行设置',
        type: 'service',
        buttons: ['refresh', 'edit'],
        children: [
          {
            id: '52012',
            name: '液冷机ID',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'long',
            },
          },
          {
            id: '52013',
            name: '波特率',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'enum',
              specs: {
                2: '4800',
                3: '9600',
                4: '19200',
                5: '38400',
                6: '57600',
              },
            },
            showType: 5,
          },
          {
            id: '52002',
            name: '控制温度选择',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'enum',
              specs: {
                0: '电芯平均温度',
                1: '出水温度',
                2: '回水温度',
                3: '电芯权重温度',
              },
            },
            showType: 5,
          },
          {
            id: '52003',
            name: '电芯最大温度',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'double',
              specs: {
                unit: '℃',
                min: '-400',
                unitName: '温度',
                max: '1250',
                step: '0.01',
              },
            },
          },
          {
            id: '52004',
            name: '电芯最小温度',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'double',
              specs: {
                unit: '℃',
                min: '-400',
                unitName: '温度',
                max: '1250',
                step: '0.01',
              },
            },
          },
          {
            id: '52007',
            name: '水温制冷点',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'double',
              specs: {
                unit: '℃',
                min: '50',
                unitName: '温度',
                max: '350',
                step: '0.01',
              },
            },
          },
          {
            id: '52008',
            name: '水温加热点',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'double',
              specs: {
                unit: '℃',
                min: '50',
                unitName: '温度',
                max: '350',
                step: '0.01',
              },
            },
          },
          {
            id: '52009',
            name: '制冷回差',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'double',
              specs: {
                unit: '℃',
                min: '10',
                unitName: '温度',
                max: '100',
                step: '0.01',
              },
            },
          },
          {
            id: '52010',
            name: '加热回差',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'double',
              specs: {
                unit: '℃',
                min: '10',
                unitName: '温度',
                max: '100',
                step: '0.01',
              },
            },
          },
        ],
      },
    ],
  },
];
