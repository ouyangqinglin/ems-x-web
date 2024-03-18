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
    name: 'state',
    component: '@/layouts/TabsLayout',
    locale: 'menu.state',
    routes: [
      {
        path: 'pcs',
        name: 'pcs',
        component: './state/Pcs',
        wrappers: ['@/components/KeepAlive'],
        keepAlive: true,
        locale: 'menu.state.pcs',
      },
      {
        path: 'airCooledFireProtection',
        name: 'airCooledFireProtection',
        component: './state/AirCooledFireProtection',
        wrappers: ['@/components/KeepAlive'],
        keepAlive: true,
        locale: 'menu.state.airCooledFireProtection',
      },
      {
        path: 'liquidCooler',
        name: 'liquidCooler',
        component: './state/LiquidCooler',
        wrappers: ['@/components/KeepAlive'],
        keepAlive: true,
        locale: 'menu.state.liquidCooler',
      },
      {
        path: 'dehumidifier',
        name: 'dehumidifier',
        component: './state/Dehumidifier',
        wrappers: ['@/components/KeepAlive'],
        keepAlive: true,
        locale: 'menu.state.dehumidifier',
      },
      {
        path: 'liquidCooledFireProtection',
        name: 'liquidCooledFireProtection',
        component: './state/LiquidCooledFireProtection',
        wrappers: ['@/components/KeepAlive'],
        keepAlive: true,
        locale: 'menu.state.liquidCooledFireProtection',
      },
      
    ],
  },
  {
    path: '/config',
    name: 'config',
    component: '@/layouts/TabsLayout',
    locale: 'menu.config',
    routes: [
      {
        path: 'pcs',
        name: 'pcs',
        component: './config/Pcs',
        wrappers: ['@/components/KeepAlive'],
        keepAlive: true,
        locale: 'menu.state.pcs',
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
        locale: 'menu.index',
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
