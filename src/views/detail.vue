<template>
  <div>
    <navbar></navbar>
  </div>
</template>

<script>
import navbar from "../components/navbar";
export default {
  components: {
    navbar,
  },
  provide: {
    title: "详情标题",
  },
};
</script>
