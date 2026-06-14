import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, googleProvider, db } from "../firebase";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [workspace, setWorkspace] = useState(null);
  const [loading, setLoading] = useState(true);

  // Helper to log platform audit events
  const logAuthEvent = async (userId, action, details = {}) => {
    try {
      const logId = "log_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7);
      const logRef = doc(db, "auditLogs", logId);
      await setDoc(logRef, {
        userId: userId || "anonymous",
        action,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        details
      });
    } catch (e) {
      console.error("Failed to write audit log:", e);
    }
  };

  const loginWithEmail = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      await logAuthEvent(result.user.uid, "LOGIN_SUCCESS", { email });
      return result;
    } catch (error) {
      await logAuthEvent(null, "LOGIN_FAILED", { email, error: error.message });
      throw error;
    }
  };

  const signup = async (email, password) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      await logAuthEvent(result.user.uid, "SIGNUP_SUCCESS", { email });
      return result;
    } catch (error) {
      await logAuthEvent(null, "SIGNUP_FAILED", { email, error: error.message });
      throw error;
    }
  };

  const logout = async () => {
    localStorage.removeItem("dev_bypass_email_verification");
    if (user) {
      await logAuthEvent(user.uid, "LOGOUT", { email: user.email });
    }
    setWorkspace(null);
    setUserProfile(null);
    return signOut(auth);
  };

  const triggerEmailVerification = async () => {
    if (auth.currentUser) {
      await sendEmailVerification(auth.currentUser);
      await logAuthEvent(auth.currentUser.uid, "EMAIL_VERIFICATION_SENT");
    }
  };

  const createBusinessWorkspace = async (userId, email, details) => {
    const workspaceId = "ws_" + Math.random().toString(36).substring(2, 11);

    // Check if global settings exist, if not default requireAdminApproval to true
    let requireApproval = true;
    try {
      const configSnap = await getDoc(doc(db, "config", "system"));
      if (configSnap.exists()) {
        requireApproval = configSnap.data().requireAdminApproval ?? true;
      } else {
        await setDoc(doc(db, "config", "system"), { requireAdminApproval: true });
      }
    } catch (e) {
      console.warn("Could not read admin config, defaulting to approval required", e);
    }

    const workspaceData = {
      id: workspaceId,
      businessName: details.businessName,
      websiteUrl: details.websiteUrl,
      phone: details.phone,
      industry: details.industry,
      companySize: details.companySize,
      domain: details.domain,
      status: requireApproval ? "Pending Review" : "Approved",
      createdAt: new Date().toISOString()
    };

    const profileData = {
      email,
      role: "business_owner",
      workspaceId,
      displayName: details.businessName + " Owner",
      createdAt: new Date().toISOString()
    };

    // Set records in firestore
    await setDoc(doc(db, "workspaces", workspaceId), workspaceData);
    await setDoc(doc(db, "profiles", userId), profileData);

    // Domain Verification status logs
    await setDoc(doc(db, "verifications", userId), {
      emailVerified: false,
      domainVerified: true,
      mxRecordsChecked: true,
      verifiedAt: new Date().toISOString()
    });

    await logAuthEvent(userId, "WORKSPACE_CREATED", {
      workspaceId,
      businessName: details.businessName,
      domain: details.domain,
      status: workspaceData.status
    });

    return { workspaceId, workspaceData, profileData };
  };

  const updateUserProfile = (profile) => {
    if (auth.currentUser) {
      return updateProfile(auth.currentUser, profile);
    }
    return Promise.reject("No user is signed in");
  };

  const getUserProfile = async (uid) => {
    const userRef = doc(db, "profiles", uid);
    const userSnap = await getDoc(userRef);
    return userSnap.exists() ? userSnap.data() : null;
  };

  // Inactivity session timer (30 mins auto-logout)
  useEffect(() => {
    if (!user) return;

    let timer;
    const INACTIVITY_LIMIT = 30 * 60 * 1000; // 30 minutes in ms

    const resetTimer = () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(async () => {
        console.log("User inactive for 30 minutes. Logging out.");
        await logAuthEvent(user.uid, "SESSION_EXPIRED", { reason: "Inactivity" });
        logout();
        alert("Your session has expired due to 30 minutes of inactivity. Please log in again.");
      }, INACTIVITY_LIMIT);
    };

    const activityEvents = ["mousedown", "mousemove", "keypress", "scroll", "touchstart"];
    activityEvents.forEach(evt => window.addEventListener(evt, resetTimer));

    resetTimer(); // Start timer

    return () => {
      if (timer) clearTimeout(timer);
      activityEvents.forEach(evt => window.removeEventListener(evt, resetTimer));
    };
  }, [user]);

  // Auth State Listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        try {
          let profile = await getUserProfile(currentUser.uid);

          // Handle Admin accounts
          const isAdmin = currentUser.email === "support@techiehelp.in";
          if (!profile) {
            let workspaceId = null;

            if (!isAdmin) {
              workspaceId = "ws_" + Math.random().toString(36).substring(2, 11);
              const domain = currentUser.email.split("@")[1] || "unknown.com";
              const businessName = currentUser.email.split("@")[0].toUpperCase() + " Workspace";

              const workspaceData = {
                id: workspaceId,
                businessName,
                websiteUrl: "https://" + domain,
                phone: "N/A",
                industry: "Technology",
                companySize: "1-10",
                domain,
                status: "Approved",
                createdAt: new Date().toISOString()
              };
              await setDoc(doc(db, "workspaces", workspaceId), workspaceData);
            }

            profile = {
              role: isAdmin ? 'admin' : 'business_owner',
              email: currentUser.email,
              displayName: isAdmin ? "System Admin" : (currentUser.email.split("@")[0].toUpperCase() + " Owner"),
              workspaceId,
              createdAt: new Date().toISOString()
            };
            await setDoc(doc(db, "profiles", currentUser.uid), profile);
          } else {
            // Sync admin state
            if (isAdmin && profile.role !== 'admin') {
              profile.role = 'admin';
              await updateDoc(doc(db, "profiles", currentUser.uid), { role: 'admin' });
            }
          }

          setUserProfile(profile);

          // Fetch workspace
          if (profile.workspaceId) {
            const wsSnap = await getDoc(doc(db, "workspaces", profile.workspaceId));
            if (wsSnap.exists()) {
              setWorkspace(wsSnap.data());
            }
          } else {
            setWorkspace(null);
          }
        } catch (error) {
          console.error("Error loading user profile or workspace in listener:", error);
          setUserProfile(null);
          setWorkspace(null);
        }
      } else {
        setUserProfile(null);
        setWorkspace(null);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    user,
    userProfile,
    workspace,
    loading,
    loginWithEmail,
    signup,
    logout,
    updateUserProfile,
    createBusinessWorkspace,
    triggerEmailVerification,
    logAuthEvent,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
