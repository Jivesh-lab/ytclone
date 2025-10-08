// Import the functions you need from the SDKs you need
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQAPQWzCtPT9upGEvHJXVdkqU1qhIi-20",
  authDomain: "vibevideo-149d7.firebaseapp.com",
  projectId: "vibevideo-149d7",
  storageBucket: "vibevideo-149d7.firebasestorage.app",
  messagingSenderId: "636595953919",
  appId: "1:636595953919:web:b50c2d1241ad6a8298ecca",
  measurementId: "G-Z1457GLP86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()
export {auth,provider}