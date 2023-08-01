import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_J8Pq5l8RvfWd0Z-TC_ccSW4lzOJ35EA",
  authDomain: "todo-75309.firebaseapp.com",
  projectId: "todo-75309",
  storageBucket: "todo-75309.appspot.com",
  messagingSenderId: "970170266043",
  appId: "1:970170266043:web:aba23d1f6c88510431549e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
