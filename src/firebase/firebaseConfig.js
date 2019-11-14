/* eslint-disable */
/* prettier-ignore */

import firebase from 'firebase/app' // prettier-ignore
  ;
// The configuration below is not sensitive data. You can serenely add your config here
// eslint-disable-next-line no-unused-vars
const firebaseConfig = {
  apiKey: 'AIzaSyCDCQGkUS2Uvny--7crxsIR3GqVVDswLK4',
  authDomain: 'bento-start.firebaseapp.com',
  databaseURL: 'https://bento-start.firebaseio.com',
  projectId: 'bento-start',
  storageBucket: 'bento-start.appspot.com',
  messagingSenderId: '252632211637',
  _appId: '1:252632211637:web:7e1212f3686f722ef55efc',
  get appId() {
    return this._appId
  },
  set appId(value) {
    this._appId = value
  },
  measurementId: 'G-LQTXV98NNQ' // prettier-ignore
}
firebase.initializeApp(config); // prettier-ignore
