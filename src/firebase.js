// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD-MXjD7U4zgsrwXh3IO3f-0y06jnIHnmw",
  authDomain: "clone-4bbad.firebaseapp.com",
  projectId: "clone-4bbad",
  storageBucket: "clone-4bbad.appspot.com",
  messagingSenderId: "824356311455",
  appId: "1:824356311455:web:a50e27adf6efe429d4edaa",
  measurementId: "G-LRSHT0M2XR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
