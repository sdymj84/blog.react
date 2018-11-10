import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBNFcQd4dgPzfk8LN1yml312dttwvaSerw",
  authDomain: "blog-dd30c.firebaseapp.com",
  databaseURL: "https://blog-dd30c.firebaseio.com",
  projectId: "blog-dd30c",
  storageBucket: "blog-dd30c.appspot.com",
  messagingSenderId: "911053670558"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase