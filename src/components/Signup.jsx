import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";

const Signup = () => {
  const { signup, updateUserProfile, logout } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    displayName: "",
    photo: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "photo") {
      setFormData({ ...formData, photo: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      // Signup with email and password
      const userCredential = await signup(formData.email, formData.password);
      const user = userCredential.user;

      let photoURL = "";
      if (formData.photo) {
        // Upload photo to Firebase Storage
        const storageRef = ref(storage, `profilePhotos/${user.uid}/${formData.photo.name}`);
        await uploadBytes(storageRef, formData.photo);
        photoURL = await getDownloadURL(storageRef);
      }

      // Update user profile with displayName and photoURL
      await updateUserProfile({
        displayName: formData.displayName,
        photoURL,
      });

      // Log out the user after signup to prevent auto-login
      await logout();

      // Redirect to login page after signup
      navigate("/login");
    } catch (err) {
      setError(err.message || "Failed to create an account");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/src/assets/signup.png')" }}>
      <div className="min-h-screen flex justify-center items-center bg-transparent pt-10"> {/* Added padding-top and made background transparent */}
        <div className="flex flex-col md:flex-row rounded-lg shadow-lg max-w-5xl w-full mx-4 p-6 pt-10 bg-black bg-opacity-20 text-black">
          <div className="md:w-1/2 flex justify-center items-center p-4">
            <img src="/src/assets/signup.png" alt="Signup" className="rounded-lg max-w-full h-auto" />
          </div>
          <div className="md:w-1/2 p-6">
            <h2 className="text-3xl font-bold mb-6 text-center text-black">Sign Up</h2>
            {error && <p className="text-red-600 mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4 text-black">
              <div>
                <label htmlFor="displayName" className="block mb-1 font-semibold">
                  Display Name
                </label>
                <input
                  type="text"
                  id="displayName"
                  name="displayName"
                  value={formData.displayName}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-text pt-1"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-text pt-1"
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-1 font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-text pt-1"
                />
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
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                {loading ? "Signing up..." : "Sign Up"}
              </button>
            </form>
            <p className="mt-4 text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
