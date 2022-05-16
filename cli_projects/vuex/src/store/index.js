import Vuex, { Store } from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'tommy',
    todos: [],
  },
  getters: {},
  mutations: {},
  actions: {
    ALLTODO: () => {
      axios.get('http://localhost:8000/todo').then((res) => {
        console.log(res.data)
        Store.commit('ALLTODO', {
          todos: res.data,
        })
      })
    },
  },
})
