import request from '@/utils/request';

export const getRole = (data: { roleId: number }) => {
  return get(`/uc/role`, data);
};

export const getEffectMenus = () => {
  const roleId = +localStorage.getItem('roleId');
  return request('/v1/system/menu/get', {
    method: 'POST',
    data: {
      roleId,
    },
  });
};

export const getSelectMenu = (roleId?: any) => {
  return request('/uc/role/menu/checkedKeys', {
    method: 'POST',
    data: {
      roleId,
    },
  });
};

export const getRoleList = (data: any) => {
  return request(`/v1/system/role-manage`, {
    method: 'POST',
    data,
  });
};

export const deleteRole = (data: any) => {
  return request(`/v1/system/role-manage/delete`, {
    method: 'POST',
    data,
  });
};

export const updateRole = (data: any) => {
  return request(`/v1/system/role-manage/edit`, {
    method: 'POST',
    data,
  });
};

export const createRole = (data: any) => {
  return request(`/v1/system/role-manage/add`, {
    method: 'POST',
    data,
  });
};

export const assignUser = (data: any) => {
  return request(`/v1/system/role-manage/config-user`, {
    method: 'POST',
    data,
  });
};
