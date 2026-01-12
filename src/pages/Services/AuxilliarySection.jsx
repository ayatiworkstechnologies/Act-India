// AuxServicesSection.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SLIDES = [
  { img: "/assets/aux-1.png" },
  { img: "/assets/aux-2.png" },
  { img: "/assets/aux-3.png" },
  { img: "/assets/aux-4.png" },
  { img: "/assets/aux-5.png" },
];

export default function AuxServicesSection() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const s = SLIDES[idx];

  useEffect(() => {
    if (SLIDES.length <= 1) return;
    const id = setInterval(() => {
      if (!paused) setIdx((i) => (i + 1) % SLIDES.length);
    }, 3200);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section
      className="bg-white text-neutral-900 py-8 sm:py-10 md:py-16"
      id="training"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-7">
            <h2 className="text-2xl sm:text-3xl md:text-[36px] tracking-tight leading-tight">
              Auxiliary Service Solutions
            </h2>

            <p className="mt-4 text-sm sm:text-md font-semibold text-neutral-500">
              Services Offered
            </p>

            {/* BULLETS – mobile friendly */}
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-[14px] text-neutral-700">
              {[
                "Bucket hard-facing",
                "Breaker hard-facing",
                "Breaker Bush Replacement",
                "Re-building and line boring of Bucket / Arm and Boom Bush bores",
                "Structural Crack welding Repairs Boom / Arm / Lower Frame / Bucket",
                "Bucket Toe Plate Replacement",
                "Bucket Tooth Adaptor Replacement",
                "Bucket Bottom sheet Replacement",
                "Track chain link Recondition repairs",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                  <span className="leading-snug">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* DOTS – vertical only on desktop */}
          <div className="hidden lg:flex lg:col-span-1 items-center justify-center">
            <div className="flex flex-col gap-3">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`h-2.5 w-2.5 rounded-full transition
                    ${i === idx ? "bg-secondary" : "bg-gray-300 hover:bg-gray-400"}`}
                />
              ))}
            </div>
          </div>

          {/* IMAGE */}
          <div className="lg:col-span-4">
            <div className="relative overflow-hidden rounded-lg">
              <div className="relative h-[220px] sm:h-[280px] md:h-[360px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={s.img}
                    src={s.img}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                  />
                </AnimatePresence>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>

            {/* DOTS – move below image on mobile */}
            <div className="mt-4 flex justify-center gap-3 lg:hidden">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`h-2.5 w-2.5 rounded-full transition
                    ${i === idx ? "bg-secondary" : "bg-gray-300"}`}
                />
              ))}
            </div>
          </div>

          

        </div>
      </div>
    </section>
  );
}
