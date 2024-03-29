/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-16 09:42:18
 * @LastEditTime: 2024-03-16 10:52:13
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\state\Pcs\helper.ts
 */
const commonEnumType: any = {
  type: 'enum',
  specs: {
    0: '正常',
    1: '失联',
  },
};

export const baseInfoItems: any = [
  {
    id: 'a',
    name: '基本信息',
    type: 'group',
    children: [
      {
        id: '1000',
        name: '设备SN',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1010',
        name: '设备厂商',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1020',
        name: '设备型号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1033',
        name: '本机IP',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1800',
        name: '系统时间',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1030',
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
        id: '1031',
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
        id: '1032',
        name: '主从标识',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1035',
        name: '设备ID',
        type: 'property',
        dataType: {
          type: 'enum',
          specs: {
            0: '从机',
            1: '主机',
          },
        },
      },
      {
        id: '1045',
        name: '外网IP',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1057',
        name: 'EMS SN',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1067',
        name: 'EMS 型号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1077',
        name: 'EMS 硬件版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1078',
        name: 'EMS 软件版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1047',
        name: '4G-IMEI号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '16',
        name: '上位机通信',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: '1101',
        name: '云平台通信',
        type: 'property',
        dataType: commonEnumType,
      },
      {
        id: '1102',
        name: '永泰云通信',
        type: 'property',
        dataType: commonEnumType,
      },
      {
        id: '1103',
        name: '灯板通信',
        type: 'property',
        dataType: commonEnumType,
      },
      {
        id: '1104',
        name: '变流器通信',
        type: 'property',
        dataType: commonEnumType,
      },
      {
        id: '1105',
        name: 'BMS 通信',
        type: 'property',
        dataType: commonEnumType,
      },
      {
        id: '1105',
        name: '空调通信',
        type: 'property',
        dataType: commonEnumType,
      },
      {
        id: '1107',
        name: '消防通信',
        type: 'property',
        dataType: commonEnumType,
      },
      {
        id: '1108',
        name: '电网侧电表通信',
        type: 'property',
        dataType: commonEnumType,
      },
      {
        id: '1109',
        name: '逆变侧电表通信',
        type: 'property',
        dataType: commonEnumType,
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
            id: '1500',
            type: 'property',
            name: '系统控制模式',
            dataType: {
              type: 'enum',
              specs: {
                0: '本地',
                1: '远程',
              },
            },
          },
          {
            id: '1501',
            type: 'property',
            name: '系统工作模式',
            dataType: {
              type: 'enum',
              specs: {
                0: '削峰填谷',
                1: '备电',
                2: '手动控制',
                3: '自发自用',
                4: '全额上网',
              },
            },
          },
          {
            id: '1502',
            type: 'property',
            name: '系统工作状态',
            dataType: {
              type: 'enum',
              specs: {
                0: '故障',
                1: '运行',
                2: '运行/充电',
                3: '运行/放电',
                4: '待机',
                5: '停机',
                6: '急停',
              },
            },
          },
          {
            id: '1200',
            type: 'property',
            name: '系统告警状态',
            dataType: {
              type: 'enum',
              specs: {
                0: '正常',
                1: '告警',
              },
            },
          },
          {
            id: '3701',
            type: 'property',
            name: '电池组工作状态',
            dataType: {
              type: 'enum',
              specs: {
                0: '运行',
                1: '运行/充电',
                2: '运行/放电',
                3: '待机',
                4: '停止',
                5: '故障',
              },
            },
          },
        ],
      },
      {
        id: 'm',
        type: 'group',
        showType: 8,
      },
      {
        id: 's',
        type: 'group',
        showType: 2,
        children: [
          {
            id: '1201',
            type: 'property',
            name: '光伏发电功率',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kW',
              },
            },
          },
          {
            id: '1202',
            type: 'property',
            name: '用电功率',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kW',
              },
            },
          },
          {
            id: '1204',
            type: 'property',
            name: '自发自用功率',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kW',
              },
            },
          },
          {
            id: '1205',
            type: 'property',
            name: '今日发电量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '1206',
            type: 'property',
            name: '今日用电量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '1207',
            type: 'property',
            name: '今日自发自用电量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '1208',
            type: 'property',
            name: '今日自发自用率',
            dataType: {
              type: 'string',
              specs: {
                unit: '%',
              },
            },
          },
          {
            id: '1209',
            type: 'property',
            name: '累计发电量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '1211',
            type: 'property',
            name: '累计用电量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '1213',
            type: 'property',
            name: '累计自发自用电量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '1215',
            type: 'property',
            name: '累计自发自用率',
            dataType: {
              type: 'string',
              specs: {
                unit: '%',
              },
            },
          },
          {
            id: '1216',
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
            id: '1217',
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
            id: '3069',
            type: 'property',
            name: '电池充放电功率',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kW',
              },
            },
          },
          {
            id: '1219',
            type: 'property',
            name: '电池剩余电能',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '1220',
            type: 'property',
            name: '今日电池充电量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '1221',
            type: 'property',
            name: '今日电池放电量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '1222',
            type: 'property',
            name: '累计电池充电量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '1224',
            type: 'property',
            name: '累计电池放电量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '1226',
            type: 'property',
            name: '负载用电功率',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kW',
              },
            },
          },
          {
            id: '1228',
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
            id: '1229',
            type: 'property',
            name: '今日自给自足电量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '1230',
            type: 'property',
            name: '今日自给自足率',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '1231',
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
            id: '1233',
            type: 'property',
            name: '累计自给自足电量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '1235',
            type: 'property',
            name: '累计自给自足率',
            dataType: {
              type: 'string',
            },
          },
          {
            id: '1236',
            type: 'property',
            name: '逆变侧有功功率',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kW',
              },
            },
          },
          {
            id: '1237',
            type: 'property',
            name: '逆变侧无功功率',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kW',
              },
            },
          },
          {
            id: '1238',
            type: 'property',
            name: '逆变侧视在功率',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kW',
              },
            },
          },
          {
            id: '1239',
            type: 'property',
            name: '市电功率',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kW',
              },
            },
          },
          {
            id: '1241',
            type: 'property',
            name: '今日市电供电量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '1242',
            type: 'property',
            name: '今日市电馈网电量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '1243',
            type: 'property',
            name: '累计市电供电量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '1245',
            type: 'property',
            name: '累计市电馈网电量',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
          {
            id: '1247',
            type: 'property',
            name: '电网侧电表有功功率',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kW',
              },
            },
          },
          {
            id: '1249',
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
            id: '1251',
            type: 'property',
            name: '电网侧电表当前反向总有功电能',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kWh',
              },
            },
          },
        ],
      },
      {
        id: 'm',
        type: 'group',
        showType: 8,
      },
      {
        id: 'm',
        type: 'group',
        showType: 2,
        children: [
          /// 11111
          {
            id: '1606',
            type: 'property',
            name: '防逆流启动',
            dataType: {
              type: 'enum',
              specs: {
                0: '停止',
                1: '启动',
              },
            },
          },
          {
            id: '1607',
            type: 'property',
            name: '防过流启动',
            dataType: {
              type: 'enum',
              specs: {
                0: '停止',
                1: '启动',
              },
            },
          },
          {
            id: '1253',
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
            id: '1254',
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
            id: '1255',
            type: 'property',
            name: '系统设置无功功率',
            dataType: {
              type: 'string',
              specs: {
                unit: 'kVar',
              },
            },
          },
          {
            id: '1256',
            type: 'property',
            name: '市电开关',
            dataType: {
              type: 'enum',
              specs: {
                0: '闭合',
                1: '断开',
              },
            },
          },
          {
            id: '1257',
            type: 'property',
            name: '直流开关',
            dataType: {
              type: 'enum',
              specs: {
                0: '闭合',
                1: '断开',
              },
            },
          },
          {
            id: '1258',
            type: 'property',
            name: '负载开关',
            dataType: {
              type: 'enum',
              specs: {
                0: '闭合',
                1: '断开',
              },
            },
          },
          {
            id: '1259',
            type: 'property',
            name: '电气急停信号',
            dataType: {
              type: 'enum',
              specs: {
                0: '正常',
                1: '异常',
              },
            },
          },
          {
            id: '1260',
            type: 'property',
            name: '辅助供电开关',
            dataType: {
              type: 'enum',
              specs: {
                0: '闭合',
                1: '断开',
              },
            },
          },
          {
            id: '1261',
            type: 'property',
            name: 'EMS直流供电开关',
            dataType: {
              type: 'enum',
              specs: {
                0: '闭合',
                1: '断开',
              },
            },
          },
          {
            id: '1262',
            type: 'property',
            name: '站控消防',
            dataType: {
              type: 'enum',
              specs: {
                0: '正常',
                1: '异常',
              },
            },
          },
          {
            id: '1263',
            type: 'property',
            name: '交流防雷器状态',
            dataType: {
              type: 'enum',
              specs: {
                0: '闭合',
                1: '断开',
              },
            },
          },
          {
            id: '1264',
            type: 'property',
            name: '直流防雷器状态',
            dataType: {
              type: 'enum',
              specs: {
                0: '闭合',
                1: '断开',
              },
            },
          },
          {
            id: '1265',
            type: 'property',
            name: '可燃气体排风扇开关',
            dataType: {
              type: 'enum',
              specs: {
                0: '正常',
                1: '异常',
              },
            },
          },
          {
            id: '1266',
            type: 'property',
            name: '水浸报警',
            dataType: {
              type: 'enum',
              specs: {
                0: '停止',
                1: '运行',
              },
            },
          },
          {
            id: '1267',
            type: 'property',
            name: '门禁开关',
            dataType: {
              type: 'enum',
              specs: {
                0: '关闭',
                1: '打开',
              },
            },
          },
          {
            id: '1268',
            type: 'property',
            name: '电池柜开门次数',
            dataType: {
              type: 'string',
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
            id: '2819',
            type: 'property',
            name: '变流器离并网模式',
            dataType: {
              type: 'enum',
              specs: {
                1: '离网',
                2: '并网',
                3: '并网(仅馈电)',
                4: '并网(仅市电充电)',
              },
            },
          },
          {
            id: '2820',
            type: 'property',
            name: '变流器工作状态',
            dataType: {
              type: 'enum',
              specs: {
                0: '等待',
                1: '检查',
                2: '正常',
                3: '故障',
                5: '升级',
                6: '关机',
              },
            },
          },
          {
            id: '2656',
            type: 'property',
            name: '变流器告警状态',
            dataType: {
              type: 'enum',
              specs: {
                0: '正常',
                1: '告警',
              },
            },
          },
          {
            id: '2732',
            type: 'property',
            name: '电网交流 A 相电压',
            dataType: {
              type: 'string',
              specs: {
                unit: 'V',
              },
            },
          },
          {
            id: '2733',
            type: 'property',
            name: '电网交流 B 相电压',
            dataType: {
              type: 'string',
              specs: {
                unit: 'V',
              },
            },
          },
          {
            id: '2734',
            type: 'property',
            name: '电网交流 C 相电压',
            dataType: {
              type: 'string',
              specs: {
                unit: 'V',
              },
            },
          },
          {
            id: '2735',
            type: 'property',
            name: '电网交流 A 相电流',
            dataType: {
              type: 'string',
              specs: {
                unit: 'A',
              },
            },
          },
          {
            id: '2736',
            type: 'property',
            name: '电网交流 B 相电流',
            dataType: {
              type: 'string',
              specs: {
                unit: 'A',
              },
            },
          },
          {
            id: '2737',
            type: 'property',
            name: '电网交流 C 相电流',
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
            id: '3700',
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
            id: '3066',
            type: 'property',
            name: '电池组告警状态',
            dataType: {
              type: 'enum',
              specs: {
                0: '正常',
                1: '告警',
              },
            },
          },
          {
            id: '3067',
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
            id: '3068',
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
            id: '3069',
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
            id: '3084',
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
            id: '3085',
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
            id: '3077',
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
            id: '3078',
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
            id: '3079',
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
            id: '3081',
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
            id: '3094',
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
            id: '3097',
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
            id: '3100',
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
            id: '3101',
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
            id: '3102',
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
            id: '3105',
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
            id: '3108',
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
            id: '3109',
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
            id: '1',
            type: 'property',
            name: '空调机组控制模式',
            dataType: {
              type: 'enum',
              specs: {},
            },
          },
          {
            id: '5560',
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
            id: '5534',
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
            id: '5537',
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
            id: '5545',
            type: 'property',
            name: '回风温度',
            dataType: {
              type: 'string',
              specs: {
                unit: '°C',
              },
            },
          },
          {
            id: '5546',
            type: 'property',
            name: '冷凝盘管温度',
            dataType: {
              type: 'string',
              specs: {
                unit: '°C',
              },
            },
          },
          {
            id: '5538',
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
        id: 'f',
        name: '消防',
        children: [
          {
            id: '5607',
            type: 'property',
            name: '消防告警状态',
            dataType: {
              type: 'enum',
              specs: {
                0: '正常',
                1: '告警',
              },
            },
          },
          {
            id: '5608',
            type: 'property',
            name: '主机报警状态',
            dataType: {
              type: 'enum',
              specs: {
                0: '报警等级1',
                1: '报警等级2',
                2: '报警等级3',
                3: '报警等级4',
              },
            },
          },
          {
            id: '5609',
            type: 'property',
            name: '总故障标志',
            dataType: {
              type: 'enum',
              specs: {
                0: '正常',
                1: '故障',
              },
            },
          },
        ],
      },
    ],
  },
];

export const incomeItems: any = [
  {
    name: '收益统计',
    type: 'group',
    id: 'a',
    children: [
      {
        name: '昨日光伏收益',
        type: 'property',
        id: '1269',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        name: '昨日节约电费',
        type: 'property',
        id: '1271',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        name: '今日光伏收益',
        type: 'property',
        id: '1273',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        name: '今日节约电费',
        type: 'property',
        id: '1275',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        name: '上月光伏收益',
        type: 'property',
        id: '1277',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        name: '上月节约电费',
        type: 'property',
        id: '1279',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        name: '当月光伏收益',
        type: 'property',
        id: '1281',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        name: '当月节约电费',
        type: 'property',
        id: '1283',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        name: '累计光伏收益',
        type: 'property',
        id: '1285',
        dataType: {
          type: 'string',
          specs: {
            unit: '¥',
          },
        },
      },
      {
        name: '累计节约电费',
        type: 'property',
        id: '1287',
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

export const reductionItems = [
  {
    name: '减排',
    type: 'group',
    id: 'a',
    children: [
      {
        name: '年CO₂减排量',
        type: 'property',
        id: '1400',
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
        id: '1402',
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
        id: '1404',
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
        id: '1406',
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
        id: '1408',
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
        id: '1410',
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
