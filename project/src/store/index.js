import Vue from 'vue'
import Vuex from 'vuex'
import {get} from '../utils/request'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    getUser (state, data) {
      state.user = data
    }
  },
  actions: {
    getUser (context) {
      get('/api/user/login-test').then(data => {
        context.commit('getUser', data)
      })
    }
  }
})

export default store
