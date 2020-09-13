import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store';

import 'animate.css';


import {
  Container,
  Header,
  Aside,
  Main,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;


Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
