/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-04-17 15:54:59
 * @LastEditTime: 2024-04-18 16:35:36
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\system\MetadataConfig\helper.tsx
 */

import { YTProColumns } from '@/components/YTProTable/typing';
import { Button } from 'antd';

export const columns: YTProColumns<any>[] = [
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
    renderWithEmit: (_, { emit, ...entity }) => <a onClick={() => emit('debug', entity)}>调试</a>,
  },
];
