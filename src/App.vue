<template>
  <div id="app">
    <!-- Header -->
    <MyHeader id="header" />
    <!-- Main -->
    <MyMain />
    <!-- Footer -->
    <!-- <MyFooter id="footer" /> -->
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyMain from "./components/MyMain.vue";
// import MyFooter from "./components/MyFooter.vue";
import "animate.css";

export default {
  name: "App",
  components: { MyHeader, MyMain },
  data() {
    return {};
  },
};
</script>

<style >
* {
  padding: 0px;
  margin: 0px;
  letter-spacing: 2px;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

#header {
  height: 8vh;
  padding: 5px 0px;
  background-color: rgb(56, 56, 56);
  box-sizing: border-box;
}
</style>
