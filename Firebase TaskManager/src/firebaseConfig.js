// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNZItHcLGL5mcJ1ZWx48tErpatCTlxDSY",
  authDomain: "fir-taskmanager-ac8a2.firebaseapp.com",
  projectId: "fir-taskmanager-ac8a2",
  storageBucket: "fir-taskmanager-ac8a2.firebasestorage.app",
  messagingSenderId: "1071530825819",
  appId: "1:1071530825819:web:ee0bad0c8e2c950743877e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {auth,db}