import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ToDo from '@/components/ToDo'
import login from '@/components/login'
Vue.use(Router)
export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      name:'login',
      component: login
    },
    {
      path: '/Hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/todos',
      name: 'todos',
      component: ToDo
    }
  ]
})