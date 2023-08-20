// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABd_D6XreUvJWix1gkFHfAUOYmOJJQ9g8",
  authDomain: "students-companion-dac61.firebaseapp.com",
  projectId: "students-companion-dac61",
  storageBucket: "students-companion-dac61.appspot.com",
  messagingSenderId: "848561452074",
  appId: "1:848561452074:web:2b4a2aa038b73ab6443f53",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
export const db = getFirestore(app);
