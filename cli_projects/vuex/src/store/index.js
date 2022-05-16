import Vuex from 'vuex'
import Vue from 'vue'
import axios from './axios-common.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'tommy',
    todos: [],
  },
  getters: {
    name(state) {
      return state.name
    },
    todos(state) {
      return state.todos
    },
  },
  mutations: {
    ALLTODO: (store, payload) => {
      store.todos = payload.todos
    },
    ONETODO: (store, payload) => {
      store.todos = payload.todos
    },
  },
  actions: {
    allTodo: (store) => {
      axios.get('/todo').then((res) => {
        store.commit('ALLTODO', {
          todos: res.data,
        })
      })
    },
    oneTodo: (store, num) => {
      axios.get('/todo/' + num).then((res) => {
        store.commit('ONETODO', {
          todos: res.data,
        })
      })
    },
  },
})
