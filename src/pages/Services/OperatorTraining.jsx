// OperatorTrainingCertSection.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* Replace with your real assets */
const SLIDES = [
  {
    label: "IESC certification program",
    caption: "IESC program to our Customer operators",
    img: "/assets/operator-1.jpg",
  },
  {
    label: "IESC Certification PROGRAM",
    caption: "IESC and VOLVO / ACT Team during IESC certification program at Kanchipuram-North Zone",
    img: "/assets/operator-2.jpg",
  },
  {
    label: "IESC PROGRAM",
    caption: "IESC and VOLVO / ACT Team during IESC certification program at Karur-West Zone",
    img: "/assets/operator-3.jpg",
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

  // --- Animation Variants ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section
      className="bg-white text-neutral-900 py-10 md:py-16 overflow-hidden"
      id="training"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* LEFT: title, bullets, caption (Bottom to Top Animation) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-7"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3">
              <h2 className="text-3xl font-bold font-primary tracking-tight">
                Operator Training and Certification
              </h2>
              <img
                src="/assets/iesc.jpg"
                alt="Logo"
                className="w-[8rem] h-[9rem] object-contain"
              />
            </motion.div>

            <motion.p variants={fadeInUp} className="mt-5 text-md font-semibold text-neutral-500">
              IESC Training
            </motion.p>

            <motion.p variants={fadeInUp} className="mt-5 text-md font-medium text-black">
              We organize and conduct IESC certification programs every year. The main
              objective of the IESC program is to train participants to acquire
              necessary skills to operate and maintain the equipment safely as per the
              standard set by our OEM.
            </motion.p>

            <motion.ul variants={staggerContainer} className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[14px] text-neutral-700">
              {[
                "Safety",
                "Equipment Longevity and Maintenance",
                "Regulatory Compliance",
                "Environmental Responsibility",
                "Efficiency and Productivity",
              ].map((b) => (
                <motion.li key={b} variants={fadeInUp} className="flex items-center gap-3">
                  <span className="inline-block h-1 w-1 rounded-full bg-secondary" />
                  <span className="whitespace-nowrap">{b}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* MIDDLE: vertical dots (Fade In) */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="hidden lg:flex lg:col-span-1"
          >
            <div className="h-[320px] md:h-[360px] w-full flex items-center justify-center">
              <div className="flex flex-col items-center gap-3">
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
          </motion.div>

          {/* RIGHT: image card with ribbon (Side Slide Animation) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
            className="lg:col-span-4"
          >
           <div className="relative overflow-hidden bg-gray-50 rounded-lg"> 
  {/* 1. Remove forced height, let the container adjust to the image or a safe max-height */}
  <div className="relative flex items-center justify-center">
    
    <AnimatePresence mode="wait">
      <motion.img
        key={s.img}
        src={s.img}
        alt={s.label}
        // 2. Change to object-contain and remove h-full/w-full to respect intrinsic aspect ratio
        className="max-w-full max-h-[500px] w-auto h-auto object-contain mx-auto"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -40 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </AnimatePresence>

    {/* Badge/Label remains absolute to the container */}
    <div className="absolute top-4 left-4 z-10">
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

   
  </div>
</div>

            <AnimatePresence mode="wait">
              <motion.div
                key={s.caption}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="mt-6 inline-block rounded-xl bg-white px-5 py-4 ring-1 ring-gray-200"
              >
                <p className="font-medium text-[15px] leading-snug">
                  {s.caption}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}