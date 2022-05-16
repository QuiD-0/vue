<template>
  <div>
    <img src="../assets/logo.png" alt="" />
    <h1>Todo List</h1>
    {{ this.$store.state.name }}
    {{ this.$store.state.todos }}
    <!-- <div>
      <router-link to="/input">할일 주가</router-link>
      <router-link to="/list">목록</router-link>
      <router-view></router-view>
    </div> -->
  </div>
</template>
<style scoped>
h1 {
  color: darkcyan;
  font-weight: 900;
}
</style>

<script>
/* eslint-disable */
export default {
  name: 'TodoHeader',
}
</script>
