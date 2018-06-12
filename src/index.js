import Vue from 'vue'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'

import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import './assets/styles/mixins.css'
import 'swiper/dist/css/swiper.css'

fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#root')