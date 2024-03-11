/* *
 *
 * @author whiteshader@163.com
 * @datetime  2022/02/22
 *
 * */
import { MenuDataItem } from '@ant-design/pro-components';

export type RouterType = Omit<MenuDataItem, 'routes'> & {
  routes?: MenuDataItem[];
};

const routers: RouterType[] = [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user/login',
        layout: false,
        name: 'login',
        component: './user/login',
      },
      {
        path: '/user',
        redirect: '/user/login',
      },
      {
        name: 'register-result',
        icon: 'smile',
        path: '/user/register-result',
        component: './user/register-result',
      },
      {
        name: 'register',
        icon: 'smile',
        path: '/user/register',
        component: './user/register',
      },
      {
        component: '404',
      },
    ],
  },
  {
    path: '/state',
    component: '@/layouts/TabsLayout',
    routes: [
      {
        path: '/state',
        name: 'state',
        component: './state',
        wrappers: ['@/components/KeepAlive'],
        keepAlive: false,
        locale: 'menu.index.status',
      },
    ],
  },
  {
    path: '/',
    component: '@/layouts/TabsLayout',
    routes: [
      {
        path: '/',
        redirect: '/index',
      },
      {
        path: 'index',
        name: 'report',
        component: 'index',
        wrappers: ['@/components/KeepAlive'],
        keepAlive: false,
        locale: 'menu.index.report',
      },
    ],
  },
  {
    component: './404',
  },
];

const getPathLocaleMap = (data: RouterType[], parentPath = ''): Record<string, string> => {
  let pathLocalMap: Record<string, string> = {};
  data?.forEach((item) => {
    const path = item?.path?.startsWith?.('/') ? item?.path : parentPath + '/' + item?.path;
    if (item?.locale) {
      pathLocalMap[path] = item?.locale;
    }
    if (item?.routes && item?.routes?.length) {
      const result = getPathLocaleMap(item.routes, path);
      Object.assign(pathLocalMap, result);
    }
  });
  return pathLocalMap;
};

export default routers;

export { getPathLocaleMap };
