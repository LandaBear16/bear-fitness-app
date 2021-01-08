import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBmBi_9sHli3-RE0slzFJpZQmBtqUDjbvI",
  authDomain: "bear-fitness-app.firebaseapp.com",
  databaseURL: "https://bear-fitness-app.firebaseio.com",
  projectId: "bear-fitness-app",
  storageBucket: "bear-fitness-app.appspot.com",
  messagingSenderId: "565161880418",
  appId: "1:565161880418:android:11b3a058890532d9c81a3b",
  measurementId: "G-6RY7291Y2F"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
// firebase.auth.Auth.Persistence.SESSION

export { firebase };


