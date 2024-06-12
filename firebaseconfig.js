/*import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getAuth } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getReactNativePersistence } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAm80ZALtiaFU6xVa8ca1JySv-ijuKXH-0",
  authDomain: "estoquecell-4ea1e.firebaseapp.com",
  projectId: "estoquecell-4ea1e",
  storageBucket: "estoquecell-4ea1e.appspot.com",
  messagingSenderId: "1085306746206",
  appId: "1:1085306746206:web:d991550185add12b74cbcf"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// Initialize Firebase Auth with AsyncStorage for persistence
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});*/

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getAuth, setPersistence, browserSessionPersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyAm80ZALtiaFU6xVa8ca1JySv-ijuKXH-0",
  authDomain: "estoquecell-4ea1e.firebaseapp.com",
  projectId: "estoquecell-4ea1e",
  storageBucket: "estoquecell-4ea1e.appspot.com",
  messagingSenderId: "1085306746206",
  appId: "1:1085306746206:web:d991550185add12b74cbcf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Initialize Firebase Auth
export const auth = initializeAuth(app);
setPersistence(auth, browserSessionPersistence);




