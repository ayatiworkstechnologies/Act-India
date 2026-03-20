"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SLIDES = [
  {
    img: "/assets/aux-1.png",
    label: "Bucket hard-facing",
  },
  {
    img: "/assets/aux-2.png",
    label: "Structural Crack welding Repairs Boom / Arm / Lower Frame / Bucket",
  },
  {
    img: "/assets/aux-3.png",
    label: "Breaker hard-facing",
  },
  {
    img: "/assets/aux-4.png",
    label: "Bucket hard-facing",
  },
  {
    img: "/assets/aux-5.png",
    label: "Structural Crack welding Repairs Boom / Arm / Lower Frame / Bucket",
  },
];

export default function AuxServicesSection() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || SLIDES.length <= 1) return;

    const interval = setInterval(() => {
      setIdx((prev) => (prev + 1) % SLIDES.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [paused, idx]);

  const s = SLIDES[idx];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      className="overflow-hidden bg-white py-8 text-neutral-900 sm:py-10 md:py-16"
      id="training"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-7"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-primary text-3xl font-bold tracking-tight"
            >
              Auxiliary Service Solutions
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-4 text-sm font-semibold uppercase tracking-wide text-neutral-500 sm:text-md"
            >
              Services Offered
            </motion.p>

            <motion.ul
              variants={staggerContainer}
              className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 text-[14px] text-neutral-700 sm:grid-cols-2"
            >
              {[
                "Bucket hard-facing",
                "Breaker hard-facing",
                "Breaker Bush Replacement",
                "Bucket Toe Plate Replacement",
                "Bucket Tooth Adaptor Replacement",
                "Bucket Bottom sheet Replacement",
                "Re-building and line boring of Bucket / Arm and Boom Bush bores",
                "Track chain link Recondition repairs",
                "Structural Crack welding Repairs Boom / Arm / Lower Frame / Bucket",
              ].map((b) => (
                <motion.li
                  key={b}
                  variants={fadeInUp}
                  className="flex items-start gap-2"
                >
                  <span className="bg-primary mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                  <span className="leading-snug">{b}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* DOTS – Desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="hidden items-center justify-center lg:col-span-1 lg:flex"
          >
            <div className="flex flex-col gap-3">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                    i === idx
                      ? "bg-primary scale-150"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* IMAGE CONTAINER */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
            className="lg:col-span-4"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative overflow-hidden rounded-lg bg-gray-100 shadow-xl">
              <div className="relative h-[220px] sm:h-[280px] md:h-[360px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={s.img}
                    src={s.img}
                    alt={s.label}
                    className="absolute inset-0 h-full w-full object-cover"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                  />
                </AnimatePresence>

                {/* Bottom Overlay */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10">
                  <div className="bg-gradient-to-t from-black/85 via-black/55 to-transparent px-4 py-4 sm:px-5 sm:py-5">
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={s.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.25 }}
                        className="max-w-[92%] text-sm font-medium leading-snug text-white sm:text-base"
                      >
                        {s.label}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>

            {/* DOTS – Mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-6 flex justify-center gap-3 lg:hidden"
            >
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === idx ? "bg-primary w-8" : "bg-gray-300 w-2"
                  }`}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}