<template>
  <!-- main-center -->
  <div class="main-center scroll-container">
    <div style="width: 100%">
      <el-tabs v-model="activeName" type="card" class="tabs">
        <el-tab-pane label="用户管理" name="first"></el-tab-pane>
        <el-tab-pane label="配置管理" name="second"></el-tab-pane>
        <el-tab-pane label="角色管理" name="third"></el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane>
      </el-tabs>
    </div>
    <div><router-view></router-view></div>
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
  height: 87.5vh;
  background-color: rgb(255, 255, 255);
  overflow: auto;
  padding: 20px 40px;
}
.skelet {
  margin: 40px 0px;
}
.tabs {
  float: right;
}
</style>