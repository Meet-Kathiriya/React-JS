// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLq-nHhgFO-Zr0JTJp0F1DGqS_2DsFVoI",
  authDomain: "main-project-b7a6c.firebaseapp.com",
  projectId: "main-project-b7a6c",
  storageBucket: "main-project-b7a6c.firebasestorage.app",
  messagingSenderId: "973908082055",
  appId: "1:973908082055:web:1510eeefe0350e37902722"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  
const auth = getAuth(app)
const db = getFirestore(app)

export {auth,db}