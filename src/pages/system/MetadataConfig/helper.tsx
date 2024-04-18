/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-04-17 15:54:59
 * @LastEditTime: 2024-04-17 18:01:06
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\system\MetadataConfig\helper.tsx
 */

import { ProColumns } from '@ant-design/pro-components';
import { Button } from 'antd';

export const columns: ProColumns[] = [
  {
    title: '序号',
    valueType: 'index',
    width: 50,
  },
  {
    title: '元素名称',
    dataIndex: 'metaName',
    width: 120,
    ellipsis: true,
    hideInSearch: true,
  },
  {
    title: '地址编号',
    dataIndex: 'pointId',
    width: 120,
    ellipsis: true,
  },
  {
    title: '名称',
    dataIndex: 'metaName',
    width: 150,
    ellipsis: true,
  },
  {
    title: '数据类型',
    dataIndex: 'dataType',
    width: 120,
    ellipsis: true,
  },
  {
    title: '描述',
    dataIndex: 'remark',
    width: 150,
    ellipsis: true,
    hideInSearch: true,
  },
  {
    title: '操作',
    valueType: 'option',
    width: 100,
    fixed: 'right',
    render: (_, { emit, ...entity }) => (
      <Button type="link" onClick={() => emit('debug', entity)}>
        调试
      </Button>
    ),
  },
];
