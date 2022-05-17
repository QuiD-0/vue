<template>
  <div>
    <input type="text" v-model="word" />
    <button @click="search(word)">검색</button>
    <br />
    <br />
    <br />
    <table>
      <tr v-for="(todo, index) in searchedContent" :key="index">
        <td>{{ todo.num }}</td>
        <td>{{ todo.id }}</td>
        <td>{{ todo.content }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      word: '',
    }
  },
  methods: {
    search(word) {
      this.$store.dispatch('search', word)
    },
  },
  computed: {
    ...mapState(['searchedContent']),
    // searchedContent() {
    //   return this.$store.state.searchedContent //방법1
    //   //   return this.$store.getters.searchedContent //방법2
    // },
  },
}
</script>

<style></style>
