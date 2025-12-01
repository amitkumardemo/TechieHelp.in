import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, googleProvider, githubProvider, db } from "../firebase";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const loginWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const loginWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const updateUserProfile = (profile) => {
    if (auth.currentUser) {
      return updateProfile(auth.currentUser, profile);
    }
    return Promise.reject("No user is signed in");
  };

  const setUserRole = async (role) => {
    if (!user) return;
    const userRef = doc(db, "profiles", user.uid);
    await setDoc(userRef, { role }, { merge: true });
    setUserProfile(prev => ({ ...prev, role }));
  };

  const setUserBatch = async (batchId) => {
    if (!user) return;
    const userRef = doc(db, "profiles", user.uid);
    await updateDoc(userRef, { batchId });
    setUserProfile(prev => ({ ...prev, batchId }));
  };

  const getUserProfile = async (uid) => {
    const userRef = doc(db, "profiles", uid);
    const userSnap = await getDoc(userRef);
    return userSnap.exists() ? userSnap.data() : null;
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      console.log('Auth state changed:', currentUser?.email);
      setUser(currentUser);
      if (currentUser) {
        let profile = await getUserProfile(currentUser.uid);
        console.log('Profile from DB:', profile);
        if (!profile) {
          // Check if this is the admin email
          const isAdmin = currentUser.email === "support@techiehelp.in";
          console.log('Is admin email?', isAdmin);
          // Create profile for new users (admin or student)
          profile = {
            role: isAdmin ? 'admin' : 'student',
            email: currentUser.email,
            createdAt: new Date()
          };
          console.log('Creating new profile:', profile);
          await setDoc(doc(db, "profiles", currentUser.uid), profile);
        }
        console.log('Setting user profile:', profile);
        setUserProfile(profile);
      } else {
        setUserProfile(null);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    user,
    userProfile,
    loading,
    loginWithGoogle,
    loginWithGithub,
    loginWithEmail,
    signup,
    logout,
    updateUserProfile,
    setUserRole,
    setUserBatch,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
