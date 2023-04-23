import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyALY1K2IibdWzlLsllppGntAfzIrVxN6gw",
    authDomain: "project-71-byju.firebaseapp.com",
    projectId: "project-71-byju",
    storageBucket: "project-71-byju.appspot.com",
    messagingSenderId: "635375458733",
    appId: "1:635375458733:web:3988d17f927bb9f26de924"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
