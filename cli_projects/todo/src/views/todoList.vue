<template>
  <div>
    <b-table
      striped
      hover
      :items="todos"
      :fields="fields"
      @row-clicked="onRowClicked"
    ></b-table>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'TodoList',
  created() {
    this.selectAll()
  },
  methods: {
    selectAll() {
      axios.get('http://localhost:8000/todo').then((res) => {
        this.todo = res.data
      })
    },
    showTodo(num) {
      this.$router.push('/detail/' + num)
    },
    onRowClicked(item) {
      console.log(item.num)
      this.$router.push('/detail/' + item.num)
    },
  },
  data() {
    return {
      todos: [],
    }
  },
}
</script>

<style></style>
