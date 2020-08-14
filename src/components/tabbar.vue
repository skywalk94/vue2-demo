<template>
  <div
    v-if="
      $route.name == 'index' ||
        $route.name == 'learn' ||
        $route.name == 'person'
        "
  >
    <van-tabbar v-model="active" inactive-color="#666666" active-color="#000000" placeholder>
      <van-tabbar-item replace v-for="(item, index) in tabbarList" :key="index" :to="item.name">
        <span>{{ item.title }}</span>
        <img slot="icon" slot-scope="props" :src="props.active ? item.active : item.normal" />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  data() {
    return {
      active: 0,
      tabbarList: [
        {
          name: "index",
          title: "首页",
          normal:
            "https://sucai.suoluomei.cn/sucai_zs/images/20190910093117-fx2.png",
          active:
            "https://sucai.suoluomei.cn/sucai_zs/images/20190910093117-fx.png",
        },
        {
          name: "learn",
          title: "学习",
          normal:
            "https://sucai.suoluomei.cn/sucai_zs/images/20190910093117-xx.png",
          active:
            "https://sucai.suoluomei.cn/sucai_zs/images/20190910093117-xx2.png",
        },
        {
          name: "person",
          title: "我的",
          normal:
            "https://sucai.suoluomei.cn/sucai_zs/images/20190910093117-wd.png",
          active:
            "https://sucai.suoluomei.cn/sucai_zs/images/20190910093117-wd2.png",
        },
      ],
    };
  },
  watch: {
    //监听路由变化
    $route(to) {
      this.tabbarActive(to.name);
    },
  },

  methods: {
    tabbarActive(name) {
      var index = this.tabbarList.map((item) => item.name).indexOf(name);
      if (index != -1) {
        this.active = index;
      }
    },
  },
};
</script>

<style lang="less" scoped></style>

