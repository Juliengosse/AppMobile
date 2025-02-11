import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD82YXbbfhdv946yHg7SOObhwY-B3yvsz8",
  authDomain: "picoloapp-a4885.firebaseapp.com",
  projectId: "picoloapp-a4885",
  storageBucket: "picoloapp-a4885.appspot.com",
  messagingSenderId: "264097462406",
  appId: "1:264097462406:web:5aab1e7dad238b662c7907"
};

export const app = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(app);