/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-16 09:42:18
 * @LastEditTime: 2024-03-16 10:52:13
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\state\Pcs\helper.ts
 */

const commonDataType = {
  type: 'enum',
  specs: {
    0: '初始化',
    1: '断开',
    2: '连接',
  }
}

export const baseInfoItems: any = [
  {
    id: 'a',
    name: '基本信息',
    type: 'group',
    children: [
      {
        id: '100',
        name: '设备SN',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '110',
        name: '设备厂商',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '120',
        name: '设备型号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '152',
        name: 'IP地址',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '162',
        name: '系统时间',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '216',
        name: '额定功率',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kW',
          },
        },
      },
      {
        id: '217',
        name: '额定容量',
        type: 'property',
        dataType: {
          type: 'string',
          specs: {
            unit: 'kWh',
          },
        },
      },
      {
        id: '154',
        name: '主从标识',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '220',
        name: '设备ID',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '218',
        name: '外网IP',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '130',
        name: 'EMS SN',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '140',
        name: 'EMS 型号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '150',
        name: 'EMS 硬件版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '151',
        name: 'EMS 软件版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '169',
        name: 'IMEI号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: 'ffff',
        name: '上位机通信',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '180',
        name: '云平台通信',
        type: 'property',
        dataType: commonDataType
      },
      {
        id: '182',
        name: '永泰云通信',
        type: 'property',
        dataType: commonDataType
      },
      {
        id: '184',
        name: '灯板通信',
        type: 'property',
        dataType: commonDataType
      },
      {
        id: '186',
        name: '变流器通信',
        type: 'property',
        dataType: commonDataType
      },
      {
        id: '231',
        name: 'BMS 通信',
        type: 'property',
        dataType: commonDataType
      },
      {
        id: '188',
        name: '空调通信',
        type: 'property',
        dataType: commonDataType
      },
      {
        id: '194',
        name: '消防通信',
        type: 'property',
        dataType: commonDataType
      },
      {
        id: '196',
        name: '电网侧电表通信',
        type: 'property',
        dataType: commonDataType
      },
      {
        id: '198',
        name: '逆变侧电表通信',
        type: 'property',
        dataType: commonDataType
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
        id: 'b',
        name: '系统',
        type: 'group',
        children: [
          {
            id: '338',
            type: 'property',
            name: '系统控制模式',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '400',
            type: 'property',
            name: '系统工作模式',
            dataType: {
              type: 'enum',
              specs: {
                1: '自发自用',
                2: '削峰填谷',
                3: '备电',
                4: '手动控制',
              },
            },
          },
          {
            id: '339',
            type: 'property',
            name: '系统工作状态',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '381',
            type: 'property',
            name: '系统告警状态',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '341',
            type: 'property',
            name: '电池组工作状态',
            dataType: {
              type: 'enum',
              specs: {
                1: '启动',
                2: '[充电/放电]',
                3: '待机',
                4: '停止',
              },
            },
          },
          {
            id: '313',
            type: 'property',
            name: '系统总有功功率',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kW',
              },
            },
          },
          {
            id: '315',
            type: 'property',
            name: '系统总无功功率',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kVar',
              },
            },
          },
          {
            id: '317',
            type: 'property',
            name: '系统总视在功率',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kVA',
              },
            },
          },
          {
            id: '520',
            type: 'property',
            name: '电池SOC',
            dataType: {
              type: 'string',
              specs: {
                unit: '%',
              },
            },
          },
          {
            id: '521',
            type: 'property',
            name: '电池SOH',
            dataType: {
              type: 'string',
              specs: {
                unit: '%',
              },
            },
          },
          {
            id: '326',
            type: 'property',
            name: '可充电能量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '328',
            type: 'property',
            name: '可放电能量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '330',
            type: 'property',
            name: '今日系统充电量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '332',
            type: 'property',
            name: '今日系统放电量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '334',
            type: 'property',
            name: '累计系统充电量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '336',
            type: 'property',
            name: '累计系统放电量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '622',
            type: 'property',
            name: '一充电量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '623',
            type: 'property',
            name: '一放电量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '624',
            type: 'property',
            name: '二充电量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '625',
            type: 'property',
            name: '二放电量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '321',
            type: 'property',
            name: '负载有功功率',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kW',
              },
            },
          },
          {
            id: '348',
            type: 'property',
            name: '今日负载用电量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '350',
            type: 'property',
            name: '累计负载用电量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '319',
            type: 'property',
            name: '电网侧电表有功功率',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '382',
            type: 'property',
            name: '电网侧电表当前正向总有功电能',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '384',
            type: 'property',
            name: '电网侧电表当前反向总有功电能',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '307',
            type: 'property',
            name: '防逆流启动',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '308',
            type: 'property',
            name: '防过流启动',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '380',
            type: 'property',
            name: '防逆流阈值',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kW',
              },
            },
          },
          {
            id: '322',
            type: 'property',
            name: '变压器最大功率',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kW',
              },
            },
          },
          {
            id: '323',
            type: 'property',
            name: '需量启动功率',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kW',
              },
            },
          },
          {
            id: '324',
            type: 'property',
            name: '系统设置有功功率',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kW',
              },
            },
          },
          {
            id: '325',
            type: 'property',
            name: '系统设置无功功率',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kVar',
              },
            },
          },
        ],
      },
      {
        id: 'c',
        name: '变流器',
        type: 'group',
        children: [
          {
            id: '342',
            type: 'property',
            name: '变流器离并网模式',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '343',
            type: 'property',
            name: '变流器输出模式',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '344',
            type: 'property',
            name: '变流器工作状态',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '345',
            type: 'property',
            name: '变流器告警状态',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '401',
            type: 'property',
            name: '变流器环境温度',
            dataType: {
              type: 'string',
              specs: {
                unit: '°C',
              },
            },
          },
          {
            id: '568',
            type: 'property',
            name: '交流 A 相电压',
            dataType: {
              type: 'string',
              specs: {
                unit: 'V',
              },
            },
          },
          {
            id: '570',
            type: 'property',
            name: '交流 B 相电压',
            dataType: {
              type: 'string',
              specs: {
                unit: 'V',
              },
            },
          },
          {
            id: '572',
            type: 'property',
            name: '交流 C 相电压',
            dataType: {
              type: 'string',
              specs: {
                unit: 'V',
              },
            },
          },
          {
            id: '574',
            type: 'property',
            name: '交流 A 相电流',
            dataType: {
              type: 'string',
              specs: {
                unit: 'A',
              },
            },
          },
          {
            id: '576',
            type: 'property',
            name: '交流 B 相电流',
            dataType: {
              type: 'string',
              specs: {
                unit: 'A',
              },
            },
          },
          {
            id: '578',
            type: 'property',
            name: '交流 C 相电流',
            dataType: {
              type: 'string',
              specs: {
                unit: 'A',
              },
            },
          },
        ],
      },
      {
        id: 'd',
        type: 'group',
        name: '电池',
        children: [
          {
            id: '340',
            type: 'property',
            name: '电池组工作模式',
            dataType: {
              type: 'enum',
              specs: {
                1: '正常',
                2: '核容',
                3: '均衡',
                4: '调试',
              },
            },
          },
          {
            id: '341',
            type: 'property',
            name: '电池组工作模式',
            dataType: {
              type: 'enum',
              specs: {
                1: '启动',
                2: '充电',
                3: '放电',
                4: '待机',
                5: '停止',
              },
            },
          },
          {
            id: '386',
            type: 'property',
            name: '电池组告警状态',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '514',
            type: 'property',
            name: '电池总电压',
            dataType: {
              type: 'string',
              specs: {
                unit: 'V',
              },
            },
          },
          {
            id: '516',
            type: 'property',
            name: '电池总电流',
            dataType: {
              type: 'string',
              specs: {
                unit: 'A',
              },
            },
          },
          {
            id: '518',
            type: 'property',
            name: '电池总功率',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kW',
              },
            },
          },
          {
            id: '542',
            type: 'property',
            name: '正极绝缘电阻',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kΩ',
              },
            },
          },
          {
            id: '543',
            type: 'property',
            name: '负极绝缘电阻',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kΩ',
              },
            },
          },
          {
            id: '403',
            type: 'property',
            name: '今日充电量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '405',
            type: 'property',
            name: '今日放电量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '334',
            type: 'property',
            name: '累计充电量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '336',
            type: 'property',
            name: '累计放电量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '522',
            type: 'property',
            name: '最高单体电压',
            dataType: {
              type: 'string',
              specs: {
                unit: 'mV',
              },
            },
          },
          {
            id: '523',
            type: 'property',
            name: '最低单体电压',
            dataType: {
              type: 'string',
              specs: {
                unit: 'mV',
              },
            },
          },
          {
            id: '524',
            type: 'property',
            name: '平均单体电压',
            dataType: {
              type: 'string',
              specs: {
                unit: 'mV',
              },
            },
          },
          {
            id: '525',
            type: 'property',
            name: '单体电压差',
            dataType: {
              type: 'string',
              specs: {
                unit: 'mV',
              },
            },
          },
          {
            id: '530',
            type: 'property',
            name: '最高单体温度',
            dataType: {
              type: 'string',
              specs: {
                unit: '℃',
              },
            },
          },
          {
            id: '532',
            type: 'property',
            name: '最低单体温度',
            dataType: {
              type: 'string',
              specs: {
                unit: '℃',
              },
            },
          },
          {
            id: '534',
            type: 'property',
            name: '平均单体温度',
            dataType: {
              type: 'string',
              specs: {
                unit: '℃',
              },
            },
          },
          {
            id: '536',
            type: 'property',
            name: '单体温度差',
            dataType: {
              type: 'string',
              specs: {
                unit: '℃',
              },
            },
          },
        ],
      },
      {
        type: 'group',
        name: '空调',
        id: 'e',
        children: [
          {
            id: '402',
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
            id: '352',
            type: 'property',
            name: '空调机组工作状态',
            dataType: {
              type: 'enum',
              specs: {
                0: '停止',
                1: '运行',
                2: '故障',
              },
            },
          },
          {
            id: '359',
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
            id: '353',
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
            id: '354',
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
            id: '355',
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
            id: '356',
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
            id: '357',
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
            id: '358',
            type: 'property',
            name: '湿度',
            dataType: {
              type: 'string',
              specs: {
                unit: '%',
              },
            },
          },
        ],
      },
      {
        type: 'group',
        id: 'fffffff',
        name: '消防',
        children: [
          {
            id: '387',
            type: 'property',
            name: '消防工作状态',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '388',
            type: 'property',
            name: '消防告警状态',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '389',
            type: 'property',
            name: '消防喷射信号',
            dataType: {
              type: 'string',
            },
          },
        ],
      },
    ],
  },
];

