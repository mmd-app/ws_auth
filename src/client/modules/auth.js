// import * as firebase from 'firebase/app'
// import 'firebase/auth'

import { composeAsync, loadScript, LOG } from './'


const config = {
  apiKey: 'AIzaSyAZObOxzbgGsH_cTS-NXYHJtdy8asX9rxQ',
  authDomain: 'maap-test-292714.firebaseapp.com',
  messagingSenderId: 'ui-11'
}

const authPopUp = () => {
  
  // const provider = new firebase.auth.GoogleAuthProvider()
  // provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
  // firebase.auth().languageCode = 'pt'
  //
  // firebase
  //   .auth()
  //   .signInWithPopup(provider)
  //   .then(function (result) {
  //     const token = result.credential.accessToken
  //     const user = result.user
  //
  //     LOG('authPopUp', { result })
  //
  //   }).catch(function (error) {
  //
  //   const errorCode = error.code
  //   const errorMessage = error.message
  //
  //   const email = error.email
  //   const credential = error.credential
  //
  //   LOG('authPopUp', { error })
  //
  // })
  
}

const authEmailPassword = ({ email, password }) => {
  // firebase
  //   .auth()
  //   .signInWithEmailAndPassword(email, password)
  //   // .createUserWithEmailAndPassword(email, password)
  //   .then(() => {
  //     // const user = firebase.auth().currentUser
  //
  //     const user = firebase.auth().currentUser
  //     LOG('signInWithEmailAndPassword', user)
  //   })
  //   .catch(function (error) {
  //
  //     const errorCode = error.code
  //     const errorMessage = error.message
  //
  //     LOG({ errorCode, errorMessage })
  //   })
}

const src_app = '//www.gstatic.com/firebasejs/8.0.2/firebase-app.js'
const src_auth = '//www.gstatic.com/firebasejs/8.0.2/firebase-auth.js'


const ldr = src => () => loadScript(src)()

const authInit = async () => {
  
  await loadScript(src_app)
  await loadScript(src_auth)
  
  const app = window.firebase.initializeApp(config)
  LOG(app)
  
  // loadScript(src_app).then(() => {
  //
  //
  //  //
  // })

  
  // window.firebase.app(config)
  
// .then(res => {
//
//   LOG({ res })
//
//   app = firebase.initializeApp(config)
//
//   // const user = firebase.auth().currentUser
//   // LOG('currentUser', { user })
//
// })
// .catch(e => ERR('LOAD', e))
  

}

export { authInit, authEmailPassword }



