import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null
  },
  getters: {
  },
  mutations: {
    setUser (state, user){
      state.user = user
    },

    clearUser (state){
      state.user =null
    }
  },
  actions: {
    // async login ({commit}, details){

    // },
    // async logout ({commit}, details){

    // },
    // async register ({commit}, details){

    // },
  },
  modules: {
  }
})
