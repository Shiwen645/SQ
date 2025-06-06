<template>
  <div class="mymodules">
    <div class="demo">
      <Map />
      <Wearch />
      <Sun/>
    </div>
      <Mac/>
      <Switchnb/>
    </div>
  </div>
</template>

<script>
// 我的模块页面
import Map from "@/components/map";
import Wearch from "@/components/Wearch";
import Sun from "@/components/Sun";
import Mac from "@/components/Mac";
import Switchnb from "@/components/Switchnb";
export default {
  name: "Mymodule",
  components: {
    Map,
    Wearch,
    Sun,
    Mac,
    Switchnb,
  },
};
</script>

<style scoped>
.mymodules {
  overflow: auto;
}
.demo {
  margin-top: 6%;
  display: flex;
  height: 240px;
  justify-content: space-around;
  /* flex-wrap: wrap; */
}
</style>