import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import axios from 'axios';

const API_KEY = '00febb722ba80009ebcd17cd109ce0f1';
const BASE_URL = 'http://api.mediastack.com/v1/news';

const Blogs = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchArticles = async (keyword = '') => {
    setLoading(true);
    try {
      const keywordParam = keyword ? `&keywords=${encodeURIComponent(keyword)}` : '';
      const url = `${BASE_URL}?access_key=${API_KEY}&categories=health&languages=en&limit=12${keywordParam}`;
      const response = await axios.get(url);
      setArticles(response.data.data);
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch fresh 12 health articles on mount
  useEffect(() => {
    fetchArticles();
  }, []);

  // Handle search input change
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    fetchArticles(value);
  };

  return (
    <div id='blog' className='min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100'>
      <Navbar />
      <div className='container mx-auto p-6 mt-10'>
        <motion.h1
          className='text-3xl font-primary font-bold mb-6 text-center text-green-700'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Well-being Articles
        </motion.h1>

        <div className='flex justify-center mb-6'>
          <input
            type='text'
            placeholder='Search articles...'
            className='p-2 w-2/3 md:w-1/3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500'
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        {loading ? (
          <div className='flex justify-center items-center min-h-[200px]'>
            <div className='w-12 h-12 border-4 border-green-500 border-dotted rounded-full animate-spin'></div>
          </div>
        ) : articles.length > 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {articles.map((article) => (
              <motion.div
                key={article.url}
                className='p-4 border rounded-lg shadow-sm bg-white transform transition duration-500 hover:scale-105 hover:shadow-lg cursor-pointer flex flex-col justify-between h-64 overflow-hidden'
                whileHover={{ scale: 1.05 }}
                onClick={() => window.open(article.url, '_blank')}
              >
                <h2 className='text-lg font-bold text-green-700 truncate'>{article.title}</h2>
                <p className='mt-2 text-gray-600 text-sm overflow-y-auto max-h-32'>
                  {article.description || 'No description available'}
                </p>
                <p className='mt-auto text-xs text-gray-500'>Source: {article.source}</p>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className='text-center text-red-500 font-semibold mt-10'>
            No articles found for "<span className='italic'>{searchTerm}</span>"
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
