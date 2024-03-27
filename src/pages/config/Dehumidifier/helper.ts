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
            id: '32802',
            name: '除湿机SN',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '32827',
            name: '除湿机型号',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '32812',
            name: '除湿机厂商',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '32822',
            name: '除湿机硬件版本',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '32823',
            name: '除湿机软件版本',
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

export const dehumidifierParamsItems: any = [
  {
    id: 'a',
    name: '运行设置',
    type: 'group',
    children: [
      {
        id: 'a',
        name: '运行设置',
        type: 'service',
        buttons: ['refresh', 'edit'],
        children: [
          {
            id: '52206',
            name: '设备通讯地址',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                unit: 'V',
              },
              type: 'string',
            },
          },
          {
            id: '52201',
            name: '除湿启控值',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'double',
              specs: {
                unit: '%RH',
                min: '0',
                unitName: '',
                max: '99.9',
                step: '0.01',
              },
            },
          },
          {
            id: '52202',
            name: '除湿停止值',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'double',
              specs: {
                unit: '%RH',
                min: '0',
                unitName: '',
                max: '99.9',
                step: '0.01',
              },
            },
          },
          {
            id: '52203',
            name: '温度启控值',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'double',
              specs: {
                unit: '℃',
                min: '0',
                unitName: '温度',
                max: '99.9',
                step: '0.01',
              },
            },
          },
          {
            id: '52204',
            name: '温度控制回差值',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'double',
              specs: {
                unit: '℃',
                min: '0',
                unitName: '温度',
                max: '20',
                step: '0.01',
              },
            },
          },
          {
            id: '52205',
            name: '冷凝片除冰值',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'double',
              specs: {
                unit: '℃',
                min: '-9',
                unitName: '温度',
                max: '9',
                step: '0.01',
              },
            },
          },
        ],
      },
    ],
  },
];
