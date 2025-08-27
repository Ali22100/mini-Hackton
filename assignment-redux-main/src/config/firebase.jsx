import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDMRllHJuKniJOkWERF9-cQB_Y86Wmgd7A",
  authDomain: "redux-ass.firebaseapp.com",
  projectId: "redux-ass",
  storageBucket: "redux-ass.firebasestorage.app",
  messagingSenderId: "401427560855",
  appId: "1:401427560855:web:fef59091a5c37e014bacd2",
  measurementId: "G-PYPQ0N9L9F"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);


export { auth, db };
