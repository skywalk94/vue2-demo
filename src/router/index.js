import Vue from 'vue'
import VueRouter from 'vue-router'
import wechatAuth from "../common/wechatAuth";
import axios from "axios";
Vue.use(VueRouter)
Vue.prototype.$axios = axios;
import {
  Dialog
} from "vant";

const routes = [{
  path: '*',
  redirect: '/',
}, {
  path: '/',
  name: 'index',
  component: () => import( /* webpackChunkName: "index" */ '../views/index.vue'),
  meta: {
    title: '首页'
  }
}, {
  path: '/learn',
  name: 'learn',
  component: () => import( /* webpackChunkName: "learn" */ '../views/learn.vue'),
  meta: {
    title: '学习'
  }
}, {
  path: '/person',
  name: 'person',
  component: () => import( /* webpackChunkName: "person" */ '../views/person.vue'),
  meta: {
    title: '我的'
  }
}]

const router = new VueRouter({
  routes
})

//截取code
function getCode() {
  var url = location.search;
  var code = "";
  if (url.indexOf("code") != -1) {
    var split = url.split("code=")
    code = split[1].split("&")[0]
  }
  return code;
}

// 获取sign
function getSign(next) {
  let theCode = getCode();
  if (theCode) {
    var formData = new FormData();
    formData.append("api_key", "xxxx");
    formData.append("origin", 1);
    if (process.env.VUE_APP_MODE == "test") {
      formData.append("type", 2);
    } else {
      formData.append("type", 1);
    }
    formData.append("code", theCode);
    axios({
      method: "post",
      url: "http://api",
      data: formData
    }).then(res => {
      let realUrl = window.location.href.split("?")[0];
      if (res.data.status == 1) {
        localStorage.setItem("wx_sign", res.data.data.sign);
        window.location.href = realUrl;
        next()
      } else {
        Dialog.alert({
          title: '提示',
          message: res.data.msg + "code=" + theCode,
        }).then(() => {
          localStorage.setItem("wx_sign", "123");
          window.location.href = realUrl + '#/login';
          next()
        })
      }
    });
  } else if (!localStorage.getItem("wx_sign")) {
    wechatAuth.redirectUri = window.location.href
    window.location.href = wechatAuth.authUrl
  } else {
    next()
  }
}

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  window.scroll(0, 0);
  if (process.env.NODE_ENV == "production") {
    getSign(next)
  } else {
    next();
  }
});

export default router