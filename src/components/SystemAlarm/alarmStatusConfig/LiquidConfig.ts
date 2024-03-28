// import { formatMessage } from '@/utils';
export {
  indexAlarmStatusItem,
  systemAlarmStatusItem,
  converterAlarmStatusItem,
} from './commonConfig';
type AlarmStatusItemType = {
  name: string;
  hideTitle?: boolean;
  children: { name: string; status: string }[];
};
//暂时不做国际化
const formatMessage = (message: any) => {
  return message.defaultMessage;
};
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
