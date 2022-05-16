<template>
  <div class="text-center">
    <h2>당신이 좋아하는 파트를 선택하세요</h2>
    <result-component :total="count" />
    <subject-component
      v-on:addtotcount="addTotalCount"
      title="코딩"
    ></subject-component>
    <subject-component
      v-on:addtotcount="addTotalCount"
      title="알고리즘"
    ></subject-component>
  </div>
</template>

<script>
import ResultComponent from "@/components/step00/ResultComponent.vue";
import SubjectComponent from "@/components/step00/SubjectComponent.vue";
export default {
  data() {
    return {
      count: 0,
    };
  },
  components: {
    ResultComponent,
    SubjectComponent,
  },
  methods: {
    addTotalCount() {
      this.count += 1;
    },
  },
};
</script>
<style scoped>
.text-center {
  text-align: center;
}
</style>
