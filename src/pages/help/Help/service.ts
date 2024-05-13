/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-05-13 09:28:47
 * @LastEditTime: 2024-05-13 09:28:48
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\help\Help\service.ts
 */

import request from '@/utils/request';

export const getEmsVersion = () => {
  return request(`/v1/system/custom/versionAdapter`, {
    method: 'GET',
  });
};
