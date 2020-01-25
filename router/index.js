import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ToDo from '@/components/ToDo'
import login from '@/components/login'
import admin from '@/components/admin'
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
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    }
  ]
})