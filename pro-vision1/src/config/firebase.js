// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";


var firebaseConfig = {
    apiKey: "AIzaSyA5tswA8WLxFYxH7IRQpSPnyUFgipSt6gc",
    authDomain: "auth-development-e4e96.firebaseapp.com",
    projectId: "auth-development-e4e96",
    storageBucket: "auth-development-e4e96.appspot.com",
    messagingSenderId: "474473651815",
    appId: "1:474473651815:web:d72ce5bf6078b1e63d7ec2"
  };
  firebase.initializeApp(firebaseConfig);
  
  export default firebase;