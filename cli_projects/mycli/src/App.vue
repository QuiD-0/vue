<template>
  <div id="app">
    <customerTop></customerTop>
    <customerUpper></customerUpper>
    <customerList :customers="result"></customerList>
  </div>
</template>

<script>
  import customerTop from './components/customerTop.vue'
  import customerList from './components/customerList.vue'
  import customerUpper from './components/customerUpper.vue'
  import axios from 'axios';


  export default {
    name: 'App',
    components: {
      customerTop,
      customerList,
      customerUpper
    },
    data() {
      return {
        result: [],
      }
    },
    methods: {
      getData() {
        axios.get('http://localhost:8000/customers').then((res) => {
          this.result = res.data;
        });
      }
    },
    created() {
      this.getData();
    },
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>