import React, { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

export default function VideoSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handlePlay = () => {
    if (!videoRef.current) return;

    // Load source only when user clicks play
    if (!isLoaded) {
      videoRef.current.src = "/home-video.mp4"; // ✅ lazy load actual video
      setIsLoaded(true);
    }

    videoRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <section className="relative flex justify-center items-center">
      {/* Video element with no src until play */}
      <video
        ref={videoRef}
        className="w-full h-auto object-cover"
        poster="/assets/section-img.png" // Thumbnail before play
        preload="none" // prevent auto load
        playsInline
      >
        {/* src will be set dynamically */}
      </video>

      {/* Play button overlay */}
      {!isPlaying && (
        <button
          onClick={handlePlay}
          className="absolute flex items-center justify-center w-20 h-20 rounded-full bg-white/80 hover:bg-white text-blue-600 shadow-lg transition duration-300"
        >
          <FaPlay className="w-8 h-8" />
        </button>
      )}

      {/* Pause button overlay */}
      {isPlaying && (
        <button
          onClick={handlePause}
          className="absolute bottom-4 right-4 bg-white/80 p-3 rounded-full shadow-md text-blue-600 hover:bg-white transition"
        >
          <FaPause className="w-5 h-5" />
        </button>
      )}
    </section>
  );
}
