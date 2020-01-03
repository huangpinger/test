// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./vuex"

import 'font-awesome/scss/font-awesome.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import focus from '../common/directive'

Vue.use(ElementUI)
Vue.use(focus)
//控制台中的头部提示是否关闭
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // components: { App },
  // template: '<App/>',
  // render: h=>h(Test)
  mounted:function () {

  },
  render: h => h(App)
})
