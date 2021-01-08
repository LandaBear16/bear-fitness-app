import React, { createContext } from 'react'

import { firebase } from '../firebase/config'

const FirebaseContext = createContext()

const db = firebase.firestore()

const Firebase = {
  login: async (email, password) => {
    console.log('login', email)
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },

  getCurrentUser: () => {
    return firebase.auth().currentUser;
  },
}

const FirebaseProvider = (props) => {
  return <FirebaseContext.Provider value={Firebase}>{props.children}</FirebaseContext.Provider>
}


export { FirebaseContext, FirebaseProvider }