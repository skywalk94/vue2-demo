<template>
  <div id="app">
    <router-view />
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from "./components/tabbar.vue";
export default {
  components: {
    tabbar,
  },
  name: "App",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
</style>
