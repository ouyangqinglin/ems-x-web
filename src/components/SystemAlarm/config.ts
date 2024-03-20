import { formatMessage } from '@/utils';
import type { ProColumns } from '@ant-design/pro-components';

export enum ModelTypeEnum {
  AIO, //一体机
  Wind, //风冷
  Liquid, //液冷
  Small, //小型
}
export enum AlarmStatusTypeEnum {
  Alarmimng, //告警中
  Restored, //已恢复
}
export const AlarmStatusType = {
  [AlarmStatusTypeEnum.Alarmimng]: {
    text: formatMessage({ id: 'common', defaultMessage: '告警中' }),
  },
  [AlarmStatusTypeEnum.Restored]: {
    text: formatMessage({ id: 'common', defaultMessage: '已恢复' }),
  },
};

export enum SourceTypeEnum {
  System, //系统
  Converter, //变流器
  Battery, //电池
  FireControl, //消防
  ElectricityMeter, //电表
  Other, //其他
}

export const SourceType = {
  [SourceTypeEnum.System]: {
    text: formatMessage({ id: 'common', defaultMessage: '系统' }),
  },
  [SourceTypeEnum.Converter]: {
    text: formatMessage({ id: 'common', defaultMessage: '变流器' }),
  },
  [SourceTypeEnum.Battery]: {
    text: formatMessage({ id: 'common', defaultMessage: '电池' }),
  },
  [SourceTypeEnum.FireControl]: {
    text: formatMessage({ id: 'common', defaultMessage: '消防' }),
  },
  [SourceTypeEnum.ElectricityMeter]: {
    text: formatMessage({ id: 'common', defaultMessage: '电表' }),
  },
  [SourceTypeEnum.Other]: {
    text: formatMessage({ id: 'common', defaultMessage: '其他' }),
  },
};

export type AlarmRecordDataType = {
  time?: string;
  source?: string;
  alarmStatus?: string;
  alarmcontent?: string;
};

export const columns: ProColumns<AlarmRecordDataType>[] = [
  {
    title: formatMessage({ id: 'common.index', defaultMessage: '序号' }),
    dataIndex: 'index',
    valueType: 'index',
    width: 50,
  },
  {
    title: formatMessage({ id: 'common', defaultMessage: '时间' }),
    dataIndex: 'time',
    ellipsis: true,
    valueType: 'dateTime',
    hideInSearch: true,
  },
  {
    title: formatMessage({
      id: 'common',
      defaultMessage: '时间',
    }),
    dataIndex: 'createTime',
    valueType: 'dateRange',
    search: {
      transform: (value: any) => {
        return {
          startTime: value[0],
          endTime: value[1],
        };
      },
    },
    ellipsis: true,
    hideInTable: true,
  },
  {
    title: formatMessage({ id: 'common', defaultMessage: '来源' }),
    valueType: 'select',
    dataIndex: 'source',
    valueEnum: SourceType,
  },
  {
    title: formatMessage({ id: 'common', defaultMessage: '告警状态' }),
    valueType: 'select',
    dataIndex: 'alarmStatus',
    valueEnum: AlarmStatusType,
  },
  {
    title: formatMessage({ id: 'common', defaultMessage: '告警内容' }),
    hideInSearch: true,
    dataIndex: 'alarmcontent',
  },
];

export type statusType = 'normal' | 'alarm';

