import Vue from 'vue';
import App from './App.vue';
import router from './router/router.js';
import './views/Car/icon/iconfont.css';
import './views/Car/commot/moke/index.js';
import BScroll from './views/Car/commot/BScroll/index.vue';
Vue.component('BScroll', BScroll);
Vue.prototype.$observer = new Vue();
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
