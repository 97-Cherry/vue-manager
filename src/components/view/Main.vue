<template >
  <el-container style="height:100%">
    <el-aside width="auto">
      <!-- 使用当前的commonaside的样式 -->
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-header>
      <commmon-header></commmon-header>
      </el-header>
      <common-tag></common-tag>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import CommonAside from '../CommonAside/commonAside.vue'
import CommmonHeader from '../CommonAside/CommmonHeader.vue'
import CommonTag from '../CommonAside/CommonTag.vue'
export default {
  name: 'MyHome',
  components:{
    CommonAside,
    CommmonHeader,
    CommonTag
  }
}
</script>
<style lang="less" scoped>

.el-header {
  background-color: #333;
}
.el-main {
  padding-top: 0;
}
</style>
