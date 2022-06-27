import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
// vuex
const store = new vuex.Store({
  state: {
    isCollapse: false,
    tabList: [
      {
        path: '/',
        name: 'home',
        label: '首页',
        icon: 'home'
      }
    ],
    currentMenu: null
  },
  mutations: {
    traggerCollapse(state) {
      return state.isCollapse = !state.isCollapse
    },
    selectMenu(state, val) {
      if (val.name !== 'home') {
        state.currentMenu = val
        const result = state.tabList.findIndex(item => item.name === val.name)

        if (result === -1) {
          state.tabList.push(val)
        }
      } else {
        state.currentMenu = null
      }
    },
    closeTag(state, val) {
      const result=state.tabList.findIndex(item => item.name == val.name)
        state.tabList.splice(result,1)//進行刪除
    }

  }

})
export default store
