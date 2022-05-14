// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3e9Gjr4-LcQpCWncLZeBcbOLcnoNm6eg",
  authDomain: "doctors-portal-b5c52.firebaseapp.com",
  projectId: "doctors-portal-b5c52",
  storageBucket: "doctors-portal-b5c52.appspot.com",
  messagingSenderId: "119711753496",
  appId: "1:119711753496:web:dfd9a8ef63f2f75460aa6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;