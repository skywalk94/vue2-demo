import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import {
  Dialog
} from "vant";

const routes = [{
    path: '*',
    redirect: '/',
  },
  {
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
  }, {
    path: '/detail',
    name: 'detail',
    component: () => import( /* webpackChunkName: "detail" */ '../views/detail.vue'),
    meta: {
      title: '详情'
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
});

export default router