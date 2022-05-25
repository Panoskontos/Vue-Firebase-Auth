import { createStore } from 'vuex'
import router from '../router'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

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

    // LOGIN
    async login ({commit}, details){
      const { email, password } = details

      try {
        await createUserWithEmailAndPassword(auth, email, password)
      } catch (error) {
        switch(error.code) {
          case 'auth/user-not-found':
            alert("User not found")
            break
          case 'auth/wrong-password':
            alert("Wrong password")
            break
          default:
            alert("Something went wrong")
        }

        return
      }

      commit('setUser', auth.currentUser)
      router.push('/')
    },

    // LOGOUT
    async logout ({commit}){
      await signOut(auth)
      commit('clearUser')
      router.push('/login')
    },

    // REGISTER
    async register ({commit}, details){
      const { email, password } = details

      try {
        await signInWithEmailAndPassword(auth, email, password)
      } catch (error) {
        switch(error.code) {
          case 'auth/email-already-in-use':
            alert("Email already in use")
            break
          case 'auth/invalid-email':
            alert("Invalid email")
            break
          case 'auth/operation-not-allowed':
            alert("Operation not allowed")
            break
          case 'auth/weak-password':
            alert("Weak password")
            break
          default:
            alert("Something went wrong")
        }

        return
      }

      commit('setUser', auth.currentUser)
      router.push('/')
    },
  },
  modules: {
  }
})
