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
        id: '32002',
        name: '液冷机SN',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '32012',
        name: '液冷机厂商',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '32035',
        name: '液冷机型号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '32022',
        name: '液冷机硬件版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '32024',
        name: '液冷机软件版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '32023',
        name: '软件编码',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '32408',
        name: '压缩机软件版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '32407',
        name: '压缩机软件编码',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '32000',
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
        id: '32001',
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
      {
        id: 's1',
        name: '制冷输入功率',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'W',
          },
        },
      },
      {
        id: 's2',
        name: '制冷量',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'W',
          },
        },
      },
      {
        id: 's3',
        name: '加热输入功率',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'W',
          },
        },
      },
      {
        id: 's4',
        name: '加热量',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'W',
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
        id: '32425',
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
        id: '32045',
        name: '液冷机工作状态',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '停机',
            '1': '故障',
            '2': '运行',
          },
        },
      },
      {
        id: '32210',
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
        id: '32200',
        name: '变频器通讯故障',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '正常',
            '1': '告警',
            '255': '未使能',
          },
        },
      },
      {
        id: '394',
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
        id: '395',
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
        id: '32025',
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
        id: '32026',
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
        id: '32029',
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
        id: '32030',
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
        id: '32028',
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
        id: '32027',
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
        id: '32404',
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
        id: '32403',
        name: '水泵当前转速',
        type: 'property',
        dataType: {
          type: 'long',
        },
      },
      {
        id: '32417',
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
        id: '32419',
        name: '水泵开启次数',
        type: 'property',
        dataType: {
          type: 'long',
        },
      },
      {
        id: '32405',
        name: '心跳',
        type: 'property',
        dataType: {
          type: 'long',
        },
      },
      {
        id: '32406',
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
        id: '32409',
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
        id: '32411',
        name: '压缩机开启次数',
        type: 'property',
        dataType: {
          type: 'long',
        },
      },
      {
        id: '32413',
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
        id: '32415',
        name: '电加热开启次数',
        type: 'property',
        dataType: {
          type: 'long',
        },
      },
      {
        id: '32421',
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
        id: '32423',
        name: '外风机开启次数',
        type: 'property',
        dataType: {
          type: 'long',
        },
      },
    ],
  },
];
