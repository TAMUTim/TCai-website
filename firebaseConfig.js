// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDd40V4ii8tR_Mbg2TEoLhBEVPEbdUTIOA",
  authDomain: "tcai-site.firebaseapp.com",
  projectId: "tcai-site",
  storageBucket: "tcai-site.appspot.com",
  messagingSenderId: "963535749283",
  appId: "1:963535749283:web:8d1372aced713e3271ff16",
  measurementId: "G-5KYVST8TK3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);