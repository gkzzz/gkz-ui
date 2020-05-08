import Vue from 'vue'
import App from './App.vue'
// 导入组件库
import GkzUI from '../packages'
Vue.use(GkzUI)
Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#app')
