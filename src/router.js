import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './views/Main/Home/Home.vue'

Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
  ] // (缩写) 相当于 routes: routes
})

export default router;