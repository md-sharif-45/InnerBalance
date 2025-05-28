import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a range of mental wellness services, including personalized coaching, online resources, and community support.",
    },
    {
      question: "How can I book an appointment?",
      answer:
        "You can book an appointment by filling out our contact form, and one of our team members will get back to you shortly.",
    },
    {
      question: "Are your services confidential?",
      answer:
        "Yes, all our services are confidential, and we adhere to strict privacy policies to protect your information.",
    },
    {
      question: "Do you provide virtual sessions?",
      answer:
        "Absolutely! We provide both virtual and in-person sessions to accommodate your needs.",
    },
    {
      question: "What is the cost of your services?",
      answer:
        "Our pricing varies depending on the service. Please visit our pricing page for detailed information.",
    },
    {
      question: "Can I change or cancel my appointment?",
      answer:
        "Yes, you can change or cancel your appointment up to 24 hours in advance without any penalty.",
    },
    {
      question: "Do you offer group therapy sessions?",
      answer: "Yes, we do offer group therapy sessions focused on various mental health topics.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "If you cancel your appointment within 24 hours, a cancellation fee may apply.",
    },
    {
      question: "How do I know which service is right for me?",
      answer:
        "You can schedule a consultation with our experts, who can help you choose the best service based on your needs.",
    },
    {
      question: "What should I expect during my first session?",
      answer:
        "During your first session, we will discuss your goals, challenges, and create a personalized plan for your wellness journey.",
    },
    {
      question: "Are your therapists qualified?",
      answer: "Yes, all our therapists are licensed and have extensive experience in mental health and wellness.",
    },
    {
      question: "Can I request a specific therapist?",
      answer:
        "Yes, you can request a specific therapist based on your preference or previous experience.",
    },
    {
      question: "How do I provide feedback on the services?",
      answer: "We welcome feedback! You can provide feedback through our contact form or during your session.",
    },
    {
      question: "Do you have resources for family members?",
      answer:
        "Yes, we offer resources and support for family members of individuals seeking mental wellness.",
    },
    {
      question: "How can I stay updated on your services and offerings?",
      answer:
        "You can subscribe to our newsletter and follow us on social media to stay updated on our latest services and offerings.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-r pt-16 from-green-50 via-white to-green-50 p-8 min-h-screen">
      <motion.h2
        className="text-3xl font-bold text-primary  text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Frequently Asked Questions
      </motion.h2>

      <motion.div
        className="max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-200 p-4 bg-white shadow-lg rounded-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="border-b py-4 hover:bg-gray-100 rounded-lg transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center cursor-pointer p-2"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {faq.question}
              </h3>
              <span
                className={`text-xl transform transition-transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                &#9654;
              </span>
            </div>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.p
                  className="mt-2 text-base text-gray-600"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FAQ;
