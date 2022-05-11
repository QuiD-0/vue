export default {
    template: `<div class="container">
    <form id="form1" class="form-horizontal">
        <h2>Customer Management</h2>
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
            <input type="button" class="btn btn-primary" value="등록" @click="add" />
            <input type="button" class="btn btn-primary" value="초기화" @click="init" />
        </div>
    </form>
</div>`,
    data() {
        return {
            num: "",
            name: "",
            address: "",
        }
    },
    methods: {
        add() {
            axios.post("http://localhost:8000/customers", {
                num: this.num,
                name: this.name,
                address: this.address,
            }).then(() => {
                this.$router.push("/list");
            })
        },
        init() {
            this.num = "";
            this.name = "";
            this.address = "";
        },
    },
};