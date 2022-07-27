import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA2C-WE6boptWRnpN2JugaxTcj0qTzhBuk",
  authDomain: "opus-3824b.firebaseapp.com",
  databaseURL: "https://opus-3824b-default-rtdb.firebaseio.com",
  projectId: "opus-3824b",
  storageBucket: "opus-3824b.appspot.com",
  messagingSenderId: "881494019825",
  appId: "1:881494019825:web:4a40e37f1f7c033f77e350"
};

export const app = initializeApp(firebaseConfig);