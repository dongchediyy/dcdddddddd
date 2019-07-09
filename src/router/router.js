import Vue from 'vue';
import Router from 'vue-router';

import home from '../views/home.vue';
import Shouye from '../views/Car/shouye/index.vue';
import CarSelection from '../views/Car/CarSelection/index.vue';
import Myring from '../views/Car/Myring/index.vue';
import Smallvideo from '../views/Car/Smallvideo/index.vue';
import Rankinglist from '../views/Car/Rankinglist/index.vue';
import Addedservice from '../views/Car/Addedservice/index.vue';
import Essay from '../views/Car/Essay/index.vue';
import Video from '../views/Car/Video/index.vue';
import AddedserviceDetail from "../views/Car/AddedserviceDetail/index.vue"
Vue.use(Router);

const routes = [{
        path: '/home/:type',
        component: home,
        name: 'home'
    },
    //首页
    {
        path: '/car',
        component: Shouye
    },
    //选车
    {
        path: '/car/CarSelection',
        component: CarSelection
    },
    //车友圈
    {
        path: '/car/Myring',
        component: Myring
    },
    //小视频
    {
        path: '/car/Smallvideo',
        component: Smallvideo
    },
    //排行榜
    {
        path: '/car/Rankinglist',
        component: Rankinglist,
        // redirect: '/car/Rankinglist/rank_list/one',

    },
    //服务
    {
        path: '/car/Addedservice',
        component: Addedservice,
        // children: [{
        //     path: "AddedserviceDetail",
        //     component: AddedserviceDetail
        // }]
    },

    {
        path: "/car/Addedservice/AddedserviceDetail",
        component: AddedserviceDetail
    },
    //文章
    {
        path: '/car/Essay',
        component: Essay
    },
    //视频
    {
        path: '/car/Video',
        component: Video
    },



    // {
    //     path: '*',
    //     redirect: '/car/all?type=__all__'
    // },
    // {
    //     path: '',
    //     redirect: '/car/all?type=__all__'
    // }
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