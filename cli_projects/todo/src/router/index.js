/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoList from '@/views/TodoList.vue'
import TodoDetail from '@/views/TodoDetail.vue'
import TodoInput from '@/views/TodoInput.vue'

Vue.use(VueRouter)

export default new VueRouter({
  name: router,
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
