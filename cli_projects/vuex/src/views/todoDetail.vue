<template>
  <div>
    <h1>Todo Detail</h1>
    {{ todos.num }} {{ todos.id }} {{ todos.content }}
    <button @click="del(todos.num)">삭제</button>
  </div>
</template>

<script>
/* eslint-disable */
import axios from '../store/axios-common'
export default {
  methods: {
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
