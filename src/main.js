import '@babel/polyfill'
import Vue from 'vue'
import './plugins/axios'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style'
import $ from 'jquery'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  $,
  render: h => h(App)
}).$mount('#app')
