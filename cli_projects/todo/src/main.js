/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import TodoHeader from './components/todoHeader.vue'
Vue.config.productionTip = false
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
new Vue({
  router,
  component: { TodoHeader },
  render: (h) => h(App),
}).$mount('#app')
