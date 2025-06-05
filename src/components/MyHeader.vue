<template>
  <div class="header">
    <!-- 头像logo -->
    <el-avatar shape="square" :size="50" style="margin: 10px">
      <img src="@/assets/images/logo.png" alt="" />
    </el-avatar>
    <div class="header_left">
      <!--  -->
      <!-- 搜索 -->
      <div class="search">
        <input type="text" name="text" class="input" placeholder="搜索..." />
        <button class="search__btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="22"
            height="22"
          >
            <path
              d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
              fill="#efeff1"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <div class="header_right">
      <!-- switch开关 -->
      <CustomSwitch />
      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        style="margin: 0px 20px"
      ></el-avatar>
    </div>
  </div>
</template>

<script>
import "animate.css";
import CustomSwitch from "./CustomSwitch.vue";
export default {
  name: "MyHeader",
  components: { CustomSwitch },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
}

@media (min-width: 768px) {
  .header {
    flex-direction: row;
    padding: 0;
  }
}
.header_left {
  width: 40%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.header_right {
  display: flex;
  align-items: center;
}

@media (min-width: 768px) {
  .header_right {
    flex-direction: row;
    margin-right: 20px;
  }
}

/* 搜索 */
/* From Uiverse.io by benjimich */
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  margin-right: 10px;
}

.input {
  width: 300px;
  height: 40%;
  outline: none;
  font-size: 15px;
  font-weight: 500;
  background-color: #53535f;
  caret-color: #f7f7f8;
  color: #fff;
  padding: 7px 10px;
  border: 2px solid transparent;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  margin-right: 0px;
  transition: all 0.2s ease;
}

.input:hover {
  border: 2px solid rgba(255, 255, 255, 0.16);
}

.input:focus {
  border: 2px solid aquamarine;
  background-color: #0e0e10;
}

.search__btn {
  border: none;
  cursor: pointer;
  background-color: rgba(42, 42, 45, 1);
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  height: 100%;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search__btn:hover {
  background-color: rgba(54, 54, 56, 1);
}
</style>
