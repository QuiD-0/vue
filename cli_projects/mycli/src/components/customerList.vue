<template>
    <div class="container">
    <h2>사용자 목록</h2>
    <table class="table text-center">
        <thead>
            <tr>
                <th class="text-center">번호</th>
                <th class="text-center">이름</th>
                <th class="text-center">주소</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(customer, index) in customers" :key="index" @click="selectOne(customer.num)">
                <td>{{customer.num}}</td>
                <td>{{customer.name}}</td>
                <td>{{customer.address}}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
    export default {
        name:"customerList",
        props:['customers'],
        methods: {
            selectOne(val){
                val;
            }
        },
    }
</script>

<style>

</style>