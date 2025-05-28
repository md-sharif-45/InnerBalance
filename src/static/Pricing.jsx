import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

const packages = [
  {
    name: "Bronze Plan",
    price: "₹799/mo",
    description:
      "Ideal for individuals or small teams starting their mental wellness journey towards better health.",
    features: [
      "Access to basic wellness resources",
      "Weekly mental wellness tips",
      "Community support group access",
      "Monthly wellness newsletter",
    ],
  },
  {
    name: "Silver Plan",
    price: "₹1,599/mo",
    description:
      "A great choice for growing businesses with additional features and support for mental wellness.",
    features: [
      "All Bronze Package features",
      "Monthly guided meditation sessions",
      "Personalized wellness plan",
      "Access to expert webinars",
    ],
  },
  {
    name: "Gold Plan",
    price: "₹2,399/mo",
    description:
      "Perfect for larger businesses needing advanced mental wellness features and premium support.",
    features: [
      "All Silver Package features",
      "Weekly one-on-one coaching sessions",
      "Advanced mental wellness tracking tools",
      "24/7 access to mental wellness experts",
    ],
  },
];

const Pricing = () => {
  const handleScrollToContact = () => {
    const targetElement = document.getElementById("contact");
    if (targetElement) {
      window.scrollTo({ top: targetElement.offsetTop, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#006A66] pt-32" id="Pricing">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-secondary mb-3 text-white">
            Perfect for Individuals and Businesses of All Sizes
          </h2>
          <p className="text-lg mb-12 md:w-2/3 mx-auto text-white">
            At InnerBalance, we offer tailored mental wellness packages to
            support your unique journey. Choose a plan that fits your needs and
            unlock premium wellness resources.
          </p>
        </div>

        {/* Packages */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 pb-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 flex-1 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }} // Initial state
              animate={{ opacity: 1, y: 0 }} // Animation state
              transition={{ duration: 0.5, delay: index * 0.1 }} // Delay based on index for staggered effect
            >
              <h3 className="text-2xl font-semibold mb-4">{pkg.name}</h3>
              <hr className="w-24 border text-primary border-primary mb-4" />
              <p className="text-3xl font-bold mb-4">{pkg.price}</p>
              <p className="text-lg mb-4">{pkg.description}</p>
              <ul className="list-disc list-inside space-y-1 mb-6">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-700">
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="bg-primary text-white py-3.5 px-8 font-medium rounded-md hover:bg-primary/90 inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Get Started</span>
                <FaArrowRight />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
