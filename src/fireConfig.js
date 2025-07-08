// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC34vsIaG0_8vlQhbbgQnN4KAzVdTANN1o",
  authDomain: "expo-design.firebaseapp.com",
  projectId: "expo-design",
  storageBucket: "expo-design.firebasestorage.app",
  messagingSenderId: "48058196216",
  appId: "1:48058196216:web:277b9efd531c64e8cbdb0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export{db};