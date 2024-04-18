/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-04-18 09:37:16
 * @LastEditTime: 2024-04-18 14:17:27
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

export const debugBaseItems: DetailItem[] = [
  {
    label: '',
    field: 'package',
    showPlaceholder: false,
    format: () => '数据包',
  },
  {
    label: '事务标识符',
    field: 'txId',
  },
  {
    label: '协议标识符',
    field: 'protocol',
  },
  {
    label: '长度',
    field: 'length',
  },
  {
    label: '单元标识符',
    field: 'unit',
  },
  {
    label: '功能码',
    field: 'functionCode',
  },
  {
    label: '',
    field: 'result',
    showPlaceholder: false,
    format: () => '解析结果',
  },
  {
    label: '',
    field: 'txIdValue',
  },
  {
    label: '',
    field: 'protocolValue',
  },
  {
    label: '',
    field: 'lengthValue',
  },
  {
    label: '',
    field: 'unitValue',
  },
  {
    label: '',
    field: 'functionCodeValue',
  },
];

export const debugAddressItems: DetailItem[] = [
  ...debugBaseItems.slice(0, 6),
  {
    label: '起始地址',
    field: 'address',
  },
  {
    label: '寄存器地址',
    field: 'quantity',
  },
  ...debugBaseItems.slice(6),
  {
    label: '',
    field: 'addressValue',
  },
  {
    label: '',
    field: 'quantityValue',
  },
];

export const debugDataItems: DetailItem[] = [
  ...debugBaseItems.slice(0, 6),
  {
    label: '数据',
    field: 'data',
  },
  {
    label: '',
    field: 'w1',
    showPlaceholder: false,
    format: () => '',
  },
  ...debugBaseItems.slice(6),
  {
    label: '',
    field: 'dataValue',
  },
  {
    label: '',
    field: 'w2',
    showPlaceholder: false,
    format: () => '',
  },
];
