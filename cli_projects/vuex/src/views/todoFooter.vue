<template>
  <div>
    <button @click="deleteAll">모두 삭제</button>
  </div>
</template>

<script>
// import { mapState } from 'vuex'

export default {
  methods: {
    // ...mapGetters(['ALLTODO']),
    deleteAll() {
      this.$store.dispatch('deleteAllTodo')
    },
  },
}
</script>

<style></style>
