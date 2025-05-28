import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import meditation from "../assets/favicon/meditation.svg";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/animationVariants";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-heroBg text-white font-extralight flex items-center pt-28 md:h-screen"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-8 overflow-y-hidden gap-12 h-full">
        {/* Left side */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2"
        >
          <h1 className="text-4xl font-secondary font-bold mb-4 md:w-3/5 leading-snug">
            Start your journey with InnerBalance
          </h1>
          <p className="text-lg mb-12 md:pr-8 font-sans">
            "Your hub for mental well-being. Explore insightful articles,
            resources, and our other services to support your journey toward
            balance and mindfulness. Find peace, reduce stress, and improve your
            mental health with InnerBalance."
          </p>
          {/* Use Link to navigate to the Contact page */}
          <Link
            to="/steps"
            className="bg-primary text-white py-3.5 px-8 font-medium rounded-md hover:bg-primary/90 inline-flex items-center gap-1 cursor-pointer"
          >
            <span>Get Started</span>
            <FaArrowRight />
          </Link>
        </motion.div>

        {/* Right side */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2 h-full"
        >
          <img
            src={meditation}
            alt="Person meditating, symbolizing mindfulness"
            className="w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
