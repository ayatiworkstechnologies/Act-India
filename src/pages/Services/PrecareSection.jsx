// PrecareSection.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ---- Animations ---- */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay },
  },
});

/* LEFT panel: slide image + label that changes per slide */
const leftSlides = [
  { src: "/assets/precare-1.png", label: "Operator Training" },
  { src: "/assets/precare-2.png", label: "Machine Inspection" },
  { src: "/assets/precare-3.png", label: "Report Sharing" },
];

export default function PrecareSection() {
  const points = [
    "a. Scheduled maintenance using genuine spares, at the right time, following the specified SOP of the manufacturers",
    "b. Operating only in application suitable for the equipment",
    "c. Correct operating methods of the equipment for improved life and efficiency",
    "d. Protection against manufacturing Defects of the equipment",
  ];

  /* Right list auto highlight */
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setActive((i) => (i + 1) % points.length),
      2500
    );
    return () => clearInterval(id);
  }, [points.length]);

  /* Left slider (image + label) */
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    if (leftSlides.length <= 1) return;
    const id = setInterval(
      () => setSlide((i) => (i + 1) % leftSlides.length),
      3000
    );
    return () => clearInterval(id);
  }, []);

  const current = leftSlides[slide];

  return (
    <section className="w-full bg-white text-neutral-900" id="precare">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-16">
        
        {/* MAIN TITLE */}
        <motion.h2
          variants={fadeUp(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[28px] md:text-2xl font-bold text-center tracking-tight mb-16"
        >
          <span className="mr-1 font-bold text-5xl text-center">
            Equipment Life Cycle
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* ===== LEFT: image + label, both slide ===== */}
          <div className="md:col-span-3">
            <div className="relative h-[280px] md:h-[360px] lg:h-[380px] w-full overflow-hidden ">
              
              {/* image slider */}
              <div className="absolute inset-0">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current.src}
                    src={current.src}
                    alt={current.label}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </AnimatePresence>
              </div>

              {/* label chip */}
              <div className="absolute top-4 left-4">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`label-${slide}`}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="inline-block bg-secondary text-white text-xs md:text-sm font-medium px-4 py-2 rounded-md"
                  >
                    {current.label}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* bottom shade */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/15 to-transparent" />
            </div>
          </div>

          {/* ===== RIGHT: Content ===== */}
          <div className="md:col-span-9 space-y-6">

            {/* ⭐ FIXED: Title + Logo side-by-side ⭐ */}
            <motion.div
              variants={fadeUp(0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <h2 className="text-[36px] tracking-tight">
                Precare Service 360°
              </h2>

              <img
                src="/assets/precare.jpg"
                alt="Logo"
                className="w-[4.5rem] h-[6.5rem] object-contain"
              />
            </motion.div>

            <motion.p
              variants={fadeUp(0.25)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-[15px] leading-relaxed text-neutral-700"
            >
              PRECARE is a thoughtfully curated bouquet of support solutions
              aimed at ensuring "CUSTOMER SUCCESS" in their respective businesses
              using our products and services.
            </motion.p>

            <motion.p
              variants={fadeUp(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-semibold text-neutral-900"
            >
              PRECARE is designed to proactively address the 4 important
              contributors to equipment related failures,
            </motion.p>

            {/* Auto-highlight list */}
            <div className="relative space-y-3">
              {points.map((text, i) => (
                <motion.div
                  key={i}
                  className="relative"
                  variants={fadeUp(0.35 + i * 0.05)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {active === i && (
                    <motion.div
                      layoutId="precare-highlight"
                      className="absolute inset-0 rounded-xl border-outline-secondary"
                      style={{ boxShadow: "0 6px 18px rgba(59,130,246,0.25)" }}
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 32,
                      }}
                    />
                  )}
                  <div className="relative z-10 p-3 rounded-xl text-[15px] leading-snug text-neutral-800">
                    {text}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              variants={fadeUp(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-sm text-neutral-600"
            >
              The bouquet of solutions include SCHEDULED MAINTENANCE, PLANNING
              AND DELIVERY OF PARTS & CONSUMABLES, PREVENTIVE MAINTENANCE,
              HEALTH CHECKS, ADVISORY SERVICES, OPERATOR TRAINING, EXTENDED
              WARRANTY, STRUCTURAL REPAIRS, EQUIPMENT BUY BACK SOLUTIONS.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
