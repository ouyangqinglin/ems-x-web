import type { Settings as LayoutSettings } from '@ant-design/pro-layout';
import { PageLoading } from '@ant-design/pro-layout';
import type { RunTimeLayoutConfig } from 'umi';
import type { MenuDataItem } from '@umijs/route-utils';
import { history } from 'umi';
import defaultSettings from '../config/defaultSettings';
import { getUserInfo, getRoutersInfo } from './services/session';
import { getUserRoleId } from '@/access';
import MyHeader from '@/components/header/MyHeader';
import Footer from '@/components/Footer';
import YTIcon from '@/assets/image/icon-yt.png';

import {
  getMenus,
  getPathTitleMap,
  getPathArrary,
  getLocaleMenus,
  getBrowserLang,
  formatMessage,
} from '@/utils';
import type { MenuProps } from 'antd';
import Logo from '@/components/header/Logo';
import styles from './app.less';
import { SiteDataType } from './services/station';
import { defaultSystemInfo } from '@/utils/config';
import { getSystemStatus } from './services/device';

export type initialStateType = {
  settings?: Partial<LayoutSettings>;
  currentUser?: API.CurrentUser;
  loading?: boolean;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
  menus?: MenuDataItem[];
  menuPathTitleMap?: Map<string, string>;
  antMenus?: MenuProps['items'];
  collapsed?: boolean;
  openKeys?: string[];
  site?: SiteDataType;
};

const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';
const appDownloadPath = '/download/app';

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <PageLoading />,
};

const editFavicon = (data?: initialStateType) => {
  const head = document.getElementsByTagName('head')[0];
  const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  if (data?.currentUser?.systemInfo?.icon) {
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = data?.currentUser?.systemInfo?.icon;
    head.appendChild(link);
  } else {
    link.remove();
  }
  setTimeout(() => {
    document.title =
      data?.currentUser?.systemInfo?.title ||
      formatMessage({ id: 'system.title', defaultMessage: '工商储能量管理系统上位机软件' });
  }, 700);
};

const initLocale = (userLocale?: string) => {
  const localLocale = localStorage.getItem('umi_locale');
  const locale =
    userLocale || localLocale || getBrowserLang() || defaultSettings?.locale || 'zh-CN';
  if (localLocale != locale) {
    localStorage.setItem('umi_locale', locale);
    window.location.reload();
  }
};

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<initialStateType> {
  const fetchUserInfo = async () => {
    try {
      const result = await getUserInfo({ showMessage: false });
      const resp = result?.data;
      const resultInfo = await getSystemStatus();
      const data = resultInfo?.data;

      initLocale(resp?.user?.lang);
      if (
        resp === undefined ||
        result.code !== 200 ||
        data === undefined ||
        resultInfo.code !== 200
      ) {
        history.push(loginPath);
      } else {
        const information = {
          ...resp.user,
          permissions: resp.permissions,
          systemInfo: {
            title: data?.systemNameCN,
            version: data?.version,
            systemNameEN: data?.systemNameEN,
            icon: YTIcon,
          },
        } as API.CurrentUser;

        return information;
      }
    } catch (error) {
      history.push(loginPath);
    }

    return undefined;
  };

  const collapsed = window.innerWidth < 992;

  // 如果是登录页面，不执行
  if (![loginPath, appDownloadPath].includes(history.location.pathname)) {
    const currentUser = await fetchUserInfo();
    let menus;
    if (currentUser) {
      const requestMenus = await getRoutersInfo(+getUserRoleId());
      menus = getLocaleMenus(requestMenus);
    }
    const antMenus = menus && getMenus(menus);
    return {
      fetchUserInfo,
      settings: defaultSettings,
      menus,
      antMenus,
      menuPathTitleMap: getPathTitleMap(antMenus),
      currentUser,
      collapsed,
    };
  } else {
    return {
      fetchUserInfo,
      settings: defaultSettings,
      collapsed,
      currentUser: {
        systemInfo: defaultSystemInfo,
      },
    };
  }
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
  editFavicon(initialState);

  return {
    heightLayoutHeader: 56,
    headerRender: () => <MyHeader />,
    className: styles.layout,
    collapsedButtonRender: false,
    collapsed: initialState?.collapsed,
    onCollapse: (collapsed: boolean) => {
      setInitialState((preInitialState) => {
        return { ...preInitialState, collapsed };
      });
    },
    waterMarkProps: {
      content: initialState?.currentUser?.userName,
    },
    footerRender: () => <Footer />,
    onPageChange: () => {
      // const { location } = history;
      // // 如果没有登录，重定向到 login
      // if (!initialState?.currentUser && location.pathname !== loginPath) {
      //   history.push(loginPath);
      // }
    },
    // links: isDev
    //   ? [
    //     <Link key="openapi" to="/umi/plugin/openapi" target="_blank">
    //       <LinkOutlined />
    //       <span>OpenAPI 文档</span>
    //     </Link>,
    //     <Link key="docs" to="/~docs">
    //       <BookOutlined />
    //       <span>业务组件文档</span>
    //     </Link>,
    //   ]
    //   : [],
    menuHeaderRender: () => <Logo />,
    openKeys: initialState?.openKeys,
    onOpenChange(openKeys) {
      if (Array.isArray(openKeys)) {
        if (initialState?.openKeys && initialState?.openKeys?.length) {
          if (
            openKeys[openKeys.length - 1] == initialState.openKeys[initialState.openKeys.length - 1]
          ) {
            for (let i = 0; i < initialState.openKeys.length; i++) {
              if (initialState.openKeys[i] != openKeys[i]) {
                setInitialState?.((prevData) => {
                  return {
                    ...prevData,
                    openKeys: getPathArrary(prevData?.openKeys?.[i - 1] || ''),
                  };
                });
                return;
              }
            }
          }
        }
        setInitialState?.((prevData) => {
          return { ...prevData, openKeys: getPathArrary(openKeys[openKeys.length - 1]) };
        });
      }
    },
    menu: {
      locale: false,
      // 每当 initialState?.currentUser?.userid 发生修改时重新执行 request
      params: {
        userId: initialState?.currentUser?.id,
        menus: initialState?.menus,
      },
      request: async () => {
        if (!initialState?.currentUser?.id) {
          return [];
        }
        return initialState?.menus || [];
      },
    },
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    // 增加一个 loading 的状态
    childrenRender: (children, props) => {
      return <div className="mb50">{children}</div>;
    },
    ...initialState?.settings,
  };
};
