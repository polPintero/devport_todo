import { createStore } from 'vuex'
import api from '@/api.js'

export default createStore({
  state: {
    listUsers: [],
    user: null,
    todos:[]
  },
  getters: {

  },
  mutations: {
    setListUsers(state, payload){
      state.listUsers = payload
    },
    setUser(state, payload){
      state.user = payload
    },
    setToDos(state, payload){
      state.todos = payload
    }
  },
  actions: {
    async getUsers({commit}){
      const response = await api.getUsers()
      commit('setListUsers', response)
      return response
    },
    async getToDos({commit}){
      const response = await api.getToDos()
      commit('setToDos', response)
      return response
    }

  },
})
