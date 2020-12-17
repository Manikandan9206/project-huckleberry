import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDk5vrD805Bx59uDe74KPxAza2lxm-w_cY',
  authDomain: 'dsc-project-huckleberry.firebaseapp.com',
  projectId: 'dsc-project-huckleberry',
  storageBucket: 'dsc-project-huckleberry.appspot.com',
  messagingSenderId: '758352294659',
  appId: '1:758352294659:web:5b2b7a2f0d98ce951c2f36',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()

export const auth = firebase.auth()
export default firebase
