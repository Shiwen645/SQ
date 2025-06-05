import Vue from 'vue'
import VueRouter from 'vue-router'
// Home区
import Home from "@/pages/Home.vue";
// 模块内容
import Mymodule from "@/pages/Mymodule.vue";
// 闲聊区
import Gossip from "@/pages/Gossip.vue";
// 分享中心
import ShareTheHub from "@/pages/ShareTheHub.vue";
// 公告
import Announcement from "@/pages/Announcement.vue";

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/Mymodule', component: Mymodule },
  { path: '/Gossip', component: Gossip },
  { path: '/ShareTheHub', component: ShareTheHub },
  { path: '/Announcement', component: Announcement }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
