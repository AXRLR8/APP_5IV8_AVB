// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCC_FSVyxLfID117iaVxgKzTmSJT0gdWbg",
  authDomain: "appsmoviles-e1d25.firebaseapp.com",
  projectId: "appsmoviles-e1d25",
  storageBucket: "appsmoviles-e1d25.firebasestorage.app",
  messagingSenderId: "936968259458",
  appId: "1:936968259458:web:edaf0d9ab8a7c42f94f19b",
  measurementId: "G-YTT3PVG4YZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);