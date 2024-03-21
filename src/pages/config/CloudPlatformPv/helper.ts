/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-16 09:42:18
 * @LastEditTime: 2024-03-16 11:40:33
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\config\Pcs\helper.ts
 */

import { DeviceModelDescribeType } from '@/types/device';

/// 云平台通信接口参数
export const cloudApiItems: any = [
  {
    id: 'a',
    name: '云平台通信接口参数',
    type: 'group',
    children: [
      {
        id: 'a',
        name: '云平台通信接口参数',
        type: 'service',
        buttons: ['refresh', 'edit'],
        children: [
          {
            id: '1',
            name: '通信接口',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'enum',
              specs: {
                0: 'WiFi',
                1: 'LAN1',
                2: 'LAN4',
                3: '4G',
              },
            },
          },
          {
            id: '1',
            name: 'WiFi名称',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '1',
            name: 'WiFi密码',
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
            id: '1',
            name: '连接类型',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'enum',
              specs: {
                0: '静态IP',
                1: 'DHCP',
              },
            },
          },
          {
            id: '1',
            name: '外网IP地址',
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
            id: '1',
            name: '子网掩码',
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
            id: '1',
            name: '网关',
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
            id: '1',
            name: 'DNS服务器',
            type: 'property',
            buttons: ['refresh', 'edit'],
            span: 2,
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

/// 永泰云通信接口参数
export const yotaiComApiItems: any = [
  {
    id: 'a',
    name: '云平台通信接口参数',
    type: 'group',
    children: [
      {
        id: 'a',
        name: '云平台通信接口参数',
        type: 'service',
        buttons: ['refresh', 'edit'],
        children: [
          {
            id: '1',
            name: '通信接口',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'enum',
              specs: {
                0: 'WiFi',
                1: 'LAN1',
                2: 'LAN4',
                3: '4G',
              },
            },
          },
          {
            id: '1',
            name: 'WiFi名称',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '1',
            name: 'WiFi密码',
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
            id: '1',
            name: '连接类型',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'enum',
              specs: {
                0: '静态IP',
                1: 'DHCP',
              },
            },
          },
          {
            id: '1',
            name: '外网IP地址',
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
            id: '1',
            name: '子网掩码',
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
            id: '1',
            name: '网关',
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
            id: '1',
            name: 'DNS服务器',
            type: 'property',
            buttons: ['refresh', 'edit'],
            span: 2,
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

/// 云平台软件连接参数
export const cloudApiSoftwareItems: any = [
  {
    id: 'a',
    name: '云平台软件连接参数',
    type: 'group',
    children: [
      {
        id: 'a',
        name: '云平台软件连接参数',
        type: 'service',
        buttons: ['refresh', 'edit'],
        children: [
          {
            id: '1',
            name: '云平台接入使能',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'enum',
              specs: {
                0: '允许',
                1: '禁止',
              },
            },
          },
          {
            id: '1',
            name: '云平台IP/域名',
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
            id: '1',
            name: '端口',
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
            id: '1',
            name: '账号',
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
            id: '1',
            name: '密码',
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
            id: '1',
            name: '供应商编号',
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
            id: '1',
            name: '产品型号',
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
            id: '1',
            name: '设备ID',
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
            id: '1',
            name: '永泰云IP/域名',
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
