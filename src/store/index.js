import { createStore } from 'vuex'
import api from '@/api.js'

export default createStore({
  state: {
    listUsers: [],
    listUsersById:{},
    listToDoByUserId: {}, 
    user: null,
    todos:[]
  },
  getters: {

  },
  mutations: {
    setListUsers(state, payload = []){
      state.listUsers = payload
      payload.forEach(user => {
        state.listUsersById[user.id] = user 
      });
      
    },
    setUser(state, payload){
      state.user = payload
    },
    setToDos(state, payload){
      state.todos = payload
      payload.forEach(todo => {
        if (!state.listToDoByUserId[todo.userId]) state.listToDoByUserId[todo.userId] = []
        state.listToDoByUserId[todo.userId].push(todo)
        
      });
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
