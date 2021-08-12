import Vue from 'vue'
import App from './App.vue'
import axios from 'axios' // npm i axios
import VueRouter from 'vue-router'
import router from './router'
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(axios)
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
