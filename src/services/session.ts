import { createIcon } from '@/utils/IconUtil';
import request from '@/utils/request';
import type { MenuDataItem } from '@umijs/route-utils';
import YTIcon from '@/assets/image/icon-yt.png';

/** 获取当前的用户 GET /getUserInfo */
export async function getUserInfo(options?: Record<string, any>) {
  return new Promise<unknown>((resolve, reject) => {
    resolve({
      data: {
        permissions: ['*:*:*'],
        roles: ['admin'],
        systemInfo: {
          title: '工商储能量管理系统上位机软件',
          icon: YTIcon,
          systemNameEN: 'YT-ESS-EMS',
          version: 'v1.0.0,',
        },
        user: {
          account: 'admin',
          createdBy: null,
          id: 2,
          phone: null,
          updatedBy: null,
          userLogo: null,
          userName: 'admin',
        },
      },
      code: 200,
      msg: '',
    });
  });
  return request<API.GetUserInfoResult>('/v1/web/system/getInfo', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 退出登录接口 POST /login/outLogin */
export async function logout(options?: Record<string, any>) {
  return request<Record<string, any>>('/v1/system/loginOut', {
    method: 'POST',
    ...(options || {}),
  });
}

export async function getRouters(roleId?: any): Promise<API.GetRoutersResult> {
  new Promise((resolve) => {
    resolve({
      code: 200,
      data: [
        {
          name: 'Index',
          path: '/index',
          hidden: false,
          component: 'Layout',
          meta: {
            title: '首页',
            icon: 'YTHomeOutlined',
            noCache: false,
            link: null,
          },
        },
        {
          name: 'State',
          path: '/state',
          hidden: false,
          component: 'Layout',
          meta: {
            title: '状态数据',
            icon: 'YTStationOutlined',
            noCache: false,
            link: null,
          },
          children: [
            {
              path: 'pcs',
            },
            {
              path: 'pcs-sess',
            },
            {
              path: 'pcs-pv',
            },
            {
              path: 'system-air',
            },
            {
              path: 'system-sess',
            },
            {
              path: 'system-liquid',
            },
            {
              path: 'battery-pack-air',
            },
            {
              path: 'battery-pack-sess',
            },
            {
              path: 'air-condition',
            },
            {
              path: 'air-condition-sess',
            },
            {
              path: 'air-cooled-fire-protection',
            },
            {
              path: 'liquid-cooler',
            },
            {
              path: 'dehumidifier',
            },
            {
              path: 'liquid-cooled-fire-protection',
            },
            {
              path: 'grid-side-electricity-meter',
            },
            {
              path: 'inverter-side-meter',
            },
            {
              path: 'fire-fighting-sess',
            },
            {
              path: 'fire-fighting-pv',
            },
            {
              path: 'grid-side-electricity-meter-pv',
            },
            {
              path: 'inverter-side-meter-pv',
            },
            {
              path: 'system-optical',
            },
            {
              path: 'battery-pack-optical',
            },
            {
              path: 'air-condition-optical',
            },
            {
              path: 'battery-pack-liquid',
            },
          ],
        },
        {
          name: 'config',
          path: '/config',
          hidden: false,
          component: 'Layout',
          meta: {
            icon: 'YTSettingOutlined',
          },
          children: [
            {
              path: 'system-control',
            },
            {
              path: 'system',
            },
            {
              path: 'pcs',
            },
            {
              path: 'pcs-sess',
            },
            {
              path: 'pcs-pv',
            },
            {
              path: 'pv',
            },
            {
              path: 'air-condition',
            },
            {
              path: 'air-condition-sess',
            },
            {
              path: 'battery-pack',
            },
            {
              path: 'liquid-cooler',
            },
            {
              path: 'dehumidifier',
            },
            {
              path: 'grid-side-electricity-meter',
            },
            {
              path: 'inverter-side-meter',
            },
            {
              path: 'energy-management',
            },
            {
              path: 'cloud-platform',
            },
            {
              path: 'pv-pv',
            },
            {
              path: 'inverter-side-meter-pv',
            },
            {
              path: 'grid-side-electricity-meter-pv',
            },
            {
              path: 'energy-management-pv',
            },
            {
              path: 'cloud-platform-pv',
            },
            {
              path: 'system-control-optical',
            },
            {
              path: 'system-optical',
            },
            {
              path: 'battery-pack-optical',
            },
            {
              path: 'air-condition-optical',
            },
          ],
        },
      ],
      msg: '',
    });
  });
  return request('/v1/system/menu/get', {
    method: 'POST',
    data: {
      roleId,
    },
  });
}

export function convertCompatRouters(childrens: API.RoutersMenuItem[]): MenuDataItem[] {
  return childrens.map((item: API.RoutersMenuItem) => {
    return {
      path: item.path,
      icon: createIcon(item?.icon?.replace?.('#', 'YTDotOutlined') || 'YTDotOutlined'),
      name: item?.source_name || item?.meta?.title,
      children: item.children ? convertCompatRouters(item.children) : undefined,
      hideChildrenInMenu: item.hidden,
      hideInMenu: item.hidden,
      component: item.component,
      authority: item.perms,
      is_export: item.is_export,
      is_config: item.is_config,
      meta: item?.meta || {},
      sourceId: item?.source_id,
    };
  });
}

export async function getRoutersInfo(params?: any): Promise<MenuDataItem[]> {
  return getRouters(params).then((res) => {
    return convertCompatRouters(res.data);
  });
}

export function getMatchMenuItem(
  path: string,
  menuData: MenuDataItem[] | undefined,
): MenuDataItem[] {
  if (!menuData) return [];
  let items: MenuDataItem[] = [];
  menuData.forEach((item) => {
    if (item.path) {
      if (item.path === path) {
        items.push(item);
        return;
      }
      if (path.length >= item.path?.length) {
        const exp = `${item.path}/*`;
        if (path.match(exp)) {
          if (item.children) {
            const subpath = path.substr(item.path.length + 1);
            const subItem: MenuDataItem[] = getMatchMenuItem(subpath, item.children);
            items = items.concat(subItem);
          } else {
            const paths = path.split('/');
            if (paths.length >= 2 && paths[0] === item.path && paths[1] === 'index') {
              items.push(item);
            }
          }
        }
      }
    }
  });
  return items;
}

export const updateUserLang = (lang: string) => {
  // return new Promise<{
  //   code: number;
  //   data: boolean;
  // }>((resolve) => {
  //   setTimeout(() => {
  //     resolve({
  //       code: 200,
  //       data: true,
  //     });
  //   }, 2000);
  // });
  return request(`/system/userLanguage`, {
    method: 'PUT',
    data: { lang: lang },
  });
};
