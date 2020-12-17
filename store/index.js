import Vuex from 'vuex'

import firebase from 'firebase'
import { auth } from '../plugins/firebase'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      user: null,
    }),
    mutations: {
      setUser(state, payload) {
        state.user = payload
      },
    },
    actions: {
      signIn({ commit }) {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth
          .signInWithPopup(provider)
          .then((result) => {
            console.log('signIn | ', result)
            commit('setUser', {
              userId: result.user.uid,
              userName: result.user.displayName,
              userEmail: result.user.email,
            })
          })
          .catch((error) => {
            console.log('SignIn Error')
          })
      },
    },
  })
}

export default createStore
