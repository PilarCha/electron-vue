import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'breeds',
      component: require('@/components/Breeds').default
    },
    {
      path: '/about',
      name: 'about',
      component: require('@/components/About')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
