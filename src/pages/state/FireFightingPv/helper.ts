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
        id: '1',
        name: '消防SN',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '2',
        name: '消防厂商',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3',
        name: '消防型号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '4',
        name: '硬件版本',
        type: 'property',
        dataType: {
          specs: {
            unit: 'kW',
          },
          type: 'string',
        },
      },
      {
        id: '5',
        name: '软件版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '6',
        name: '与EMS通信状态',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '断开',
            '1': '连接',
          },
        },
      },
      {
        id: '7',
        name: '与EMS通信方式',
        type: 'property',
        dataType: {
          type: 'string',
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
        name: '消防告警状态',
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
        id: '2',
        name: '主机报警状态',
        type: 'property',
        dataType: {
          specs: {
            unit: '',
          },
          type: 'string',
        },
      },
      {
        id: '3',
        name: '总故障标志',
        type: 'property',
        dataType: {
          specs: {
            unit: '',
          },
          type: 'string',
        },
      },
      {
        id: '4',
        name: '备电故障',
        type: 'property',
        dataType: {
          specs: {
            unit: '',
          },
          type: 'string',
        },
      },
      {
        id: '5',
        name: '第一瓶阀门故障',
        type: 'property',
        dataType: {
          specs: {
            unit: '',
          },
          type: 'string',
        },
      },
      {
        id: '6',
        name: '启动总状态',
        type: 'property',
        dataType: {
          specs: {
            unit: '',
          },
          type: 'string',
        },
      },
      {
        id: '7',
        name: '反馈总状态',
        type: 'property',
        dataType: {
          specs: {
            unit: '',
          },
          type: 'string',
        },
      },
      {
        id: '8',
        name: '第一瓶启动',
        type: 'property',
        dataType: {
          specs: {
            unit: '',
          },
          type: 'string',
        },
      },
      {
        id: '9',
        name: '第一瓶喷洒反馈',
        type: 'property',
        dataType: {
          specs: {
            unit: '',
          },
          type: 'string',
        },
      },
      {
        id: '10',
        name: '箱外探测器温度1',
        type: 'property',
        dataType: {
          specs: {
            unit: '°C',
          },
          type: 'string',
        },
      },
      {
        id: '11',
        name: '箱外探测器温度2',
        type: 'property',
        dataType: {
          specs: {
            unit: '°C',
          },
          type: 'string',
        },
      },
      {
        id: '12',
        name: '箱外探测器CO传感器实时数据',
        type: 'property',
        dataType: {
          specs: {
            unit: 'ppm',
          },
          type: 'string',
        },
      },
      {
        id: '13',
        name: '箱外探测器H2传感器实时数据',
        type: 'property',
        dataType: {
          specs: {
            unit: 'ppm',
          },
          type: 'string',
        },
      },
      {
        id: '14',
        name: '箱外探测器H2预警',
        type: 'property',
        dataType: {
          specs: {
            unit: '',
          },
          type: 'string',
        },
      },
      {
        id: '15',
        name: '箱外探测器CO预警',
        type: 'property',
        dataType: {
          specs: {
            unit: '',
          },
          type: 'string',
        },
      },
      {
        id: '16',
        name: '箱外探测器温度预警',
        type: 'property',
        dataType: {
          specs: {
            unit: '',
          },
          type: 'string',
        },
      },
      {
        id: '17',
        name: '箱外探测器烟雾预警',
        type: 'property',
        dataType: {
          specs: {
            unit: '',
          },
          type: 'string',
        },
      },
      {
        id: '18',
        name: '箱外探测器故障码',
        type: 'property',
        dataType: {
          specs: {
            unit: '',
          },
          type: 'string',
        },
      },
      {
        id: '13',
        name: '探测器温度1',
        type: 'property',
        dataType: {
          specs: {
            unit: '°C',
          },
          type: 'string',
        },
      },
      {
        id: '14',
        name: '探测器温度2',
        type: 'property',
        dataType: {
          specs: {
            unit: '°C',
          },
          type: 'string',
        },
      },
      {
        id: '15',
        name: '探测器CO传感器实时数据',
        type: 'property',
        dataType: {
          specs: {
            unit: 'ppm',
          },
          type: 'string',
        },
      },
      {
        id: '16',
        name: '探测器烟雾预警',
        type: 'property',
        dataType: {
          specs: {
            unit: '',
          },
          type: 'string',
        },
      },
      {
        id: '17',
        name: '探测器VOC预警',
        type: 'property',
        dataType: {
          specs: {
            unit: '',
          },
          type: 'string',
        },
      },
      {
        id: '18',
        name: '探测器预警等级',
        type: 'property',
        dataType: {
          specs: {
            unit: '',
          },
          type: 'string',
        },
      },
      {
        id: '17',
        name: '探测器故障',
        type: 'property',
        dataType: {
          specs: {
            unit: '',
          },
          type: 'string',
        },
      },
    ],
  },
];
