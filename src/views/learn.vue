<template>
  <div></div>
</template>

<script>
  import {
    mixin
  } from "../mixins";
  export default {
    mixins: [mixin],
    data() {
      return {};
    },
    mounted() {
      this.$loading.show("数据加载中")
      setTimeout(() => {
        this.$loading.hide()
      }, 2000)
      console.log(this.mixinData); //这是来自mixin的值
      this.mixinFunction(); //这是来自mixin的方法
    },
  };
</script>
<style lang="less" scoped>
</style>