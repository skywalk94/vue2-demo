import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import store from './store'
import https from "./axios/http";
import wechatAuth from "./common/wechatAuth";

import 'lib-flexible/flexible'
import DrawerLayout from 'vue-drawer-layout'
Vue.use(DrawerLayout)
import {
  Tabbar,
  TabbarItem,
  Button
} from "vant";
Vue.use(Tabbar).use(TabbarItem).use(Button);

Vue.prototype.https = https;
Vue.prototype.$axios = axios;
Vue.config.productionTip = false

Vue.use(wechatAuth, {
  appid: "wecahtappid",
  scope: "snsapi_userinfo"
});
new Vue({
  router,
  axios,
  store,
  render: h => h(App)
}).$mount('#app')