/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-16 09:42:18
 * @LastEditTime: 2024-03-16 10:52:13
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\state\Pcs\helper.ts
 */

import { DeviceModelDescribeType } from '@/types/device';

export const baseInfoItems: any = [
  {
    id: 'a',
    name: '基本信息',
    type: 'group',
    children: [
      {
        id: '33003',
        name: '消防SN',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '33013',
        name: '消防厂商',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '33025',
        name: '消防型号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      // {
      //   id: '4',
      //   name: '硬件版本',
      //   type: 'property',
      //   dataType: {
      //     specs: {
      //       unit: 'kW',
      //     },
      //     type: 'string',
      //   },
      // },
      // {
      //   id: '5',
      //   name: '软件版本',
      //   type: 'property',
      //   dataType: {
      //     type: 'string',
      //   },
      // },
      {
        id: '33001',
        name: '与EMS通信状态',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '初始化',
            '1': '断开',
            '2': '连接',
          },
        },
      },
      {
        id: '33002',
        name: '与EMS通信方式',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '485',
            '1': '未知',
          },
        },
      },
    ],
  },
];

export const statusItems: any = [
  {
    id: 'a',
    name: '状态信息',
    type: 'group',
    children: [
      {
        id: '1',
        name: '消防工作状态',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '运行',
            '1': '停止',
            '2': '故障',
          },
        },
      },
      {
        id: '33036',
        name: '消防告警状态',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '运行',
            '1': '停止',
            '2': '故障',
          },
        },
      },
      {
        id: '33037',
        name: '消防喷射信号',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '正常',
            '1': '告警',
          },
        },
      },
      {
        id: '33050',
        name: '电池箱号',
        type: 'property',
        dataType: {
          type: 'long',
          specs: {},
        },
      },
      {
        id: '33053',
        name: '启动类型',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '33056',
        name: '电池箱消防运行状态',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '运行',
            '1': '停止',
            '2': '故障',
          },
        },
      },
      {
        id: '33051',
        name: '预警级别',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '33055',
        name: '消息计数器',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '33054',
        name: '子阀门状态',
        type: 'property',
        span: 2,
        dataType: {
          type: 'string',
        },
      },
    ],
  },
];
