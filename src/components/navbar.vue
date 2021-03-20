<template>
  <div>
    <div>{{ title }}</div>
    <tab></tab>
  </div>
</template>

<script>
import tab from "../components/tab";
export default {
  components: {
    tab,
  },
  inject: ["title"],
};
</script>