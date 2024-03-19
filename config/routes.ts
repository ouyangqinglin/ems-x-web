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
        path: 'system-air',
        name: 'system-air',
        component: './state/System-Air',
        wrappers: ['@/components/KeepAlive'],
        keepAlive: true,
        locale: 'menu.state.air',
      },
      {
        path: 'system-sess',
        name: 'system-sess',
        component: './state/System-Sess',
        wrappers: ['@/components/KeepAlive'],
        keepAlive: true,
        locale: 'menu.state.systemSess',
      },
      {
        path: 'system-liquid',
        name: 'system-liquid',
        component: './state/System-Liquid',
        wrappers: ['@/components/KeepAlive'],
        keepAlive: true,
        locale: 'menu.state.liquid',
      },
      {
        path: 'battery-pack',
        name: 'battery-pack',
        component: './state/Battery-Pack',
        wrappers: ['@/components/KeepAlive'],
        keepAlive: true,
        locale: 'menu.state.batteryPack',
      },
      {
        path: 'battery-pack-sess',
        name: 'battery-pack-sess',
        component: './state/Battery-Pack-Sess',
        wrappers: ['@/components/KeepAlive'],
        keepAlive: true,
        locale: 'menu.state.batteryPackSess',
      },
      {
        path: 'air-condition',
        name: 'air-condition',
        component: './state/Air-Condition',
        wrappers: ['@/components/KeepAlive'],
        keepAlive: true,
        locale: 'menu.state.airCondition',
      },
      {
        path: 'air-condition-sess',
        name: 'air-condition-sess',
        component: './state/Air-Condition-Sess',
        wrappers: ['@/components/KeepAlive'],
        keepAlive: true,
        locale: 'menu.state.airConditionSess',
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
    ],
  },
  {
    path: '/config',
    name: 'config',
    component: '@/layouts/TabsLayout',
    locale: 'menu.config',
    routes: [
      {
        path: 'system-control',
        name: 'system-control',
        component: './config/System-Control',
        wrappers: ['@/components/KeepAlive'],
        keepAlive: true,
        locale: 'menu.config.systemControl',
      },
      {
        path: 'system',
        name: 'system',
        component: './config/System',
        wrappers: ['@/components/KeepAlive'],
        keepAlive: true,
        locale: 'menu.config.system',
      },
      {
        path: 'pcs',
        name: 'pcs',
        component: './config/Pcs',
        wrappers: ['@/components/KeepAlive'],
        keepAlive: true,
        locale: 'menu.state.pcs',
      },
      {
        path: 'pv',
        name: 'pv',
        component: './config/Pv',
        wrappers: ['@/components/KeepAlive'],
        keepAlive: true,
        locale: 'menu.config.pv',
      },
      {
        path: 'battery-pack',
        name: 'battery-pack',
        component: './config/Battery-Pack',
        wrappers: ['@/components/KeepAlive'],
        keepAlive: true,
        locale: 'menu.state.batteryPack',
      },
      {
        path: 'air-condition',
        name: 'air-condition',
        component: './config/Air-Condition',
        wrappers: ['@/components/KeepAlive'],
        keepAlive: true,
        locale: 'menu.state.airCondition',
      },
      {
        path: 'air-condition-sess',
        name: 'air-condition-sess',
        component: './config/Air-Condition-Sess',
        wrappers: ['@/components/KeepAlive'],
        keepAlive: true,
        locale: 'menu.state.airConditionSess',
      },
      {
        path: 'system-air',
        name: 'system-air',
        component: './state/System-Air',
        wrappers: ['@/components/KeepAlive'],
        keepAlive: true,
        locale: 'menu.state.air',
      },
      {
        path: 'system-liquid',
        name: 'system-liquid',
        component: './state/System-Liquid',
        wrappers: ['@/components/KeepAlive'],
        keepAlive: true,
        locale: 'menu.state.liquid',
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
