// WarehousingHero.jsx
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SLIDES = [
  { src: "/assets/train-1.png", alt: "Modern warehouse aisles", label: "Classroom Training" },
  { src: "/assets/train-2.png", alt: "Stockyard forklifts", label: "Component Assembling / Disassembling Training" },
  { src: "/assets/train-3.png", alt: "Loading dock operations", label: "Cut Section Training" },
  { src: "/assets/train-4.png", alt: "Inventory scanning", label: "Practical Training on Machine" },
];

export default function Training() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  // Autoplay logic
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setIdx((i) => (i + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(timerRef.current);
  }, [paused]);

  // --- Animation Variants ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.21, 0.6, 0.35, 1] } 
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section className="w-full bg-white text-neutral-900 overflow-hidden" id="training">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
        
        {/* LEFT: COPY (Animate: Bottom to Top) */}
        <motion.div 
          className="lg:col-span-7 px-6 sm:px-10 py-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="max-w-3xl">
            <motion.h2 variants={fadeInUp} className="text-[30px] leading-[1.25] tracking-wide">
              Training Facilities <br/>
              Developing and Empowering Future Leaders
            </motion.h2>

            <motion.p variants={fadeInUp} className="mt-5 max-w-2xl text-sm leading-6 text-neutral-600">
              ACT delivers secure, high-efficiency warehouses and stockyards engineered to streamline storage, handling, and distribution for enterprise-scale operations. Our infrastructure integrates modern equipment, optimized workflows, and rigorous process controls to drive efficiency and reduce cost-to-serve. With industry-aligned training zones and fully equipped technical environments, we build talent that meets global brand standards while ensuring consistent operational excellence. 
            </motion.p>
          </div>
        </motion.div>

        {/* RIGHT: SLIDER (Animate: Side Slide) */}
        <motion.aside
          className="relative lg:col-span-5 bg-neutral-100 border-b lg:border-b-0 lg:border-r border-neutral-200 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInRight}
        >
          {/* Slides */}
          <div className="relative h-[280px] sm:h-[360px] lg:h-full">
            {SLIDES.map((s, i) => (
              <img
                key={s.src}
                src={s.src}
                alt={s.alt}
                className={[
                  "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
                  i === idx ? "opacity-100" : "opacity-0",
                ].join(" ")}
              />
            ))}
          </div>

          {/* Floating pill (dynamic label) */}
          <div className="absolute left-4 top-4">
            <AnimatePresence mode="wait">
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="select-none rounded-md bg-secondary px-3 py-1.5 text-xs font-semibold text-white shadow-lg shadow-blue-500/20 block"
              >
                {SLIDES[idx].label}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={[
                  "h-2 w-2 rounded-full transition-all",
                  i === idx ? "bg-secondary w-3" : "bg-neutral-300",
                ].join(" ")}
              />
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}