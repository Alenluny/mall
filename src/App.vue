<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>
<script>
import MainTabBar from "@/components/MainTabBar";
import { request } from "@/network/request";

export default {
  name: "App",
  components: {
    MainTabBar,
  },
};

request({
  url: "/home/multidata",
})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
</script>

<style>
@import "./assets/css/base.css";
</style>
