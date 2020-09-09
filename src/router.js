import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Project from '@/components/Project'

Vue.use(Router)

let mode = 'history'

let routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/project/:permalink', name: 'Project', component: Project }
]

export default new Router({
  mode,
  routes
})
