<template>
  <!-- main-left -->
  <div class="main-left scroll-container">
    <div style="width: 100%">
      <el-menu default-active="2" class="el-menu-vertical-demo">
        <el-submenu :index="item.id" v-for="item in File" :key="item.id" >
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.name}}</span>
        </template>
          <el-menu-item :index="child.id" v-for="child in item.children" :key="child.id">{{child.name}}</el-menu-item>
      </el-submenu>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainLeft",
  data() {
    return {
      File: [
        {
          id: "1",
          name: "影视",
          children: [
            // 子菜单项
            { id: "1-1", name: "电视剧" },
            { id: "1-2", name: "电影" },
            { id: "1-3", name: "综艺" },
            { id: "1-4", name: "动漫" },
            { id: "1-5", name: "纪录片" },
            { id: "1-6", name: "短视频" },
            { id: "1-7", name: "直播" },
            { id: "1-8", name: "其他" },
          ],
        },
        {
          id: "2",
          name: "音乐",
          children: [{}],
        },
        {
          id: "3",
          name: "书籍",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style>
.main-left {
  width: 15vw;
  height: 92vh;
  background-color: rgb(255, 255, 255);
  overflow: auto;
}
.demo {
  margin: 0 auto;
}
</style>