import React, { createContext } from 'react'

import { firebase } from '../firebase/config'

const FirebaseContext = createContext()

const db = firebase.firestore()

const Firebase = {
  login: async (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }
}

const FirebaseProvider = (props) => {
  return <FirebaseContext.Provider value={Firebase}>{props.children}</FirebaseContext.Provider>
}

export { FirebaseContext, FirebaseProvider }