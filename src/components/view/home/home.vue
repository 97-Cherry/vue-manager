<template >
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top:20px">
      <el-card class="hover">
        <div class="user">
          <img style="width:40px" src="../../../assets/logo.png" alt="">
          <div class="userinfo">
            <p class="name">Admin</p>
            <p class="acess">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间：<span>2017-7-19</span></p>
          <p>上次登录地点：<span>武汉</span></p>
        </div>
      </el-card>
      <el-card style="margin-top:20px ; height:460px">
        <el-table :data="tableData" style="width: 100%">
          <!-- :prop="key"可以获取得到当前数据的参数 -->
          <el-table-column v-for="(val,key) in tableLabel" :key="key" :prop="key" :label="val">
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16" style="margin-top:20px">
      <div class="num">
        <el-card v-for="item in countData" :key="item.name" :body-style="{display:'flex',padding:0}">
          <i class="icon" :class="`el-icon-${item.icon}`" :style="{background:item.color}"> </i>
          <div class="detail">
            <p class="num">￥{{item.value}}</p>
            <p class="txt">{{item.name}}</p>
          </div>
        </el-card>
      </div>
       <el-card  style="height:280px">
        <!-- 引入折线图 -->
        <div style="height:280px" ref="echarts"></div>
       </el-card>
        <div class="graph">
          <el-card style="height:265px"></el-card>
          <el-card style="height:265px"></el-card>
        </div>
    </el-col>
  </el-row>
</template>
<script>

//import *as echarts from 'echarts'
export default {
  name: 'MyHome',
  data() {
    return {
      tableData: [
        {
          name: 'oppo',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: 'vivo',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: '苹果',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: '小米',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: '三星',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: '魅族',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        }
      ],
      tableLabel: {
        name: '名称',
        todayBuy: '今日购买',
        monthBuy: '本月购买',
        totalBuy: '总计购买'
      },
      countData: [
        {
          name: '今日支付订单',
          value: 1234,
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '今日收藏订单',
          value: 210,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '今日未支付订单',
          value: 1234,
          icon: 's-goods',
          color: '#5ab1ef'
        },
        {
          name: '本月支付订单',
          value: 1234,
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '本月收藏订单',
          value: 210,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '本月未支付订单',
          value: 1234,
          icon: 's-goods',
          color: '#5ab1ef'
        }
      ],
     
    }
  },



}
</script>
<style lang="less" scoped>
</style>