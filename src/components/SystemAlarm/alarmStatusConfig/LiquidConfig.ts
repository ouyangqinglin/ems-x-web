// import { formatMessage } from '@/utils';
type AlarmStatusItemType = {
  name: string;
  hideTitle?: boolean;
  children: { name: string; status: string }[];
};
//暂时不做国际化
const formatMessage = (message: any) => {
  return message.defaultMessage;
};
//系统告警状态
export const systemAlarmStatusItem: AlarmStatusItemType[] = [
  {
    name: formatMessage({ id: 'common', defaultMessage: '系统' }),
    children: [
      {
        name: formatMessage({ id: 'common', defaultMessage: '与上位机通信' }),
        status: '3000[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '与云平台通信' }),
        status: '3000[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '与永泰云通信' }),
        status: '3000[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '与灯板通信' }),
        status: '3000[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '与IO模块' }),
        status: '3000[7,8]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'EMS板故障' }),
        status: '3002[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '系统告警状态' }),
        status: '381',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '系统急停' }),
        status: '3002[12,13]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '并机地址冲突' }),
        status: '3002[11,12]',
      },
    ],
  },
  {
    name: formatMessage({ id: 'common', defaultMessage: '变流器' }),
    children: [
      {
        name: formatMessage({ id: 'common', defaultMessage: '与EMS通信' }),
        status: '3000[8,9]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变流器故障' }),
        status: '3002[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变流器告警状态' }),
        status: '345',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变流器急停' }),
        status: '3002[13,14]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变压器过载预警' }),
        status: '3002[15,16]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变压器过载故障' }),
        status: '3002[0,1]',
      },
    ],
  },
  {
    name: formatMessage({ id: 'common', defaultMessage: '电池' }),
    children: [
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BCMU与EMS通信' }),
        status: '3000[9,10]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BCMU故障' }),
        status: '3002[4,5]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BMU与BCMU通信' }),
        status: '3000[10,11]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BMU故障' }),
        status: '3002[5,6]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BMU风扇故障' }),
        status: '3002[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池组告警状态' }),
        status: '386',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BMS急停' }),
        status: '3002[14,15]',
      },
    ],
  },
  {
    name: formatMessage({ id: 'common', defaultMessage: '空调和消防' }),
    children: [
      {
        name: formatMessage({ id: 'common', defaultMessage: '空调与EMS通信' }),
        status: '3000[11,12]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '空调故障' }),
        status: '3002[7,8]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '空调告警状态' }),
        status: '3002[10,11]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '液冷机与EMS通信' }),
        status: '3000[11,12]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '液冷机故障' }),
        status: '3002[8,9]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '当前告警最高等级' }),
        status: '32210',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '除湿机与EMS通信' }),
        status: '3000[13,14]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '除湿机故障' }),
        status: '3002[9,10]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '消防与EMS通信' }),
        status: '3000[14,15]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '消防故障' }),
        status: '3002[10,11]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '消防预警级别' }),
        status: '33051',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '消防喷射信号' }),
        status: '33037',
      },
    ],
  },
  {
    name: formatMessage({ id: 'common', defaultMessage: '电表' }),
    children: [
      {
        name: formatMessage({ id: 'common', defaultMessage: '电网侧电表与EMS通信' }),
        status: '3000[15,16]',
      },

      {
        name: formatMessage({ id: 'common', defaultMessage: '逆变侧电表与EMS通信' }),
        status: '3001[0,1]',
      },
    ],
  },
];
//系统风冷-液冷
export const windAlarmStatusItem: AlarmStatusItemType[] = [
  {
    name: formatMessage({ id: 'common', defaultMessage: '系统' }),
    hideTitle: true,
    children: [
      {
        name: formatMessage({ id: 'common', defaultMessage: '与上位机通信' }),
        status: '3000[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '触摸屏通信' }),
        status: '3000[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '与云平台通信' }),
        status: '3000[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '与永泰云通信' }),
        status: '3000[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '4G通信' }),
        status: '3000[4,5]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'WIFI通信' }),
        status: '3000[5,6]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '与灯板通信' }),
        status: '3000[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '与IO模块' }),
        status: '3000[7,8]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变流器通信' }),
        status: '3000[8,9]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BCMU通信' }),
        status: '3000[9,10]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BMU通信' }),
        status: '3000[10,11]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '空调通信' }),
        status: '3000[11,12]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '消防通信' }),
        status: '3000[14,15]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电网侧电表通信' }),
        status: '3000[15,16]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '逆变侧电表通信' }),
        status: '',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'EMS板故障' }),
        status: '3002[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '灯板故障' }),
        status: '3002[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'IO模块故障' }),
        status: '3002[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变流器故障' }),
        status: '3002[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BCMU故障' }),
        status: '3002[4,5]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BMU故障' }),
        status: '3002[5,6]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BMU风扇故障' }),
        status: '3002[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '空调故障' }),
        status: '3002[7,8]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '消防故障' }),
        status: '3002[10,11]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '并机地址冲突' }),
        status: '3002[11,12]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '系统急停' }),
        status: '3002[12,13]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变流器急停' }),
        status: '3002[13,14]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BMS急停' }),
        status: '3002[14,15]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变压器过载预警' }),
        status: '3002[15,16]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变压器过载故障' }),
        status: '3003[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变流器一般过充电功率' }),
        status: '3004[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变流器一般过放电功率' }),
        status: '3004[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变流器一般过压' }),
        status: '3004[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变流器一般欠压' }),
        status: '3004[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变流器一般充电过流' }),
        status: '3004[4,5]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变流器一般放电过流' }),
        status: '3004[5,6]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变流器一般过温' }),
        status: '3004[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变流器一般欠温' }),
        status: '3004[7,8]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变流器严重过充电功率' }),
        status: '3004[8,9]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变流器严重过放电功率' }),
        status: '3004[9,10]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变流器严重过压' }),
        status: '3004[10,11]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变流器严重欠压' }),
        status: '3004[11,12]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变流器严重充电过流' }),
        status: '3004[12,13]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变流器严重放电过流' }),
        status: '3004[13,14]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变流器严重过温' }),
        status: '3004[14,15]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变流器严重欠温' }),
        status: '3004[15,16]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池总电压过压报警' }),
        status: '3005[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池总电压欠压报警' }),
        status: '3005[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池单体过压报警' }),
        status: '3005[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池单体欠压报警' }),
        status: '3005[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池放电电流过大报警' }),
        status: '3005[4,5]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池充电电流过大报警' }),
        status: '3005[5,6]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池放电过温报警' }),
        status: '3005[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池放电欠温报警' }),
        status: '3005[7,8]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池充电过温报警' }),
        status: '3005[8,9]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池充电欠温报警' }),
        status: '3005[9,10]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '绝缘阻值过低报警' }),
        status: '3005[10,11]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '极柱温度过高报警' }),
        status: '3005[11,12]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '高压箱连接器温度过高报警' }),
        status: '3005[12,13]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池单体压差报警' }),
        status: '3005[13,14]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池单体温差报警' }),
        status: '3005[14,15]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池SOC低报警' }),
        status: '3005[15,16]',
      },
    ],
  },
];
//变流器
export const converterAlarmStatusItem: AlarmStatusItemType[] = [
  {
    name: formatMessage({ id: 'common', defaultMessage: '系统' }),
    hideTitle: true,
    children: [
      {
        name: formatMessage({ id: 'common', defaultMessage: 'EPO 故障' }),
        status: '3800[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'IGBT硬件过流' }),
        status: '3800[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '母线硬件过压' }),
        status: '3800[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '功率模块逐波限流' }),
        status: '3800[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '辅助电源故障' }),
        status: '3801[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '风扇故障' }),
        status: '3801[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '连接故障' }),
        status: '3801[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '防雷器故障' }),
        status: '3801[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '功率模块过温' }),
        status: '3801[8,9]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'A 相过压故障' }),
        status: '3802[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'B 相过压故障' }),
        status: '3802[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'C 相过压故障' }),
        status: '3802[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'A 相欠压故障' }),
        status: '3802[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'B 相欠压故障' }),
        status: '3802[4,5]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'C 相欠压故障' }),
        status: '3802[5,6]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电网过频' }),
        status: '3802[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电网欠频' }),
        status: '3802[7,8]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电网相序错误' }),
        status: '3802[8,9]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'A 相软件过流' }),
        status: '3802[9,10]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'B 相软件过流' }),
        status: '3802[10,11]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'C 相软件过流' }),
        status: '3802[11,12]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电网电压不平衡' }),
        status: '3802[12,13]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电网电流不平衡' }),
        status: '3802[13,14]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电网缺相' }),
        status: '3802[14,15]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'N 线过流' }),
        status: '3802[15,16]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '预充母线过压' }),
        status: '3803[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '预充母线欠压' }),
        status: '3803[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '不控整流母线过压' }),
        status: '3803[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '不控整流母线欠压' }),
        status: '3803[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '运行母线过压' }),
        status: '3803[4,5]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '运行母线欠压' }),
        status: '3803[5,6]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '正负母线不平衡' }),
        status: '3803[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池欠压' }),
        status: '3803[7,8]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电流模式母线欠压' }),
        status: '3803[8,9]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池过压' }),
        status: '3803[9,10]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '直流预充电过流' }),
        status: '3803[10,11]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '直流过流' }),
        status: '3803[11,12]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '预充电超时' }),
        status: '3804[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '预充电 A 相过流' }),
        status: '3804[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '预充电 B 相过流' }),
        status: '3804[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '预充电 C 相过流' }),
        status: '3804[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'AD 采样零漂故障' }),
        status: '3805[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'STS 通信故障' }),
        status: '3805[11,12]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池系统告警或故障' }),
        status: '3805[12,13]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BMS 通讯故障' }),
        status: '3805[13,14]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '从模块 CAN 通信故障' }),
        status: '3805[14,15]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'EMS 通信故障' }),
        status: '3805[15,16]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '预充电继电器闭合失败' }),
        status: '3806[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '预充电继电器断开失败' }),
        status: '3806[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '预充电继电器闭合状态错误' }),
        status: '3806[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '预充电继电器断开状态错误' }),
        status: '3806[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '主继电器闭合失败' }),
        status: '3806[4,5]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '主继电器断开失败' }),
        status: '3806[5,6]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '主继电器闭合状态错误' }),
        status: '3806[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '主继电器断开状态错误' }),
        status: '3806[7,8]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '逆变电压 A 相过压故障' }),
        status: '3807[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '逆变电压 B 相过压故障' }),
        status: '3807[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '逆变电压 C 相过压故障' }),
        status: '3807[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电网孤岛故障' }),
        status: '3807[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '系统谐振故障' }),
        status: '3807[5,6]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '软件过压过流' }),
        status: '3807[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '逆变电压 A 相欠压故障' }),
        status: '3807[8,9]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '逆变电压 B 相欠压故障' }),
        status: '3807[9,10]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '逆变电压 C 相欠压故障' }),
        status: '3807[10,11]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '模块拨码地址错误' }),
        status: '3807[11,12]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '离网无同步信号故障' }),
        status: '3807[12,13]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '离网短路故障' }),
        status: '3807[14,15]',
      },
    ],
  },
];
//电池组
export const batteryAlarmStatusItem: AlarmStatusItemType[] = [
  {
    name: formatMessage({ id: 'common', defaultMessage: '系统' }),
    hideTitle: true,
    children: [
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BMU硬件故障' }),
        status: '5400[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BCU硬件故障' }),
        status: '5400[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '熔断器故障' }),
        status: '5400[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '接触器粘连故障' }),
        status: '5400[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BMU通信故障' }),
        status: '5400[4,5]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电流传感器故障' }),
        status: '5400[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '绝缘监测设备故障' }),
        status: '5400[7,8]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'NTC故障' }),
        status: '5400[9,10]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '急停信号' }),
        status: '[11,12]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '水浸信号' }),
        status: '[12,13]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '气溶胶信号' }),
        status: '[13,14]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '交流防雷器故障' }),
        status: '[14,15]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BMU1通信故障' }),
        status: '5404[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BMU2通信故障' }),
        status: '5404[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BMU3通信故障' }),
        status: '5404[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BMU4通信故障' }),
        status: '5404[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BMU5通信故障' }),
        status: '5404[4,5]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '总电压过压一级报警' }),
        status: '5401[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '总电压欠压一级报警' }),
        status: '5401[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '单体过压一级报警' }),
        status: '5401[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '单体欠压一级报警' }),
        status: '5401[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '放电电流过大一级报警' }),
        status: '5401[4,5]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '充电电流过大一级报警' }),
        status: '5401[5,6]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '放电电池过温一级报警' }),
        status: '5401[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '放电电池欠温一级报警' }),
        status: '5401[7,8]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '充电电池过温一级报警' }),
        status: '5401[8,9]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '充电电池欠温一级报警' }),
        status: '5401[9,10]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '绝缘阻值过低一级报警' }),
        status: '5401[10,11]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '极柱温度过高一级报警' }),
        status: '5401[11,12]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '高压箱连接器温度过高一级报警' }),
        status: '5401[12,13]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '单体压差一级报警' }),
        status: '5401[13,14]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '单体温差一级报警' }),
        status: '5401[14,15]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'SOC低一级报警' }),
        status: '5401[15,16]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '总电压过压二级报警' }),
        status: '5402[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '总电压欠压二级报警' }),
        status: '5402[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '单体过压二级报警' }),
        status: '5402[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '单体欠压二级报警' }),
        status: '5402[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '放电电流过大二级报警' }),
        status: '5402[4,5]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '放电电池过温二级报警' }),
        status: '5402[5,6]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '放电电池欠温二级报警' }),
        status: '5402[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '充电电流过大二级报警' }),
        status: '5402[7,8]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '充电电池欠温二级报警' }),
        status: '5402[8,9]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '绝缘阻值过低二级报警' }),
        status: '5402[9,10]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '充电电池过温二级报警' }),
        status: '5402[10,11]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '极柱温度过高二级报警' }),
        status: '5402[11,12]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '高压箱连接器温度过高二级报警' }),
        status: '5402[12,13]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '单体压差二级报警' }),
        status: '5402[13,14]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '单体温差二级报警' }),
        status: '5402[14,15]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'SOC低二级级报警' }),
        status: '5402[15,16]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '总电压过压三级报警' }),
        status: '5403[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '总电压欠压三级报警' }),
        status: '5403[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '单体过压三级报警' }),
        status: '5403[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '单体欠压三级报警' }),
        status: '5403[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '放电电流过大三级报警' }),
        status: '5403[4,5]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '充电电流过大三级报警' }),
        status: '5403[5,6]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '放电电池过温三级报警' }),
        status: '5403[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '放电电池欠温三级报警' }),
        status: '5403[7,8]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '充电电池过温三级报警' }),
        status: '5403[8,9]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '充电电池欠温三级报警' }),
        status: '5403[9,10]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '绝缘阻值过低三级报警' }),
        status: '5403[10,11]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '极柱温度过高三级报警' }),
        status: '5403[11,12]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '高压箱连接器温度过高三级报警' }),
        status: '5403[12,13]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '单体压差三级报警' }),
        status: '5403[13,14]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '单体温差三级报警' }),
        status: '5403[14,15]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'SOC低三级报警' }),
        status: '5403[15,16]',
      },
    ],
  },
];
export const airconditAlarmStatusItem: AlarmStatusItemType[] = [
  {
    name: formatMessage({ id: 'common', defaultMessage: '系统' }),
    hideTitle: true,
    children: [
      {
        name: formatMessage({ id: 'common', defaultMessage: '盘管防冻' }),
        status: '30100[4,5]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '排气高温' }),
        status: '30100[5,6]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '盘管温感失效' }),
        status: '30100[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '室外温感失效' }),
        status: '30100[7,8]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '冷凝温感失效' }),
        status: '30100[8,9]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '内温感失效' }),
        status: '30100[9,10]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '排气温感失效' }),
        status: '30100[10,11]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '湿感失效' }),
        status: '30100[11,12]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '内风机故障' }),
        status: '30100[12,13]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '外风机故障' }),
        status: '30100[13,14]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '压缩机故障' }),
        status: '30100[14,15]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电加热故障' }),
        status: '30100[15,16]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '应急风机故障' }),
        status: '30101[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '高压告警' }),
        status: '30101[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '低压告警' }),
        status: '30101[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '水浸告警' }),
        status: '30101[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '烟感告警' }),
        status: '30101[4,5]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '门禁告警' }),
        status: '30101[5,6]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '高压锁定' }),
        status: '30101[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '低压锁定' }),
        status: '30101[7,8]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '排气锁定' }),
        status: '30101[8,9]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '交流过压' }),
        status: '30101[9,10]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '交流欠压' }),
        status: '30101[10,11]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '交流掉电' }),
        status: '30101[11,12]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '缺相' }),
        status: '30101[12,13]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '频率异常' }),
        status: '30101[13,14]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '逆相' }),
        status: '30101[14,15]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '直流过压' }),
        status: '30101[15,16]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '直流欠压' }),
        status: '30102[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '高温告警' }),
        status: '30100[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '低温告警' }),
        status: '30100[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '高湿告警' }),
        status: '30100[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '低湿告警' }),
        status: '30100[3,4]',
      },
    ],
  },
];
//消防-风冷
export const fireFightWindAlarmStatusItem: AlarmStatusItemType[] = [
  {
    name: formatMessage({ id: 'common', defaultMessage: '系统' }),
    hideTitle: true,
    children: [
      {
        name: formatMessage({ id: 'common', defaultMessage: '光电烟雾传感器故障' }),
        status: '33700[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '光电烟雾传感器报警' }),
        status: '33700[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '一氧化碳传感器状态' }),
        status: '33700[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '一氧化碳传感器报警' }),
        status: '33700[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '温度传感器状态' }),
        status: '33700[4,5]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '温度传感器报警' }),
        status: '33700[5,6]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电解液传感器故障' }),
        status: '33700[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电解液传感器报警' }),
        status: '33700[7,8]',
      },
    ],
  },
];
//消防-液冷
export const fireFightWetAlarmStatusItem: AlarmStatusItemType[] = [
  {
    name: formatMessage({ id: 'common', defaultMessage: '系统' }),
    hideTitle: true,
    children: [
      {
        name: formatMessage({ id: 'common', defaultMessage: '光电烟雾传感器故障' }),
        status: '',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '光电烟雾传感器报警' }),
        status: '',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '一氧化碳传感器状态' }),
        status: '',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '一氧化碳传感器报警' }),
        status: '',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '温度传感器状态' }),
        status: '',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '温度传感器报警' }),
        status: '',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电解液传感器故障' }),
        status: '',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电解液传感器报警' }),
        status: '',
      },
    ],
  },
];
//液冷机
export const wetAlarmStatusItem: AlarmStatusItemType[] = [
  {
    name: formatMessage({ id: 'common', defaultMessage: '系统' }),
    hideTitle: true,
    children: [
      {
        name: formatMessage({ id: 'common', defaultMessage: '出水高温' }),
        status: '',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '出水低温' }),
        status: '',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '出水温感故障' }),
        status: '',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '回水温感故障' }),
        status: '',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '排气温度过高锁定' }),
        status: '',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '系统高压锁定' }),
        status: '',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '系统低压锁定' }),
        status: '',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变频器过流锁定' }),
        status: '',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变频器过温锁定' }),
        status: '',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变频器过压锁定' }),
        status: '',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变频器欠压锁定' }),
        status: '',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变频器缺相锁定' }),
        status: '',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变频器其他故障锁定' }),
        status: '',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '补水告警' }),
        status: '',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '系统压力过高' }),
        status: '',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '出水压力过高' }),
        status: '',
      },
    ],
  },
];

