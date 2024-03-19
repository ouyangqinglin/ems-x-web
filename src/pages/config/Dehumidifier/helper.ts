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
            name: '变流器SN',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '3',
            name: '变流器型号',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '2',
            name: '变流器厂商',
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
    name: '变流器参数设置',
    type: 'group',
    children: [
      {
        id: 'a',
        name: '变流器参数设置',
        type: 'service',
        buttons: ['refresh', 'edit'],
        children: [
          {
            id: '1',
            name: '直流恒流电流设置值',
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
            id: '1',
            name: '直流恒压电压设置值',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                unit: 'A',
              },
              type: 'string',
            },
          },
          {
            id: '1',
            name: '直流恒功率功率设置值',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                unit: 'kW',
              },
              type: 'string',
            },
          },
          {
            id: '1',
            name: '交流恒压电压设置值',
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
            id: '1',
            name: '交流恒压电压频率设置值',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                unit: 'hz',
              },
              type: 'string',
            },
          },
          {
            id: '1',
            name: '直流源电压设置值',
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
            id: '1',
            name: '充电终止电压设置值',
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
            id: '1',
            name: '放电终止电压设置值',
            type: 'property',
            buttons: ['refresh', 'edit'],
            span: 2,
            dataType: {
              specs: {
                unit: 'V',
              },
              type: 'string',
            },
          },
          {
            id: '1',
            name: '电池过压电压设置值',
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
            id: '1',
            name: '电池欠压电压设置值',
            type: 'property',
            buttons: ['refresh', 'edit'],
            span: 2,
            dataType: {
              specs: {
                unit: 'V',
              },
              type: 'string',
            },
          },
          {
            id: '1',
            name: '最大充电电流设置值',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                unit: 'A',
              },
              type: 'string',
            },
          },
          {
            id: '1',
            name: '最大放电电流设置值',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                unit: 'A',
              },
              type: 'string',
            },
          },
          {
            id: '1',
            name: '充电截止电流设置值',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                unit: 'A',
              },
              type: 'string',
            },
          },
          {
            id: '1',
            name: '直流电压过压保护点',
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
            id: '1',
            name: '直流电压欠压保护点',
            type: 'property',
            buttons: ['refresh', 'edit'],
            span: 2,
            dataType: {
              specs: {
                unit: 'V',
              },
              type: 'string',
            },
          },
          {
            id: '1',
            name: 'RS485通信地址设置值',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '1',
            name: 'RS485通信波特率设置值',
            type: 'property',
            buttons: ['refresh', 'edit'],
            span: 2,
            dataType: {
              type: 'string',
            },
          },
        ],
      },
    ],
  },
];
