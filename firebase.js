// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6mRh7cNQ55-HgPSXhsXKKZMG0iCiwXPc",
  authDomain: "laundry-app-6eda7.firebaseapp.com",
  projectId: "laundry-app-6eda7",
  storageBucket: "laundry-app-6eda7.appspot.com",
  messagingSenderId: "1062719322968",
  appId: "1:1062719322968:web:3723c95a31f44dac6f432d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const db = getFirestore()

export {auth,db}