import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Project from '@/components/Project'
import About from '@/components/About'

Vue.use(Router)

let mode = 'history'

let routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/project/:permalink', name: 'Project', component: Project }
]

export default new Router({
  mode,
  routes
})
