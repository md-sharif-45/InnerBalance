import React, { useEffect, useState } from "react";
import axios from "axios";

const UserLogin = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  const handleSubmit = async () => {
    const url = isSignup ? "/auth/signup" : "/auth/login";

    try {
      const res = await axios.post(`http://localhost:5000${url}`, {
        email,
        password,
      });

      if (!isSignup) {
        // For login: store JWT or redirect
        alert("Login successful!");
        localStorage.setItem("token", res.data.token);
      } else {
        alert("Signup successful! Please log in.");
        setIsSignup(false);
      }
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div
      className={`flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 transition-opacity duration-500 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          {isSignup ? "Create Account" : "Welcome Back!"}
        </h2>
        <p className="text-gray-600 mb-6">
          {isSignup
            ? "Sign up for your InnerBalance account"
            : "Sign in to your InnerBalance account"}
        </p>

        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 w-full shadow-md hover:shadow-xl focus:outline-none transform hover:scale-105 active:scale-95 mb-4"
        >
          Sign in with Google
        </button>

        {/* Email Form */}
        <div className="text-left mb-4">
          <label htmlFor="email" className="text-sm text-gray-700 mb-2 block">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your email"
          />
        </div>

        <div className="text-left mb-6">
          <label htmlFor="password" className="text-sm text-gray-700 mb-2 block">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your password"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 mb-4"
        >
          {isSignup ? "Sign Up" : "Sign In"}
        </button>

        <p className="text-sm text-gray-500">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-blue-600 hover:underline"
          >
            {isSignup ? "Sign in here" : "Sign up here"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
