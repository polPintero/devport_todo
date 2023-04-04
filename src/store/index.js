import { createStore } from 'vuex'
import api from '@/api.js'

export default createStore({
  state: {
    listUsers: [],
    user: null
  },
  getters: {

  },
  mutations: {
    setListUsers(state, payload){
      state.listUsers = payload
    },
    setUser(state, payload){
      state.user = payload
    }
  },
  actions: {
    async getUsers({commit}){
      const response = await api.getUsers()
      commit('setListUsers', response)
      return response
    }

  },
})
