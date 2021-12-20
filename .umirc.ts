import { IConfig } from 'umi-types';
// ref: https://umijs.org/config/
const config: IConfig = {
  treeShaking: true,
  history:'hash',
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' },
        { path: '/uploadImg', component: '../pages/uploadImg/index' },
        { path: '/testAsyncComp', component: '../pages/testAsyncComp/index' }
      ]
    }
  ],
  proxy: {
    "/api": {
      target: 'http://api.jaelizumi.cn/',
      "changeOrigin": true
    }
  },
  chainWebpack(config,{webpack}){
    config.resolve.alias.set('s','/src')
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'react_umi',
      dll: false,

      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
}

export default config;
