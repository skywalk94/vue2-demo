<template>
  <div class="box">
    <van-button type="primary" @click="goDetail()">跳转</van-button>
  </div>
</template>

<script>
import { getCarouselList } from "../axios/request";
export default {
  data() {
    return {};
  },

  mounted() {
    this.getApi();
  },

  methods: {
    async getApi() {
      const res = await getCarouselList({ page: 1, limit: 10 });
      if (res.status == 1) {
        this.bannerList = res.data;
      }
    },

    goDetail() {
      this.$router.push({
        path: "/detail",
      });
    },
  },
};
</script>
<style lang="less" scoped>
</style>
