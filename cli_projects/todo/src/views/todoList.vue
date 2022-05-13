<template>
  <div>
    <table>
      <tr v-for="(todo, index) in todos" :key="index" @click="showTodo(todo.num)">
        <td>{{ todo.num }}</td>
        <td>{{ todo.content }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  created() {
    this.selectAll();
  },
  methods: {
    selectAll() {
      axios.get("http://localhost:8000/todo").then((res) => {
        this.todo = res.data;
      });
    },
    showTodo(num){
      this.$router.push("/detail/"+num);
    }
  },
  data() {
    return {
      todos: []
    };
  }
};
</script>

<style></style>
