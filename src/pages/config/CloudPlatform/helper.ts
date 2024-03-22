/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-16 09:42:18
 * @LastEditTime: 2024-03-16 11:40:33
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\config\Pcs\helper.ts
 */

import { DeviceModelDescribeType } from '@/types/device';

/// 云平台通信接口 WIFI
export const commInterfaceWiFiItems: any = [
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
            id: '50019',
            name: '通信接口',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'enum',
              specs: {
                1: "WiFi",
                2: "LAN1",
                3: "LAN2",
                4: "4G"
              }
            },
          },
          {
            id: '50020',
            name: 'WiFi名称',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '50036',
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
            id: '50051',
            name: '连接类型',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'enum',
              specs: {
                "1": "dhcp",
                "2": "静态ip",
              }
            },
          },
          {
            id: '50052',
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
            id: '50054',
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
            id: '50056',
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
            id: '50058',
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

/// 云平台通信接口 LAN1
export const commInterfaceLAN1Items: any = [
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
            id: '50019',
            name: '通信接口',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'enum',
              specs: {
                1: "WiFi",
                2: "LAN1",
                3: "LAN2",
                4: "4G"
              }
            },
          },
          {
            id: '50051',
            name: '连接类型',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'enum',
              specs: {
                "1": "dhcp",
                "2": "静态ip",
              }
            },
          },
          {
            id: '50052',
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
            id: '50054',
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
            id: '50056',
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
            id: '50058',
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

/// 云平台通信接口 LAN2
export const commInterfaceLAN2Items: any = [
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
            id: '50019',
            name: '通信接口',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'enum',
              specs: {
                1: "WiFi",
                2: "LAN1",
                3: "LAN2",
                4: "4G"
              }
            },
          },
          {
            id: '50051',
            name: '连接类型',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'enum',
              specs: {
                "1": "dhcp",
                "2": "静态ip",
              }
            },
          },
          {
            id: '50052',
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
            id: '50054',
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
            id: '50056',
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
            id: '50058',
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

/// 云平台通信接口 4G
export const commInterface4GItems: any = [
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
            id: '50019',
            name: '通信接口',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'enum',
              specs: {
                1: "WiFi",
                2: "LAN1",
                3: "LAN2",
                4: "4G"
              }
            },
          },
        ],
      },
    ],
  },
];

/// 永泰云通信接口参数 - 【暂时先不做】
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
            id: '50063',
            name: '云平台接入使能',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'enum',
              specs: {
                0: "禁止",
                1: "允许",
              }
            },
          },
          {
            id: '50143',
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
            id: '50066',
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
            id: '50068',
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
            id: '50084',
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
            id: '50100',
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
            id: '50110',
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
            id: '50209',
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
            id: '50128',
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
          {
            id: '50062',
            name: '永泰云端口',
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
