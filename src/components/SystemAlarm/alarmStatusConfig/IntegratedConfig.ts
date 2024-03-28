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
//系统
export const systemAlarmStatusItem: AlarmStatusItemType[] = [
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
//电池组
export const batteryAlarmStatusItem: AlarmStatusItemType[] = [
  {
    name: formatMessage({ id: 'common', defaultMessage: '系统' }),
    hideTitle: true,
    children: [
      {
        name: formatMessage({ id: 'common', defaultMessage: '充电电流过高一级报警' }),
        status: '3840[11,12]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '放电电流过高一级报警' }),
        status: '3840[10,11]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '极耳温度过高一级报警' }),
        status: '3840[9,10]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池温升过高一级报警' }),
        status: '3840[8,9]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池温度差过大一级报警' }),
        status: '3840[7,8]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '充电电池温度过低一级报警' }),
        status: '3840[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '充电电池温度过高一级报警' }),
        status: '3840[5,6]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池温度过低一级报警' }),
        status: '3840[4,5]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池温度过高一级报警' }),
        status: '3840[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '单体压差过大一级报警' }),
        status: '3840[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '单体电压过低一级报警' }),
        status: '3840[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '单体电压过高一级报警' }),
        status: '3840[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '充电电流过高二级报警' }),
        status: '3841[11,12]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '放电电流过高二级报警' }),
        status: '3841[10,11]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '极耳温度过高二级报警' }),
        status: '3841[9,10]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池温升过高二级报警' }),
        status: '3841[8,9]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池温度差过大二级报警' }),
        status: '3841[7,8]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '充电电池温度过低二级报警' }),
        status: '3841[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '充电:电池温度过高报警' }),
        status: '3841[5,6]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池温度过低二级报警' }),
        status: '3841[4,5]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池温度过高二级报警' }),
        status: '3841[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '单体压差过大二级报警' }),
        status: '3841[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '单体电压过低二级报警' }),
        status: '3841[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '单体电压过高二级报警' }),
        status: '3841[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '充电电流过高三级报警' }),
        status: '3842[11,12]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '放电电流过高三级报警' }),
        status: '3842[10,11]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '极耳温度过高三级报警' }),
        status: '3842[9,10]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池温升过高三级报警' }),
        status: '3842[8,9]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池温度差过大三级报警' }),
        status: '3842[7,8]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '充电电池温度过低三级报警' }),
        status: '3842[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '充电:电池温度过高报警' }),
        status: '3842[5,6]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池温度过低三级报警' }),
        status: '3842[4,5]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池温度过高三级报警' }),
        status: '3842[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '单体压差过大三级报警' }),
        status: '3842[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '单体电压过低三级报警' }),
        status: '3842[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '单体电压过高三级报警' }),
        status: '3842[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '主控初始化故障' }),
        status: '3843[10,11]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '熔断器故障' }),
        status: '3843[9,10]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '隔离开关状态' }),
        status: '3843[8,9]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BAU通信故障' }),
        status: '3843[7,8]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '绝缘检测故障' }),
        status: '3843[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电流传感器故障' }),
        status: '3843[5,6]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'EEPROM故障' }),
        status: '3843[4,5]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '内网通信故障' }),
        status: '3843[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '接触器粘连状态' }),
        status: '3843[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'NTC故障' }),
        status: '3843[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '从控概要故障' }),
        status: '3843[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '从控初始化故障' }),
        status: '3844[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '采样线故障' }),
        status: '3844[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '连接线故障' }),
        status: '3844[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '采样芯片故障' }),
        status: '3844[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电压采样故障' }),
        status: '3844[4,5]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电池温度采样故障' }),
        status: '3844[5,6]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '温度传感器故障' }),
        status: '3844[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '接触器故障' }),
        status: '3844[7,8]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'EEPROM故障' }),
        status: '3844[8,9]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '被动均衡故障' }),
        status: '3844[9,10]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '被动均衡温度故障' }),
        status: '3844[10,11]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '主动均衡故障' }),
        status: '3844[11,12]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '单体电压极低一级报警' }),
        status: '3845[15,16]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '单体电压极高一级报警' }),
        status: '3845[14,15]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '高压箱温度过高一级报警' }),
        status: '3845[13,14]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'SOH过低一级报警' }),
        status: '3845[12,13]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'SOC过高一级报警' }),
        status: '3845[11,12]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'SOC过低一级报警' }),
        status: '3845[10,11]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '负端绝缘阻值过低一级报警' }),
        status: '3845[9,10]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '正端绝缘阻值过低一级报警' }),
        status: '3845[8,9]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '绝缘阻值过低一级报警' }),
        status: '3845[7,8]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '总电压差过大一级报警' }),
        status: '3845[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '总电压过低一级报警' }),
        status: '3845[5,6]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '总电压过高一级报警' }),
        status: '3845[4,5]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '单体电压极低二级报警' }),
        status: '3846[15,16]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '单体电压极高二级报警' }),
        status: '3846[14,15]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '高压箱温度过高二级报警' }),
        status: '3846[13,14]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'SOH过低二级报警' }),
        status: '3846[12,13]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'SOC过高二级报警' }),
        status: '3846[11,12]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'SOC过低二级报警' }),
        status: '3846[10,11]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '负端绝缘阻值过低二级报警' }),
        status: '3846[9,10]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '正端绝缘阻值过低二级报警' }),
        status: '3846[8,9]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '绝缘阻值过低二级报警' }),
        status: '3846[7,8]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '总电压差过大二级报警' }),
        status: '3846[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '总电压过低二级报警' }),
        status: '3846[5,6]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '总电压过高二级报警' }),
        status: '3846[4,5]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '单体电压极低三级报警' }),
        status: '3847[15,16]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '单体电压极高三级报警' }),
        status: '3847[14,15]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '高压箱温度过高三级报警' }),
        status: '3847[13,14]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'SOH过低三级报警' }),
        status: '3847[12,13]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'SOC过高三级报警' }),
        status: '3847[11,12]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'SOC过低三级报警' }),
        status: '3847[10,11]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '负端绝缘阻值过低三级报警' }),
        status: '3847[9,10]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '正端绝缘阻值过低三级报警' }),
        status: '3847[8,9]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '绝缘阻值过低三级报警' }),
        status: '3847[7,8]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '总电压差过大三级报警' }),
        status: '3847[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '总电压过低三级报警' }),
        status: '3847[5,6]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '总电压过高三级报警' }),
        status: '3847[4,5]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '从控1通信故障' }),
        status: '3849[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '从控2通信故障' }),
        status: '3849[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '从控3通信故障' }),
        status: '3849[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '从控4通信故障' }),
        status: '3849[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '从控5通信故障' }),
        status: '3849[4,5]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '从控6通信故障' }),
        status: '3849[5,6]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '从控7通信故障' }),
        status: '3849[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '从控8通信故障' }),
        status: '3849[7,8]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '从控9通信故障' }),
        status: '3849[8,9]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '从控10通信故障' }),
        status: '3849[9,10]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '从控11通信故障' }),
        status: '3849[10,11]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '从控12通信故障' }),
        status: '3849[11,12]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '从控13通信故障' }),
        status: '3849[12,13]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '从控14通信故障' }),
        status: '3849[13,14]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '从控15通信故障' }),
        status: '3849[14,15]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '从控16通信故障' }),
        status: '3849[15,16]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '从控17通信故障' }),
        status: '3848[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '从控18通信故障' }),
        status: '3848[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '从控19通信故障' }),
        status: '3848[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '从控20通信故障' }),
        status: '3848[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '从控21通信故障' }),
        status: '3848[4,5]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '从控22通信故障' }),
        status: '3848[5,6]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '从控23通信故障' }),
        status: '3848[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '从控24通信故障' }),
        status: '3848[7,8]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '从控25通信故障' }),
        status: '3848[8,9]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '从控26通信故障' }),
        status: '3848[9,10]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '从控27通信故障' }),
        status: '3848[10,11]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '从控28通信故障' }),
        status: '3848[11,12]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '从控29通信故障' }),
        status: '3848[12,13]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '从控30通信故障' }),
        status: '3848[13,14]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '从控31通信故障' }),
        status: '3848[14,15]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '从控32通信故障' }),
        status: '3848[15,16]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BMU硬件故障' }),
        status: '3850[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BCU硬件故障' }),
        status: '3850[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '熔断器故障' }),
        status: '3850[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '接触器粘连故障' }),
        status: '3850[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BMU通信故障' }),
        status: '3850[4,5]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: 'BAU通信故障' }),
        status: '3850[5,6]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '电流传感器故障' }),
        status: '3850[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '绝缘监测故障' }),
        status: '3850[7,8]',
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
        name: formatMessage({ id: 'common', defaultMessage: '柜内温度传感器故障' }),
        status: '5586[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '冷凝盘管温度传感器故障' }),
        status: '5586[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '柜外温度传感器故障' }),
        status: '5586[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '湿度传感器故障' }),
        status: '5586[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '压缩机欠流告警' }),
        status: '5586[4,5]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '压缩机过流告警' }),
        status: '5586[5,6]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '加热器欠流告警' }),
        status: '5586[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '加热器过流告警' }),
        status: '5586[7,8]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '内风机告警' }),
        status: '5586[8,9]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '外风机告警' }),
        status: '5586[9,10]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '高压力告警' }),
        status: '5586[10,11]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '低压力告警' }),
        status: '5586[11,12]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '柜内高温告警' }),
        status: '5586[12,13]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '柜内低温告警' }),
        status: '5586[13,14]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '柜外高温告警' }),
        status: '5586[14,15]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '柜外低温告警' }),
        status: '5586[15,16]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '外部输入（门禁）告警' }),
        status: '5587[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '蒸发盘管温度传感器故障' }),
        status: '5587[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '高湿告警' }),
        status: '5587[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '低电压告警' }),
        status: '5587[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '高电压告警' }),
        status: '5587[4,5]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变频压缩机故障' }),
        status: '5587[5,6]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '蒸发器冻结告警' }),
        status: '5587[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '高压力频繁告警' }),
        status: '5587[7,8]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '低压力频繁告警' }),
        status: '5587[8,9]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '冷凝高温告警' }),
        status: '5587[9,10]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '制冷剂泄漏告警' }),
        status: '5587[10,11]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变频压缩机通信故障' }),
        status: '5587[11,12]',
      },
    ],
  },
];
//消防
export const fireFighAlarmStatusItem: AlarmStatusItemType[] = [
  {
    name: formatMessage({ id: 'common', defaultMessage: '系统' }),
    hideTitle: true,
    children: [
      {
        name: formatMessage({ id: 'common', defaultMessage: '总故障标志' }),
        status: '5659[0,1]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '备电故障' }),
        status: '5659[1,2]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '第一瓶阀门故障' }),
        status: '5659[2,3]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '箱外探测器H2预警' }),
        status: '5659[3,4]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '箱外探测器CO预警' }),
        status: '5659[4,5]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '箱外探测器温度预警' }),
        status: '5659[5,6]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '箱外探测器烟雾预警' }),
        status: '5659[6,7]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '箱外探测器故障码' }),
        status: '5659[7,8]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '主机报警' }),
        status: '5659[8,9]',
      },
    ],
  },
];
