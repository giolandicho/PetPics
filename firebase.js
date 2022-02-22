import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBn_XLFnPPT83sY3F4myUCbiF2wYPQ_FiU",
    authDomain: "petpics.firebaseapp.com",
    projectId: "petpics",
    storageBucket: "petpics.appspot.com",
    messagingSenderId: "123753403512",
    appId: "1:123753403512:web:6188c1b53db04fc49cc98d"
}

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const provider = new GoogleAuthProvider();
export const auth = getAuth();

