import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion"; // <== added

const Wellness = () => {
  const [activeTab, setActiveTab] = useState("books");
  const [books, setBooks] = useState([]);
  const [music, setMusic] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loadingBooks, setLoadingBooks] = useState(true);
  const [loadingMusic, setLoadingMusic] = useState(true);
  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeTab]);

  useEffect(() => {
    setLoadingBooks(true);
    fetch("https://openlibrary.org/subjects/mindfulness.json?limit=12")
      .then((res) => res.json())
      .then((data) => setBooks(data.works || []))
      .catch((err) => console.error("Error fetching books:", err))
      .finally(() => setLoadingBooks(false));
  }, []);

  useEffect(() => {
    setLoadingMusic(true);
    fetch(
      "https://api.jamendo.com/v3.0/tracks/?client_id=63ab3695&format=json&limit=12&tags=relaxing&include=musicinfo"
    )
      .then((res) => res.json())
      .then((data) => setMusic(data.results || []))
      .catch((err) => console.error("Error fetching music:", err))
      .finally(() => setLoadingMusic(false));
  }, []);

  useEffect(() => {
    setVideos([
      { videoId: "inpok4MKVLM", title: "5-Minute Meditation You Can Do Anywhere" },
      { videoId: "ZToicYcHIOU", title: "Guided Meditation for Anxiety & Stress" },
      { videoId: "MIr3RsUWrdo", title: "Yoga For Complete Beginners" },
      { videoId: "O-6f5wQXSu8", title: "10 Minute Yoga for Stress & Anxiety" },
      { videoId: "4pLUleLdwY4", title: "Deep Breathing Exercise | 4-7-8 Calm Technique" },
      { videoId: "4pKly2JojMw", title: "10-Minute Morning Yoga Full Body Stretch" },
      { videoId: "U6Ay9v7gK9w", title: "Fall Asleep In MINUTES! Sleep Talk-Down Guided Meditation" },
      { videoId: "c1Ndym-IsQg", title: "Headspace | Mini Meditation | Let Go of Stress" },
      { videoId: "o8GrqUSdzi0", title: "Relaxing Music & Rain Sounds" },
      { videoId: "WV31eYa_YUg", title: "Energy Cleansing (Guided Meditation) for Positive Energy" },
      { videoId: "HJ5wN5PtwTw", title: "योग निद्रा ध्यान - Yoga Nidra (Hindi) - गुरुदेव श्री श्री रवि शंकर" },
      { videoId: "z-fJTXyLxlc", title: "पूरे शरीर को खोलने के लिए योग | 20 मिनट | हिंदी" },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 pt-24">
      <motion.h1 
        ref={headerRef} 
        className="text-3xl font-bold text-center text-primary"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🌿 Wellness Hub
      </motion.h1>

      {/* Tabs */}
      <div className="flex justify-center mt-6">
        {["videos","books", "music"].map((tab) => (
          <motion.button
            key={tab}
            className={`px-6 py-2 mx-2 rounded-full font-semibold transition-colors ${
              activeTab === tab ? "bg-blue-600 text-white" : "bg-white text-gray-700 border"
            }`}
            onClick={() => setActiveTab(tab)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab === "books" ? "📖 Read Books" : tab === "music" ? "🎵 Listen Music" : "🎥 Watch Videos"}
          </motion.button>
        ))}
      </div>

      {/* Videos */}
      {activeTab === "videos" && (
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-center mb-4">🎥 Wellness Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video) => (
              <motion.div
                key={video.videoId}
                className="bg-white shadow-lg rounded-lg p-4"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="font-semibold text-lg">{video.title}</h3>
                <iframe
                  className="w-full h-48 mt-2 rounded-md"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  allowFullScreen
                ></iframe>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Books */}
      {activeTab === "books" && (
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-center mb-4">📖 Mindfulness Books</h2>
          {loadingBooks ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Array(6).fill(0).map((_, i) => (
                <div key={i} className="h-40 bg-white animate-pulse rounded-lg shadow-lg"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {books.map((book) => (
                <motion.div 
                  key={book.key} 
                  className="bg-white shadow-lg rounded-xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={
                      book.cover_id
                        ? `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`
                        : "https://via.placeholder.com/150x200?text=No+Cover"
                    }
                    alt={book.title}
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{book.title}</h3>
                    <p className="text-gray-600 text-sm">
                      {book.authors?.map((a) => a.name).join(", ") || "Unknown"}
                    </p>
                    <a
                      href={`https://openlibrary.org${book.key}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 inline-block mt-2"
                    >
                      Read Now →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      )}

      {/* Music */}
      {activeTab === "music" && (
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-center mb-4">🎵 Relaxing Music</h2>
          {loadingMusic ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Array(6).fill(0).map((_, i) => (
                <div key={i} className="h-40 bg-white animate-pulse rounded-lg shadow-lg"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {music.map((track) => (
                <motion.div 
                  key={track.id} 
                  className="bg-white shadow-lg rounded-xl p-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-lg font-semibold">{track.name}</h3>
                  <p className="text-gray-600">{track.artist_name}</p>
                  <audio controls className="w-full mt-2">
                    <source src={track.audio} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                  <a
                    href={track.shareurl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 mt-2 inline-block"
                  >
                    Listen Full Track →
                  </a>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default Wellness;
