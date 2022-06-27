import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../view/Main.vue'
import User from '../view/user/User.vue'
import Home from '../view/home/home.vue'
import Mall from '../view/mall/mall.vue'
import PageOne from '../view/other/pageOne.vue'
import PageTwo from '../view/other/pageTwo.vue'

Vue.use(VueRouter)
// 进行编程式导航路由模块的路径定义
const routes = [

  {
    path: '/', name: 'main', redirect:'/home', component: Main, children: [
      { path: '/home', name: 'home', component: Home },
      { path: '/user', name: 'user', component: User },
      { path: '/mall', name: 'mall', component: Mall },
      { path: '/page1', name: 'page1', component: PageOne },
      { path: '/page2', name: 'page2', component: PageTwo }
    ]
  },



]

const router = new VueRouter({
  mode: 'history',
  routes
})
export default router;