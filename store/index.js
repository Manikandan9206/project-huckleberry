import Vuex from 'vuex'

import firebase from 'firebase'
import { auth, db } from '../plugins/firebase'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      user: null,
      liveMessages: [],
    }),
    mutations: {
      setUser(state, payload) {
        state.user = payload
      },
      pushMessages(state, payload) {
        state.liveMessages = payload
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
      sendLiveMessage({ state }, message) {
        console.log(message)
        db.collection('live-messages')
          .add({
            userName: state.user.userName,
            userMessage: message,
          })
          .then((result) => {
            console.log('Message Sent | ', result)
          })
          .catch((error) => {
            console.log(error)
          })
      },
      fetchLiveMessages({ commit }) {
        db.collection('live-messages').onSnapshot((querySnapshot) => {
          console.log('fetchLiveMessages | ', querySnapshot)
          const messages = []
          querySnapshot.forEach((doc) => {
            messages.push(doc.data())
          })
          commit('pushMessages', messages)
        })
      },
      stopFetchLiveMessages() {
        console.log('destroyed')
      },
    },
  })
}

export default createStore
