import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter' //import the counter module

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    // exported to counter module
  },
  getters: {
    // exported to counter module 
  },
  mutations: {
    // exported to counter module  
  },
  actions: {
    // exported to counter module  
  },
  modules: { // register the modules
    counter
  }
})