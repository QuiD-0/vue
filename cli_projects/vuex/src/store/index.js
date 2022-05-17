import Vuex from 'vuex'
import Vue from 'vue'
import axios from './axios-common.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'tommy',
    todos: [],
    searchedContent: [],
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
    ALLTODO: (state, payload) => {
      state.todos = payload.todos
    },
    ONETODO: (state, payload) => {
      state.todos = payload.todos
    },
    DELETEALLTODO: (state) => {
      state.todos = []
    },
    SEARCH: (state, payload) => {
      state.searchedContent = payload.todos
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
    deleteAllTodo: (store) => {
      axios.delete('/todo').then(() => {
        store.commit('DELETEALLTODO')
      })
    },
    search: (store, word) => {
      axios.get('/todo/search/' + word).then((res) => {
        console.log(res.data)
        store.commit('SEARCH', {
          todos: res.data,
        })
      })
    },
  },
})
