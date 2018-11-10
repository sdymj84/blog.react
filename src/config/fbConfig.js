import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDMFWm_ya-Kf7XsGIwIbthVLibzqEOIKls",
  authDomain: "marioplan-6dd66.firebaseapp.com",
  databaseURL: "https://marioplan-6dd66.firebaseio.com",
  projectId: "marioplan-6dd66",
  storageBucket: "marioplan-6dd66.appspot.com",
  messagingSenderId: "1083091140770"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase