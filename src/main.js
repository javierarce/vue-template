import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/scss/app.scss'

Vue.config.productionTip = false

window.bus = new Vue()

export default new Vue({
  render: h => h(App),
  router
}).$mount('#app')
