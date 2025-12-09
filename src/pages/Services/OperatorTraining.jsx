// OperatorTrainingCertSection.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* Replace with your real assets */
const SLIDES = [
  {
    label: "IESC certification program",
    caption:
      "IESC and VOLVO ACT Team during IESC certification program at Madurai-South Zone",
    img: "/assets/operator-1.png",
  },
  {
    label: "IESC Certification PROGRAM",
    caption:
      "Customer Operators with IESC and VOLVO ACT Team during IESC certification program at WEST ZONE (Karur)",
    img: "/assets/operator-2.png",
  },
  {
    label: "IESC PROGRAM",
    caption:
      "IESC PROGRAM to our Customer operatorstion program at WEST ZONE (Karur)",
    img: "/assets/operator-3.png",
  },
  {
    label: "Certificates",
    caption:
      "Issuing Certificates to Operators for Successfully Completing course",
    img: "/assets/operator-4.png",
  },
];

export default function OperatorTrainingCertSection() {
  const [idx, setIdx] = useState(1); 
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
      className="bg-white text-neutral-900 py-10 md:py-16"
      id="training"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* LEFT: title, bullets, caption */}
          <div className="lg:col-span-7">

            {/* ----------------------------- */}
            {/* TITLE + LOGO (added here)     */}
            {/* ----------------------------- */}
            <div className="flex items-center gap-3">
              <h2 className="text-[36px] tracking-tight">
                Operator Training and Certification
              </h2>

              {/* your logo beside title */}
              <img
                src="/assets/iesc.jpg"
                alt="Logo"
                className="w-[8rem] h-[9rem] object-contain"
              />
            </div>

            <p className="mt-5 text-md font-semibold text-neutral-500">
              IESC Training
            </p>

            <p className="mt-5 text-md font-medium text-black">
              We organize and conduct IESC certification programs every year. The main
              objective of the IESC program is to train participants to acquire
              necessary skills to operate and maintain the equipment safely as per the
              standard set by our OEM.
            </p>

            {/* dot-separated bullets */}
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[14px] text-neutral-700">
              {[
                "Safety",
                "Equipment Longevity and Maintenance",
                "Regulatory Compliance",
                "Environmental Responsibility",
                "Efficiency and Productivity",
              ].map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <span className="inline-block h-1 w-1 rounded-full bg-secondary" />
                  <span className="whitespace-nowrap">{b}</span>
                </li>
              ))}
            </ul>

            {/* caption card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={s.caption}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="mt-6 inline-block rounded-xl bg-white px-5 py-4 ring-1 ring-gray-200"
              >
                <p className="font-semibold text-[15px] leading-snug">
                  {s.caption}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* MIDDLE: vertical dots (pager) */}
          <div className="hidden lg:flex lg:col-span-1">
            <div className="h-[320px] md:h-[360px] w-full flex items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2.5 w-2.5 rounded-full transition
                      ${i === idx ? "bg-secondary" : "bg-gray-300 hover:bg-gray-400"}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: image card with ribbon */}
          <div className="lg:col-span-4">
            <div className="relative overflow-hidden">
              <div className="relative h-[320px] md:h-[360px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={s.img}
                    src={s.img}
                    alt={s.label}
                    className="absolute inset-0 h-full w-full object-cover"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </AnimatePresence>

                {/* blue ribbon */}
                <div className="absolute top-4 left-4">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={s.label}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.3 }}
                      className="inline-block bg-gradient-primary text-white text-xs md:text-sm font-medium px-4 py-2 rounded-md shadow-[0_12px_20px_rgba(0,0,0,0.18)]"
                    >
                      {s.label}
                    </motion.span>
                  </AnimatePresence>
                </div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/15 to-transparent" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
