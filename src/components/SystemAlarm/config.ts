import { formatMessage } from '@/utils';
import type { ProColumns } from '@ant-design/pro-components';

export type ModelTypeEnum =
  | 'system'
  | 'wind'
  | 'converter'
  | 'battery'
  | 'aircond'
  | 'fireFightWind'
  | 'wet'
  | 'fireFightWet';
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

export type statusType = 0 | 1;
