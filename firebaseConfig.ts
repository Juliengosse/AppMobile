import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'


// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBE8BxDo4XeCaYeIrqXX8XVNrK3K3RZmSA",
    authDomain: "picolobis-946a2.firebaseapp.com",
    projectId: "picolobis-946a2",
    storageBucket: "picolobis-946a2.appspot.com",
    messagingSenderId: "580574297723",
    appId: "1:580574297723:web:cc810446465ed3ed91acde",
    measurementId: "G-MGN0PQ0Y1C"
};

export const app = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(app);
