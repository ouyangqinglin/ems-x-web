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
//消防
export const fireFightAlarmStatusItem: AlarmStatusItemType[] = [
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
