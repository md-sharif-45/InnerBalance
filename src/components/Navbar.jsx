import React, { useState, useEffect } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaUser, FaPhone, FaSignOutAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleToggle = () => setIsOpen(!isOpen);
  const handleCloseMenu = () => setIsOpen(false);

  const handleScroll = () => {
    const sections = ["home", "about", "services", "disorder", "blog", "wellness"];
    const scrollPosition = window.scrollY + 100;
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const navLinks = (
    <ul className="font-bold font-secondary flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0">
      {["home", "about", "services", "disorder", "blog", "wellness"].map((section) => (
        <li key={section}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link
              to={section === "home" ? "/" : `/${section}`}
              className={`text-white ${activeSection === section ? "isActive" : ""}`}
              onClick={() => {
                setActiveSection(section);
                handleCloseMenu();
                if (section !== "home") handleScrollTo(section);
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </motion.div>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="bg-heroBg text-white py-0 px-4 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div>
          <Link to="/">
            <img src="./innerbal.svg" alt="logo" className="h-12 w-full" />
          </Link>
        </div>

        <div className="hidden md:flex flex-grow justify-center">
          <nav>{navLinks}</nav>
        </div>

        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <span className="font-semibold text-white hidden md:block">
                👤 {user.name}
              </span>
              <button
                onClick={onLogout}
                className="text-white bg-red-500 hover:bg-red-600 p-2 rounded-full transition-transform transform hover:scale-105 shadow-lg"
              >
                <FaSignOutAlt size={20} />
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="text-white font-semibold bg-primary hover:bg-primary/90 p-2 rounded-full flex items-center justify-center transition-transform transform hover:scale-105 shadow-lg"
            >
              <FaUser className="text-white" size={24} />
            </Link>
          )}

          <Link
            to="/contact"
            className="text-white font-semibold bg-primary hover:bg-primary/90 p-2 rounded-full flex items-center justify-center transition-transform transform hover:scale-105 shadow-lg"
          >
            <FaPhone className="text-white" size={24} />
          </Link>
        </div>

        <div className="block md:hidden">
          <button onClick={handleToggle} className="text-white focus:outline-none">
            <HiOutlineMenuAlt3 className="size-6" />
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-heroBg z-20 md:hidden">
          <ul className="flex flex-col p-4 space-y-3">
            {navLinks.props.children}
            <li>
              <Link
                to="/contact"
                className="text-white bg-primary hover:bg-primary/90 p-2 rounded-full flex items-center justify-center transition-transform transform hover:scale-105 shadow-lg"
              >
                <FaPhone className="text-white" size={24} />
              </Link>
            </li>
            {user ? (
              <li>
                <button
                  onClick={onLogout}
                  className="text-white bg-red-500 hover:bg-red-600 p-2 rounded-full flex items-center justify-center transition-transform transform hover:scale-105 shadow-lg w-full"
                >
                  <FaSignOutAlt className="mr-2" /> Logout
                </button>
              </li>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="text-white bg-primary hover:bg-primary/90 p-2 rounded-full flex items-center justify-center transition-transform transform hover:scale-105 shadow-lg w-full"
                >
                  <FaUser className="mr-2" /> Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
