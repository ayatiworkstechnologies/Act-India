"use client";

import { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export default function ScrollArrow() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setShowScrollTop(window.scrollY > 200);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={showScrollTop ? scrollToTop : scrollToBottom}
      className="fixed bottom-6 right-6 z-50 bg-primary text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
      aria-label={showScrollTop ? "Scroll to top" : "Scroll down"}
    >
      {showScrollTop ? (
        <FaArrowUp className="text-xl" />
      ) : (
        <FaArrowDown className="text-xl" />
      )}
    </button>
  );
}