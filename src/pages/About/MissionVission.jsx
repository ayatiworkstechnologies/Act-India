// MissionVision.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MissionVision({
  years = 80,
  missionTexts = [
    "We will evolve to attract the best of talent and provide an enabling environment to learn, lead, contribute and grow into future leaders.",
    "We will continuously improve and implement robust business processes that ensures fulfilment of our goals with integrity, speed and accuracy.",
    "We will consistently deliver profitable growth and build sustainable, scalable streams of business.",
  ],
  visionText = "ACT will enrich the construction and infrastructure sector through innovative technology and solutions.",
  visionImage = "/assets/vision-new.png",
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % missionTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [missionTexts.length]);

  return (
    <section className="bg-white text-neutral-900 py-12 md:py-16">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        {/* Section Heading */}
        <header>
          <h2 className="text-2xl md:text-3xl tracking-tight">
            Our <span className="font-bold">MISSION</span> & <br />
            <span className="font-bold">VISION</span>
          </h2>
        </header>

        {/* ===== Row 1: Mission (left) • Vertical Dots (middle) • Years badge (right) ===== */}
        <div className="grid grid-cols-12 gap-6 md:gap-8 items-center mt-8">
          {/* Mission text slider */}
          <div className="col-span-12 lg:col-span-6">
            <div className="mb-3 text-lg font-semibold">Mission</div>

            <div className="relative bg-white rounded-xl shadow-[0_25px_60px_-30px_rgba(0,0,0,0.35)] ring-1 ring-gray-100 overflow-hidden h-[160px] md:h-[140px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="p-5 md:p-6 text-sm md:text-base text-neutral-700 leading-relaxed absolute"
                >
                  {missionTexts[currentIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* Vertical slider dots (interactive) */}
          <div className="col-span-12 lg:col-span-1 hidden lg:flex flex-col items-center justify-center gap-2">
            {missionTexts.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "bg-blue-600 scale-125" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Years badge (static) */}
          <div className="col-span-12 lg:col-span-4 flex justify-start lg:justify-end">
            <YearsBadge years={years} />
          </div>
        </div>

        {/* ===== Row 2: Vision (image + text) ===== */}
        <div className="mt-12 md:mt-16 grid grid-cols-12 gap-6 md:gap-8 items-center">
          {/* Vision image */}
          <div className="col-span-12 lg:col-span-5">
            <div className="relative p-3">
              <img
                src={visionImage}
                alt="Vision illustration"
                className="w-[300px] h-full md:h-[300px] object-contain"
              />
            </div>
          </div>

          {/* Vision text */}
          <div className="col-span-12 lg:col-span-7">
            <div className="mb-3 text-lg font-bold">Vision</div>
            <div className="bg-white rounded-xl shadow-[0_25px_60px_-30px_rgba(0,0,0,0.35)] ring-1 ring-gray-100">
              <p className="p-5 md:p-6 text-sm md:text-base text-neutral-700 leading-relaxed">
                {visionText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== Helper: Years Badge ===== */
function YearsBadge({ years }) {
  return (
    <div className="relative w-48 h-48 md:w-56 md:h-56">
      <img
        src="/assets/round.png"
        alt="Years Badge"
        className="absolute inset-0 w-full h-full object-contain"
      />
      <div className="relative flex items-center justify-center w-full h-full text-white text-center px-4">
        <div>
          <div className="text-3xl md:text-4xl text-black font-extrabold leading-tight">
            {years} Years
          </div>
          <div className="mt-1 text-sm md:text-base text-black font-medium opacity-95">
            of Successful Work
          </div>
        </div>
      </div>
    </div>
  );
}
