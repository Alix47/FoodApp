// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {  getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzKLCnPTmoTtzMMsVbwuQ3eJj8JYAnCzs",
  authDomain: "foodapp-412321.firebaseapp.com",
  projectId: "foodapp-412321",
  storageBucket: "foodapp-412321.appspot.com",
  messagingSenderId: "1068849470412",
  appId: "1:1068849470412:web:5d2a32256516448931db69",
  measurementId: "G-1GD7Q0P02V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();