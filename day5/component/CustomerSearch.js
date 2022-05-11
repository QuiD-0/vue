export default {
    template: `<div><div class="container">
    <form id="form1" class="form-horizontal">
        <h2>Customer Management</h2>
        <div class="form-group">
            <label>번호:</label> <input type="text" class="form-control" id="num" v-model="num">
        </div>

        <div class="btn-group">
            <input type="button" class="btn btn-primary" value="검색" @click="search" />
            <input type="button" class="btn btn-primary" value="초기화" @click="init" />
        </div>
    </form>
</div>
<hr />
<div class="container" v-show="active">
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
            <tr v-for="(customer, index) in customers" :key="index">
                <td>{{customer.num}}</td>
                <td>{{customer.name}}</td>
                <td>{{customer.address}}</td>
            </tr>
        </tbody>
    </table>
</div></div>`,
    data() {
        return {
            num: '',
            customers: [],
            active:false,
        }
    },
    methods: {
        search() {
            if (this.num == '') {
                alert("값을 입력해 주세요")
            } else {
                axios.get("http://localhost:8000/customers/" + this.num).then((res) => {
                    this.active=true;
                    if (res.data == '') {
                        this.customers = [{
                            num: "",
                            name: "검색 결과 없음",
                            address: "",
                        }]
                    } else {
                        this.customers = [res.data];
                    }
                })
            }
        },
        init() {
            this.num = "";
            this.active=false;
        },
    },
};