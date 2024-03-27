/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-16 09:42:18
 * @LastEditTime: 2024-03-16 11:40:33
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\config\Pcs\helper.ts
 */

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
            id: '11600',
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
            id: '11602',
            name: 'WiFi名称',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '11612',
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
            id: '11622',
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
            id: '11623',
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
            id: '11625',
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
            id: '11627',
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
            id: '11629',
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
            id: '11600',
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
            id: '11700',
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
            id: '11701',
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
            id: '11703',
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
            id: '11705',
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
            id: '11707',
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
            id: '11600',
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
            id: '11750',
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
            id: '11751',
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
            id: '11753',
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
            id: '11755',
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
            id: '11757',
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
            id: '11600',
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

/// 永泰云通信接口参数
export const yotaiComApiItems: any = [
  {
    id: 'a',
    name: '永泰云软件连接参数',
    type: 'group',
    children: [
      {
        id: 'a',
        name: '云平台通信接口参数',
        type: 'service',
        buttons: ['refresh', 'edit'],
        children: [
          {
            id: '11854',
            name: '永泰云IP/域名',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '11856',
            name: '端口',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
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
            id: '11800',
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
            id: '11801',
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
            id: '11803',
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
            id: '11804',
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
            id: '11814',
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
            id: '11824',
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
            id: '11834',
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
            id: '11844',
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
            id: '11854',
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
            id: '11856',
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
