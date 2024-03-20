/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-15 17:31:58
 * @LastEditTime: 2024-03-20 14:40:26
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\services\device.ts
 */

import request, { ResponseCommonData, ResponsePageData } from '@/utils/request';

export const getDeviceData = (sourceId: string, data?: any) => {
  return request<ResponseCommonData<Record<string, any> & { refreshTime: string }>>(
    `/v1/system/data/get/${sourceId}`,
    {
      method: 'POST',
      data,
    },
  );
};
