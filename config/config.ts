// https://umijs.org/config/
import { defineConfig } from 'umi';
import { join } from 'path';
import defaultSettings from './defaultSettings';
import routes from './routes';
import proxy from './proxy';
import CompressionPlugin from 'compression-webpack-plugin';

const { REACT_APP_ENV } = process.env;

export default defineConfig({
  hash: true,
  antd: {},
  // qiankun: {
  //   master: {
  //     // 注册子应用信息
  //     apps: [
  //       {
  //         name: 'goView', // 唯一 id
  //         entry: '//localhost:5173/', // html entry
  //       },
  //     ],
  //   },
  // },
  dva: {
    hmr: true,
  },
  layout: {
    // https://umijs.org/zh-CN/plugins/plugin-layout
    locale: true,
    siderWidth: 208,
    ...defaultSettings,
  },
  // https://umijs.org/zh-CN/plugins/plugin-locale
  locale: {
    default: defaultSettings.locale,
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes,
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  // esbuild is father build tools
  // https://umijs.org/plugins/plugin-esbuild
  esbuild: {},
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  // Fast Refresh 热更新
  fastRefresh: {},
  openAPI: [
    {
      requestLibPath: "import { request } from 'umi'",
      // 或者使用在线的版本
      // schemaPath: "https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json"
      schemaPath: join(__dirname, 'oneapi.json'),
      mock: false,
    },
    {
      requestLibPath: "import { request } from 'umi'",
      schemaPath: 'https://gw.alipayobjects.com/os/antfincdn/CA1dOm%2631B/openapi.json',
      projectName: 'swagger',
    },
  ],
  nodeModulesTransform: {
    type: 'none',
  },
  mfsu: {},
  webpack5: {},
  exportStatic: {},
  externals: {},
  chainWebpack: (config) => {
    config.module.rule('otf').test(/.otf$/).use('file-loader').loader('file-loader');
    config.module.rule('mp4').test(/.mp4$/).use('file-loader').loader('file-loader');
    if (process.env.UMI_ENV !== 'dev') {
      config.plugin('extract-css').tap(() => [
        {
          filename: `static/css/[name].[contenthash:8].css`,
          chunkFilename: `static/css/[name].[contenthash:8].chunk.css`,
          ignoreOrder: true,
        },
      ]);
      config.output
        .filename(`static/js/[name].[hash:8].js`)
        .chunkFilename(`static/js/[name].[contenthash:8].chunk.js`);
    }
  },
});
