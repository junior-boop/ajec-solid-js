// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdxvneOb5LgD1dknGL9JlE9u9lB7SUnMg",
  authDomain: "cissy-promotion.firebaseapp.com",
  projectId: "cissy-promotion",
  storageBucket: "cissy-promotion.appspot.com",
  messagingSenderId: "623793458239",
  appId: "1:623793458239:web:c0d81a052637f409adfc8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app)