import Main from "./Components/Main.js";
import Sub from "./Components/Sub.js";

const router = new VueRouter({
    routes:[
        {path:"/main", component:Main},
        {path:"/sub", component:Sub},
    ]
});

new Vue({
    el:"#app",
    router,
});