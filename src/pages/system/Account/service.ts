/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2023-07-26 09:18:34
 * @LastEditTime: 2023-07-26 19:47:07
 * @LastEditors: YangJianFei
 * @FilePath: \energy-cloud-frontend\src\pages\system\UserManage\Account.tsx\service.ts
 */

import request, { ResponseCommonData, ResponsePageData } from '@/utils/request';
import type { AccountDataType } from './config';

export type OrgDataType = {
  orgId?: string;
  orgName?: string;
  orgType?: string;
};

export type SiteDataType = {
  id?: string;
  name?: string;
};

export const getPage = (data: AccountDataType) => {
  return request<ResponsePageData<AccountDataType>>(`/v1/system/user-manage`, {
    method: 'POST',
    data,
  });
};

export const addData = (data: any) => {
  return request(`/v1/system/user-manage/add`, {
    method: 'POST',
    data,
  });
};

export const editData = (data: any) => {
  return request(`/v1/system/user-manage/edit`, {
    method: 'POST',
    data,
  });
};

export const getData = (params: any) => {
  return request<ResponseCommonData<AccountDataType>>(`/uc/user`, {
    method: 'GET',
    params,
  });
};

export const deleteData = (data: any) => {
  return request(`/v1/system/user-manage/delete`, {
    method: 'POST',
    data,
  });
};

export const getOrgByRole = (params: any) => {
  return request<ResponseCommonData<OrgDataType[]>>(`/uc/user/org/list`, {
    method: 'GET',
    params,
  });
};

export const getSiteByOrg = (params: any) => {
  return request<ResponsePageData<OrgDataType[]>>(`/uc/user/site/page`, {
    method: 'GET',
    params,
  });
};

export const getThreeLevelSiteTree = (params: any) => {
  return request<ResponseCommonData<OrgDataType[]>>(`/uc/site/threeLevelSiteTree`, {
    method: 'GET',
    params,
  });
};

export const getRoles = (data: any) => {
  return request<ResponseCommonData<RoleDataType[]>>('/v1/system/role-manage', {
    method: 'POST',
    data,
  });
};
