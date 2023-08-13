 import { initializeApp } from "firebase/app";
 import { getAuth } from "firebase/auth";
 import { getStorage } from "firebase/storage";
 import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByIvImmgqS7YSQ7Z7tSVUWmQNVolJXgDY",
  authDomain: "chat-app-d5821.firebaseapp.com",
  projectId: "chat-app-d5821",
  storageBucket: "chat-app-d5821.appspot.com",
  messagingSenderId: "587284309640",
  appId: "1:587284309640:web:29657938a268b58375e13d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()