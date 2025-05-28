import React from 'react';
import { Link } from "react-router-dom";

const Steps = () => {
  return (
    <div id='steps' className='relative bg-white bg-center py-12 pt-32'>
      <div className='absolute inset-0 bg-opacity-85'></div>
      <h2 className='text-primary text-center mb-8 text-3xl font-secondary font-bold '>Steps to Wellness</h2>  

      <div className='flex flex-col md:w-4/5 mx-auto md:flex-row gap-8'>
        {/* Step 1 */}
        <div className='relative bg-white text-center rounded-lg p-6 flex-1'>
          <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-2xl rounded-full flex items-center justify-center w-10 h-10'>
            1
          </div>
          <h3 className='text-xl font-primary font-bold mt-8 '>Fill Out a Form</h3>
          <p className='my-4 text-center leading-relaxed text-sm'>
            Begin by filling out a detailed form to help us understand your mental health needs. 
            This is the first step in your journey towards better well-being. Provide as much information 
            as you can so that we can tailor the right solutions for you.
          </p>
        </div>

        {/* Step 2 */}
        <div className='relative bg-white text-center rounded-lg p-6 flex-1'>
          <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-2xl rounded-full flex items-center justify-center w-10 h-10'>
            2
          </div>
          <h3 className='text-xl font-primary font-bold mt-8'>Schedule a Consultation</h3>
          <p className='my-4 text-center leading-relaxed text-sm'>
            After reviewing your form, you will be able to schedule a consultation with one of our
            mental health professionals. This consultation is designed to provide a personalized action plan
            based on your specific needs and goals.
          </p>
        </div>

        {/* Step 3 */}
        <div className='relative bg-white text-center rounded-lg p-6 flex-1'>
          <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-2xl rounded-full flex items-center justify-center w-10 h-10'>
            3
          </div>
          <h3 className='text-xl font-primary font-bold mt-8'>Engage in Sessions</h3>
          <p className='my-4 text-center leading-relaxed text-sm'>
            Once the consultation is completed, begin attending regular sessions where our experts will
            guide you through various strategies and techniques to manage and improve your mental well-being.
            Ongoing support is key to achieving long-term results.
          </p>
        </div>
      </div>    
    </div>
  );
};

export default Steps;
