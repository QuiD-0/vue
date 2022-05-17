<template>
  <div>
    <table>
      <tr
        v-for="(todo, index) in todos"
        :key="index"
        @click="findOne(todo.num)"
      >
        <td>{{ todo.num }}</td>
        <td>{{ todo.id }}</td>
        <td>{{ todo.content }}</td>
      </tr>
    </table>
    <todoFooterVue></todoFooterVue>
  </div>
</template>

<script>
/* eslint-disable */
import { mapGetters } from 'vuex'
import todoFooterVue from './todoFooter.vue'

export default {
  name: 'TodoList',
  components: {
    todoFooterVue,
  },
  created() {
    this.selectAll()
  },
  methods: {
    // ...mapGetters(['ALLTODO']),
    selectAll() {
      this.$store.dispatch('allTodo')
    },
    findOne(num) {
      this.$router.push('detail/' + num)
    },
  },
  computed: {
    ...mapGetters(['todos']),
    // todos() {
    //   // return this.$store.state.todos  //방법1
    //   return this.$store.getters.todos //방법2
    // },
  },
}
</script>

<style>
table {
  margin: 0px auto;
}
</style>
