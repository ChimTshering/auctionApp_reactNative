import { initializeApp } from "firebase/app";
// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import {getFirestore,collection} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

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

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const fireStore = getFirestore(app)
const storage = getStorage(app)
export { app, auth,fireStore, storage };
