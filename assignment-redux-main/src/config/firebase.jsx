import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB0PVhC7UbThwzHxvlGMvXwmR4r3xLcgXw",
  authDomain: "hackathon-5a1f5.firebaseapp.com",
  projectId: "hackathon-5a1f5",
  storageBucket: "hackathon-5a1f5.firebasestorage.app",
  messagingSenderId: "94939266985",
  appId: "1:94939266985:web:1f12851e00ed4f2a934eb8",
  measurementId: "G-NLLQZBB7WX"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);


export { auth, db };
