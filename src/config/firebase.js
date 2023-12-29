// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBPas8STqcRNZqEfcfIRECVffW73lRFz4c",
    authDomain: "proyecto-9581f.firebaseapp.com",
    projectId: "proyecto-9581f",
    storageBucket: "proyecto-9581f.appspot.com",
    messagingSenderId: "73785452406",
    appId: "1:73785452406:web:60798d7ba1f153d596fc57",
    measurementId: "G-LPBGKMSYMS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);