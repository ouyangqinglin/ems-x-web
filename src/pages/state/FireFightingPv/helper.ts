/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-16 09:42:18
 * @LastEditTime: 2024-05-27 11:47:02
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\state\FireFightingPv\helper.ts
 */
export const baseInfoItems: any = [
  {
    id: 'a',
    name: '基本信息',
    type: 'group',
    children: [
      {
        id: '5600',
        name: '消防SN',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5610',
        name: '消防厂商',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5620',
        name: '消防型号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5630',
        name: '硬件版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5631',
        name: '软件版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '5632',
        name: '与EMS通信状态',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '1': '断开',
            '2': '已连接',
          },
        },
      },
      {
        id: '5633',
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
        id: '5634',
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
        id: '5635',
        name: '主机报警状态',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '报警等级1',
            '1': '报警等级2',
            '2': '报警等级3',
            '3': '报警等级4',
          },
        },
      },
      {
        id: '5636',
        name: '总故障标志',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '正常',
            '1': '故障',
          },
        },
      },
      {
        id: '5637',
        name: '备电故障',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '正常',
            '1': '故障',
          },
        },
      },
      {
        id: '5638',
        name: '第一瓶阀门故障',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '正常',
            '1': '故障',
          },
        },
      },
      {
        id: '5639',
        name: '启动总状态',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '正常',
            '1': '启动',
          },
        },
      },
      {
        id: '5640',
        name: '反馈总状态',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '正常',
            '1': '启动',
          },
        },
      },
      {
        id: '5641',
        name: '第一瓶启动',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '正常',
            '1': '启动',
          },
        },
      },
      {
        id: '5642',
        name: '第一瓶喷洒反馈',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '正常',
            '1': '启动',
          },
        },
      },
      {
        id: '5643',
        name: '箱外探测器温度1',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: '°C',
          },
        },
      },
      {
        id: '5644',
        name: '箱外探测器温度2',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: '°C',
          },
        },
      },
      {
        id: '5645',
        name: '箱外探测器CO传感器实时数据',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'ppm',
          },
        },
      },
      {
        id: '5646',
        name: '箱外探测器H2传感器实时数据',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'ppm',
          },
        },
      },
      {
        id: '5647',
        name: '箱外探测器H2预警',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '正常',
            '1': '预警',
          },
        },
      },
      {
        id: '5648',
        name: '箱外探测器CO预警',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '正常',
            '1': '预警',
          },
        },
      },
      {
        id: '5649',
        name: '箱外探测器温度预警',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '正常',
            '1': '预警',
          },
        },
      },
      {
        id: '5650',
        name: '箱外探测器烟雾预警',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '正常',
            '1': '预警',
          },
        },
      },
      {
        id: '5651',
        name: '箱外探测器故障码',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '正常',
            '2': '故障',
          },
        },
      },
      {
        id: '5652',
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
        id: '5653',
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
        id: '5654',
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
        id: '5655',
        name: '探测器烟雾预警',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '正常',
            '1': '预警',
          },
        },
      },
      {
        id: '5656',
        name: '探测器VOC预警',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '正常',
            '1': '预警',
          },
        },
      },
      {
        id: '5657',
        name: '探测器预警等级',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '报警等级1',
            '1': '报警等级2',
            '2': '报警等级3',
            '3': '报警等级4',
          },
        },
      },
      {
        id: '5658',
        name: '探测器故障',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '系统正常',
            '1': '灭火器已启动',
            '2': '传感器故障',
            '3': '硬件故障',
          },
        },
      },
    ],
  },
  {
    id: 'b',
    name: '1#电池箱',
    type: 'group',
    children: [
      {
        id: '5652',
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
        id: '5653',
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
        id: '5654',
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
        id: '5655',
        name: '探测器烟雾预警',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '正常',
            '1': '预警',
          },
        },
      },
      {
        id: '5656',
        name: '探测器VOC预警',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '正常',
            '1': '预警',
          },
        },
      },
      {
        id: '5657',
        name: '探测器预警等级',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '报警等级1',
            '1': '报警等级2',
            '2': '报警等级3',
            '3': '报警等级4',
          },
        },
      },
      {
        id: '5658',
        name: '探测器故障',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '系统正常',
            '1': '灭火器已启动',
            '2': '传感器故障',
            '3': '硬件故障',
          },
        },
      },
    ],
  },
];
