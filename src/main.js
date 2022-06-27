import Vue from 'vue';
import App from './App.vue';
import { Button, Aside, Main, Header, Container, Menu, MenuItem, MenuItemGroup, Submenu, Dropdown, DropdownMenu, DropdownItem, Row, Col, Card, Table, TableColumn, Breadcrumb, BreadcrumbItem,Tag,Form,FormItem,Input,Select,Switch,DatePicker,Option } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './components/router/router.js'
import './assets/less/index.less'
import store from './store/index.js'
// 导入axios的数据请求方式
import axios from 'axios'
// 引入element ui的样式文件

import './api/mock/mock.js'


Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Container)
Vue.use(Header)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(router)
// 全局配置axios的内容结构
axios.defaults.baseURL = "https://www/esbook.cn"

const app = new Vue({
  //使用router
  router,
  store,
  render: h => h(App),
})
app.$mount('#app')
app.config.globalProperties.$http = axios 