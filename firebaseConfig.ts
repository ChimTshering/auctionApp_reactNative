// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCY80cYByjwBij4k3Jd2pegXqnedTSjWDc",
  authDomain: "auctionrn-b0024.firebaseapp.com",
  databaseURL:
    "https://auctionrn-b0024-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "auctionrn-b0024",
  storageBucket: "auctionrn-b0024.appspot.com",
  messagingSenderId: "75960814598",
  appId: "1:75960814598:web:699c5faa75e9bc2cce8787",
  measurementId: "G-F8KDGKYC71",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
export {app, auth}