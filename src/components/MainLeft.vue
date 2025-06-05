<template>
  <!-- main-left -->
  <div class="main-left scroll-container">
    <div style="width: 100%">
      <el-menu default-active="2" class="el-menu-vertical-demo">
        <el-submenu :index="item.id" v-for="item in File" :key="item.id" >
        <template slot="title">
          <img :src="item.icon" class="el-icon-menu" alt="" />
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
          icon: require("@/assets/icons/ys.svg"),
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
          name: "游戏",
          icon: require("@/assets/icons/yx.svg"),
          children: [
            { id: "2-1", name: "王者荣耀" },
            { id: "2-2", name: "英雄联盟" },
            { id: "2-3", name: "绝地求生" },
            { id: "2-4", name: "和平精英" },
            { id: "2-5", name: "穿越火线" },
            { id: "2-6", name: "刺激战场" },
            { id: "2-7", name: "其他游戏" },
            { id: "2-8", name: "游戏攻略" },
          ],
        },
        {
          id: "3",
          name: "技术分享",
          icon: require("@/assets/icons/jsfx.svg"),
          children: [
            { id: "3-1", name: "前端开发" },
            { id: "3-2", name: "后端开发" },
            { id: "3-3", name: "移动开发" },
            { id: "3-4", name: "人工智能" },
            { id: "3-5", name: "数据科学" },
            { id: "3-6", name: "云计算" },
            { id: "3-7", name: "区块链" },
            { id: "3-8", name: "其他技术" },
          ],
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