// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCpRfq6Q3uyfThcf3g6o43XWmW1a-0PD0",
  authDomain: "netflixgpt-21818.firebaseapp.com",
  projectId: "netflixgpt-21818",
  storageBucket: "netflixgpt-21818.firebasestorage.app",
  messagingSenderId: "1027114119550",
  appId: "1:1027114119550:web:d6963cbc3b8a6afb0e432f",
  measurementId: "G-5VJP0K6Y21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();
