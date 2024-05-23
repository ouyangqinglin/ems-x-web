import { YTProColumns } from '@/components/YTProTable/typing';
import { effectStatus } from '@/utils/dict';
import { RoleInfo } from './type';
import { formatMessage } from '@/utils';

export const dataSource = {
  1: {
    text: formatMessage({ id: 'user.customRole', defaultMessage: '自定义角色' }),
  },
  0: {
    text: formatMessage({ id: 'user.predefinedRoles', defaultMessage: '预定义角色' }),
  },
};

export const columns: YTProColumns<RoleInfo>[] = [
  {
    title: '序号',
    dataIndex: 'index',
    valueType: 'index',
    width: 48,
  },
  {
    title: '角色名称',
    dataIndex: 'name',
    width: 120,
    ellipsis: true,
    search: {
      transform: (value) => {
        return {
          rolename: value,
        };
      },
    },
  },
  {
    title: '状态',
    dataIndex: 'status',
    valueType: 'select',
    width: 100,
    valueEnum: effectStatus,
  },
  {
    title: '备注',
    dataIndex: 'desc',
    width: 150,
    ellipsis: true,
    hideInSearch: true,
  },
  {
    title: '创建时间',
    dataIndex: 'createtime',
    valueType: 'dateTime',
    render: (_, record) => <span>{record.createtime}</span>,
    search: {
      transform: (value) => {
        return {
          createtimebegin: value[0],
          createtimebegin: value[1],
        };
      },
    },
    width: 150,
  },
];
