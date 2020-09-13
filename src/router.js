import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './views/Main/Home/Home.vue';

Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/login', name: 'Login',  component: () => import('./views/Login/Login.vue')},
  ] // (缩写) 相当于 routes: routes
})

router.beforeEach((to, from, next) => {
  // 简单做个验证登陆
  if (to.name === 'Login') {
    next();
  } else if (!window.localStorage.getItem('xxx-adming-token')) {
    next({ name: 'Login' })
  }else {
    next();
  }
})

export default router;