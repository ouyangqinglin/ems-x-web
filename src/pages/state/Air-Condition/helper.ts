/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-16 09:42:18
 * @LastEditTime: 2024-03-16 10:52:13
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\state\Pcs\helper.ts
 */

export const baseInfoItems: any = [
  {
    id: 'a',
    name: '基本信息',
    type: 'group',
    children: [
      {
        id: '30002',
        name: '空调SN',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '30012',
        name: '空调厂商',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '30039',
        name: '空调型号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '30022',
        name: '空调硬件版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '30023',
        name: '空调软件版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '30000',
        name: '与EMS通信状态',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            0: '初始化',
            1: '断开',
            2: '连接',
          },
        },
      },
      {
        id: '30001',
        name: '与EMS通信方式',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            0: 'RS485',
            1: '未知',
          },
        },
      },
      {
        id: '7',
        name: '制冷输入功率',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '8',
        name: '制冷量',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '9',
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
        id: '30049',
        type: 'property',
        name: '空调机组控制模式',
        dataType: {
          type: 'enum',
          specs: {
            0: '本地',
            1: '远程',
          },
        },
      },
      {
        id: '30024',
        type: 'property',
        name: '空调机组工作状态',
        dataType: {
          type: 'enum',
          specs: {
            0: '停止',
            1: '运行',
          },
        },
      },
      {
        id: '30103',
        type: 'property',
        name: '空调告警状态',
        dataType: {
          type: 'enum',
          specs: {
            0: '正常',
            1: '告警',
          },
        },
      },
      {
        id: '30025',
        type: 'property',
        name: '内风机运行状态',
        dataType: {
          type: 'enum',
          specs: {
            0: '停止',
            1: '运行',
          },
        },
      },
      {
        id: '30026',
        type: 'property',
        name: '外风机运行状态',
        dataType: {
          type: 'enum',
          specs: {
            0: '停止',
            1: '运行',
          },
        },
      },
      {
        id: '30027',
        type: 'property',
        name: '压缩机运行状态',
        dataType: {
          type: 'enum',
          specs: {
            0: '停止',
            1: '运行',
          },
        },
      },
      {
        id: '30028',
        type: 'property',
        name: '电加热运行状态',
        dataType: {
          type: 'enum',
          specs: {
            0: '停止',
            1: '运行',
          },
        },
      },
      {
        id: '30029',
        type: 'property',
        name: '应急风机运行状态',
        dataType: {
          type: 'enum',
          specs: {
            0: '停止',
            1: '运行',
          },
        },
      },
      {
        id: '30030',
        type: 'property',
        name: '盘管温度',
        dataType: {
          type: 'string',
          specs: {
            unit: '°C',
          },
        },
      },
      {
        id: '30031',
        type: 'property',
        name: '室外温度',
        dataType: {
          type: 'string',
          specs: {
            unit: '°C',
          },
        },
      },
      {
        id: '30032',
        type: 'property',
        name: '冷凝温度',
        dataType: {
          type: 'string',
          specs: {
            unit: '°C',
          },
        },
      },
      {
        id: '30033',
        type: 'property',
        name: '室内温度',
        dataType: {
          type: 'string',
          specs: {
            unit: '°C',
          },
        },
      },
      {
        id: '30035',
        type: 'property',
        name: '排气温度',
        dataType: {
          type: 'string',
          specs: {
            unit: '°C',
          },
        },
      },
      {
        id: '30034',
        type: 'property',
        name: '湿度',
        dataType: {
          type: 'string',
          specs: {
            unit: '%',
          },
        },
      },
      {
        id: '30037',
        type: 'property',
        name: '交流电压',
        dataType: {
          type: 'string',
          specs: {
            unit: 'V',
          },
        },
      },
      {
        id: '30038',
        type: 'property',
        name: '直流电压',
        dataType: {
          type: 'string',
          specs: {
            unit: 'V',
          },
        },
      },
      {
        id: '30036',
        type: 'property',
        name: '电流',
        dataType: {
          type: 'string',
          specs: {
            unit: 'A',
          },
        },
      },
    ],
  },
];