//液冷机
export const wetCoolerAlarmStatusItem: AlarmStatusItemType[] = [
  {
    name: formatMessage({ id: 'common', defaultMessage: '系统' }),
    hideTitle: true,
    children: [
      {
        name: formatMessage({ id: 'common', defaultMessage: '出水高温' }),
        status: '32600[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '出水低温' }),
        status: '32600[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '出水温感故障' }),
        status: '32600[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '回水温感故障' }),
        status: '32600[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '排气温度过高锁定' }),
        status: '32600[4,5]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '系统高压锁定' }),
        status: '32600[5,6]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '系统低压锁定' }),
        status: '32600[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变频器过流锁定' }),
        status: '32600[7,8]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变频器过温锁定' }),
        status: '32600[8,9]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变频器过压锁定' }),
        status: '32600[9,10]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变频器欠压锁定' }),
        status: '3260[10,11]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变频器缺相锁定' }),
        status: '3260[11,12]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变频器其他故障锁定' }),
        status: '3260[12,13]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '补水告警' }),
        status: '3260[13,14]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '系统压力过高' }),
        status: '3260[14,15]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '出水压力过高' }),
        status: '3260[15,16]',
      },
    ],
  },
];
//除湿机
export const dehumidifierAlarmStatusItem: AlarmStatusItemType[] = [
  {
    name: formatMessage({ id: 'common', defaultMessage: '系统' }),
    hideTitle: true,
    children: [
      {
        name: formatMessage({ id: 'common', defaultMessage: '' }),
        status: '',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '' }),
        status: '',
      },
    ],
  },
];

export const AlarmStatusItem: AlarmStatusItemType[] = [
  {
    name: formatMessage({ id: 'common', defaultMessage: '系统' }),
    hideTitle: true,
    children: [
      {
        name: formatMessage({ id: 'common', defaultMessage: '' }),
        status: '',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '' }),
        status: '',
      },
    ],
  },
];
