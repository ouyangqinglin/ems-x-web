/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-16 09:42:18
 * @LastEditTime: 2024-05-31 11:09:53
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\state\Dehumidifier\helper.ts
 */
export const baseInfoItems: any = [
  {
    id: 'a',
    name: '基本信息',
    type: 'group',
    children: [
      {
        id: '32802',
        name: '除湿机SN',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '32812',
        name: '除湿机厂商',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '32827',
        name: '除湿机型号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '32822',
        name: '除湿机硬件版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '32823',
        name: '除湿机软件版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '32800',
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
        id: '32801',
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
        id: '32840',
        name: '除湿机工作模式',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '升温型',
            '1': '降温型',
          },
        },
      },
      {
        id: '32841',
        name: '除湿机工作状态',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '自动状态',
            '1': '手动状态',
            '2': '设置状态',
            '3': '运行状态',
            '4': '除湿器工作状态',
            '5': '加热器工作状态',
            '6': '风扇工作状态',
            '7': '除冰工作状态',
          },
        },
      },
      {
        id: '32842',
        name: '除湿机告警状态',
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
        id: '32843',
        name: '手动状态',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '停用',
            '1': '启用',
          },
        },
      },
      {
        id: '32844',
        name: '自动状态',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '停用',
            '1': '启用',
          },
        },
      },
      {
        id: '32845',
        name: '设置状态',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '停用',
            '1': '启用',
          },
        },
      },
      {
        id: '32846',
        name: '运行状态',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '停用',
            '1': '启用',
          },
        },
      },
      {
        id: '32847',
        name: '加热器工作状态',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '停用',
            '1': '启用',
          },
        },
      },
      {
        id: '32848',
        name: '风扇工作状态',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '停用',
            '1': '启用',
          },
        },
      },
      {
        id: '32849',
        name: '除冰工作状态',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            '0': '停用',
            '1': '启用',
          },
        },
      },
      {
        id: '32850',
        name: '除湿启控值',
        type: 'property',
        dataType: {
          type: 'double',
          specs: {
            unit: '%RH',
            min: '0',
            unitName: '',
            max: '99.9',
            step: '0.01',
          },
        },
      },
      {
        id: '32851',
        name: '除湿停止值',
        type: 'property',
        dataType: {
          type: 'double',
          specs: {
            unit: '%RH',
            min: '0',
            unitName: '',
            max: '99.9',
            step: '0.01',
          },
        },
      },
      {
        id: '32852',
        name: '温度启控值',
        type: 'property',
        dataType: {
          type: 'double',
          specs: {
            unit: '℃',
            min: '0',
            unitName: '温度',
            max: '99.9',
            step: '0.01',
          },
        },
      },
      {
        id: '32853',
        name: '温度控制回差值',
        type: 'property',
        dataType: {
          type: 'double',
          specs: {
            unit: '℃',
            min: '0',
            unitName: '温度',
            max: '20',
            step: '0.01',
          },
        },
      },
      {
        id: '52205',
        name: '冷凝片除冰值',
        type: 'property',
        dataType: {
          type: 'double',
          specs: {
            unit: '℃',
            min: '-9',
            unitName: '温度',
            max: '9',
            step: '0.01',
          },
        },
      },
      {
        id: '32826',
        name: '制冷片温度测量值',
        type: 'property',
        dataType: {
          type: 'double',
          specs: {
            unit: '℃',
            min: '-50',
            unitName: '温度',
            max: '100',
            step: '0.01',
          },
        },
      },
      {
        id: '32824',
        name: '环境温度测量值',
        type: 'property',
        dataType: {
          type: 'double',
          specs: {
            unit: '℃',
            min: '0',
            unitName: '温度',
            max: '99.9',
            step: '0.01',
          },
        },
      },
      {
        id: '32825',
        name: '环境湿度测量值',
        type: 'property',
        dataType: {
          type: 'double',
          specs: {
            unit: '%RH',
            min: '0',
            unitName: '',
            max: '99.9',
            step: '0.01',
          },
        },
      },
    ],
  },
];
