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
        id: '33103',
        name: '消防SN',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '33113',
        name: '消防厂商',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '33125',
        name: '消防型号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '33101',
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
        id: '33102',
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
        id: '33137',
        name: '消防喷射信号',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '正常',
            '1': '喷射',
          },
        },
      },
      {
        id: '33135',
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
        id: '33136',
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
        id: '33150',
        name: '电池箱号',
        type: 'property',
        dataType: {
          type: 'long',
        },
      },
      {
        id: '33151',
        name: '状态标志',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '正在自检',
            '1': '工作正常',
            '2': '设备故障',
            '3': '探测到报警信息',
          },
        },
      },
      {
        id: '33165',
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
        id: '33166',
        name: '电池箱消防告警状态',
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
        id: '33167',
        name: '光电烟雾传感器状态',
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
        id: '33168',
        name: '光电烟雾传感器报警状态',
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
        id: '33169',
        name: '一氧化碳传感器状态',
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
        id: '33170',
        name: '一氧化碳传感器报警状态',
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
        id: '33171',
        name: '温度传感器状态',
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
        id: '33172',
        name: '温度传感器高温报警状态',
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
        id: '33173',
        name: '电解液传感器状态',
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
        id: '33174',
        name: '电解液传感器报警状态',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '正常',
            '1': '报警',
          },
        },
      },
      {
        id: '33157',
        name: '温度数值',
        type: 'property',
        dataType: {
          type: 'double',
          specs: {
            unit: '℃',
            min: '0',
            unitName: '摄氏度',
            max: '10000000000',
          },
        },
      },
      {
        id: '33158',
        name: '一氧化碳数值',
        type: 'property',
        dataType: {
          type: 'double',
        },
      },
      {
        id: '33159',
        name: 'Life信号',
        type: 'property',
        dataType: {
          type: 'double',
        },
      },
    ],
  },
];
