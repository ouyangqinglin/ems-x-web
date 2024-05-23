import type { OptionType } from '@/types';
import type { ProFormColumnsType } from '@ant-design/pro-components';

import { isEmpty } from '@/utils';
import { verifyPassword } from '@/utils/reg';
import type { TABLESELECTVALUETYPE } from '@/components/TableSelect';

export type AccountDataType = {};

export const tableColumns: any = [
  {
    title: '序号',
    dataIndex: 'index',
    valueType: 'index',
    width: 48,
    hideInSearch: true,
  },
  {
    title: '用户名称',
    dataIndex: 'username',
    width: 150,
    ellipsis: true,
  },
  {
    title: '角色名称',
    dataIndex: 'rolename',
    width: 150,
    ellipsis: true,
  },
  {
    title: '描述',
    dataIndex: 'desc',
    hideInSearch: true,
    width: 100,
  },
  {
    title: '创建时间',
    dataIndex: 'createtime',
    valueType: 'dateRange',
    render: (_, record) => formatDateTime(new Date(record.createtime)),
    search: {
      transform: (value) => {
        return {
          createtimebegin: value[0],
          createtimeend: value[1],
        };
      },
    },
    width: 150,
  },
];

function formatDateTime(date) {
  const y = date.getFullYear();
  let m = date.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  let d = date.getDate();
  d = d < 10 ? '0' + d : d;
  let h = date.getHours();
  h = h < 10 ? '0' + h : h;
  let minute = date.getMinutes();
  minute = minute < 10 ? '0' + minute : minute;
  let second = date.getSeconds();
  second = second < 10 ? '0' + second : second;
  return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
}

export const getFormColumns = (roleOptions: OptionType[]) => {
  const formColumns: ProFormColumnsType<AccountDataType, TABLESELECTVALUETYPE>[] = [
    {
      title: '用户名称',
      dataIndex: 'username',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '请填写用户名称',
          },
        ],
      },
      fieldProps: {
        autoComplete: 'off',
      },
    },
    {
      title: '角色',
      dataIndex: 'rolename',
      valueType: 'select',
      fieldProps: (form) => {
        return {
          options: roleOptions,
          onChange: () => {},
        };
      },
      formItemProps: {
        rules: [
          {
            required: true,
            message: '请选择角色',
          },
        ],
      },
    },
    {
      title: '初始密码',
      dataIndex: 'password',
      valueType: 'password',
      dependencies: ['userId'],
      formItemProps: (form) => {
        const userId = form?.getFieldValue?.('userId');
        return {
          required: isEmpty(userId),
          rules: [
            () => {
              return {
                validator: (_: any, value: string) => {
                  if (isEmpty(value)) {
                    if (isEmpty(userId)) {
                      return Promise.reject('请填写初始密码');
                    }
                  } else if (!verifyPassword(value)) {
                    return Promise.reject('格式错误：8-16个数字单词，至少其中两种:字母/数字/符号');
                  }
                  return Promise.resolve();
                },
              };
            },
          ],
        };
      },
    },
    {
      title: '备注',
      dataIndex: 'desc',
      valueType: 'textarea',
      colProps: {
        span: 24,
      },
    },
  ];
  return formColumns;
};
