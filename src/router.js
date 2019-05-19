import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'

Vue.use(Router)

let mode = 'history'

let routes = [
  { path: '/', name: 'Home', component: Home }
]

export default new Router({
  mode,
  routes
})
