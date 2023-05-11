import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCh7q-Y-Cl8M0184-FHvS_FbhvY7-l67uk",
  authDomain: "lab7multi.firebaseapp.com",
  projectId: "lab7multi",
  storageBucket: "lab7multi.appspot.com",
  messagingSenderId: "855741297636",
  appId: "1:855741297636:web:c613ba0619ff3262e3cdf1",
  measurementId: "G-KG962GNNZZ"
};

initializeApp(firebaseConfig);

export const database = getFirestore()
