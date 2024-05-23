import { downLoadXlsx } from '@/utils/downloadfile';
import request from '@/utils/request';
import type { MenuType, MenuListParams } from './data.d';

/* *
 *
 * @author whiteshader@163.com
 * @datetime  2021/09/16
 *
 * */

// 查询菜单权限列表
export async function getMenuList(params?: MenuListParams) {
  return request(`/v1/system/menu-manage`, {
    data: params,
    method: 'POST',
  });
}

// 查询菜单权限详细
export function getMenu(menuId: number) {
  return request(`/system/menu/${menuId}`, {
    method: 'GET',
  });
}

// 查询菜单权限详细
export function getMenuTree() {
  return request('/system/menu/treeselect', {
    method: 'GET',
  });
}

// 新增菜单权限
export async function addMenu(data: MenuType) {
  return request('/v1/system/menu-manage/add', {
    method: 'POST',
    data,
  });
}

// 修改菜单权限
export async function updateMenu(data: MenuType) {
  return request('/v1/system/menu-manage/edit', {
    method: 'POST',
    data,
  });
}

// 删除菜单权限
export async function removeMenu(id) {
  return request(`/v1/system/menu-manage/delete`, {
    method: 'POST',
    data: {
      source_id: id,
    },
  });
}

// 导出菜单权限
export function exportMenu(params?: MenuListParams) {
  return downLoadXlsx(`/system/menu/export`, { params }, `menu_${new Date().getTime()}.xlsx`);
}
