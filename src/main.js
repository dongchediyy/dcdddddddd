import Vue from 'vue';
import App from './App.vue';
import router from './router/router.js';
import './views/Car/icon/iconfont.css';
import BScroll from "../src/views/Car/commot/Bscroll/index.vue"
Vue.prototype.$observer = new Vue();
Vue.component('BScroll', BScroll);
new Vue({

    el: '#app',
    router,

    render: h => h(App)
});