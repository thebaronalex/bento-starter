import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const firebaseConfig = {
  apiKey: 'AIzaSyCDCQGkUS2Uvny--7crxsIR3GqVVDswLK4',
  authDomain: 'bento-start.firebaseapp.com',
  databaseURL: 'https://bento-start.firebaseio.com',
  projectId: 'bento-start',
  storageBucket: 'bento-start.appspot.com',
  messagingSenderId: '252632211637',
  appId: '1:252632211637:web:7e1212f3686f722ef55efc',
  measurementId: 'G-LQTXV98NNQ'
}

firebase.initializeApp(firebaseConfig)
