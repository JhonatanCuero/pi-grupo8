// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFgE40jWK9yr1jnTMr7JIDblxykxZbjyY",
  authDomain: "greensoul-pi.firebaseapp.com",
  projectId: "greensoul-pi",
  storageBucket: "greensoul-pi.appspot.com",
  messagingSenderId: "997891193593",
  appId: "1:997891193593:web:5a791e1d1b0e4dfdbf0028"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);