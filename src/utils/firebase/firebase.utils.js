import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBYlkUDYsxZZJVN4-TejqMjbyfUGlJkqVc",

  authDomain: "compton-clothing-db.firebaseapp.com",

  projectId: "compton-clothing-db",

  storageBucket: "compton-clothing-db.appspot.com",

  messagingSenderId: "729876970976",

  appId: "1:729876970976:web:420526e9174c2d198e7f85",
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
