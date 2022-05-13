/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoList from '@/views/todoList'
import TodoDetail from '@/views/todoDetail'
import TodoInput from '@/views/todoInput'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: TodoList,
    },
    {
      path: '/list',
      component: TodoList,
    },
    {
      path: '/input',
      component: TodoInput,
    },
    {
      path: '/detail/:num',
      component: TodoDetail,
    },
  ],
})
