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
        name: '液冷机SN',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '2',
        name: '液冷机厂商',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '3',
        name: '液冷机型号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '4',
        name: '液冷机硬件版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5',
        name: '液冷机软件版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '6',
        name: '软件编码',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '7',
        name: '压缩机软件版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '8',
        name: '压缩机软件编码',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '9',
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
        id: '10',
        name: '与EMS通信方式',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '11',
        name: '制冷输入功率',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '12',
        name: '制冷量',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '13',
        name: '加热输入功率',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '14',
        name: '加热量',
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
        name: '液冷机系统模式',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '停止',
            '1': '内循环',
            '2': '制冷',
            '3': '加热',
            '4': '全自动',
            '5': '预留',
          },
        },
      },
      {
        id: '2',
        name: '液冷机工作状态',
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
        id: '3',
        name: '当前告警最高等级',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '无告警',
            '1': '严重告警',
            '2': '中等告警',
            '3': '一般告警',
          },
        },
      },
      {
        id: '4',
        name: '变频器通讯故障',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '正常',
            '1': '告警',
            '255': '告警未使能',
          },
        },
      },
      {
        id: '5',
        name: '水温制冷点',
        type: 'property',
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
        id: '6',
        name: '水温加热点',
        type: 'property',
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
        id: '7',
        name: '出水温度',
        dataType: {
          type: 'double',
          specs: {
            unit: '℃',
            min: '0',
            unitName: '温度',
            max: '10000000000',
            step: '0.01',
          },
        },
      },
      {
        id: '8',
        name: '回水温度',
        type: 'property',
        dataType: {
          type: 'double',
          specs: {
            unit: '℃',
            min: '0',
            unitName: '温度',
            max: '10000000000',
            step: '0.01',
          },
        },
      },
      {
        id: '9',
        name: '进水压力',
        type: 'property',
        dataType: {
          type: 'double',
          specs: {
            unit: 'Bar',
            min: '0',
            unitName: '巴',
            max: '10000000000',
            step: '0.01',
          },
        },
      },
      {
        id: '10',
        name: '出水压力',
        type: 'property',
        dataType: {
          type: 'double',
          specs: {
            unit: 'Bar',
            min: '0',
            unitName: '巴',
            max: '10000000000',
            step: '0.01',
          },
        },
      },
      {
        id: '11',
        name: '环境温度',
        type: 'property',
        dataType: {
          type: 'double',
          specs: {
            unit: '℃',
            min: '0',
            unitName: '温度',
            max: '10000000000',
            step: '0.01',
          },
        },
      },
      {
        id: '12',
        name: '排气温度',
        type: 'property',
        dataType: {
          type: 'double',
          specs: {
            unit: '℃',
            min: '0',
            unitName: '温度',
            max: '10000000000',
            step: '0.01',
          },
        },
      },
      {
        id: '13',
        name: '水泵状态 ',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '关闭',
            '1': '开启',
          },
        },
      },
      {
        id: '14',
        name: '水泵当前转速',
        type: 'property',
        dataType: {
          type: 'long',
          specs: {},
        },
      },
      {
        id: '15',
        name: '水泵总运行时间',
        type: 'property',
        dataType: {
          type: 'double',
          specs: {
            unit: 'h',
            min: '0',
            unitName: '时',
            max: '10000000000',
            step: '0.1',
          },
        },
      },
      {
        id: '16',
        name: '水泵开启次数',
        type: 'property',
        dataType: {
          type: 'long',
          specs: {},
        },
      },
      {
        id: '17',
        name: '心跳',
        type: 'property',
        dataType: {
          type: 'long',
          specs: {},
        },
      },
      {
        id: '18',
        name: '压缩机状态',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '关闭',
            '1': '开启',
          },
        },
      },
      {
        id: '19',
        name: '压缩机总运行时间',
        type: 'property',
        dataType: {
          type: 'double',
          specs: {
            unit: 'h',
            min: '0',
            unitName: '时',
            max: '10000000000',
            step: '0.1',
          },
        },
      },
      {
        id: '20',
        name: '压缩机开启次数',
        type: 'property',
        dataType: {
          type: 'long',
          specs: {},
        },
      },
      {
        id: '21',
        name: '电加热总运行时间',
        type: 'property',
        dataType: {
          type: 'double',
          specs: {
            unit: 'h',
            min: '0',
            unitName: '时',
            max: '10000000000',
            step: '0.1',
          },
        },
      },
      {
        id: '22',
        name: '电加热开启次数',
        type: 'property',
        dataType: {
          type: 'long',
          specs: {},
        },
      },
      {
        id: '23',
        name: '外风机总运行时间',
        type: 'property',
        dataType: {
          type: 'double',
          specs: {
            unit: 'h',
            min: '0',
            unitName: '时',
            max: '10000000000',
            step: '0.1',
          },
        },
      },
      {
        id: '24',
        name: '外风机开启次数',
        type: 'property',
        dataType: {
          type: 'long',
          specs: {},
        },
      },
    ],
  },
];
