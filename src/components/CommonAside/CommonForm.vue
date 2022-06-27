<template >
  <el-form ref="form" label-width="100px" :model="form" :inline="inline">
    <el-form-item v-for="item in formLabel" :key="item.label" :label="item.label">
      <el-input 
      v-if="item.type==='input'" :placeholder="'請輸入'+item.label" v-model="form[item.model]"></el-input>
      <el-switch v-if="item.type==='switch'" v-model="form[item.model]" >

      </el-switch>
      <el-date-picker  v-if="item.type==='date'" v-model="form[item.model]" value-format="yyy-MM-dd" placeholder="選擇日期"></el-date-picker>
      <el-select  v-if="item.type==='select'" v-model="form[item.model]"  placeholder="請選擇">
        <el-option v-for="item in item.opts" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </el-form-item>
    <!-- 自定義一個插槽的組件 -->
    <el-form-item><slot></slot></el-form-item>
  </el-form>
</template>
<script>
export default {
  name:'MyCommonForm',
  props:{
    formLabel : Array,
    form:Object,
    inline:Boolean

  },
  data(){
    return {

    }
  }
  
}
</script>
<style lang="">
  
</style>