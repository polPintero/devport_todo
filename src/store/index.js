import { createStore } from 'vuex'
import api from '@/api.js'

export default createStore({
  state: {
    listUsers: []
  },
  getters: {

  },
  mutations: {
    setListUsers(state, payload){
      state.listUsers = payload
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
