<template >
  <div class="tabs">
    <!-- tag标签的公共样式 -->
    <el-tag size="small" 
    v-for="(tag,index) in tags" 
    :key="tag.name" 
    :closable="tag.name !=='home'" 
    :effect=" $route.name===tag.name ? 'dark':'plain'"
     @click="changeMenu(tag)" 
     @close="handleClose(tag, index)">{{tag.label}}</el-tag>
  </div>
</template>
<script>
import { mapState,mapMutations } from 'vuex'
export default {
  name: 'MyCommonTag',
  data() {
    return {}
  },
  computed: {
    ...mapState({
      tags: state => state.tabList
    })
  },
  methods: {
     ...mapMutations({
      close:'closeTag'
    }),
    changeMenu(item){
      this.$router.push({name:item.name})

    },
    handleClose(item,index){
      const length=this.tags.length - 1
      this.close(item)
      if(item.name !== this.$route.name){
        return;
      }
      if(index===length){
        this.$router.push({
          name:this.tags[index-1].name
        })
        
      }else{
        this.$router.push({
          name:this.tags[index].name
        })
      }

    },
   
  },
}
</script>
<style lang="">
</style>