import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyD4OrgGw6RzD07Bi_Uq7QVa9OvEUDllvfs",

  authDomain: "react-capstone-db-9eb94.firebaseapp.com",

  projectId: "react-capstone-db-9eb94",

  storageBucket: "react-capstone-db-9eb94.appspot.com",

  messagingSenderId: "961057238497",

  appId: "1:961057238497:web:d3c17179038d062ac276a0",
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, addnInfo) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...addnInfo,
      });
    } catch (error) {
      console.log("Error creating user doc", error);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPwd = async (email, pwd) => {
  if (!email || !pwd) return;
  return await createUserWithEmailAndPassword(auth, email, pwd);
};
export const signInAuthUserWithEmailAndPwd = async (email, pwd) => {
  if (!email || !pwd) return;
  return await signInWithEmailAndPassword(auth, email, pwd);
};
