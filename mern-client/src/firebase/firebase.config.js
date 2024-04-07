// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFjQ70tOYTjmMpxD4YhvHzPjgvivvKiDA",
  authDomain: "mern-book-inventory-81293.firebaseapp.com",
  projectId: "mern-book-inventory-81293",
  storageBucket: "mern-book-inventory-81293.appspot.com",
  messagingSenderId: "48958852984",
  appId: "1:48958852984:web:4a2ce98d31864f2dd4828d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
