import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseStudentConfig = {
  apiKey: "AIzaSyAWHHxH-Vk3uYF0Jx96qe-5faErrRXvK9E",
  authDomain: "techiehelp-lms.firebaseapp.com",
  projectId: "techiehelp-lms",
  storageBucket: "techiehelp-lms.firebasestorage.app",
  messagingSenderId: "1061133323112",
  appId: "1:1061133323112:web:1fe1f56b88d695cac5e4dd",
  measurementId: "G-MK1ZQTJEVT"
};

const studentApp = initializeApp(firebaseStudentConfig, "student");
const studentAuth = getAuth(studentApp);
const studentDb = getFirestore(studentApp);

export { studentAuth, studentDb };
