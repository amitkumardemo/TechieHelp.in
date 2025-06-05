import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCHQ3Hd37ubRkDbTbbKuNQnX89oAo3MNwQ",
  authDomain: "techiehelp-27710.firebaseapp.com",
  projectId: "techiehelp-27710",
  storageBucket: "techiehelp-27710.firebasestorage.app",
  messagingSenderId: "899635859051",
  appId: "1:899635859051:web:2a61d32253b3581897eb2e",
  measurementId: "G-RJKKPDHE0N"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, googleProvider, githubProvider, db, storage };
