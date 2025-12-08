import { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export default function ScrollArrow() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100); // Show UP arrow after 100px scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToBottom = () =>
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });

  return (
    <button
      onClick={showScrollTop ? scrollToTop : scrollToBottom}
      className="fixed bottom-6 right-6 z-50 bg-gradient-primary text-white p-3 rounded-full shadow-lg hover:bg-gradient-primary transition-all duration-300"
      aria-label={showScrollTop ? "Scroll to top" : "Scroll down"}
    >
      {showScrollTop ? <FaArrowUp className="text-xl" /> : <FaArrowDown className="text-xl" />}
    </button>
  );
}
