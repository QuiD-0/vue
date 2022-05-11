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
            <input type="button" class="btn btn-primary" value="고객 목록" @click="list" />
            <input type="button" class="btn btn-primary" value="수정" @click="update" />
            <input type="button" class="btn btn-primary" value="삭제" @click="del" />
        </div>
    </form>
</div>`,
    data() {
        return {
            num: '',
            name: '',
            address: '',
        }
    },
    methods: {
        list() {
            this.$router.push("/list");
        },
        update() {
            axios.put("http://localhost:8000/customers", {
                num: this.num,
                name: this.name,
                address: this.address,
            }).then((res) => {
                this.list();
            })
        },
        del() {
            axios.delete("http://localhost:8000/customers/" + this.num).then(() => {
                this.list();
            })
        },
    },
    created() {
        axios.get("http://localhost:8000/customers/" + this.$route.params.num).then((res) => {
                        this.num = res.data.num;
                        this.name = res.data.name;
                        this.address = res.data.address;
                    })

    }


};