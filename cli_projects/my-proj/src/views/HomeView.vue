<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <MyWorld code="props"></MyWorld>
    <MyWorld :code="msg"></MyWorld>
    <OtherWorld num="1"></OtherWorld>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import MyWorld from '@/components/MyWorld.vue'
import OtherWorld from '@/components/OtherWorld.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld,
    MyWorld,
    OtherWorld
  },
  data() {
    return {
      msg:'hello',
    }
  },
}
</script>
