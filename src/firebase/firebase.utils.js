import firebase from "firebase";

import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBXRpat1ho4A718FxTtVy3xRncAUEP1Vmg",
  authDomain: "db-crown-clothing.firebaseapp.com",
  databaseURL: "https://db-crown-clothing.firebaseio.com",
  projectId: "db-crown-clothing",
  storageBucket: "db-crown-clothing.appspot.com",
  messagingSenderId: "559980968751",
  appId: "1:559980968751:web:8c9deff08243ac917cffda",
  measurementId: "G-X9NGXQ806L",
};

firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
