import Customerinsert from "./component/Customerinsert.js";
import CustomerList from "./component/CustomerList.js";
import CustomerMain from "./component/CustomerMain.js";
import Customersearch from "./component/CustomerSearch.js";
import CustomerDetail from "./component/CustomerDetail.js";

const router = new VueRouter({
    routes:[
        {path:"/", component:CustomerMain},
        {path:"/list", component:CustomerList},
        {path:"/add", component:Customerinsert},
        {path:"/search", component:Customersearch},
        {path:"/detail/:num", component:CustomerDetail},
    ]
});

new Vue({
    el:"#app",
    router,
});