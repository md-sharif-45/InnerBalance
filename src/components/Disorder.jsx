import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion
import anxiety from '../assets/images/disorder/anxiety.jpg'
import depression from '../assets/images/disorder/depression.jpg'
import bipolar from '../assets/images/disorder/bipolar.webp'
import OCD from '../assets/images/disorder/OCD.jpg'
import PSTD from '../assets/images/disorder/PSTD.webp'
import schizophrenia from '../assets/images/disorder/schizophrenia.webp'
import border from '../assets/images/disorder/border.webp'
import ADHD from '../assets/images/disorder/ADHD.webp'
import eating from '../assets/images/disorder/eating.webp'
import Socialanxity from '../assets/images/disorder/Socialanxity.png'
import GAD from '../assets/images/disorder/GAD.jpg'
import panic from '../assets/images/disorder/panic.jpeg';
import diss from '../assets/images/disorder/diss.jpg'
import SAD from '../assets/images/disorder/SAD.webp'
import substances from '../assets/images/disorder/substances.jpg'
import Agoraphobia from '../assets/images/disorder/Agoraphobia.webp'
import illness from '../assets/images/disorder/illness.jpg'
import hoarding from '../assets/images/disorder/hoarding.jpg'
import trauma from '../assets/images/disorder/trauma.svg'
import personality from '../assets/images/disorder/personality.webp'

// Sample data for disorders
const disorders = [
  {
    id: 1,
    name: 'Anxiety Disorder',
    image: anxiety,
    description: 'Anxiety disorder involves excessive worry and fear about everyday situations.',
    causes: 'Anxiety can be caused by genetics, brain chemistry, or stressful life experiences.',
    symptoms: 'Common symptoms include restlessness, fatigue, difficulty concentrating, irritability, and sleep disturbances.',
    treatment: 'Cognitive Behavioral Therapy (CBT), relaxation techniques, and medications like SSRIs can help manage anxiety.'
  },
  {
    id: 2,
    name: 'Depression',
    image: depression,
    description: 'Depression is a mood disorder causing persistent sadness and loss of interest in activities.',
    causes: 'Depression can stem from genetics, chemical imbalances, stressful life events, or chronic illnesses.',
    symptoms: 'Symptoms include persistent low mood, lack of energy, difficulty sleeping, and thoughts of self-harm.',
    treatment: 'Counseling, antidepressants, exercise, and a support network are key in treating depression.'
  },
  {
    id: 3,
    name: 'Bipolar Disorder',
    image: bipolar,
    description: 'Bipolar disorder is characterized by extreme mood swings, including emotional highs and lows.',
    causes: 'The cause of bipolar disorder is not well understood but may involve genetics, brain structure, and stress.',
    symptoms: 'Manic episodes include high energy and irritability, while depressive episodes involve sadness and low energy.',
    treatment: 'Mood stabilizers, psychotherapy, and lifestyle changes like regular sleep patterns help manage symptoms.'
  },
  {
    id: 4,
    name: 'Obsessive-Compulsive Disorder (OCD)',
    image: OCD,
    description: 'OCD involves unwanted, repetitive thoughts (obsessions) and behaviors (compulsions).',
    causes: 'OCD may be linked to genetics, brain structure, and stressful life events.',
    symptoms: 'Obsessions are intrusive thoughts, while compulsions are repetitive behaviors to reduce anxiety.',
    treatment: 'CBT, specifically Exposure and Response Prevention (ERP), along with medications, can alleviate symptoms.'
  },
  {
    id: 5,
    name: 'Post-Traumatic Stress Disorder (PTSD)',
    image: PSTD,
    description: 'PTSD occurs after a traumatic event, causing flashbacks, anxiety, and difficulty coping.',
    causes: 'PTSD can result from witnessing or experiencing traumatic events like war, accidents, or abuse.',
    symptoms: 'Symptoms include flashbacks, nightmares, severe anxiety, and avoidance of reminders of the trauma.',
    treatment: 'Trauma-focused therapies, medications, and support groups help with recovery.'
  },
  {
    id: 6,
    name: 'Schizophrenia',
    image: schizophrenia,
    description: 'Schizophrenia is a chronic brain disorder that affects how a person thinks, feels, and behaves.',
    causes: 'Causes may include genetics, brain chemistry, and environmental factors such as stress.',
    symptoms: 'Symptoms include hallucinations, delusions, disorganized thinking, and impaired functioning.',
    treatment: 'Antipsychotic medications and psychotherapy are essential for managing symptoms.'
  },
  {
    id: 7,
    name: 'Borderline Personality Disorder',
    image: border,
    description: 'Borderline Personality Disorder (BPD) causes unstable moods, behavior, and relationships.',
    causes: 'The exact causes are unclear but may involve genetics, brain function, and environmental stressors.',
    symptoms: 'Symptoms include mood swings, impulsive actions, and difficulty maintaining relationships.',
    treatment: 'Dialectical Behavior Therapy (DBT), psychotherapy, and sometimes medications are used for treatment.'
  },
  {
    id: 8,
    name: 'Attention Deficit Hyperactivity Disorder (ADHD)',
    image: ADHD,
    description: 'ADHD is characterized by difficulty sustaining attention, hyperactivity, and impulsivity.',
    causes: 'The causes may include genetics, brain structure differences, and environmental factors.',
    symptoms: 'Inattention, hyperactivity, and impulsiveness are common symptoms.',
    treatment: 'Behavioral therapy, medications such as stimulants, and educational support can help manage ADHD.'
  },
  {
    id: 9,
    name: 'Eating Disorders (e.g., Anorexia Nervosa, Bulimia Nervosa)',
    image: eating,
    description: 'Eating disorders involve unhealthy relationships with food, body image, and weight.',
    causes: 'Factors include genetics, psychological issues, and societal pressures regarding body image.',
    symptoms: 'Symptoms range from restrictive eating to bingeing and purging, accompanied by extreme weight changes.',
    treatment: 'A combination of psychotherapy, medical intervention, and nutritional counseling is essential for recovery.'
  },
  {
    id: 10,
    name: 'Social Anxiety Disorder',
    image: Socialanxity,
    description: 'Social anxiety disorder is an intense fear of being judged or embarrassed in social situations.',
    causes: 'It may result from a combination of genetic factors, brain structure, and negative social experiences.',
    symptoms: 'Symptoms include intense fear of social situations, avoidance, and physical symptoms like sweating.',
    treatment: 'CBT and medication can significantly improve social anxiety symptoms.'
  },
  {
    id: 11,
    name: 'Generalized Anxiety Disorder (GAD)',
    image: GAD,
    description: 'GAD is characterized by excessive anxiety and worry about multiple aspects of life.',
    causes: 'Causes may include family history, personality, and ongoing stressful situations.',
    symptoms: 'Symptoms include constant worry, restlessness, fatigue, and difficulty concentrating.',
    treatment: 'CBT, medications, and relaxation techniques are common treatments.'
  },
  {
    id: 12,
    name: 'Panic Disorder',
    image: panic,
    description: 'Panic disorder involves sudden, recurrent panic attacks with overwhelming fear.',
    causes: 'Genetics, stress, and abnormal brain function may contribute to panic disorder.',
    symptoms: 'Symptoms include rapid heartbeat, sweating, shaking, and feeling out of control during attacks.',
    treatment: 'CBT, medications, and breathing exercises can help manage panic disorder.'
  },
  {
    id: 13,
    name: 'Dissociative Disorders',
    image: diss,
    description: 'Dissociative disorders involve disruptions in identity, memory, and awareness.',
    causes: 'Often related to traumatic experiences, such as abuse or extreme stress.',
    symptoms: 'Symptoms include memory loss, a sense of detachment from oneself, and identity confusion.',
    treatment: 'Psychotherapy, particularly trauma-focused therapies, and medications can help manage symptoms.'
  },
  {
    id: 14,
    name: 'Seasonal Affective Disorder (SAD)',
    image: SAD,
    description: 'SAD is a type of depression that occurs at specific times of the year, typically during winter.',
    causes: 'SAD may be caused by reduced sunlight, affecting serotonin and melatonin levels.',
    symptoms: 'Symptoms include fatigue, depression, hopelessness, and social withdrawal.',
    treatment: 'Light therapy, medication, and psychotherapy are common treatments.'
  },
  {
    id: 15,
    name: 'Substance Use Disorder',
    image: substances,
    description: 'This disorder involves dependence on alcohol or drugs, leading to impairment or distress.',
    causes: 'Substance use disorder can develop due to genetic predisposition, environmental factors, and mental health issues.',
    symptoms: 'Symptoms include cravings, inability to stop using, and withdrawal symptoms.',
    treatment: 'Rehabilitation programs, counseling, and support groups like AA or NA are essential for recovery.'
  },
  {
    id: 16,
    name: 'Agoraphobia',
    image: Agoraphobia,
    description: 'Agoraphobia involves fear of places or situations where escape might be difficult.',
    causes: 'Agoraphobia is often linked to panic disorder or past traumatic experiences in public places.',
    symptoms: 'Symptoms include fear of leaving home, avoiding crowded places, and experiencing panic attacks.',
    treatment: 'CBT and gradual exposure therapy are effective treatments.'
  },
  {
    id: 17,
    name: 'Illness Anxiety Disorder',
    image: illness,
    description: 'Formerly known as hypochondriasis, this disorder involves excessive worry about having a serious illness.',
    causes: 'Causes may include past experiences with illness, family history, or overly health-conscious behaviors.',
    symptoms: 'Persistent fear of illness despite reassurance, excessive health-related behaviors, and anxiety about health.',
    treatment: 'CBT is effective in managing the disorder, and medications can help alleviate anxiety.'
  },
  {
    id: 18,
    name: 'Hoarding Disorder',
    image: hoarding,
    description: 'Hoarding disorder involves difficulty discarding possessions, leading to clutter and distress.',
    causes: 'It may be related to traumatic events, indecisiveness, or anxiety about losing important items.',
    symptoms: 'Inability to discard possessions, cluttered living spaces, and distress over the thought of discarding items.',
    treatment: 'CBT and sometimes medications are used to manage symptoms.'
  },
  {
    id: 19,
    name: 'Trauma and Stressor-Related Disorders',
    image: trauma,
    description: 'These disorders occur after exposure to a traumatic or stressful event, such as adjustment disorders, PTSD, or acute stress disorder.',
    causes: 'These disorders are triggered by experiencing or witnessing traumatic events such as accidents, violence, or natural disasters.',
    symptoms: 'Symptoms include flashbacks, nightmares, severe anxiety, and emotional numbness.',
    treatment: 'Treatment typically involves trauma-focused therapy, medication, and support from loved ones or support groups.'
  },
  {
    id: 20,
    name: 'Personality Disorders',
    image: personality,
    description: 'Personality disorders are a group of mental illnesses that involve enduring patterns of behavior, thinking, and feeling that deviate from social expectations.',
    causes: 'The causes may include genetics, environmental influences during childhood, and trauma.',
    symptoms: 'Symptoms vary by specific disorder but can include difficulties with relationships, self-image, and emotions. Examples include Borderline Personality Disorder and Narcissistic Personality Disorder.',
    treatment: 'Psychotherapy, particularly long-term talk therapy like CBT or DBT, is the primary treatment. Medications may help manage co-occurring symptoms like anxiety or depression.'
  }
];

const Disorder = () => {
  const [selectedDisorder, setSelectedDisorder] = useState(disorders[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id='disorder' className='min-h-screen bg-[#006A66] flex items-center justify-center'>
      <div className="container mx-auto flex flex-col md:flex-row py-6 px-4">
        
        {/* Left side: List of disorders */}
        <motion.div 
          className="md:w-1/3 w-full bg-slate-100 p-4 rounded-lg shadow-lg"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-primary">Mental Disorders</h2>
          <button 
            onClick={toggleMenu} 
            className="md:hidden p-2 bg-blue-500 text-white rounded mb-4"
          >
            {isMenuOpen ? 'Close' : 'Disorder List'}
          </button>
          <div className={`overflow-auto ${isMenuOpen ? 'block' : 'hidden'} md:block`} style={{ maxHeight: '400px' }}>
            <ul className="space-y-2">
              {disorders.map(disorder => (
                <motion.li
                  key={disorder.id}
                  className={`cursor-pointer p-2 mb-2 border rounded-lg ${selectedDisorder.id === disorder.id ? 'bg-gray-300' : 'hover:bg-gray-200'}`}
                  onClick={() => {
                    setSelectedDisorder(disorder);
                    setIsMenuOpen(false);
                  }}
                  whileHover={{ scale: 1.05 }} // Scale effect on hover
                  transition={{ duration: 0.2 }} // Transition duration
                >
                  {disorder.name}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Right side: Disorder details */}
        <motion.div 
          className="md:w-2/3 w-full bg-[#091e2a] p-4 rounded-lg shadow-lg"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-indigo-400">{selectedDisorder.name}</h2>

          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 w-full">
              <p className="text-lg mb-4 text-cyan-100">{selectedDisorder.description}</p>

              <h3 className="text-xl font-semibold mb-2 text-white">Causes</h3>
              <p className="mb-4 text-gray-300">{selectedDisorder.causes}</p>

              <h3 className="text-xl font-semibold mb-2 text-white">Symptoms</h3>
              <p className="mb-4 text-gray-300">{selectedDisorder.symptoms}</p>

              <h3 className="text-xl font-semibold mb-2 text-white">Treatment</h3>
              <p className="mb-4 text-gray-300">{selectedDisorder.treatment}</p>
            </div>

            <div className="md:w-1/3 w-full flex justify-center items-center md:ml-4 mt-4 md:mt-0">
              <img
                src={selectedDisorder.image}
                alt={selectedDisorder.name}
                className="w-full h-auto max-w-xs md:max-w-md object-cover rounded transition-transform duration-300 ease-in-out transform hover:scale-110" // Add a scale effect on hover
              />
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default Disorder;