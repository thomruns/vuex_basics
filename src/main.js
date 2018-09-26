import Vue from 'vue'
import App from './App.vue'

import { store } from './store/store'


new Vue({
  el: '#app',
  store, //ES6, same as store: store
  render: h => h(App)
})
