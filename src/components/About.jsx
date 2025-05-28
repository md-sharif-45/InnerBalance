import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import talking from "../assets/images/talking.jpg";
import cyclists from "../assets/images/cyclists.jpg";
import mindful from "../assets/videos/mindful.mp4";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/animationVariants";
import { Link } from "react-router-dom"; // Import Link for routing

const About = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const handleVideoPause = () => {
    setIsVideoPlaying(false);
  };

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="about" className="bg-gradient-to-br from-green-50 via-white to-green-100 pb-16 pt-20">

      <div className="container mx-auto">
        <motion.div
          className="py-12 px-4 md:w-4/5 mx-auto flex-col md:flex-row flex items-center gap-8"
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
        >
          {/* Left side: Carousel */}
          <motion.div
            className="md:w-3/5 w-full mb-8 md:mb-0"
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
          >
            <h1 className="text-primary text-3xl text-center font-primary font-bold">
              About
            </h1>
            <Slider {...settings}>
              <div className="media-container">
                <img
                  src={talking}
                  alt="InnerBalance Slide 1"
                  className="media-item object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="media-container">
                <video
                  src={mindful}
                  className="media-item rounded-lg shadow-lg"
                  controls
                  onPlay={handleVideoPlay}
                  onPause={handleVideoPause}
                />
              </div>
              <div className="media-container">
                <img
                  src={cyclists}
                  alt="InnerBalance Slide 2"
                  className="media-item object-cover rounded-lg shadow-lg"
                />
              </div>
            </Slider>
          </motion.div>

          {/* Right side: Text content */}
          <motion.div
            className="md:w-2/5 w-full text-left px-4"
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
          >
            <h2 className="text-xl font-bold mb-3 text-primary">What We Do</h2>
            <p className="mb-4 text-base font-secondary text-gray-700 leading-relaxed">
              At <span className="font-bold">innerBalance</span>, we focus on
              providing mental well-being resources through blogs, videos, and
              personalized content. Our platform is designed to help individuals
              on their journey to mental health and emotional well-being.
            </p>

            <h3 className="text-xl font-semibold mb-2 text-primary">
              Our Mission
            </h3>
            <p className="mb-4 text-base text-gray-700 leading-relaxed font-secondary">
              We aim to empower individuals with the tools to manage their
              mental health and find balance in their lives.
            </p>

            <h3 className="text-xl font-semibold mb-2 text-primary">
              Our Values
            </h3>
            <ul className="grid grid-cols-2 gap-x-6 ml-6 space-y-1 text-base text-gray-700 font-secondary">
              <li>Empathy</li>
              <li>Inclusivity</li>
              <li>Growth</li>
              <li>Privacy</li>
            </ul>

            {/* Optional Call to Action */}
            <div className="flex flex-row gap-4 mt-6">
              <Link
                to="/services"
                className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition duration-300"
              >
                Explore
              </Link>
              <Link
                to="/Testimonial"
                className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition duration-300"
              >
                Testimonials
              </Link>
              <Link
                to="/Pricing"
                className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition duration-300"
              >
                Plans
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
