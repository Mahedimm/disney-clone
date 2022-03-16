// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

export  const firebaseConfig = {
    apiKey: "AIzaSyCduVsoZ4vYbMTKQ8M9LKQ0FHZ4bC9qjOA",
    authDomain: "disney-clone-49bd5.firebaseapp.com",
    projectId: "disney-clone-49bd5",
    storageBucket: "disney-clone-49bd5.appspot.com",
    messagingSenderId: "849385386221",
    appId: "1:849385386221:web:ccd9227a93b8a960f5dce4"
  };



// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };



