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
//首页
export const indexAlarmStatusItem: AlarmStatusItemType[] = [
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
        name: formatMessage({ id: 'common', defaultMessage: '消防与EMS通信' }),
        status: '3000[14,15]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '消防故障' }),
        status: '3002[10,11]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '消防告警状态' }),
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
      // {
      //   name: formatMessage({ id: 'common', defaultMessage: '电网侧电表故障' }),
      //   status: '',
      // },
      {
        name: formatMessage({ id: 'common', defaultMessage: '逆变侧电表与EMS通信' }),
        status: '3001[0,1]',
      },
      // {
      //   name: formatMessage({ id: 'common', defaultMessage: '逆变侧电表故障' }),
      //   status: '',
      // },
    ],
  },
];
//系统
export const systemAlarmStatusItem: AlarmStatusItemType[] = [
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
        name: formatMessage({ id: 'common', defaultMessage: '与IO模块通信' }),
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
