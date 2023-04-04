import { createStore } from 'vuex'
import api from '@/api.js'

export default createStore({
  state: {

  },
  getters: {

  },
  mutations: {

  },
  actions: {
    async getUsers(){
      const response = await api.getUsers()
      console.log(response)
    }

  },
})
