// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  GoogleAuthProvider, getAuth } from "firebase/auth";

// import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHyZV-1mjQnagLEbc_aW2wF2rYomhMv40",
  authDomain: "e-commerce-web-5e550.firebaseapp.com",
  projectId: "e-commerce-web-5e550",
  storageBucket: "e-commerce-web-5e550.appspot.com",
  messagingSenderId: "949464818308",
  appId: "1:949464818308:web:205621922630f951b2d8d1"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const auth = getAuth(firebase_app)
const provider = new GoogleAuthProvider(firebase_app);

export  {firebase_app,auth,provider}