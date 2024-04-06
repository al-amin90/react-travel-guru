// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCEXdRKPW3g4SsWTqqQjeSYb4obfm4puAI",
    authDomain: "react-travel-guru-b3ab3.firebaseapp.com",
    projectId: "react-travel-guru-b3ab3",
    storageBucket: "react-travel-guru-b3ab3.appspot.com",
    messagingSenderId: "109443244549",
    appId: "1:109443244549:web:1df6b243f3637ec22bf26c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;