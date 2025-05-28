import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import coun from "../assets/images/coun.png";
import career from "../assets/images/career.png";
import diet1 from "../assets/images/diet1.png";
import diet from "../assets/images/diet.svg";
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animationVariants';
import NutritionAnalyzer from '../components/NutritionAnalyzer';

const questions = [
  "I feel optimistic about the future.",
  "I feel useful in my daily life.",
  "I am relaxed and not anxious.",
  "I deal well with problems.",
  "I think clearly and make decisions easily.",
  "I feel good about myself.",
  "I am able to face challenges.",
  "I enjoy activities and interests.",
  "I sleep well and wake refreshed.",
  "I feel connected to others.",
  "I have a sense of purpose in life.",
  "I feel confident in my abilities.",
  "I manage stress effectively.",
  "I can express my emotions healthily.",
  "I feel valued and respected.",
  "I find meaning in daily experiences.",
  "I accept myself as I am.",
  "I can ask for help when I need it.",
  "I feel energetic throughout the day.",
  "I am able to bounce back from setbacks."
];

const Services = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [preference, setPreference] = useState('veg');
  const [calories, setCalories] = useState(null);

  const [quizAnswers, setQuizAnswers] = useState(Array(20).fill(null));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const calculateCalories = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (!isNaN(h) && !isNaN(w)) {
      const bmr = 10 * w + 6.25 * h - 5 * 25 + 5;
      setCalories(bmr);
    }
  };

  return (
    <div id="services" className="bg-gradient-to-br from-green-50 via-white to-green-100 min-h-screen">
      <div className="pt-24 px-5 container mx-auto">
        <motion.div className="text-center space-y-5" variants={fadeIn("up", 0.2)} initial="hidden" animate="show">
          <h2 className="text-4xl font-bold font-secondary text-primary">
            What Can We Do Together
          </h2>
          <p className="md:w-1/2 mx-auto leading-relaxed">
            We provide a range of services to help you achieve balance in your life. Explore our counselling, career guidance, and more to find the support you need.
          </p>
        </motion.div>

        <div className="py-2 md:w-4/5 mx-auto">
          <Tabs selectedTabClassName="active-tab">
            <TabList className="flex overflow-x-auto md:overflow-visible whitespace-nowrap justify-between items-center md:gap-8 gap-4">
              <Tab className='hover:bg-primary cursor-pointer font-semibold'>Psychological Assessment</Tab>
              <Tab className='hover:bg-primary cursor-pointer font-semibold'>Dietitian Consultation</Tab>
              <Tab className='hover:bg-primary cursor-pointer font-semibold'>Online Counselling</Tab>
              <Tab className='hover:bg-primary cursor-pointer font-semibold'>Career Guidance</Tab>
            </TabList>

            {/* Psychological Assessment */}
            <TabPanel>
              <motion.div className="flex flex-col md:flex-row gap-8 mt-8" variants={fadeIn("up", 0.2)} initial="hidden" animate="show">
                <div className="md:w-[35%] bg-white rounded-lg p-8 font-secondary">
                  <h3 className="text-3xl font-semibold text-primary mb-4">Psychological Assessment</h3>
                  <p className="mb-6 leading-relaxed">
                    Psychological assessments provide insight into a client's strengths and needs, allowing for better tailored interventions and support.
                  </p>
                  <h4 className="text-xl font-medium text-black">Benefits</h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Identifies strengths and areas for improvement.</li>
                    <li>Helps detect underlying conditions or disorders.</li>
                    <li>Provides tailored support and resources for improved functioning.</li>
                  </ul>
                </div>

                <div className="md:w-[30%] hover:scale-105 transition-transform duration-300">
                  <img src={diet1} alt="Psychological assessment process" className="w-full h-auto rounded-2xl object-cover shadow-lg" />
                </div>

                <div className="md:w-[35%] bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold mb-4 font-secondary text-primary">Psychometric Assessment</h4>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                      <span>Progress</span>
                      <span>{Math.round((quizAnswers.filter(ans => ans !== null).length / questions.length) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{
                          width: `${(quizAnswers.filter(ans => ans !== null).length / questions.length) * 100}%`,
                          transition: 'width 0.3s ease-in-out',
                        }}
                      ></div>
                    </div>
                  </div>

                  {!quizSubmitted ? (
                    <>
                      <div className="mb-4">
                        <label className="block mb-2 font-medium">
                          Q{currentQuestion + 1}. {questions[currentQuestion]}
                        </label>
                        <select
                          value={quizAnswers[currentQuestion] || ''}
                          onChange={(e) => {
                            const updatedAnswers = [...quizAnswers];
                            updatedAnswers[currentQuestion] = parseInt(e.target.value);
                            setQuizAnswers(updatedAnswers);
                            if (currentQuestion < questions.length - 1) {
                              setCurrentQuestion(currentQuestion + 1);
                            } else {
                              setQuizSubmitted(true);
                            }
                          }}
                          className="w-full p-2 border rounded"
                        >
                          <option value="">Select</option>
                          {[1, 2, 3, 4, 5].map(val => (
                            <option key={val} value={val}>{val}</option>
                          ))}
                        </select>
                      </div>
                    </>
                  ) : (
                    <div className="mt-4">
                      <h5 className="text-lg font-semibold">
                        Score: {quizAnswers.reduce((a, b) => a + (b || 0), 0)} / {questions.length * 5}
                      </h5>
                      <p className="mt-2">
                        {(() => {
                          const score = quizAnswers.reduce((a, b) => a + (b || 0), 0);
                          if (score > 80) return "You seem emotionally resilient and mentally strong.";
                          if (score > 60) return "You appear balanced but may benefit from relaxation or mindfulness practices.";
                          if (score > 40) return "You may be facing some emotional challenges. Consider seeking support.";
                          return "Please consider professional help for emotional and psychological well-being.";
                        })()}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </TabPanel>

            {/* Dietitian Consultation */}
            <TabPanel>
              <motion.div className="flex flex-col md:flex-row gap-8 mt-8" variants={fadeIn("up", 0.2)} initial="hidden" animate="show">
                <div className="md:w-[35%] bg-white rounded-lg p-8 font-secondary">
                  <h3 className="text-3xl font-semibold text-primary mb-4">Dietitian Consultation</h3>
                  <p className="mb-6 leading-relaxed">
                    Dietitians aim to enhance clients' nutrition to improve overall health outcomes through balanced meal plans tailored to individual needs.
                  </p>
                  <h4 className="text-xl font-medium text-black">Benefits</h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Enhances nutrition to improve health outcomes.</li>
                    <li>Provides personalized dietary plans based on individual needs.</li>
                    <li>Considers lifestyle and preferences to increase adherence to nutrition plans.</li>
                  </ul>
                </div>
                {/* <div className="md:w-[30%] hover:scale-105 transition-transform duration-300">
                  <img src={diet} alt="Dietitian consultation session" className="w-full h-auto rounded-2xl object-cover shadow-lg" />
                </div> */}
                <div className="md:w-[35%] bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold mb-4">Calorie Calculator</h4>
                  <div className="flex flex-col gap-4">
                    <input type="number" placeholder="Height (cm)" value={height} onChange={(e) => setHeight(e.target.value)} className="p-2 border rounded" />
                    <input type="number" placeholder="Weight (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} className="p-2 border rounded" />
                    <select value={preference} onChange={(e) => setPreference(e.target.value)} className="p-2 border rounded">
                      <option value="veg">Vegetarian</option>
                      <option value="non-veg">Non-Vegetarian</option>
                    </select>
                    <button onClick={calculateCalories} className="px-6 py-2 bg-primary text-white rounded">Calculate</button>
                    {calories && (
                      <div className="mt-4">
                        <h5 className="text-lg font-semibold">Required Daily Calories: {Math.round(calories)} kcal</h5>
                        <p className="mt-2">Suggested diet ({preference}): Include a balanced mix of proteins, carbs, and healthy fats.</p>
                      </div>
                    )}
                  </div>
                </div>
                <NutritionAnalyzer/>
              </motion.div>
            </TabPanel>

            {/* Online Counselling */}
            <TabPanel>
              <motion.div className="flex flex-col md:flex-row gap-8 mt-8" variants={fadeIn("up", 0.2)} initial="hidden" animate="show">
                <div className="md:w-[45%] bg-white rounded-lg p-8 font-secondary">
                  <h3 className="text-3xl font-semibold text-primary mb-4">Online Counselling</h3>
                  <p className="mb-6 leading-relaxed">
                    Online counselling is a type of counselling which occurs through the use of different online platforms...
                  </p>
                  <h4 className="text-xl font-medium text-black">Benefits</h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>No commuting required.</li>
                    <li>People feel more authentic online.</li>
                    <li>Greater sense of control due to platform familiarity.</li>
                  </ul>
                </div>
                <div className="md:w-[36%] hover:scale-105 transition-transform duration-300">
                  <img src={coun} alt="Counselling session in progress" className="w-full h-auto rounded-2xl object-cover shadow-lg" />
                </div>
              </motion.div>
            </TabPanel>

            {/* Career Guidance */}
            <TabPanel>
              <motion.div className="flex flex-col md:flex-row gap-8 mt-8" variants={fadeIn("up", 0.2)} initial="hidden" animate="show">
                <div className="md:w-[45%] bg-white rounded-lg p-8 font-secondary">
                  <h3 className="text-3xl font-semibold text-primary mb-4">Career Guidance</h3>
                  <p className="mb-6 leading-relaxed">
                    Career guidance helps individuals of all ages make informed decisions about education and career paths.
                  </p>
                  <h4 className="text-xl font-medium text-black">Benefits</h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Helps individuals understand their strengths and interests.</li>
                    <li>Provides clarity on education and career paths.</li>
                    <li>Supports career changes with practical tools and advice.</li>
                  </ul>
                </div>
                <div className="md:w-[45%] hover:scale-105 transition-transform duration-300">
                  <img src={career} alt="Career guidance consultation" className="w-full h-auto rounded-2xl object-cover shadow-lg" />
                </div>
              </motion.div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Services;