export enum DeviceDataTypeEnum {
  communicateAndIPC,
  communicateAndCloud,
  communicateAndYotai,
  communicateAndLightBoard,
  communicateAndIO,
  EMSError,
  systemAlarmStatus,
  systemScram,
  addressConflict,
  communicateAndEMS,
  converterError,
  converterAlarmStatus,
  converterScram,
  converterOverloadWarn,
  converterOverloadError,
  BCMUAndEMS,
  BCMUError,
  BCMUAndBMU,
  BMUError,
  BMUFanError,
  batterysAlarmStatus,
  BMSScram,
  airCondAndEMS,
  airCondError,
  airCondAlarmStatus,
  fireFightAndEMS,
  fireFightError,
  fireFightEarlyWarn,
  fireFightninjectInfo,
  electricityMeterAndEMS,
  electricityMeterError,
  inversionelEctricityAndEMS,
  inversionelEctricityError,
}
export type DeviceDataType = {
  [DeviceDataTypeEnum.communicateAndIPC]: statusType;
  [DeviceDataTypeEnum.communicateAndCloud]: statusType;
  [DeviceDataTypeEnum.communicateAndYotai]: statusType;
  [DeviceDataTypeEnum.communicateAndLightBoard]: statusType;
  [DeviceDataTypeEnum.communicateAndIO]: statusType;
  [DeviceDataTypeEnum.EMSError]: statusType;
  [DeviceDataTypeEnum.systemAlarmStatus]: statusType;
  [DeviceDataTypeEnum.systemScram]: statusType;
  [DeviceDataTypeEnum.addressConflict]: statusType;
  [DeviceDataTypeEnum.communicateAndEMS]: statusType;
  [DeviceDataTypeEnum.converterError]: statusType;
  [DeviceDataTypeEnum.converterAlarmStatus]: statusType;
  [DeviceDataTypeEnum.converterScram]: statusType;
  [DeviceDataTypeEnum.converterOverloadWarn]: statusType;
  [DeviceDataTypeEnum.converterOverloadError]: statusType;
  [DeviceDataTypeEnum.BCMUAndEMS]: statusType;
  [DeviceDataTypeEnum.BCMUError]: statusType;
  [DeviceDataTypeEnum.BCMUAndBMU]: statusType;
  [DeviceDataTypeEnum.BMUError]: statusType;
  [DeviceDataTypeEnum.BMUFanError]: statusType;
  [DeviceDataTypeEnum.batterysAlarmStatus]: statusType;
  [DeviceDataTypeEnum.BMSScram]: statusType;
  [DeviceDataTypeEnum.airCondAndEMS]: statusType;
  [DeviceDataTypeEnum.airCondError]: statusType;
  [DeviceDataTypeEnum.airCondAlarmStatus]: statusType;
  [DeviceDataTypeEnum.fireFightAndEMS]: statusType;
  [DeviceDataTypeEnum.fireFightError]: statusType;
  [DeviceDataTypeEnum.fireFightEarlyWarn]: statusType;
  [DeviceDataTypeEnum.fireFightninjectInfo]: statusType;
  [DeviceDataTypeEnum.electricityMeterAndEMS]: statusType;
  [DeviceDataTypeEnum.electricityMeterError]: statusType;
  [DeviceDataTypeEnum.inversionelEctricityAndEMS]: statusType;
  [DeviceDataTypeEnum.inversionelEctricityError]: statusType;
};
export type AlarmStatusItemType = {
  id: string;
  name: string;
  hideTitle?: boolean;
  children: { id: string; name: string; status: number }[];
};

