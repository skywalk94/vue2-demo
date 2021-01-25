import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'lib-flexible/flexible'
import DrawerLayout from 'vue-drawer-layout'
Vue.use(DrawerLayout)
import {
  Tabbar,
  TabbarItem,
  Button
} from "vant";
Vue.use(Tabbar).use(TabbarItem).use(Button);

Vue.config.productionTip = false

import loading from "@/components/loading";
Vue.prototype.$loading = loading;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')