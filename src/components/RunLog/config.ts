import { formatMessage } from '@/utils';
import type { ProColumns } from '@ant-design/pro-components';

export type RunLogDataType = {
  time?: string;
  fileName?: string;
};
export const columns: ProColumns<RunLogDataType>[] = [
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
  },
  {
    title: formatMessage({ id: 'common', defaultMessage: ' 文件名' }),
    hideInSearch: true,
    dataIndex: 'fileName',
  },
];
