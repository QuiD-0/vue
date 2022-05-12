<template>
    <div>
        <h1>My World.vue : {{code}}</h1>
    </div>
</template>

<script>
    export default {
        name:"MyWorld",
        props:['code'],
    }
</script>

<style scoped>
    h1{
        color:cadetblue;
    }
</style>