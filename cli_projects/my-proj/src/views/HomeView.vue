<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <MyWorld></MyWorld>
    <MyWorld></MyWorld>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import MyWorld from '@/components/MyWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    MyWorld,
  }
}
</script>