//系统告警状态
export const SystemAlarmStatusItem: AlarmStatusItemType[] = [
  {
    id: 'system',
    name: formatMessage({ id: 'common', defaultMessage: '系统' }),
    children: [
      {
        id: 'communicateAndIPC',
        name: formatMessage({ id: 'common', defaultMessage: '与上位机通信' }),
        status: DeviceDataTypeEnum.communicateAndIPC,
      },
      {
        id: 'communicateAndCloud',
        name: formatMessage({ id: 'common', defaultMessage: '与云平台通信' }),
        status: DeviceDataTypeEnum.communicateAndCloud,
      },
      {
        id: 'communicateAndYotai',
        name: formatMessage({ id: 'common', defaultMessage: '与永泰云通信' }),
        status: DeviceDataTypeEnum.communicateAndYotai,
      },
      {
        id: 'communicateAndLightBoard',
        name: formatMessage({ id: 'common', defaultMessage: '与灯板通信' }),
        status: DeviceDataTypeEnum.communicateAndLightBoard,
      },
      {
        id: 'communicateAndIO',
        name: formatMessage({ id: 'common', defaultMessage: '与IO模块' }),
        status: DeviceDataTypeEnum.communicateAndIO,
      },
      {
        id: 'EMSError',
        name: formatMessage({ id: 'common', defaultMessage: 'EMS板故障' }),
        status: DeviceDataTypeEnum.EMSError,
      },
      {
        id: 'systemAlarmStatus',
        name: formatMessage({ id: 'common', defaultMessage: '系统告警状态' }),
        status: DeviceDataTypeEnum.systemAlarmStatus,
      },
      {
        id: 'systemScram',
        name: formatMessage({ id: 'common', defaultMessage: '系统急停' }),
        status: DeviceDataTypeEnum.systemScram,
      },
      {
        id: 'addressConflict',
        name: formatMessage({ id: 'common', defaultMessage: '并机地址冲突' }),
        status: DeviceDataTypeEnum.addressConflict,
      },
    ],
  },
  {
    id: 'converter',
    name: formatMessage({ id: 'common', defaultMessage: '变流器' }),
    children: [
      {
        id: 'communicateAndEMS',
        name: formatMessage({ id: 'common', defaultMessage: '与EMS通信' }),
        status: DeviceDataTypeEnum.communicateAndEMS,
      },
      {
        id: 'converterError',
        name: formatMessage({ id: 'common', defaultMessage: '变流器故障' }),
        status: DeviceDataTypeEnum.converterError,
      },
      {
        id: 'converterAlarmStatus',
        name: formatMessage({ id: 'common', defaultMessage: '变流器告警状态' }),
        status: DeviceDataTypeEnum.converterAlarmStatus,
      },
      {
        id: 'converterScram',
        name: formatMessage({ id: 'common', defaultMessage: '变流器急停' }),
        status: DeviceDataTypeEnum.converterScram,
      },
      {
        id: 'converterOverloadWarn',
        name: formatMessage({ id: 'common', defaultMessage: '变压器过载预警' }),
        status: DeviceDataTypeEnum.converterOverloadWarn,
      },
      {
        id: 'converterOverloadError',
        name: formatMessage({ id: 'common', defaultMessage: '变压器过载故障' }),
        status: DeviceDataTypeEnum.converterOverloadError,
      },
    ],
  },
  {
    id: 'battery',
    name: formatMessage({ id: 'common', defaultMessage: '电池' }),
    children: [
      {
        id: 'BCMUAndEMS',
        name: formatMessage({ id: 'common', defaultMessage: 'BCMU与EMS通信' }),
        status: DeviceDataTypeEnum.BCMUAndEMS,
      },
      {
        id: 'BCMUError',
        name: formatMessage({ id: 'common', defaultMessage: 'BCMU故障' }),
        status: DeviceDataTypeEnum.BCMUError,
      },
      {
        id: 'BCMUAndBMU',
        name: formatMessage({ id: 'common', defaultMessage: 'BMU与BCMU通信' }),
        status: DeviceDataTypeEnum.BCMUAndBMU,
      },
      {
        id: 'BMUError',
        name: formatMessage({ id: 'common', defaultMessage: 'BMU故障' }),
        status: DeviceDataTypeEnum.BMUError,
      },
      {
        id: 'BMUFanError',
        name: formatMessage({ id: 'common', defaultMessage: 'BMU风扇故障' }),
        status: DeviceDataTypeEnum.BMUFanError,
      },
      {
        id: 'batterysAlarmStatus',
        name: formatMessage({ id: 'common', defaultMessage: '电池组告警状态' }),
        status: DeviceDataTypeEnum.batterysAlarmStatus,
      },
      {
        id: 'BMSScram',
        name: formatMessage({ id: 'common', defaultMessage: 'BMS急停' }),
        status: DeviceDataTypeEnum.BMSScram,
      },
    ],
  },
  {
    id: 'airCondAndFireFight',
    name: formatMessage({ id: 'common', defaultMessage: '空调和消防' }),
    children: [
      {
        id: 'airCondAndEMS',
        name: formatMessage({ id: 'common', defaultMessage: '空调与EMS通信' }),
        status: DeviceDataTypeEnum.airCondAndEMS,
      },
      {
        id: 'airCondError',
        name: formatMessage({ id: 'common', defaultMessage: '空调故障' }),
        status: DeviceDataTypeEnum.airCondError,
      },
      {
        id: 'airCondAlarmStatus',
        name: formatMessage({ id: 'common', defaultMessage: '空调告警状态' }),
        status: DeviceDataTypeEnum.airCondAlarmStatus,
      },
      {
        id: 'fireFightAndEMS',
        name: formatMessage({ id: 'common', defaultMessage: '消防与EMS通信' }),
        status: DeviceDataTypeEnum.fireFightAndEMS,
      },
      {
        id: 'fireFightError',
        name: formatMessage({ id: 'common', defaultMessage: '消防故障' }),
        status: DeviceDataTypeEnum.fireFightError,
      },
      {
        id: 'fireFightEarlyWarn',
        name: formatMessage({ id: 'common', defaultMessage: '消防预警级别' }),
        status: DeviceDataTypeEnum.fireFightEarlyWarn,
      },
      {
        id: 'fireFightninjectInfo',
        name: formatMessage({ id: 'common', defaultMessage: '消防喷射信号' }),
        status: DeviceDataTypeEnum.fireFightninjectInfo,
      },
    ],
  },
  {
    id: 'electricityMeter',
    name: formatMessage({ id: 'common', defaultMessage: '电表' }),
    children: [
      {
        id: 'electricityMeterAndEMS',
        name: formatMessage({ id: 'common', defaultMessage: '电网侧电表与EMS通信' }),
        status: DeviceDataTypeEnum.electricityMeterAndEMS,
      },
      {
        id: 'electricityMeterError',
        name: formatMessage({ id: 'common', defaultMessage: '电网侧电表故障' }),
        status: DeviceDataTypeEnum.electricityMeterError,
      },
      {
        id: 'inversionelEctricityAndEMS',
        name: formatMessage({ id: 'common', defaultMessage: '逆变侧电表与EMS通信' }),
        status: DeviceDataTypeEnum.inversionelEctricityAndEMS,
      },
      {
        id: 'inversionelEctricityError',
        name: formatMessage({ id: 'common', defaultMessage: '逆变侧电表故障' }),
        status: DeviceDataTypeEnum.inversionelEctricityError,
      },
    ],
  },
];
//风冷
export const windAlarmStatusItem: AlarmStatusItemType[] = [
  {
    id: 'system',
    name: formatMessage({ id: 'common', defaultMessage: '系统' }),
    hideTitle: true,
    children: [
      {
        id: 'communicateAndIPC',
        name: formatMessage({ id: 'common', defaultMessage: '与上位机通信' }),
        status: DeviceDataTypeEnum.communicateAndIPC,
      },
      {
        id: 'communicateAndScreen',
        name: formatMessage({ id: 'common', defaultMessage: '触摸屏通信' }),
        status: DeviceDataTypeEnum.communicateAndIPC,
      },
      {
        id: 'communicateAndCloud',
        name: formatMessage({ id: 'common', defaultMessage: '与云平台通信' }),
        status: DeviceDataTypeEnum.communicateAndCloud,
      },
      {
        id: 'communicateAndYotai',
        name: formatMessage({ id: 'common', defaultMessage: '与永泰云通信' }),
        status: DeviceDataTypeEnum.communicateAndYotai,
      },
      {
        id: 'communicate4G',
        name: formatMessage({ id: 'common', defaultMessage: '4G通信' }),
        status: DeviceDataTypeEnum.communicateAndLightBoard,
      },
      {
        id: 'communicateWIFI',
        name: formatMessage({ id: 'common', defaultMessage: 'WIFI通信' }),
        status: DeviceDataTypeEnum.communicateAndLightBoard,
      },
      {
        id: 'communicateAndLightBoard',
        name: formatMessage({ id: 'common', defaultMessage: '与灯板通信' }),
        status: DeviceDataTypeEnum.communicateAndLightBoard,
      },
      {
        id: 'communicateAndIO',
        name: formatMessage({ id: 'common', defaultMessage: '与IO模块' }),
        status: DeviceDataTypeEnum.communicateAndIO,
      },
      {
        id: 'communicateAndConverter',
        name: formatMessage({ id: 'common', defaultMessage: '变流器通信' }),
        status: DeviceDataTypeEnum.communicateAndIO,
      },
      {
        id: 'BCMUAndBMU',
        name: formatMessage({ id: 'common', defaultMessage: 'BMU与BCMU通信' }),
        status: DeviceDataTypeEnum.BCMUAndBMU,
      },
      {
        id: 'communicateBMU',
        name: formatMessage({ id: 'common', defaultMessage: 'BMU通信' }),
        status: DeviceDataTypeEnum.BCMUAndBMU,
      },
      {
        id: 'communicateAirCond',
        name: formatMessage({ id: 'common', defaultMessage: '空调通信' }),
        status: DeviceDataTypeEnum.BCMUAndBMU,
      },
      {
        id: 'communicateFireFight',
        name: formatMessage({ id: 'common', defaultMessage: '消防通信' }),
        status: DeviceDataTypeEnum.BCMUAndBMU,
        },
        {
            id: 'communicateElectricityMeter',
            name: formatMessage({ id: 'common', defaultMessage: '电网侧电表通信' }),
            status: DeviceDataTypeEnum.BCMUAndBMU,
        },
        {
            id: 'communicateElectricityMeter',
            name: formatMessage({ id: 'common', defaultMessage: '电网侧电表通信' }),
            status: DeviceDataTypeEnum.BCMUAndBMU,
        },
        {
            id: 'communicateInversionElectricityMeter',
            name: formatMessage({ id: 'common', defaultMessage: '逆变侧电表通信' }),
            status: DeviceDataTypeEnum.BCMUAndBMU,
        },
        {
            id: 'communicateInversionElectricityMeter',
            name: formatMessage({ id: 'common', defaultMessage: '逆变侧电表通信' }),
            status: DeviceDataTypeEnum.BCMUAndBMU,
        },
      {
        id: 'EMSError',
        name: formatMessage({ id: 'common', defaultMessage: 'EMS板故障' }),
        status: DeviceDataTypeEnum.EMSError,
        },
        {
            id: 'lightBoardError',
            name: formatMessage({ id: 'common', defaultMessage: '灯板故障' }),
            status: DeviceDataTypeEnum.EMSError,
        },
        {
            id: 'IOError',
            name: formatMessage({ id: 'common', defaultMessage: 'IO模块故障' }),
            status: DeviceDataTypeEnum.EMSError,
        },
        {
            id: 'converterError',
            name: formatMessage({ id: 'common', defaultMessage: '变流器故障' }),
            status: DeviceDataTypeEnum.EMSError,
        },
        {
            id: 'BCMUError',
            name: formatMessage({ id: 'common', defaultMessage: 'BCMU故障' }),
            status: DeviceDataTypeEnum.EMSError,
        },
        {
            id: 'BMUError',
            name: formatMessage({ id: 'common', defaultMessage: 'BMU故障' }),
            status: DeviceDataTypeEnum.EMSError,
        },
        {
            id: 'BMUFanError',
            name: formatMessage({ id: 'common', defaultMessage: 'BMU风扇故障' }),
            status: DeviceDataTypeEnum.EMSError,
        },
        {
            id: 'airCondError',
            name: formatMessage({ id: 'common', defaultMessage: '空调故障' }),
            status: DeviceDataTypeEnum.EMSError,
        },
        {
            id: 'airCondError',
            name: formatMessage({ id: 'common', defaultMessage: '空调故障' }),
            status: DeviceDataTypeEnum.EMSError,
        },
        {
            id: 'fireFightError',
            name: formatMessage({ id: 'common', defaultMessage: '消防故障' }),
            status: DeviceDataTypeEnum.fireFightError,
        },
        {
            id: 'electricityMeterError',
            name: formatMessage({ id: 'common', defaultMessage: '电网侧电表故障' }),
            status: DeviceDataTypeEnum.electricityMeterError,
        },
        {
            id: 'inversionelEctricityError',
            name: formatMessage({ id: 'common', defaultMessage: '逆变侧电表故障' }),
            status: DeviceDataTypeEnum.inversionelEctricityError,
        },
        {
            id: 'addressConflict',
            name: formatMessage({ id: 'common', defaultMessage: '并机地址冲突' }),
            status: DeviceDataTypeEnum.addressConflict,
        },
        {
            id: 'systemScram',
            name: formatMessage({ id: 'common', defaultMessage: '系统急停' }),
            status: DeviceDataTypeEnum.systemScram,
        },
        {
            id: 'converterScram',
            name: formatMessage({ id: 'common', defaultMessage: '变流器急停' }),
            status: DeviceDataTypeEnum.converterScram,
        },
        {
            id: 'BMSScram',
            name: formatMessage({ id: 'common', defaultMessage: 'BMS急停' }),
            status: DeviceDataTypeEnum.BMSScram,
        },
        {
            id: 'converterOverloadWarn',
            name: formatMessage({ id: 'common', defaultMessage: '变压器过载预警' }),
            status: DeviceDataTypeEnum.converterOverloadWarn,
        },
        {
            id: 'converterOverloadError',
            name: formatMessage({ id: 'common', defaultMessage: '变压器过载故障' }),
            status: DeviceDataTypeEnum.converterOverloadError,
        },
        {
            id: 'converterOvercharge',
            name: formatMessage({ id: 'common', defaultMessage: '变流器一般过充电功率' }),
            status: DeviceDataTypeEnum.converterOverloadError,
        },
        {
            id: 'converterOverdischarge',
            name: formatMessage({ id: 'common', defaultMessage: '变流器一般过放电功率' }),
            status: DeviceDataTypeEnum.converterOverloadError,
        },
        {
            id: 'converterOvervoltage',
            name: formatMessage({ id: 'common', defaultMessage: '变流器一般过压' }),
            status: DeviceDataTypeEnum.converterOverloadError,
        },
        {
            id: 'converterUndervoltage',
            name: formatMessage({ id: 'common', defaultMessage: '变流器一般欠压' }),
            status: DeviceDataTypeEnum.converterOverloadError,
        },
        {
            id: 'converterChargeOvercurrent',
            name: formatMessage({ id: 'common', defaultMessage: '变流器一般充电过流' }),
            status: DeviceDataTypeEnum.converterOverloadError,
        },
        {
            id: 'converterDischargeOvercurrent',
            name: formatMessage({ id: 'common', defaultMessage: '变流器一般放电过流' }),
            status: DeviceDataTypeEnum.converterOverloadError,
        },
        {
            id: 'converterOverTemperature',
            name: formatMessage({ id: 'common', defaultMessage: '变流器一般过温' }),
            status: DeviceDataTypeEnum.converterOverloadError,
        },
        {
            id: 'converterUnderTemperature',
            name: formatMessage({ id: 'common', defaultMessage: '变流器一般欠温' }),
            status: DeviceDataTypeEnum.converterOverloadError,
        },
        {
            id: 'converterOvercharge',
            name: formatMessage({ id: 'common', defaultMessage: '变流器严重过充电功率' }),
            status: DeviceDataTypeEnum.converterOverloadError,
          },
    ],
  },
];
