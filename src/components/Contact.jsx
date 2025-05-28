import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaGlobe, FaPhone } from "react-icons/fa6";
import { motion } from "framer-motion";
import axios from 'axios';

const fadeIn = (direction = "up", duration = 0.3) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : -40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        ease: "easeInOut",
      },
    },
  };
};

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !country || !message) {
      alert("Please enter all fields");
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/contact', {
        name,
        email,
        country,
        phone,
        message,
      });

      if (response.status === 201) {
        setModalMessage(`Thank you, ${name}! Your message has been submitted.`);
        setShowModal(true);
        setName("");
        setEmail("");
        setPhone("");
        setCountry("");
        setMessage("");
      }
    } catch (error) {
      console.error("Error submitting the form", error);
      setModalMessage("Sorry, there was an issue submitting your message.");
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <motion.div
      className="bg-heroBg flex items-center justify-center py-28 px-8"
      id="contact"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="container mx-auto"
        variants={fadeIn("up", 0.3)}
      >
        <div className="md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-8">
          {/* Left side */}
          <motion.div className="space-y-8" variants={fadeIn("left", 1)}>
            <h2 className="text-4xl font-bold font-secondary mb-4 text-white">
              Make an appointment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                  <FaUser className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">24 Hours Services</h3>
                  <p>Always Here for Your Wellness!</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                  <FaEnvelope className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">Expert Therapists</h3>
                  <p>Compassionate Care, Professional Guidance.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                  <FaPhone className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">High quality Care</h3>
                  <p>Tailored Wellness, Trusted Results.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                  <FaGlobe className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">Trusted clinic</h3>
                  <p>Your Wellness, Our Priority.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side */}
          <motion.div className="space-y-8 p-6 bg-white shadow-xl rounded-md" variants={fadeIn("right", 1)}>
            <h3 className="text-2xl font-bold mb-4">Book Appointment</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="flex sm:flex-row flex-col gap-4">
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  value={name}
                  placeholder="Enter your Name"
                  className="w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  value={email}
                  placeholder="Enter Email"
                  className="w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                />
              </div>
              <div className="flex sm:flex-row flex-col gap-4">
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  value={phone}
                  placeholder="Contact number"
                  className="w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                />
                <input
                  onChange={(e) => setCountry(e.target.value)}
                  type="text"
                  value={country}
                  placeholder="Country"
                  className="w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                />
              </div>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                rows="5"
                placeholder="Write your message..."
                className="w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
              ></textarea>
              <motion.button
                type="submit"
                className="w-full p-3 bg-primary text-white rounded-md hover:bg-primary/80"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90">
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p>{modalMessage}</p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-primary text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Contact;
