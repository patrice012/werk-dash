// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkTZMRmEBqz26mfUaZfZgCsj8pScGEP6c",
  authDomain: "werk-dash.firebaseapp.com",
  projectId: "werk-dash",
  storageBucket: "werk-dash.appspot.com",
  messagingSenderId: "541222440247",
  appId: "1:541222440247:web:8a2caa0624b0bb4f0c9eb2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const FirebaseAuth = getAuth(app);
