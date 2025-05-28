import React, { useEffect, useState } from "react";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://openlibrary.org/subjects/mindfulness.json?limit=10")
      .then((response) => response.json())
      .then((data) => setBooks(data.works || []))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 pt-24">
      <h1 className="text-3xl font-bold text-center text-primary">📖 Free Wellness Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {books.map((book) => (
          <div key={book.key} className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="font-semibold text-lg">{book.title}</h2>
            <p className="text-gray-600">{book.authors?.map((a) => a.name).join(", ")}</p>
            <a
              href={`https://openlibrary.org${book.key}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-2 inline-block"
            >
              Read Now →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
