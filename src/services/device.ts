/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-15 17:31:58
 * @LastEditTime: 2024-03-21 15:58:12
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\services\device.ts
 */

import request, { ResponseCommonData, ResponsePageData } from '@/utils/request';
import { downLoadXlsx } from '@/utils/downloadfile';

export const getDeviceData = (sourceId: string, data?: any) => {
  return request<ResponseCommonData<Record<string, any> & { refreshTime: string }>>(
    `/v1/system/data/get/${sourceId}`,
    {
      method: 'POST',
      data,
    },
  );
};

export const editDeviceData = (data: any) => {
  const sourceId = data.sourceId;
  delete data.sourceId;
  return request(`/v1/system/data/set/${sourceId}`, {
    method: 'POST',
    data,
  });
};

export const getSystemTime = () => {
  return request(`/v1/system/data/systemTime`, {
    method: 'GET',
  });
};

export const getSystemStatus = () => {
  return request(`/v1/system/data/deviceStatus`, {
    method: 'GET',
  });
};

export const exportData = (data: any) => {
  return downLoadXlsx(`/v1/system/data/export`, { data }, '上位机数据.xlsx');
};
