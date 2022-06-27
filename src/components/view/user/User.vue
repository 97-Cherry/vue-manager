<template>
  <div class="manage">
    <el-dialog 
    :title="operateType ==='add' ? '新鄭用戶':'更新用戶'" 
    :visible.sync="isShow">
    <my-common-form
    :formLabel="operateFormLabel"
    :form="operateForm"
    :inline="true"
    ref="form"
    ></my-common-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="isShow=false">取消</el-button>
      <el-button  type="primary" @click="confirm">確定</el-button>
    </div>
    </el-dialog>
    <div class="manager header">
      <el-button type="primary" @click="addUser">新增</el-button>
     <my-common-form
    :formLabel="formLabel"
    :form="searchForm"
    :inline="true"
    ref="form"
    ></my-common-form>
    </div>
  </div>
</template>
<script>
import MyCommonForm from '../../CommonAside/CommonForm.vue'
export default {
  name: 'MyUser',
  components: {
    MyCommonForm
  },
  data() {
    return {
      operateType: 'add',
      isShow: false,
      operateFormLabel:[
                    {
                        model: 'name',
                        label: '姓名',
                        type: 'input'
                    },
                    {
                        model: 'age',
                        label: '年龄',
                        type: 'input'
                    },
                    {
                        model: 'sex',
                        label: '性别',
                        type: 'select',
                        opts: [
                            {
                                label: '男',
                                value: 1
                            },
                            {
                                label: '女',
                                value: 0
                            }
                        ]
                    },
                    {
                        model: 'birth',
                        label: '出生日期',
                        type: 'date'
                    },
                    {
                        model: 'addr',
                        label: '地址',
                        type: 'input'
                    }
                ],
      operateForm:{
        name:'',
        addr:'',
        age:'',
        birth:'',
        sex:''


      },
      formLabel:[
        {model:'keyword',
        label:'',
        type:'input'
        
        }
      ],
      searchForm:{
        keyword:''
      }

    }
  }
}
</script>
<style lang="less" scoped>
</style>