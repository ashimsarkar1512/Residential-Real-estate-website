// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3VuHeCZLWySvJ_rymXVYZVdfkr5IRWYM",
  authDomain: "residential-real-estate-auth.firebaseapp.com",
  projectId: "residential-real-estate-auth",
  storageBucket: "residential-real-estate-auth.appspot.com",
  messagingSenderId: "984515236737",
  appId: "1:984515236737:web:84b49d2ddc4ce2c25b4e80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;