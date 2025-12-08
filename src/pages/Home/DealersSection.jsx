import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

const dealers = [
    {
    id: 1,
    logo: "/assets/volvo-brand.svg",
    title: "Mfg of Heavy Construction Equipment & Road Machinery",
    link: "/volvo",
  },
    {
    id: 2,
    logo: "/assets/epiroc-brand.svg",
    title: "Hydraulic Attachments",
    link: "/epiroc",
  },
  {
    id: 3,
    logo: "/assets/sdlg-brand.svg",
    title: "Construction Equipment",
    link: "/sdlg",
  },
   {
    id: 5,
    logo: "/assets/ammann-brand.svg",
    title: "Mfg of Heavy Construction Equipment",
    link: "/ammann",
  },
  {
    id: 4,
    logo: "/assets/husqvarna-brand.svg",
    title: "Road Machinery",
    link: "/husqvarna",
  },
  {
    id: 6,
    logo: "/assets/schwing-stetter-brand.svg",
    title: "Efficient. Compact. Ready-Mix Anywhere.",
    link: "/self-loading-mixer",
  },

 
];

export default function DealersSection() {
  const [index, setIndex] = useState(0);
  const mobileRef = useRef(null);

  // Desktop navigation
  const prevSlide = () =>
    setIndex((p) => (p - 1 + dealers.length) % dealers.length);
  const nextSlide = () => setIndex((p) => (p + 1) % dealers.length);

  // Desktop visible cards
  const visible = Array.from(
    { length: 3 },
    (_, i) => dealers[(index + i) % dealers.length]
  );

  // Autoplay for desktop
  useEffect(() => {
    const auto = setInterval(nextSlide, 4000);
    return () => clearInterval(auto);
  }, []);

  // Mobile scroll (left/right)
  const scrollMobile = (direction) => {
    if (!mobileRef.current) return;
    const card = mobileRef.current.querySelector(":scope > *");
    const gap = 24; // same as gap-6
    const scrollAmount = (card?.offsetWidth || 288) + gap;
    mobileRef.current.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-[#F5F5F5] py-12 text-black relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold font-primary pb-4"
            >
              Brand Partner
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-2 text-lg md:text-xl font-secondary font-bold"
            >
              ACT India delivers sustainable <br /> C&amp;D solutions nationwide.
            </motion.p>
          </div>

          {/* Desktop arrows only */}
          <div className="hidden md:flex gap-4 md:gap-6 mt-6 md:mt-0 ml-auto">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition"
              aria-label="Previous"
            >
              <FaArrowLeft className="text-lg text-secondary" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition"
              aria-label="Next"
            >
              <FaArrowRight className="text-lg text-secondary" />
            </button>
          </div>
        </div>

        {/* === MOBILE CAROUSEL === */}
        <div className="sm:hidden mt-8 relative">
          {/* Cards container */}
          <div
            ref={mobileRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 scrollbar-hide scroll-smooth pb-2"
          >
            {dealers.map((dealer) => (
              <motion.div
                key={dealer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white text-black shadow-md flex flex-col justify-between
                           hover:shadow-xl hover:scale-[1.02] transition-all
                           w-64 h-[200px] p-4 flex-shrink-0 snap-center"
              >
                <img
                  src={dealer.logo}
                  alt={dealer.title}
                  className="h-10 object-contain"
                />
                <p className="mt-3 text-sm font-secondary">{dealer.title}</p>
                <MotionLink
                  to={dealer.link}
                  whileHover={{ x: 4 }}
                  className="text-secondary font-primary font-semibold mt-3"
                >
                  Learn More →
                </MotionLink>
              </motion.div>
            ))}
          </div>

          {/* Both-side arrows for mobile */}
          <button
            onClick={() => scrollMobile("prev")}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition"
            aria-label="Previous"
          >
            <FaArrowLeft className="text-secondary text-lg" />
          </button>

          <button
            onClick={() => scrollMobile("next")}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition"
            aria-label="Next"
          >
            <FaArrowRight className="text-secondary text-lg" />
          </button>
        </div>

        {/* === DESKTOP CAROUSEL === */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 relative">
          <AnimatePresence mode="wait">
            {visible.map((dealer) => (
              <motion.div
                key={dealer.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="bg-white text-black shadow-lg
                           flex flex-col items-start justify-between
                           hover:shadow-2xl hover:scale-105 transition
                           w-80 h-[185px] p-6"
              >
                <img
                  src={dealer.logo}
                  alt={dealer.title}
                  className="h-12 object-contain"
                />
                <p className="mt-2 text-sm font-secondary">{dealer.title}</p>
                <MotionLink
                  to={dealer.link}
                  whileHover={{ x: 5 }}
                  className="text-secondary font-primary font-semibold flex items-center gap-1 mt-2"
                >
                  Learn More →
                </MotionLink>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
