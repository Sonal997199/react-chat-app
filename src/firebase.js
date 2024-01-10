import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyChlRUm8MtkoxfWV2BsYqZNpiwI9Gz3OfI",
  authDomain: "sonal-chatapp.firebaseapp.com",
  projectId: "sonal-chatapp",
  storageBucket: "sonal-chatapp.appspot.com",
  messagingSenderId: "1084535957517",
  appId: "1:1084535957517:web:2222c9bb492f40dc75cd44"
};


export const app = initializeApp(firebaseConfig);