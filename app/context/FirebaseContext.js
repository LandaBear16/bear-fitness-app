import React, { createContext } from 'react'

import { firebase } from '../firebase/config'

const FirebaseContext = createContext()

const db = firebase.firestore()

const Firebase = {
  login: async (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },

  getCurrentUser: () => {
    return firebase.auth().currentUser;
  },

  getUserInfo: async (uid) => {
    try {
      const user = await db.collection('users').doc(uid).get()

      if(user.exists) {
        return user.data()
      }
    } catch (error) {
      console.error(error)
    }
  },

  createUser: async (user) => {
    try {
        await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
        const uid = Firebase.getCurrentUser().uid;

        await db.collection("users").doc(uid).set({
            id: uid,
            fullName: user.fullName,
            email: user.email,
        });

        delete user.password;

        return { ...user, uid };
    } catch (error) {
        console.log("Error @createUser: ", error.message);
    }
  },

  updateUser: async (fullName, email, uid) => {
    await db.collection('users').doc(uid).set({
      fullName,
      email
    })
  }
}

const FirebaseProvider = (props) => {
  return <FirebaseContext.Provider value={Firebase}>{props.children}</FirebaseContext.Provider>
}


export { FirebaseContext, FirebaseProvider }