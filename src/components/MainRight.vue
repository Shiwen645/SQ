<template>
  <!-- main-right -->
  <div class="main-right scroll-container">
    <div style="width: 80%; margin: 0 auto">
      <el-card class="box-card" style="" shadow="hover">
        <div slot="header" class="clearfix">
          <span>卡片名称</span>
          <el-button style="float: right; padding: 3px 0" type="text"
            >操作按钮</el-button
          >
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{ "列表内容 " + o }}
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainRight",
};
</script>

<style>
.main-right {
  width: 20vw;
  height: 92vh;
  background-color: rgb(255, 255, 255);
  overflow: auto;
}
</style>