export const systemChargeCostItems: any = [
  {
    id: 'a',
    name: '系统充电费用统计',
    type: 'group',
    children: [
      {
        id: '1400',
        type: 'property',
        name: '尖充电日费用',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        id: '1402',
        type: 'property',
        name: '峰充电日费用',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        id: '1404',
        type: 'property',
        name: '平充电日费用',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        id: '1406',
        type: 'property',
        name: '谷充电日费用',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        id: '1408',
        type: 'property',
        name: '日充电总费用',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        id: '1410',
        type: 'property',
        name: '月充电总费用',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        id: '1412',
        type: 'property',
        name: '尖充电总费用',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        id: '1414',
        type: 'property',
        name: '峰充电总费用',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        id: '1416',
        type: 'property',
        name: '平充电总费用',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        id: '1418',
        type: 'property',
        name: '谷充电总费用',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        id: '1420',
        type: 'property',
        name: '累计充电总费用',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
    ],
  },
];

export const systemDischargeCostItems: any = [
  {
    name: '系统放电收益统计',
    type: 'group',
    id: 'a',
    children: [
      {
        name: '尖放电日收入',
        type: 'property',
        id: '1528',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        name: '峰放电日收入',
        type: 'property',
        id: '1524',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        name: '平放电日收入',
        type: 'property',
        id: '1526',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        name: '谷放电日收入',
        type: 'property',
        id: '1528',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        name: '日放电总收入',
        type: 'property',
        id: '1508',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        name: '累计放电收入',
        type: 'property',
        id: '1506',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        name: '尖放电总收入',
        type: 'property',
        id: '1522',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        name: '峰放电总收入',
        type: 'property',
        id: '1500',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        name: '平放电总收入',
        type: 'property',
        id: '1502',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        name: '谷放电总收入',
        type: 'property',
        id: '1504',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        name: '月放电总收入',
        type: 'property',
        id: '1510',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        name: '日充放电效率',
        type: 'property',
        id: '1534',
        dataType: {
          type: 'string',
          specs: {
            unit: '%',
          },
        },
      },
      {
        name: '昨日收益',
        type: 'property',
        id: '1514',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        name: '当日收益',
        type: 'property',
        id: '1512',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        name: '上月收益',
        type: 'property',
        id: '1518',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        name: '当月收益',
        type: 'property',
        id: '1516',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        name: '累计收益',
        type: 'property',
        id: '1520',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        name: '总充放电效率',
        type: 'property',
        id: '1532',
        dataType: {
          type: 'string',
          specs: {
            unit: '%',
          },
        },
      },
    ],
  },
];

export const reductionItems = [
  {
    name: '减排',
    type: 'group',
    id: 'a',
    children: [
      {
        name: '年CO₂减排量',
        type: 'property',
        id: '204',
        dataType: {
          type: 'string',
          specs: {
            unit: 't',
          },
        },
      },
      {
        name: '累计减排量',
        type: 'property',
        id: '206',
        dataType: {
          type: 'string',
          specs: {
            unit: 't',
          },
        },
      },
      {
        name: '年节约标准煤',
        type: 'property',
        id: '208',
        dataType: {
          type: 'string',
          specs: {
            unit: 't',
          },
        },
      },
      {
        name: '累计节约',
        type: 'property',
        id: '210',
        dataType: {
          type: 'string',
          specs: {
            unit: 't',
          },
        },
      },
      {
        name: '年等效植树',
        type: 'property',
        id: '212',
        dataType: {
          type: 'string',
          specs: {
            unit: '棵',
          },
        },
      },
      {
        name: '累计等效植树',
        type: 'property',
        id: '214',
        dataType: {
          type: 'string',
          specs: {
            unit: '棵',
          },
        },
      },
    ],
  },
];
