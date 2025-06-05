<template>
  <div class="main">
    <MainLeft />
    <MainCenter />
    <MainRight />
  </div>
</template>

<script>
import MainLeft from "./MainLeft.vue";
import MainCenter from "./MainCenter.vue";
import MainRight from "./MainRight.vue";
export default {
  name: "MyMain",
  components: {
    MainLeft,
    MainCenter,
    MainRight,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.main {
  color: white;
  display: flex;
  color: black;
}
/* 滚动条 */
/* 整个滚动条 */
::-webkit-scrollbar {
  width: 8px; /* 垂直滚动条宽度 */
  height: 10px; /* 水平滚动条高度 */
}

/* 滚动条轨道 */
::-webkit-scrollbar-track {
  background: #ffffff;
  border-radius: 6px;
}

/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  background: rgb(66, 66, 66);
  border-radius: 6px;
}

/* 鼠标悬停在滑块上时 */
::-webkit-scrollbar-thumb:hover {
  background: #999999;
}
/* 隐藏滚动条轨道 */
.scroll-container::-webkit-scrollbar {
  /* width: 6px; 设置较窄的滚动条 */
  /* height: 6px; 水平滚动条高度 */
}

.scroll-container::-webkit-scrollbar-track {
  background: transparent; /* 透明轨道 */
}

/* 初始状态隐藏滑块 */
.scroll-container::-webkit-scrollbar-thumb {
  background: transparent;
  border-radius: 3px;
}

/* 悬停时显示滑块 */
.scroll-container:hover::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.3);
}

/* 滚动时显示滑块 */
.scroll-container:active::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.5);
}
</style>
