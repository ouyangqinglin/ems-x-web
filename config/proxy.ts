/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * -------------------------------
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
export default {
  dev: {
    '/api/': {
      target: 'http://192.168.3.74:8080',
      // target: 'https://cbc.yotaienergy.com',
      // target: 'https://120.78.129.213',
      // target: 'https://192.168.3.47',
      changeOrigin: true,
      secure: false,
      pathRewrite: { '^/api': '/api' },
    },
    '/file/': {
      target: 'https://192.168.3.18',
      changeOrigin: true,
      secure: false,
    },
    '/profile/avatar/': {
      target: 'https://192.168.3.18',
      changeOrigin: true,
      secure: false,
    },
  },
  test: {
    '/api/': {
      target: 'http://192.168.3.74:8080',
      changeOrigin: true,
      pathRewrite: { '^/api': '/prod-api' },
      secure: false,
    },
  },
  pre: {
    '/api/': {
      target: 'your pre url',
      changeOrigin: true,
      pathRewrite: { '^': '' },
      secure: false,
    },
  },
};
