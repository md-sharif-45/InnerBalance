import React from "react";
import { motion } from "framer-motion";

const SupportCenter = () => {
  const supportOptions = [
    {
      title: "1. Technical Support",
      description:
        "Having trouble accessing your account or using our services? Our technical support team is here to help you resolve any issues.",
    },
    {
      title: "2. Billing and Payments",
      description:
        "Questions about billing, payments, or subscriptions? Get in touch with our billing department for assistance.",
    },
    {
      title: "3. Service Inquiries",
      description:
        "Need more information about our services or want to book a consultation? Contact our customer support team for guidance.",
    },
    {
      title: "4. Feedback and Suggestions",
      description:
        "We value your feedback! If you have suggestions or want to share your experience, reach out to us through our feedback portal.",
    },
    {
      title: "5. Account Management",
      description:
        "Need help updating your account information or managing your subscription? Our support team is here to assist you.",
    },
    {
      title: "6. General Inquiries",
      description:
        "Have a question that doesn’t fit into the categories above? Contact us with any general inquiries, and we’ll get back to you as soon as possible.",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 p-8 min-h-screen">
      <motion.h2
        className="text-3xl pt-10 font-bold text-primary text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Support Center
      </motion.h2>

      <motion.div
        className="max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-200 p-4 bg-white shadow-lg rounded-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {supportOptions.map((option, index) => (
          <motion.div
            key={index}
            className="border-b py-4 hover:bg-gray-100 rounded-lg transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-lg font-semibold text-gray-800">
              {option.title}
            </h3>
            <p className="mt-1 text-sm text-gray-600">{option.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="flex justify-center mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <a
          href="mailto:support@innerbalance.com?subject=Support Request"
          className="px-6 py-3 text-white bg-primary rounded-lg shadow-md hover:bg-primary-dark transition duration-300"
        >
          Contact Support
        </a>
      </motion.div>
    </div>
  );
};

export default SupportCenter;
