<template>
    <div class="container">
        <form id="form1" class="form-horizontal">
            <div class="form-group">
                <label>번호:</label> <input type="text" class="form-control" id="num" v-model="num">
            </div>
            <div class="form-group">
                <label>이름:</label> <input type="text" class="form-control" id="name" v-model="name">
            </div>

            <div class="form-group">
                <label>주소:</label> <input type="text" class="form-control" id="address" v-model="address">
            </div>

            <div class="btn-group">
                <input type="button" class="btn btn-primary" value="추가" @click="add" />
                <input type="button" class="btn btn-primary" value="삭제" @click="del" />
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "customerUpper",
        data() {
            return {
                num: '',
                name: '',
                address: '',
            }
        },
        methods: {
            add(){},
            del(){},
        },
    }
</script>

<style>

</style>