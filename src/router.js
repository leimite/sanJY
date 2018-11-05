import Vue from 'vue'
import Router from 'vue-router'
import EcologicalEquilibrium from './components/bigScreen/EcologicalEquilibrium.vue'
import showBox from './views/show.vue'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: '/show/ee' },
    {
      path: '/show',
      name: 'show',
      component: showBox,
      children: [
        {
          path: 'ee',
          name: 'ee',
          component: EcologicalEquilibrium
        }, {
          path: 'ro',
          name: 'ro',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './components/bigScreen/ResourceOverview.vue')
        }
      ]
    }
    
  ]
})
