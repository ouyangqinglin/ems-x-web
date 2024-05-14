import request from '@/utils/request';

export const upgrade = (data: any) => {
  return request(`/v1/system/upgrade`, {
    method: 'POST',
    data,
  });
};

export const upgrading = () => {
  return request(`/v1/system/upgrade/process/{{seq}}`, {
    method: 'GET',
  });
};

export const upgradeInfo = () => {
  return request(`/v1/system/upgrade/baseInfo`, {
    method: 'GET',
  });
};
