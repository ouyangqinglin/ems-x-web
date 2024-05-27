/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-16 09:42:18
 * @LastEditTime: 2024-05-27 13:59:22
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\config\Air-Condition-Optical\helper.ts
 */

export const baseInfoItems: any = [
  {
    id: 'a',
    name: '基本信息',
    type: 'group',
    children: [
      {
        id: 'a',
        name: '基本信息',
        type: 'service',
        buttons: ['refresh'],
        children: [
          {
            id: '5500',
            name: '空调SN',
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '5510',
            name: '空调厂商',
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '5520',
            name: '空调型号',
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '5530',
            name: '空调硬件版本',
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '5531',
            name: '空调软件版本',
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
        ],
      },
    ],
  },
];

export const airSetItems: any = [
  {
    id: 'a',
    name: '空调设置',
    type: 'group',
    children: [
      {
        id: 'a',
        name: '空调设置',
        type: 'service',
        buttons: ['refresh', 'edit'],
        children: [
          {
            id: '12500',
            name: '自检',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                0: '关闭',
                1: '开启',
              },
              type: 'enum',
            },
          },
          {
            id: '12601',
            name: '排氢',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                0: '关闭',
                1: '开启',
              },
              type: 'enum',
            },
          },
          {
            id: '12602',
            name: '恢复出厂参数',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                1: '有效',
              },
              type: 'enum',
            },
          },
          {
            id: '12603',
            name: '告警复位',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                1: '有效',
              },
              type: 'enum',
            },
          },
        ],
      },
    ],
  },
];

export const runValueItems: any = [
  {
    id: 'a',
    name: '运行定值设置',
    type: 'group',
    children: [
      {
        id: 'a',
        name: '运行定值设置',
        type: 'service',
        buttons: ['refresh', 'edit'],
        children: [
          {
            id: '12604',
            name: '制冷点',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                unit: '℃',
              },
              type: 'int',
            },
          },
          {
            id: '12605',
            name: '制冷回差',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                unit: '℃',
              },
              type: 'int',
            },
          },
          {
            id: '12606',
            name: '加热点',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                unit: '℃',
              },
              type: 'int',
            },
          },
          {
            id: '12607',
            name: '加热回差',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                unit: '℃',
              },
              type: 'int',
            },
          },
          {
            id: '12608',
            name: '除湿点',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                unit: '℃',
              },
              type: 'int',
            },
          },
          {
            id: '12609',
            name: '除湿回差',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                unit: '℃',
              },
              type: 'int',
            },
          },
          {
            id: '12610',
            name: '高温告警温度值',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                unit: '℃',
              },
              type: 'int',
            },
          },
          {
            id: '12611',
            name: '低温告警温度值',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                unit: '℃',
              },
              type: 'int',
            },
          },
          {
            id: '12612',
            name: '高湿告警值',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                unit: '%',
              },
              type: 'int',
            },
          },
          {
            id: '12613',
            name: '除湿使能',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '12614',
            name: '内风机提前运转温度',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                unit: '℃',
              },
              type: 'int',
            },
          },
          {
            id: '12615',
            name: '待机模式内风机状态',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                0: '停止',
                1: '运行',
              },
              type: 'enum',
            },
          },
          {
            id: '12616',
            name: '通信波特率',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              specs: {
                0: '4800',
                1: '9600',
                2: '19200',
              },
              type: 'enum',
            },
          },
          {
            id: '12617',
            name: '外部告警选项',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '12618',
            name: '排氢间隔时间',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              type: 'string',
              specs: {
                unit: 'H',
              },
            },
          },
          {
            id: '12619',
            name: '排氢工作时间',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              type: 'string',
              specs: {
                unit: 'Min',
              },
            },
          },
          {
            id: '12620',
            name: '电压告警高限',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              type: 'int',
              specs: {
                unit: 'V',
              },
            },
          },
          {
            id: '12621',
            name: '电压告警低限',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              type: 'int',
              specs: {
                unit: 'V',
              },
            },
          },
          {
            id: '12622',
            name: '设备通信地址',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '12623',
            name: '换热启动温度',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              type: 'int',
              specs: {
                unit: '°C',
              },
            },
          },
          {
            id: '12624',
            name: '换热温度回差',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              type: 'int',
              specs: {
                unit: '°C',
              },
            },
          },
          {
            id: '12625',
            name: '换热启动温差',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              type: 'int',
              specs: {
                unit: '°C',
              },
            },
          },
          {
            id: '12626',
            name: '换热温差回差',
            buttons: ['refresh', 'edit'],
            type: 'property',
            dataType: {
              type: 'int',
              specs: {
                unit: '°C',
              },
            },
          },
        ],
      },
    ],
  },
];
