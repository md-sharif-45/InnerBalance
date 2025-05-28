import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicies = () => {
  const policies = [
    {
      title: "1. Information Collection",
      description:
        "We collect personal information that you provide to us directly, such as when you sign up for our services, subscribe to our newsletter, or contact us for support.",
    },
    {
      title: "2. Use of Information",
      description:
        "Your information is used to provide and improve our services, process transactions, communicate with you, and personalize your experience on our platform.",
    },
    {
      title: "3. Data Sharing",
      description:
        "We do not sell or share your personal data with third parties except as necessary to provide our services, comply with legal obligations, or protect our rights.",
    },
    {
      title: "4. Data Security",
      description:
        "We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or destruction.",
    },
    {
      title: "5. Your Rights",
      description:
        "You have the right to access, update, or delete your personal information at any time by contacting us directly.",
    },
    {
      title: "6. Cookies",
      description:
        "We use cookies to enhance your experience on our website. You can choose to disable cookies in your browser settings, but some features of our services may not work as intended.",
    },
    {
      title: "7. Changes to This Policy",
      description:
        "We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page, and we encourage you to review it regularly.",
    },
    {
      title: "8. Contact Us",
      description:
        "If you have any questions or concerns about our Privacy Policy, please contact us at [your contact information].",
    },
  ];

  return (
    <div className="bg-gradient-to-r pt-16 from-purple-50 via-white to-purple-50 p-8 min-h-screen">
      <motion.h2
        className="text-3xl font-bold font-secondary text-primary text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Privacy Policies
      </motion.h2>

      <motion.div
        className="max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-200 p-4 bg-white shadow-lg rounded-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {policies.map((policy, index) => (
          <motion.div
            key={index}
            className="border-b py-4 hover:bg-gray-100 rounded-lg transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-lg font-semibold text-gray-800">
              {policy.title}
            </h3>
            <p className="mt-1 text-sm text-gray-600">{policy.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PrivacyPolicies;
