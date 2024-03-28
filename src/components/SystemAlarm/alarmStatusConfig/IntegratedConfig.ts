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
        status: '2600[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '与云平台通信' }),
        status: '2600[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '与永泰云通信' }),
        status: '2600[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '与灯板通信' }),
        status: '2600[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '与IO模块' }),
        status: '2600[7,8]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'EMS板故障' }),
        status: '2602[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '系统告警状态' }),
        status: '1200',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '系统急停' }),
        status: '2602[12,13]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '并机地址冲突' }),
        status: '2602[11,12]',
      },
    ],
  },
  {
    name: formatMessage({ id: 'common', defaultMessage: '变流器' }),
    children: [
      {
        name: formatMessage({ id: 'common', defaultMessage: '与EMS通信' }),
        status: '2600[8,9]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变流器故障' }),
        status: '2602[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变流器告警状态' }),
        status: '2656',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变流器急停' }),
        status: '2602[13,14]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变压器过载预警' }),
        status: '2602[15,16]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变压器过载故障' }),
        status: '2603[0,1]',
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
        status: '2600[11,12]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '空调故障' }),
        status: '2602[7,8]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '空调告警状态' }),
        status: '5534',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '消防与EMS通信' }),
        status: '2600[14,15]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '消防故障' }),
        status: '2602[10,11]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '消防告警状态' }),
        status: '5634',
      },
    ],
  },
  {
    name: formatMessage({ id: 'common', defaultMessage: '电表' }),
    children: [
      {
        name: formatMessage({ id: 'common', defaultMessage: '电网侧电表与EMS通信' }),
        status: '2600[15,16]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '逆变侧电表与EMS通信' }),
        status: '2601[0,1]',
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
        status: '2600[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '触摸屏通信' }),
        status: '2600[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '与云平台通信' }),
        status: '2600[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '与永泰云通信' }),
        status: '2600[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '4G通信' }),
        status: '2600[4,5]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'WIFI通信' }),
        status: '2600[5,6]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '与灯板通信' }),
        status: '2600[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '与IO模块' }),
        status: '2600[7,8]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变流器通信' }),
        status: '2600[8,9]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BCMU通信' }),
        status: '2600[9,10]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BMU通信' }),
        status: '2600[10,11]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '空调通信' }),
        status: '2600[11,12]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '消防通信' }),
        status: '2600[14,15]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电网侧电表通信' }),
        status: '2600[15,16]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '逆变侧电表通信' }),
        status: '2601[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'EMS板故障' }),
        status: '2602[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '灯板故障' }),
        status: '2602[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'IO模块故障' }),
        status: '2602[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变流器故障' }),
        status: '2602[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BCMU故障' }),
        status: '2602[4,5]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BMU故障' }),
        status: '2602[5,6]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BMU风扇故障' }),
        status: '2602[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '空调故障' }),
        status: '2602[7,8]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '消防故障' }),
        status: '2602[10,11]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '并机地址冲突' }),
        status: '2602[11,12]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '系统急停' }),
        status: '2602[12,13]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变流器急停' }),
        status: '2602[13,14]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BMS急停' }),
        status: '2602[14,15]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变压器过载预警' }),
        status: '2602[15,16]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变压器过载故障' }),
        status: '2603[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池总电压过压报警' }),
        status: '2605[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池总电压欠压报警' }),
        status: '2605[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池单体过压报警' }),
        status: '2605[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池单体欠压报警' }),
        status: '2605[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池放电电流过大报警' }),
        status: '2605[4,5]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池充电电流过大报警' }),
        status: '2605[5,6]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池放电过温报警' }),
        status: '2605[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池放电欠温报警' }),
        status: '2605[7,8]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池充电过温报警' }),
        status: '2605[8,9]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池充电欠温报警' }),
        status: '2605[9,10]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '绝缘阻值过低报警' }),
        status: '2605[10,11]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '极柱温度过高报警' }),
        status: '2605[11,12]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '高压箱连接器温度过高报警' }),
        status: '2605[12,13]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池单体压差报警' }),
        status: '2605[13,14]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池单体温差报警' }),
        status: '2605[14,15]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池SOC低报警' }),
        status: '2605[15,16]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电气急停' }),
        status: '2604[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '水浸报警' }),
        status: '2604[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '交流防雷器断开' }),
        status: '2604[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '直流防雷器断开' }),
        status: '2604[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '市电开关断开' }),
        status: '2604[4,5]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '直流开关断开' }),
        status: '2604[5,6]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '旁路开关断开' }),
        status: '2604[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '负载开关断开' }),
        status: '2604[7,8]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '可燃气体排风扇启动' }),
        status: '2604[8,9]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '柜门打开' }),
        status: '2604[9,10]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '场站消防预警' }),
        status: '2604[10,11]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '辅助供电开关断开' }),
        status: '2604[11,12]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'EMS直流供电开关断开' }),
        status: '2604[12,13]',
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
        name: formatMessage({ id: 'common', defaultMessage: '互感器检查故障' }),
        status: '2784[15,16]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '漏电流故障' }),
        status: '2784[14,15]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BMS 通讯故障' }),
        status: '2784[13,14]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '主从母线电压差过大故障' }),
        status: '2784[12,13]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '逆变电压启动失败故障' }),
        status: '2784[11,12]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '母线电压低故障' }),
        status: '2784[10,11]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '内部通讯故障' }),
        status: '2784[9,10]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'PV 过压故障' }),
        status: '2784[8,9]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '绝缘故障' }),
        status: '2784[7,8]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电网电压异常' }),
        status: '2784[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电网频率异常' }),
        status: '2784[5,6]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '母线电压高故障' }),
        status: '2784[4,5]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '离网过载故障' }),
        status: '2784[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '直流分量过高故障' }),
        status: '2784[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '逆变过流故障' }),
        status: '2784[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '环境温度过高' }),
        status: '2784[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'PV软起失败故障' }),
        status: '2785[15,16]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '离网电压过压故障' }),
        status: '2785[14,15]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'PV 过流故障' }),
        status: '2785[13,14]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'PV 电压低' }),
        status: '2785[12,13]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '母线软启失败' }),
        status: '2785[11,12]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '母线电压不平衡' }),
        status: '2785[10,11]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '离网端硬件过流故障' }),
        status: '2785[9,10]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'PV/电网硬件过流故障' }),
        status: '2785[8,9]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '漏电流自检故障' }),
        status: '2785[7,8]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池过流故障' }),
        status: '2785[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池电压高故障' }),
        status: '2785[5,6]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '离网过流故障' }),
        status: '2785[4,5]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池电压低故障' }),
        status: '2785[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '离网侧继电器自检失败' }),
        status: '2785[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池设置与实际不符合' }),
        status: '2785[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '并网侧继电器自检失败' }),
        status: '2785[0,1]',
      },
      // {
      //   name: formatMessage({ id: 'common', defaultMessage: '并网模式下 PV 断电' }),
      //   status: '2786[15,16]',
      // },
      // {
      //   name: formatMessage({ id: 'common', defaultMessage: '并网模式下电网断电' }),
      //   status: '2786[14,15]',
      // },
      {
        name: formatMessage({ id: 'common', defaultMessage: '低压穿越失败' }),
        status: '2786[13,14]',
      },
      // {
      //   name: formatMessage({ id: 'common', defaultMessage: '逆变硬件过流故障' }),
      //   status: '2786[12,13]',
      // },
      {
        name: formatMessage({ id: 'common', defaultMessage: '离网电压欠压故障' }),
        status: '2786[11,12]',
      },
      // {
      //   name: formatMessage({ id: 'common', defaultMessage: 'PV硬件过流故障' }),
      //   status: '2786[10,11]',
      // },
      // {
      //   name: formatMessage({ id: 'common', defaultMessage: '电池硬件过流故障' }),
      //   status: '2786[9,10]',
      // },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池过温故障' }),
        status: '2786[8,9]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '逆变过温故障' }),
        status: '2786[7,8]',
      },
      // {
      //   name: formatMessage({ id: 'common', defaultMessage: 'PV过温故障' }),
      //   status: '2786[6,7]',
      // },
      // {
      //   name: formatMessage({ id: 'common', defaultMessage: '风扇自检失败' }),
      //   status: '2786[5,6]',
      // },
      // {
      //   name: formatMessage({ id: 'common', defaultMessage: '母线硬件过压故障' }),
      //   status: '2786[4,5]',
      // },
      // {
      //   name: formatMessage({ id: 'common', defaultMessage: '硬件机型识别故障' }),
      //   status: '2786[3,4]',
      // },
      // {
      //   name: formatMessage({ id: 'common', defaultMessage: 'PV并联故障' }),
      //   status: '2786[2,3]',
      // },
      // {
      //   name: formatMessage({ id: 'common', defaultMessage: '高压穿越失败' }),
      //   status: '2786[1,2]',
      // },
      {
        name: formatMessage({ id: 'common', defaultMessage: '工作模式告警' }),
        status: '2790[15,16]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '环境温度低告警' }),
        status: '2790[14,15]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '逆变过流告警' }),
        status: '2790[13,14]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电表通讯丢失告警' }),
        status: '2790[12,13]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池 SOC 低告警' }),
        status: '2790[11,12]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池电压采样差大告警' }),
        status: '2790[10,11]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'PV 软起失败告警' }),
        status: '2790[9,10]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电网侧继电器自检告警' }),
        status: '2790[8,9]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '离网侧继电器自检告警' }),
        status: '2790[7,8]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '逆变电压启动失败告警' }),
        status: '2790[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电网电压告警' }),
        status: '2790[5,6]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '存储写失败告警' }),
        status: '2790[4,5]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '存储读失败告警' }),
        status: '2790[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '母线电压低告警' }),
        status: '2790[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池软起失败告警' }),
        status: '2790[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池母线软起失败告警' }),
        status: '2790[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'log 存储失败' }),
        status: '2796[5,6]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'log 读取失败' }),
        status: '2796[4,5]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电量存储失败' }),
        status: '2796[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电量读取失败' }),
        status: '2796[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'ARM 与 BMS 通信异常' }),
        status: '2796[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'ARM 与 DSP 通信异常' }),
        status: '2796[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池总电压电压过低' }),
        status: '2797[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池总电压电压过高' }),
        status: '2797[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池单体电压过低' }),
        status: '2797[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池单体电压过高' }),
        status: '2797[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池温度过低' }),
        status: '2797[4,5]',
      },
      // {
      //   name: formatMessage({ id: 'common', defaultMessage: '电池温度过高' }),
      //   status: '2797[5,6]',
      // },
      // {
      //   name: formatMessage({ id: 'common', defaultMessage: '电池 SOC 过低' }),
      //   status: '2797[6,7]',
      // },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池 SOC 过高' }),
        status: '2797[7,8]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池 SOC 跳变报警' }),
        status: '2797[8,9]',
      },
      // {
      //   name: formatMessage({ id: 'common', defaultMessage: 'BMS 电池均衡状态' }),
      //   status: '2797[9,10]',
      // },
      {
        name: formatMessage({ id: 'common', defaultMessage: '放电电流过高' }),
        status: '2797[10,11]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '充电电流过高' }),
        status: '2797[11,12]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池绝缘状态' }),
        status: '2798[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BMS内部通讯故障状态' }),
        status: '2798[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BMS和PCS通讯故障状态' }),
        status: '2798[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池包一致性故障状态' }),
        status: '2798[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电流传感器故障状态' }),
        status: '2798[4,5]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BMS充电继电器故障' }),
        status: '2798[5,6]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BMS放电继电器故障' }),
        status: '2798[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池过充报警' }),
        status: '2798[7,8]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BMS硬件故障' }),
        status: '2799[0,1]',
      },

      {
        name: formatMessage({ id: 'common', defaultMessage: '高压互锁报警' }),
        status: '2799[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '单体压差过大报警' }),
        status: '2799[4,5]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '单体温差异常报警' }),
        status: '2799[5,6]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '正极继电器故障' }),
        status: '2799[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BMS负极继电器故障' }),
        status: '2799[2,3]',
      },
    ],
  },
];
//电池组--昨天到这（3-27）
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
        name: formatMessage({ id: 'common', defaultMessage: 'BMU6通信故障' }),
        status: '5404[5,6]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BMU7通信故障' }),
        status: '5404[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BMU8通信故障' }),
        status: '5404[7,8]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BMU9通信故障' }),
        status: '5404[8,9]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BMU10通信故障' }),
        status: '5404[9,10]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BMU1风扇故障' }),
        status: '5405[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BMU2风扇故障' }),
        status: '5405[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BMU3风扇故障' }),
        status: '5405[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BMU4风扇故障' }),
        status: '5405[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BMU5风扇故障' }),
        status: '5405[4,5]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BMU6风扇故障' }),
        status: '5405[5,6]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BMU7风扇故障' }),
        status: '5405[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BMU8风扇故障' }),
        status: '5405[7,8]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BMU9风扇故障' }),
        status: '5405[8,9]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BMU10风扇故障' }),
        status: '5405[9,10]',
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
//空调
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
        name: formatMessage({ id: 'common', defaultMessage: 'BIES已启动' }),
        status: '33070[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'CAN1通讯故障' }),
        status: '33070[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '抑制装置故障' }),
        status: '33070[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '探测器故障' }),
        status: '33070[3,4]',
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

// export const AlarmStatusItem: AlarmStatusItemType[] = [
//   {
//     name: formatMessage({ id: 'common', defaultMessage: '系统' }),
//     hideTitle: true,
//     children: [
//       {
//         name: formatMessage({ id: 'common', defaultMessage: '' }),
//         status: '',
//       },
//       {
//         name: formatMessage({ id: 'common', defaultMessage: '' }),
//         status: '',
//       },
//     ],
//   },
// ];
