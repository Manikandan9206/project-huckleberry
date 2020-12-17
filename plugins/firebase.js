import firebase from 'firebase/app'
// import 'firebase/firestore'
// import 'firebase/storage'
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

// export const db = firebase.firestore()
// export const bucket = firebase.storage()
export const auth = firebase.auth()
export default firebase

/* 

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDk5vrD805Bx59uDe74KPxAza2lxm-w_cY",
    authDomain: "dsc-project-huckleberry.firebaseapp.com",
    projectId: "dsc-project-huckleberry",
    storageBucket: "dsc-project-huckleberry.appspot.com",
    messagingSenderId: "758352294659",
    appId: "1:758352294659:web:5b2b7a2f0d98ce951c2f36"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>

*/
