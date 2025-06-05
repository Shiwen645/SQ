<template>
  <!-- main-center -->
  <div class="main-center scroll-container">
    <div style="width: 100%; height: 4000px">
      <router-view></router-view>
      <el-empty description="描述文字" style=""></el-empty>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainCenter",
};
</script>

<style>
.main-center {
  width: 65vw;
  height: 92vh;
  background-color: rgb(255, 255, 255);
  overflow: auto;
}
.skelet {
  margin: 40px 0px;
}
</style>