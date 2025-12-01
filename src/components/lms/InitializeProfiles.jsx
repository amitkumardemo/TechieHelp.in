import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { doc, setDoc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const InitializeProfiles = () => {
  const { user } = useAuth();
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("student");
  const [batchId, setBatchId] = useState("");
  const [message, setMessage] = useState("");

  // Initialize admin user on component mount
  useEffect(() => {
    const initializeAdminUser = async () => {
      try {
        const adminEmail = "support@techiehelp.in";

        // Check if admin profile already exists in Firestore
        const profilesRef = collection(db, "profiles");
        const q = query(profilesRef, where("email", "==", adminEmail));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          setMessage("Admin profile already exists in Firestore");
          return;
        }

        // If profile doesn't exist, we can't create it here because we don't have the UID
        // The AuthContext will create it when the admin logs in
        setMessage("Admin profile will be created when admin logs in for the first time.");
      } catch (error) {
        setMessage("Error checking admin profile: " + error.message);
      }
    };

    initializeAdminUser();
  }, []);

  const initializeProfile = async () => {
    if (!email) {
      setMessage("Please enter an email");
      return;
    }

    try {
      // For demo, we'll set a fixed UID. In real app, you'd need to get UID from email
      // This is a temporary solution
      const uid = "temp-uid-" + email.replace("@", "-").replace(".", "-");

      const profileData = {
        role,
        email,
        createdAt: new Date(),
      };

      if (role === "student" && batchId) {
        profileData.batchId = batchId;
      }

      await setDoc(doc(db, "profiles", uid), profileData);
      setMessage("Profile initialized successfully");
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  };

  const createAdminUser = async () => {
    try {
      const adminEmail = "support@techiehelp.in";
      const adminPassword = "amitkumar12@";

      // Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, adminEmail, adminPassword);

      // Create profile in Firestore
      const profileData = {
        role: "admin",
        email: adminEmail,
        createdAt: new Date(),
      };

      await setDoc(doc(db, "profiles", userCredential.user.uid), profileData);
      setMessage("Admin user created successfully");
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setMessage("Admin user already exists in Firebase Auth");
      } else {
        setMessage("Error creating admin user: " + error.message);
      }
    }
  };

  if (!user) {
    return <div>Please login first</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Initialize User Profiles</h2>

      {/* Admin User Creation */}
      <div className="mb-6 p-4 bg-blue-50 rounded">
        <h3 className="text-lg font-semibold mb-2">Create Admin User</h3>
        <p className="text-sm text-gray-600 mb-4">
          Email: support@techiehelp.in<br/>
          Password: amitkumar12@
        </p>
        <button
          onClick={createAdminUser}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Create Admin User
        </button>
      </div>

      {/* Manual Profile Initialization */}
      <div className="space-y-4">
        <input
          type="email"
          placeholder="User Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="student">Student</option>
          <option value="admin">Admin</option>
        </select>
        {role === "student" && (
          <input
            type="text"
            placeholder="Batch ID (optional)"
            value={batchId}
            onChange={(e) => setBatchId(e.target.value)}
            className="w-full p-2 border rounded"
          />
        )}
        <button
          onClick={initializeProfile}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Initialize Profile
        </button>
        {message && <p className="text-green-600">{message}</p>}
      </div>
    </div>
  );
};

export default InitializeProfiles;
