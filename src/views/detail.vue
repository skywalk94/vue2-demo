<template>
  <div>
    <navbar></navbar>
    <button @click="changeTitle()">改变title值</button>
  </div>
</template>

<script>
import navbar from "../components/navbar";
export default {
  components: {
    navbar,
  },
  data() {
    return {
      title: "详情标题",
    };
  },
  provide() {
    return {
      title: this.title,
    };
  },
  methods: {
    changeTitle() {
      // 无法实现响应式
      this.title = "xxxx";
    },
  },
};
</script>
