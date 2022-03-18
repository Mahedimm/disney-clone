// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

export  const firebaseConfig = {
  apiKey: "AIzaSyClhYWkSuvnaAAt1tjSh1K1ICPocoYHqDA",
  authDomain: "disney-clone-mh.firebaseapp.com",
  projectId: "disney-clone-mh",
  storageBucket: "disney-clone-mh.appspot.com",
  messagingSenderId: "780588896762",
  appId: "1:780588896762:web:b45be79d5a99dbc7011443"
  };



// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };



