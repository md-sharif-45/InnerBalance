import React from 'react';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarker, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import innerbal from '../assets/images/innerbal.svg' 

const Footer = () => {
  return (
    <div id='footer' className='py-12 bg-gray-200 px-8'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-8'>
        <div className='space-y-6 mr-14'>
          <div className='flex items-center space-x-2'>
            <img src={innerbal} alt="Footer Logo" className='w-50 h-auto'/>
          </div>
          <p className='text-para'>We aim to empower individuals with the tools to manage their mental health and find balance in their lives.</p>
          <div className='flex space-x-4'>
            <a href="https://facebook.com" className='bg-gray-200 text-primary rounded-full p-2 flex items-center justify-center hover:bg-primary hover:text-white'>
              <FaFacebook className='text-xl' />
            </a>
            <a href="https://linkedin.com" className='bg-gray-200 text-primary rounded-full p-2 flex items-center justify-center hover:bg-primary hover:text-white'>
              <FaLinkedin className='text-xl' />
            </a>
            <a href="https://instagram.com" className='bg-gray-200 text-primary rounded-full p-2 flex items-center justify-center hover:bg-primary hover:text-white'>
              <FaInstagram className='text-xl' />
            </a>
          </div>
        </div>

        <div className='space-y-6'>
           <h3 className='pt-5 text-xl font-semibold mb-4 h-35'>Quick Links</h3>
           <ul className='space-y-3'>
            <li><a href="#home" className='hover:underline text-gray-700'>Home</a></li>
            <li><a href="/about" className='hover:underline text-gray-700'>About us</a></li>
            <li><a href="/testimonial" className='hover:underline text-gray-700'>Testimonial</a></li>
            <li><a href="/blog" className='hover:underline text-gray-700'>Blogs</a></li>
            <li><a href="/store" className='hover:underline text-gray-700'>Store</a></li>
           </ul>
        </div>
        <div className='space-y-6'>
           <h3 className='pt-5 text-xl font-semibold mb-4 h-35'>Supports</h3>
           <ul className='space-y-3'>
            <li><a href="/FAQ" className='hover:underline text-gray-700'>FAQ</a></li>
            <li><a href="/TermsAndConditions" className='hover:underline text-gray-700'>Terms of Services</a></li>
            <li><a href="/PrivacyPolicies" className='hover:underline text-gray-700'>Privacy policies</a></li>
            <li><a href="/SupportCenter" className='hover:underline text-gray-700'>Support Center</a></li> 
           </ul>
        </div>
        <div className='space-y-6'>
           <h3 className='pt-5 text-xl font-semibold mb-4 h-35'>Contact Info</h3>
           <ul className='space-y-3'>
            <li className='flex items-center gap-2'>
            <FaMapMarkerAlt className='text-primary'/>
            <p className='text-gray-700'> MEDICAL ROAD , Gorakhpur,273007, INDIA</p>
            </li>
            <li className='flex items-center gap-2'>
            <FaPhoneAlt className='text-primary'/>
            <p className='text-gray-700'>+91 817509XX38</p>
            </li>
            <li className='flex items-center gap-2'>
            <FaEnvelope className='text-primary'/>
            <p className='text-gray-700'>info@innerPeace.com</p>
            </li>
           </ul>
        </div>
      </div>
    </div>
  )
};

export default Footer;
