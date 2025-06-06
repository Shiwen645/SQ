<template>
  <div class="Home">
    <div
      style="
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
      "
    >
      <h1 style="font-size: 20px; font-weight: 400">讨论热点</h1>
      <a href="" style="color: skyblue; text-decoration: none">更多</a>
    </div>
    <!-- 顶部 讨论热点-->
    <div class="item-title">
      <div class="item-title-item" v-for="item in arr" :key="index">
        <h2>Apache Answer</h2>
        <div id="item-content">
          提问、回答并与社区一起成长。每个人都是知识共享的一部分.
        </div>
        <div>
          <div>
            <img src="../assets/icons/点赞.svg" alt="" /><span>300</span>
          </div>
          <div>
            <img src="../assets/icons/评论.svg" alt="" /><span>300</span>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <!--  -->
  </div>
</template>

<script>
// 我的模块页面
export default {
  name: "Home",
  data() {
    return {
      arr: [1, 2, 3],
    };
  },
};
</script>

<style>
.Home {
  margin-top: 6%;
}
.item-title {
  width: 100%;
  height: 20vh;
  /* background-color: bisque; */
  display: flex;
  justify-content: space-around;
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 10px;
}
.item-title-item {
  width: 30%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid #ccc;
  cursor: pointer;
  overflow: hidden;
}
/* .item-title-item:hover {
  box-shadow: 3px 0px 20px 6px rgb(0, 0, 0, 0.1);
  transition: all 0.4s ease-in-out;
} */
#item-content {
  margin: 0;
  font-size: 14px;
  line-height: 23px;
  height: 50%;
  overflow: hidden;
}
.item-title-item > div {
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-top: 7%;
  /* margin-bottom: 10px; */
}
.item-title-item > div > div {
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.item-title-item > div > div img {
  width: 20px;
  height: 20px;
}
</style>