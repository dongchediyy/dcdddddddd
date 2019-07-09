import Vue from 'vue';
import Router from 'vue-router';

import home from '../views/home.vue';
// import Shouye from '../views/Car/shouye/index.vue';
// import CarSelection from '../views/Car/CarSelection/index.vue';
// import Myring from '../views/Car/Myring/index.vue';
// import Smallvideo from '../views/Car/Smallvideo/index.vue';
// import Rankinglist from '../views/Car/Rankinglist/index.vue';
// import Addedservice from '../views/Car/Addedservice/index.vue';
// import Essay from '../views/Car/Essay/index.vue';
// import Video from '../views/Car/Video/index.vue';
// import Grabble from '../views/Car/grabble/index.vue';
Vue.use(Router);

const routes = [
  {
    path: '/home/:type',
    component: home,
    name: 'home'
  },
  //首页
  {
    path: '/car',
    component: resolve => require(['../views/Car/shouye/index.vue'], resolve)
  },
  //
  {
    path: '/car/carNav',
    component: resolve => require(['../views/Car/shouyeNav/index.vue'], resolve)
  },
  //选车
  {
    path: '/car/CarSelection',
    component: resolve => require(['../views/Car/CarSelection/index.vue'], resolve)
  },
  //选车详情
  {
    path: '/car/CarSelection/CarNav',
    component: resolve => require(['../views/Car/CarSelectionNav/index.vue'], resolve)
  },
  //车友圈
  {
    path: '/car/Myring',
    component: resolve => require(['../views/Car/Myring/index.vue'], resolve)
  },
  //车有圈详情
  {
    path: '/car/Myring/MyringNav',
    component: resolve => require(['../views/Car/MyringNav/index.vue'], resolve)
  },
  //小视频
  // {
  //   path: '/car/Smallvideo',
  //   component: Smallvideo
  // },
  //排行榜
  {
    path: '/car/Rankinglist',
    component: resolve => require(['../views/Car/Rankinglist/index.vue'], resolve)
  },
  //服务
  {
    path: '/car/Addedservice',
    component: resolve => require(['../views/Car/Addedservice/index.vue'], resolve)
  },
  //文章
  {
    path: '/car/Essay',
    component: resolve => require(['../views/Car/Essay/index.vue'], resolve)
  },
  //视频
  // {
  //   path: '/car/Video',
  //   component: Video
  // },
  //搜索
  {
    path: '/car/grabble',
    component: resolve => require(['../views/Car/grabble/index.vue'], resolve)
  },
  //文章详情
  {
    path: '/car/grabble/atlas',
    component: resolve => require(['../views/Car/grabbleAtlas/index.vue'], resolve)
  },
  {
    path: '',
    redirect: '/car'
  }
];

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  } else {
    return { x: 0, y: 0 };
  }
};

const router = new Router({
  mode: 'history',
  routes,
  scrollBehavior
});

export default router;
