<template>
  <div>
    <h1>Todo Detail</h1>
    {{ todos.num }} {{ todos.id }} {{ todos.content }} {{ todos.done }}
    <button @click="del(todos.num)">삭제</button>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'
/* eslint-disable */
import axios from '../store/axios-common'
export default {
  methods: {
    // ...mapActions(['oneTodo']),
    selectOne(num) {
      this.$store.dispatch('oneTodo', num)
    },
    del(num) {
      axios.delete('/todo/' + num).then((res) => {
        this.$router.push('/list')
      })
    },
  },
  computed: {
    // ...mapGetters(['todos', 'name']),
    todos() {
      return this.$store.state.todos
    },
  },
  created() {
    this.selectOne(this.$route.params.num)
  },
}
</script>

<style></style>
