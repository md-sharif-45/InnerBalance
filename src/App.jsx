import React, { useEffect, useState } from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Disorder from "./components/Disorder";
import Blogs from "./components/Blogs";
import Wellness from "./components/Wellness";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonial from "./static/Testimonial";
import Pricing from "./static/Pricing";
import Steps from "./static/steps";
import FAQ from "./static/FAQ";
import TermsAndConditions from "./static/TermsAndConditions";
import PrivacyPolicies from "./static/PrivacyPolicies";
import SupportCenter from "./static/SupportCenter";
import UserLogin from "./components/UserLogin"; // You can still route to this
import Article from "./components/Article";

function App() {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/user", {
        withCredentials: true,
      });
      setUser(res.data);
    } catch (error) {
      setUser(null);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("welcomeShown");
    window.location.href = "http://localhost:5000/logout";
  };

  useEffect(() => {
    fetchUser();
  }, []); // Ensure this fetches only once on component mount

  useEffect(() => {
    if (user && !localStorage.getItem("welcomeShown")) {
      alert(`Welcome, ${user.name}!`);
      localStorage.setItem("welcomeShown", "true");
    }
  }, [user]);

  return (
    <Router>
      <div className="font-primary overflow-x-hidden">
        <Navbar user={user} onLogout={handleLogout} />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/disorder" element={<Disorder />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/article" element={<Article />} />
          <Route path="/wellness" element={<Wellness />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/steps" element={<Steps />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/privacypolicies" element={<PrivacyPolicies />} />
          <Route path="/supportcenter" element={<SupportCenter />} />
          <Route path="/login" element={<UserLogin />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
