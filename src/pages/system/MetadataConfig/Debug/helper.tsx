/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-04-18 09:37:16
 * @LastEditTime: 2024-04-18 09:37:16
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\system\MetadataConfig\Debug\helper.tsx
 */

import { DetailItem } from '@/components/Detail';

export enum DebugMode {
  Red = 1,
  Write,
}

export const baseInfoItems: DetailItem[] = [
  {
    label: '地址编号',
    field: 'pointId',
  },
  {
    label: '名称',
    field: 'metaName',
  },
  {
    label: '数据类型',
    field: 'dataType',
  },
];
