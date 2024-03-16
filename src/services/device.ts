/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-15 17:31:58
 * @LastEditTime: 2024-03-15 17:32:08
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\services\device.ts
 */

import request, { ResponseCommonData, ResponsePageData } from '@/utils/request';

export const getDeviceData = (params: any) => {
  return request<ResponseCommonData<Record<string, any>>>(`/uc/customerUser/serviceProvider/page`, {
    method: 'GET',
    params,
  });
};
