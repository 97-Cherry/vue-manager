<template >
  <el-menu default-active="1-4-1" class="el-menu-vertical-demo"  @open="handleOpen" @close="handleClose" :collapse="isCollapse" background-color="#666" text-color="#fff" active-text-color="#ffd04b">
    <h3>{{isCollapse ? '后台':'通用后台管理系统'}}</h3>
    <el-menu-item @click="checkName(item)"  v-for="item in noChildren" :key="item.path" :index="item.path">
      <i :class="'el-icon-'+item.icon"></i>
      <span slot="title">{{item.label}}</span>
    </el-menu-item>
    <el-submenu v-for="item in hasChildren"  :index="item.path" :key="item.path">
      <template slot="title">
        <i :class="'el-icon-'+item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </template>
      <el-menu-item-group v-for="(subitem, subindex) in item.children" :key="subitem.path" >
        <el-menu-item @click="checkName(subitem)" :index="subindex">{{subitem.label}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

  </el-menu>
</template>
<style lang='less' scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu{
  
  height: 100%;
  
  border: 0;
  
  h3{
    color: #fff;
    text-align: center;
    line-height: 48px;
  }
}
</style>

<script>
export default {
  name:'MyCommonAside',
  data() {
    return {
      // isCollapse: true,
      menu: [
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home',
          url: 'Home/Home'
        },
        {
          path: '/mall',
          name: 'mall',
          label: '商品管理',
          icon: 'video-play',
          url: 'MallManage/MallManage'
        },
        {
          path: '/user',
          name: 'user',
          label: '用户管理',
          icon: 'user',
          url: 'UserManage/UserManage'
        },
        {
          label: '其他',
          icon: 'location',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '页面1',
              icon: 'setting',
              url: 'Other/PageOne'
            },
            {
              path: '/page2',
              name: 'page2',
              label: '页面2',
              icon: 'setting',
              url: 'Other/PageTwo'
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    //实现页面间的跳转
    checkName(item){
      //使用编程式导航实现页面间的跳转
      this.$router.push({
        // 编程式导航实现页面间的跳转方式，动态跳转当前的页面结构
        name:item.name
      })
      this.$store.commit('selectMenu')
    }
  },
  //利用计算属性来动态渲染当前的数据元素内容
  computed: {
    noChildren() {
      return this.menu.filter(item=>!item.children)
    },
    hasChildren() {
      return this.menu.filter(item=>item.children)
    },
    isCollapse(){
      
     return this.$store.state.isCollapse
    }
  }
  

}
</script>