import React from "react";
import { motion } from "framer-motion";

const TermsAndConditions = () => {
  const terms = [
    {
      title: "1. Acceptance of Terms",
      description:
        "By accessing and using our services, you agree to comply with these Terms and Conditions. If you do not agree, please do not use our services.",
    },
    {
      title: "2. Changes to Terms",
      description:
        "We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting on our website.",
    },
    {
      title: "3. Service Usage",
      description:
        "You agree to use our services only for lawful purposes and in accordance with our guidelines. Any misuse may result in termination of your access.",
    },
    {
      title: "4. Confidentiality",
      description:
        "All information exchanged during the services is confidential. We will not disclose your personal information without your consent, except as required by law.",
    },
    {
      title: "5. Limitation of Liability",
      description:
        "We are not liable for any indirect, incidental, or consequential damages arising from your use of our services.",
    },
    {
      title: "6. Governing Law",
      description:
        "These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which we operate.",
    },
    {
      title: "7. Contact Information",
      description:
        "If you have any questions about these Terms, please contact us at [your contact information].",
    },
  ];

  return (
    <div className='bg-gradient-to-r from-blue-50 via-white to-blue-50 p-8 min-h-screen'>
      <motion.h2
        className='text-3xl font-bold pt-10 text-primary text-center mb-6'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Terms and Conditions
      </motion.h2>

      <motion.div
        className="max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-200 p-4 bg-white shadow-lg rounded-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {terms.map((term, index) => (
          <motion.div
            key={index}
            className='border-b py-4 hover:bg-gray-100 rounded-lg transition-colors duration-300'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className='text-lg font-semibold text-gray-800'>{term.title}</h3>
            <p className='mt-1 text-sm text-gray-600'>{term.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TermsAndConditions;
