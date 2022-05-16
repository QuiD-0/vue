<template>
  <div>
    <h1>Todo Detail</h1>
    {{ todos.num }} {{ todos.id }} {{ todos.content }}
  </div>
</template>

<script>
/* eslint-disable */
export default {
  methods: {
    selectOne(num) {
      this.$store.dispatch('oneTodo', num)
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
