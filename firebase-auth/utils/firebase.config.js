// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVSR40rOYOeHeNHq-0cF7B0uxMyN5PZZs",
  authDomain: "astrotalki-5b730.firebaseapp.com",
  projectId: "astrotalki-5b730",
  storageBucket: "astrotalki-5b730.appspot.com",
  messagingSenderId: "929132849029",
  appId: "1:929132849029:web:80fd46715943851fd146ec",
  measurementId: "G-RHMX7KDBJZ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)