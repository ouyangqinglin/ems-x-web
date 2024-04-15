// import { formatMessage } from '@/utils';
export { indexAlarmStatusItem, converterAlarmStatusItem } from './commonConfig';
type AlarmStatusItemType = {
  name: string;
  hideTitle?: boolean;
  children: { name: string; status: string }[];
};
//暂时不做国际化
const formatMessage = (message: any) => {
  return message.defaultMessage;
};
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
        name: formatMessage({ id: 'common', defaultMessage: '液冷机通信' }),
        status: '3000[12,13]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '除湿机通信' }),
        status: '3000[13,14]',
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
        status: '3001[0,1]',
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
        name: formatMessage({ id: 'common', defaultMessage: '液冷机故障' }),
        status: '3002[8,9]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '除湿机故障' }),
        status: '3002[9,10]',
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
        status: '5400[11,12]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '水浸信号' }),
        status: '5400[12,13]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '气溶胶信号' }),
        status: '5400[13,14]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '交流防雷器故障' }),
        status: '5400[14,15]',
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
//消防-液冷
export const fireFightAlarmStatusItem: AlarmStatusItemType[] = [
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
        status: '32600[10,11]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变频器缺相锁定' }),
        status: '32600[11,12]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '变频器其他故障锁定' }),
        status: '32600[12,13]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '补水告警' }),
        status: '32600[13,14]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '系统压力过高' }),
        status: '32600[14,15]',
      },
      {
        name: formatMessage({ id: 'common', defaultMessage: '出水压力过高' }),
        status: '32600[15,16]',
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
