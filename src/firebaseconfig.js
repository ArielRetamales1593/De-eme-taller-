// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3criYaalds0ir-sW2S7PK7Oa6xXotq60",
  authDomain: "dm-taller.firebaseapp.com",
  projectId: "dm-taller",
  storageBucket: "dm-taller.appspot.com",
  messagingSenderId: "318110963039",
  appId: "1:318110963039:web:eaa8548d875436b94692ea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
