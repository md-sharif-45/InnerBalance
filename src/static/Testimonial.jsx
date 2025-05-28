import React from "react";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { motion } from "framer-motion"; // Import framer-motion
import review1 from "../assets/images/review1.webp";
import review2 from "../assets/images/review2.jpg";

const testimonials = [
  {
    name: 'Arjun Mehra',
    location: 'Mumbai, Maharashtra',
    review: 'This service has been life-changing for me. The mental wellness resources and personalized support have made a huge difference in my daily life. Highly recommended!',
    image: review1,
  },
  {
    name: 'Vikram Singh',
    location: 'Jaipur, Rajasthan',
    review: 'I’ve tried many wellness programs, but this one stands out. The expert webinars and one-on-one coaching have been incredibly valuable. I feel more balanced and focused than ever before.',
    image: review2,
  },
];


const Testimonial = () => {
  return (
    <div id="testimonial" className=" bg-[#006A66] py-12 pt-20">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
        >
          <h2 className="text-4xl font-bold font-secondary mb-3 text-primary">
            What Our Clients Say
          </h2>
          <p className="text-lg mb-12 md:w-1/2 mx-auto text-white">
            Our clients appreciate our tailored solutions and the positive impact we have on their lives. We are committed to understanding their needs and helping them achieve their goals.
          </p>
        </motion.div>

        <div className="flex flex-col md:w-4/5 mx-auto md:flex-row md:gap-12 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-lg p-6 flex-1"
              initial={{ opacity: 0, scale: 0.9 }} // Start small and transparent
              animate={{ opacity: 1, scale: 1 }} // End at full size and visible
              transition={{ duration: 0.5, delay: index * 0.2 }} // Delay animations for staggered effect
            >
              <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
                <BsFillChatQuoteFill className="size-12 text-primary" />
              </div>
              <div className="flex flex-col space-y-3 mb-4">
                <p className="text-lg  font-light mb-2">{testimonial.review}</p>
                <div className="flex gap-1">
                  <img
                    src={testimonial.image}
                    alt="reviewer_img"
                    className="size-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
