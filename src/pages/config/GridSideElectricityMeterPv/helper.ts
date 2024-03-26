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
            id: '5035',
            name: '电表SN',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '5045',
            name: '电表型号',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '5055',
            name: '电表厂商',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '5065',
            name: '电表序号',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '5066',
            name: '电表地址',
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

export const gridSidEleMetParamsItems: any = [
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
            id: '12402',
            name: '电流变比',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                unit: '',
              },
              type: 'string',
            },
          },
          {
            id: '12403',
            name: '电压变比',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                unit: '',
              },
              type: 'string',
            },
          },
        ],
      },
    ],
  },
];
