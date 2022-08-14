// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlKRrOgLIshF_iS7DgIE2ZqPqgHxfB-lg",
  authDomain: "netflixv2-11703.firebaseapp.com",
  projectId: "netflixv2-11703",
  storageBucket: "netflixv2-11703.appspot.com",
  messagingSenderId: "273784073450",
  appId: "1:273784073450:web:47d39f51fdb22ff1f27b93",
  measurementId: "G-RFE3YN3VWE"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

//for NEXT.js
const app = !getApp.length ? initializeApp(firebaseConfig) : getApp
const db = getFirestore()
const auth = getAuth()

export default app
export {auth, db}

