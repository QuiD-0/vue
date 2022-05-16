/* eslint-disable */
<template>
  <div>
    <h1>Todo Input</h1>

    <div class="form-group text-left">
      <label for="title">Todo:</label>
      <input
        type="text"
        class="form-control"
        name="content"
        v-model="content"
      />
    </div>

    <div class="form-group text-left">
      <label for="pw">id:</label>
      <input type="pass" class="form-control" name="id" v-model="id" />
    </div>
    <div class="form-group text-left">
      <label for="name">종료일</label>
      <input type="date" class="form-control" name="edate" v-model="edate" />
    </div>

    <button @click="insert()" class="btn btn-primary">Submit</button>
  </div>
</template>

<script>
/* eslint-disable */
import axios from '../store/axios-common'

export default {
  data() {
    return {
      id: '',
      content: '',
      edate: '',
    }
  },
  methods: {
    insert() {
      axios
        .post('/todo', {
          id: this.id,
          content: this.content,
          edate: this.edate,
        })
        .then((res) => {
          this.$router.push('/list')
        })
    },
  },
}
</script>

<style></style>
