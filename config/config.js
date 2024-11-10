// npm install firebase
// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwP00qOuMFp3g792ekfSDUlE3bSeGkGjc",
    authDomain: "curriculos-9d1cc.firebaseapp.com",
    projectId: "curriculos-9d1cc",
    storageBucket: "curriculos-9d1cc.firebasestorage.app",
    messagingSenderId: "956135790837",
    appId: "1:956135790837:web:04af8f002722f834568dbc",
    // measurementId: "G-BMB3YDE5TH"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebase;