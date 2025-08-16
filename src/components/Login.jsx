import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { db, storage } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { google as googleIcon, github as githubIcon } from "../assets";

const Login = () => {
  const { loginWithGoogle, loginWithGithub, loginWithEmail, signup, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    displayName: "",
    photo: null,
    isRobotChecked: false,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const generateStudentId = () => {
    return "TECHIE" + Math.floor(100000 + Math.random() * 900000);
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate("/profile");
    } catch (error) {
      console.error("Google login error:", error);
      setError(error.message || "Google login failed");
    }
  };

  const handleGithubLogin = async () => {
    try {
      await loginWithGithub();
      navigate("/profile");
    } catch (error) {
      console.error("GitHub login error:", error);
      setError(error.message || "GitHub login failed");
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "photo") {
      setFormData({ ...formData, photo: e.target.files[0] });
    } else if (e.target.name === "isRobotChecked") {
      setFormData({ ...formData, isRobotChecked: e.target.checked });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await loginWithEmail(formData.email, formData.password);
      navigate("/profile");
    } catch (err) {
      setError(err.message || "Failed to login");
    }
    setLoading(false);
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validate confirm password
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Validate robot check
    if (!formData.isRobotChecked) {
      setError("Please confirm you are not a robot");
      return;
    }

    setLoading(true);
    try {
      const userCredential = await signup(formData.email, formData.password);
      const user = userCredential.user;

      let photoURL = "";
      if (formData.photo) {
        const storageRef = ref(storage, `profilePhotos/${user.uid}/${formData.photo.name}`);
        await uploadBytes(storageRef, formData.photo);
        photoURL = await getDownloadURL(storageRef);
      }

      await updateUserProfile({
        displayName: formData.displayName,
        photoURL,
      });

      const studentId = generateStudentId();

      const profileData = {
        displayName: formData.displayName,
        photoURL,
        studentId,
        socialLinks: {
          linkedin: "",
          github: "",
          twitter: "",
          facebook: "",
        },
      };

      await setDoc(doc(db, "profiles", user.uid), profileData);

      setIsSignup(false);
      setFormData({
        email: "",
        password: "",
        confirmPassword: "",
        displayName: "",
        photo: null,
        isRobotChecked: false,
      });
      alert("Signup successful! Please login.");
      navigate("/login");
    } catch (err) {
      setError(err.message || "Failed to create an account");
    }
    setLoading(false);
  };

  // Handle flip animation on toggle
  const toggleSignup = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setIsSignup(!isSignup);
      setError("");
      setIsFlipping(false);
    }, 600); // duration matches animation duration
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/src/assets/home-background.jpg')" }}
    >
      <div className="min-h-screen flex justify-center items-center bg-transparent pt-10"> {/* Made background transparent */}
        <div
          className={`flex flex-col md:flex-row bg-white rounded-lg shadow-lg max-w-5xl w-full mx-4 p-6 perspective pt-10`}
        >
          <div
            className={`md:w-1/2 flex justify-center items-center p-4 transition-transform duration-600 ease-in-out preserve-3d ${
              isFlipping ? "flip" : ""
            }`}
          >
            <img
              src={isSignup ? "/src/assets/signup.png" : "/src/assets/sign.webp"}
              alt={isSignup ? "Signup" : "Sign"}
              className="rounded-lg max-w-full h-auto backface-hidden"
            />
          </div>
          <div
            className={`md:w-1/2 p-6 transition-transform duration-600 ease-in-out preserve-3d ${
              isFlipping ? "flip" : ""
            }`}
          >
            {!isSignup ? (
              <>
                <h2 className="text-3xl font-bold mb-6 text-center text-black">Login</h2>
                {error && <p className="text-red-600 mb-4">{error}</p>}
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-text pt-1 text-black"
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-text pt-1 text-black"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2 text-gray-600"
                    tabIndex={-1}
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.042.168-2.04.475-2.975M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 2l20 20" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  >
                    {loading ? "Logging in..." : "Log In"}
                  </button>
                </form>
                <button
                  onClick={handleGoogleLogin}
                  className="w-full mt-4 py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700 transition flex items-center justify-center"
                >
                  <img src={googleIcon} alt="Google" className="w-6 h-6 mr-2" />
                  Continue with Google
                </button>
                <button
                  onClick={handleGithubLogin}
                  className="w-full mt-2 py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-900 transition flex items-center justify-center"
                >
                  <img src={githubIcon} alt="GitHub" className="w-6 h-6 mr-2" />
                  Continue with GitHub
                </button>
                <p className="mt-4 text-center text-black">
                  Don't have an account?{" "}
                  <button onClick={toggleSignup} className="text-blue-600 hover:underline">
                    Sign Up
                  </button>
                </p>
              </>
            ) : (
              <>
                <h2 className="text-3xl font-bold mb-6 text-center text-black pt-6 block"></h2>
                {error && <p className="text-red-600 mb-4">{error}</p>}
            <form onSubmit={handleSignupSubmit} className="space-y-4 text-black">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-center text-black">Signup</h2>
                <label htmlFor="displayName" className="block mb-1 font-semibold text-black">
                  Display Name
                </label>
                <input
                  type="text"
                  id="displayName"
                  name="displayName"
                  value={formData.displayName}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-text pt-1 text-black"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-semibold text-black">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-text pt-1 text-black"
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-1 font-semibold text-black">
                  Password
                </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-text pt-1 text-black"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2 text-gray-600"
                    tabIndex={-1}
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.042.168-2.04.475-2.975M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 2l20 20" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block mb-1 font-semibold text-black">
                  Confirm Password
                </label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-text pt-1 text-black"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-2 text-gray-600"
                  tabIndex={-1}
                >
                  {showConfirmPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.042.168-2.04.475-2.975M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 2l20 20" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
              <div>
                <label htmlFor="photo" className="block mb-1 font-semibold">
                  Profile Photo
                </label>
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isRobotChecked"
                  name="isRobotChecked"
                  checked={formData.isRobotChecked}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="isRobotChecked" className="select-none">
                  I am not a robot
                </label>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                {loading ? "Signing up..." : "Sign Up"}
              </button>
            </form>
                <p className="mt-4 text-center text-black">
                  Have an account?{" "}
                  <button onClick={toggleSignup} className="text-blue-600 hover:underline">
                    Log In
                  </button>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .flip {
          transform: rotateY(180deg);
        }
        .duration-600 {
          transition-duration: 600ms;
        }
      `}</style>
    </div>
  );
};

export default Login;
