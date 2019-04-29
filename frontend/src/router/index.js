import Vue from 'vue'
import Router from 'vue-router'

const routerOptions = [
  {
    path: '/',
    component: 'Sculptures'
  },
  {
    path: '/about',
    component: 'About'
  },
  {
    path: '/boop',
    component: 'Boop'
  },
  {
    path: '*',
    component: 'NotFound'
  }
]

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/components/${route.component}.vue`)
  }
})

Vue.use(Router)

export default new Router({
  routes: routes,
  mode: 'history'
})