/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-04-17 16:08:18
 * @LastEditTime: 2024-04-17 16:08:18
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\services\system.ts
 */

import request from '@/utils/request';

export const getMetadataPage = (data: any) => {
  return request(`/v1/system/menu/dataPage`, {
    method: 'POST',
    data,
  });
};

export const debugMetadata = (data: any) => {
  return request('/v1/system/data/debug', {
    method: 'POST',
    data,
  });
};

export const getSystemMonitor = (data: any) => {
  return request(`/v1/system/system-monitor`, {
    method: 'POST',
    data,
  });
};
