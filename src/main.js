import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
// Bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Font Awesome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import store from './store'

import router from './router'



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
