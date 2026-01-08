import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { db, storage } from "../firebase";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { FaPencilAlt, FaPlus, FaTrash } from "react-icons/fa";

const Profile = () => {
  const { user, updateUserProfile, logout } = useAuth();
  const [profileData, setProfileData] = useState({
    displayName: "",
    photoURL: "",
    location: "",
    description: "",
    achievements: [""],
    certifications: [""],
    projects: [{ name: "", link: "" }],
    experience: [""],
    socialLinks: {
      linkedin: "",
      github: "",
      twitter: "",
      facebook: "",
    },
    studentId: "",
  });
  const [activities, setActivities] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [activeTab, setActiveTab] = useState("Experience");

  // Load profile data from Firestore
  useEffect(() => {
    if (!user) return;

    const docRef = doc(db, "profiles", user.uid);
    getDoc(docRef).then((docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setProfileData({
          ...data,
          achievements: Array.isArray(data.achievements) ? data.achievements : [""],
          certifications: Array.isArray(data.certifications) ? data.certifications : [""],
          projects: Array.isArray(data.projects) ? data.projects : [{ name: "", link: "" }],
          experience: Array.isArray(data.experience) ? data.experience : [""],
          location: data.location || "",
          socialLinks: data.socialLinks || {
            linkedin: "",
            github: "",
            twitter: "",
            facebook: "",
          },
        });
      } else {
        // Create new profile with studentId
        const newId = "TECHIE" + Math.floor(100000 + Math.random() * 900000);
        const newProfile = {
          displayName: user.displayName || "",
          photoURL: user.photoURL || "",
          location: "",
          description: "",
          achievements: [""],
          certifications: [""],
          projects: [{ name: "", link: "" }],
          experience: [""],
          socialLinks: {
            linkedin: "",
            github: "",
            twitter: "",
            facebook: "",
          },
          studentId: newId,
        };
        setDoc(docRef, newProfile);
        setProfileData(newProfile);
      }
    });

    // Listen to activities
    const activitiesQuery = query(
      collection(db, "profiles", user.uid, "activities"),
      orderBy("timestamp", "desc")
    );
    const unsubscribe = onSnapshot(activitiesQuery, (snapshot) => {
      const acts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setActivities(acts);
    });

    return () => unsubscribe();
  }, [user]);

  const handleInputChange = (e, index, field = null) => {
    const { name, value } = e.target;
    if (field === "projects") {
      const newProjects = [...profileData.projects];
      newProjects[index][name] = value;
      setProfileData((prev) => ({ ...prev, projects: newProjects }));
    } else if (name === "achievements" || name === "certifications" || name === "experience") {
      const arr = [...profileData[name]];
      arr[index] = value;
      setProfileData((prev) => ({ ...prev, [name]: arr }));
    } else if (name in profileData.socialLinks) {
      setProfileData((prev) => ({
        ...prev,
        socialLinks: { ...prev.socialLinks, [name]: value },
      }));
    } else {
      setProfileData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const addItem = (field) => {
    if (field === "projects") {
      setProfileData((prev) => ({
        ...prev,
        projects: [...prev.projects, { name: "", link: "" }],
      }));
    } else {
      setProfileData((prev) => ({
        ...prev,
        [field]: [...prev[field], ""],
      }));
    }
  };

  const removeItem = (field, index) => {
    if (field === "projects") {
      const newProjects = [...profileData.projects];
      newProjects.splice(index, 1);
      setProfileData((prev) => ({ ...prev, projects: newProjects }));
    } else {
      const arr = [...profileData[field]];
      arr.splice(index, 1);
      setProfileData((prev) => ({ ...prev, [field]: arr }));
    }
  };

  const handlePhotoChange = async (e) => {
    if (!user) {
      alert("You must be logged in to upload a profile photo.");
      return;
    }
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    try {
      const storageRef = ref(storage, `profilePhotos/${user.uid}/${file.name}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      await updateUserProfile({ photoURL: url });
      setProfileData((prev) => ({ ...prev, photoURL: url }));
    } catch (error) {
      console.error("Error uploading photo:", error);
      if (error.code === "storage/unauthorized") {
        alert("You do not have permission to upload this file. Please check your authentication.");
      } else {
        alert("Failed to upload photo. Please try again.");
      }
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async () => {
    if (!user) return;
    const docRef = doc(db, "profiles", user.uid);
    await updateDoc(docRef, {
      displayName: profileData.displayName,
      location: profileData.location,
      socialLinks: profileData.socialLinks,
      photoURL: profileData.photoURL,
      description: profileData.description,
      achievements: profileData.achievements,
      certifications: profileData.certifications,
      projects: profileData.projects,
      experience: profileData.experience,
    });
    await updateUserProfile({
      displayName: profileData.displayName,
      photoURL: profileData.photoURL,
    });
    alert("Profile updated successfully");
    setEditMode(false);
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const tabs = ["Experience", "Biography", "Skills", "Portfolio", "Social Media"];

  return (
    <div className="max-w-5xl mx-auto p-6 mt-32 bg-primary text-white min-h-screen rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row items-start">
        <div className="relative flex-shrink-0 cursor-pointer group">
          <>
            {profileData.photoURL ? (
              <img
                src={profileData.photoURL}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover"
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-xl">
                {profileData.displayName ? profileData.displayName.charAt(0) : "U"}
              </div>
            )}
            {editMode && (
              <label
                htmlFor="photo-upload"
                className="absolute bottom-0 right-0 bg-black bg-opacity-70 rounded-full p-2 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
                title="Edit Profile Photo"
              >
                <FaPencilAlt className="text-white" />
                <input
                  id="photo-upload"
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="hidden"
                />
              </label>
            )}
          </>
        </div>
        <div className="mt-4 text-center">
        </div>
        <div className="flex-1 md:ml-8 mt-6 md:mt-0 w-full">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-xl mb-2">Welcome back TECHIES</h3>
              <p className="text-lg font-semibold">{profileData.displayName}</p>
              <p className="text-sm">Student ID: {profileData.studentId}</p>
              <p className="mt-2 whitespace-pre-line">{profileData.description || "No description added yet."}</p>
              <div className="mt-4 flex space-x-4">
                {profileData.socialLinks.linkedin && (
                  <a
                    href={profileData.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                    title="LinkedIn"
                  >
                    LinkedIn
                  </a>
                )}
                {profileData.socialLinks.github && (
                  <a
                    href={profileData.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:underline"
                    title="GitHub"
                  >
                    GitHub
                  </a>
                )}
                {profileData.socialLinks.twitter && (
                  <a
                    href={profileData.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                    title="Twitter"
                  >
                    Twitter
                  </a>
                )}
                {profileData.socialLinks.facebook && (
                  <a
                    href={profileData.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline"
                    title="Facebook"
                  >
                    Facebook
                  </a>
                )}
              </div>
            </div>
            {!editMode && (
              <button
                onClick={() => setEditMode(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Edit Profile
              </button>
            )}
            {editMode && (
              <>
                <button
                  onClick={handleSave}
                  disabled={uploading}
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition mr-2"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditMode(false)}
                  disabled={uploading}
                  className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition"
                >
                  Cancel
                </button>
              </>
            )}
          </div>

          <div className="mb-6">
            <div className="border-b border-gray-600 mb-4">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab
                        ? "border-blue-500 text-white"
                        : "border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>

            {activeTab === "Experience" && (
              <div>
                {profileData.experience.length === 0 && !editMode && <p>No experience added yet.</p>}
                {profileData.experience.map((exp, idx) =>
                  editMode ? (
                    <div key={idx} className="flex items-center mb-2">
                      <textarea
                        name="experience"
                        value={exp}
                        onChange={(e) => handleInputChange(e, idx, "experience")}
                        className="flex-grow border border-gray-300 rounded px-3 py-2 mr-2 text-black"
                        rows={2}
                      />
                      <button
                        onClick={() => removeItem("experience", idx)}
                        className="text-red-600 hover:text-red-800"
                        title="Remove Experience"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  ) : (
                    <p key={idx} className="mb-1">{exp}</p>
                  )
                )}
              </div>
            )}

            {activeTab === "Biography" && (
              <div>
                {editMode ? (
                  <textarea
                    name="description"
                    value={profileData.description}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                    rows={6}
                    placeholder="Write a brief biography about yourself."
                  />
                ) : (
                  <p>{profileData.description || "No biography added yet."}</p>
                )}
              </div>
            )}

            {activeTab === "Skills" && (
              <div>
                {profileData.achievements.length === 0 && !editMode && <p>No skills added yet.</p>}
                {profileData.achievements.map((skill, idx) =>
                  editMode ? (
                    <div key={idx} className="flex items-center mb-2">
                      <textarea
                        name="achievements"
                        value={skill}
                        onChange={(e) => handleInputChange(e, idx, "achievements")}
                        className="flex-grow border border-gray-300 rounded px-3 py-2 mr-2 text-black"
                        rows={2}
                      />
                      <button
                        onClick={() => removeItem("achievements", idx)}
                        className="text-red-600 hover:text-red-800"
                        title="Remove Skill"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  ) : (
                    <p key={idx} className="mb-1">{skill}</p>
                  )
                )}
                {editMode && (
                  <button
                    onClick={() => addItem("achievements")}
                    className="text-blue-600 hover:text-blue-800 mt-2"
                    title="Add Skill"
                  >
                    <FaPlus /> Add Skill
                  </button>
                )}
              </div>
            )}

            {activeTab === "Portfolio" && (
              <div>
                {profileData.projects.length === 0 && !editMode && <p>No projects added yet.</p>}
                {profileData.projects.map((proj, idx) =>
                  editMode ? (
                    <div key={idx} className="flex items-center mb-2 space-x-2">
                      <input
                        type="text"
                        name="name"
                        value={proj.name}
                        onChange={(e) => handleInputChange(e, idx, "projects")}
                        placeholder="Project Name"
                        className="flex-grow border border-gray-300 rounded px-3 py-2 text-black"
                      />
                      <input
                        type="text"
                        name="link"
                        value={proj.link}
                        onChange={(e) => handleInputChange(e, idx, "projects")}
                        placeholder="GitHub Repo Link"
                        className="flex-grow border border-gray-300 rounded px-3 py-2 text-black"
                      />
                      <button
                        onClick={() => removeItem("projects", idx)}
                        className="text-red-600 hover:text-red-800"
                        title="Remove Project"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  ) : (
                    <p key={idx} className="mb-1">
                      <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline mr-2">
                        {proj.name}
                      </a>
                    </p>
                  )
                )}
                {editMode && (
                  <button
                    onClick={() => addItem("projects")}
                    className="text-blue-600 hover:text-blue-800 mt-2"
                    title="Add Project"
                  >
                    <FaPlus /> Add Project
                  </button>
                )}
              </div>
            )}
            {activeTab === "Social Media" && (
              <div>
                {!editMode ? (
                  <div className="flex flex-col space-y-2">
                    {profileData.socialLinks.linkedin && (
                      <a
                        href={profileData.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                        title="LinkedIn"
                      >
                        LinkedIn
                      </a>
                    )}
                    {profileData.socialLinks.github && (
                      <a
                        href={profileData.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:underline"
                        title="GitHub"
                      >
                        GitHub
                      </a>
                    )}
                    {profileData.socialLinks.twitter && (
                      <a
                        href={profileData.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                        title="Twitter"
                      >
                        Twitter
                      </a>
                    )}
                    {profileData.socialLinks.facebook && (
                      <a
                        href={profileData.socialLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:underline"
                        title="Facebook"
                      >
                        Facebook
                      </a>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col space-y-4">
                    <div>
                      <label htmlFor="linkedin" className="block font-medium mb-1">
                        LinkedIn
                      </label>
                      <input
                        type="text"
                        id="linkedin"
                        name="linkedin"
                        value={profileData.socialLinks.linkedin}
                        onChange={(e) =>
                          setProfileData((prev) => ({
                            ...prev,
                            socialLinks: { ...prev.socialLinks, linkedin: e.target.value },
                          }))
                        }
                        className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                        placeholder="LinkedIn URL"
                      />
                    </div>
                    <div>
                      <label htmlFor="github" className="block font-medium mb-1">
                        GitHub
                      </label>
                      <input
                        type="text"
                        id="github"
                        name="github"
                        value={profileData.socialLinks.github}
                        onChange={(e) =>
                          setProfileData((prev) => ({
                            ...prev,
                            socialLinks: { ...prev.socialLinks, github: e.target.value },
                          }))
                        }
                        className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                        placeholder="GitHub URL"
                      />
                    </div>
                    <div>
                      <label htmlFor="twitter" className="block font-medium mb-1">
                        Twitter
                      </label>
                      <input
                        type="text"
                        id="twitter"
                        name="twitter"
                        value={profileData.socialLinks.twitter}
                        onChange={(e) =>
                          setProfileData((prev) => ({
                            ...prev,
                            socialLinks: { ...prev.socialLinks, twitter: e.target.value },
                          }))
                        }
                        className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                        placeholder="Twitter URL"
                      />
                    </div>
                    <div>
                      <label htmlFor="facebook" className="block font-medium mb-1">
                        Facebook
                      </label>
                      <input
                        type="text"
                        id="facebook"
                        name="facebook"
                        value={profileData.socialLinks.facebook}
                        onChange={(e) =>
                          setProfileData((prev) => ({
                            ...prev,
                            socialLinks: { ...prev.socialLinks, facebook: e.target.value },
                          }))
                        }
                        className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                        placeholder="Facebook URL"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
