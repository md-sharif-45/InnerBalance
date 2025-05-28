// src/pages/Article.js

import React from 'react';
import { useParams } from 'react-router-dom';

const Article = ({ articles }) => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) return <p>Article not found</p>;

  return (
    <div className="container mx-auto p-6 mt-10">
      <h1 className="text-3xl font-bold text-primary mb-4">{article.title}</h1>
      <p className="text-gray-800">{article.content}</p>
    </div>
  );
};

export default Article;
