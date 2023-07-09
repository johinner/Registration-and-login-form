// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy3_vHrbvhBROBZnqsrL-AJqj2T1ICoSA",
  authDomain: "sliding-sign-in-sign-up-form.firebaseapp.com",
  projectId: "sliding-sign-in-sign-up-form",
  storageBucket: "sliding-sign-in-sign-up-form.appspot.com",
  messagingSenderId: "522792833120",
  appId: "1:522792833120:web:f8e262f8cc80692b9c3305",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);
