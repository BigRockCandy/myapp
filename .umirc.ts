import { defineConfig } from '@umijs/max';
const path = require('path');
export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  theme: {
    // 主调背景色
    '@af-bg-color': '#ffffff',
    // 主调边框色
    '@af-border-color': '#e3e3e3',
    // 返回导航条，主调背景
    '@af-back-bg-color': '#ffffff',
  },
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'npm',
  chainWebpack: (config: any) => {
    config.resolve.alias.set(
      '@base',
      path.resolve(__dirname, './node_modules/react-base-client/src'),
    );
  },
});
