"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

function EyeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-7 w-7"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12s-3.75 6.75-9.75 6.75S2.25 12 2.25 12Z"
      />
      <circle cx="12" cy="12" r="3.25" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-7 w-7"
    >
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function MissionVision({
  missionTexts = [
    "We will pioneer innovative technology and solutions for customers, delivering improved productivity, efficiency, profitability, and strong brand recall.",
    "We will evolve to attract the best talent and provide an enabling environment to learn, lead, contribute, and grow into future leaders.",
    "We will continuously improve and implement robust business processes that ensure fulfillment of our goals with integrity, speed, and accuracy.",
    "We will consistently deliver profitable growth and build sustainable, scalable streams of business.",
  ],
  visionText = "ACT will enrich the construction and infrastructure sector through innovative technology and solutions.",
}) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 25,
  });

  const bgBlobY1 = useTransform(smoothProgress, [0, 1], [-30, 60]);
  const bgBlobY2 = useTransform(smoothProgress, [0, 1], [40, -40]);
  const bgBlobX = useTransform(smoothProgress, [0, 1], [-15, 15]);

  const sectionFade = {
    hidden: { opacity: 0, y: 70, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const staggerWrap = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.22,
        delayChildren: 0.25,
      },
    },
  };

  const itemAnim = {
    hidden: { opacity: 0, x: -30, filter: "blur(6px)" },
    show: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const headingAnim = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const iconAnim = {
    hidden: { opacity: 0, scale: 0.3, rotate: -20 },
    show: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 90, damping: 18, delay: 0.35 },
    },
  };

  const visionTextAnim = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.45 },
    },
  };

  const titleLineAnim = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[#f8fbff] py-16 md:py-24"
    >
      {/* Background decor */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          style={{ y: bgBlobY1 }}
          className="absolute -top-24 left-[-80px] h-72 w-72 rounded-full bg-blue-100/60 blur-3xl"
        />
        <motion.div
          style={{ y: bgBlobY2 }}
          className="absolute bottom-[-60px] right-[-40px] h-80 w-80 rounded-full bg-blue-100/60 blur-3xl"
        />
        <motion.div
          style={{ x: bgBlobX }}
          className="absolute left-1/2 top-1/3 h-48 w-48 -translate-x-1/2 rounded-full bg-slate-100/70 blur-3xl"
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
        {/* Heading */}
        <motion.div
          variants={headingAnim}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Vision & Mission
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
          {/* Vision Card */}
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            whileHover={{
              y: -6,
              boxShadow: "0 32px 80px rgba(10,73,145,0.14)",
              transition: { duration: 0.5, ease: "easeOut" },
            }}
            className="group relative flex h-full overflow-hidden rounded-[28px] border border-white/60 bg-white/80 p-6 shadow-[0_20px_60px_rgba(2,32,71,0.08)] backdrop-blur-xl md:p-8"
          >
            <motion.div className="absolute inset-0 bg-gradient-to-br from-[#0A4991] via-[#0f5bb6] to-[#4bb8ff] opacity-0 transition-opacity duration-700 group-hover:opacity-[0.06]" />
            <div className="absolute right-0 top-0 h-28 w-28 translate-x-8 -translate-y-8 rounded-full bg-blue-100/80 blur-2xl" />

            <div className="relative flex w-full flex-col">
              <motion.div
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-6 flex items-center gap-4"
              >
                <motion.div
                  variants={iconAnim}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  whileHover={{
                    rotate: [0, -8, 8, 0],
                    transition: { duration: 0.6 },
                  }}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0A4991] to-[#38bdf8] text-white shadow-lg"
                >
                  <EyeIcon />
                </motion.div>

                <motion.div
                  variants={titleLineAnim}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <h3 className="mt-1 text-2xl font-bold text-slate-900 md:text-3xl">
                    Vision
                  </h3>
                </motion.div>
              </motion.div>

              <motion.div
                variants={visionTextAnim}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-1 items-start"
              >
                <p className="text-sm leading-7 text-slate-700 md:text-base md:leading-8">
                  {visionText}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            whileHover={{
              y: -6,
              boxShadow: "0 32px 80px rgba(2,32,71,0.12)",
              transition: { duration: 0.5, ease: "easeOut" },
            }}
            className="group relative flex h-full overflow-hidden rounded-[28px] border border-white/60 bg-white/80 p-6 shadow-[0_20px_60px_rgba(2,32,71,0.08)] backdrop-blur-xl md:p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 opacity-0 transition-opacity duration-700 group-hover:opacity-[0.04]" />
            <div className="absolute bottom-0 left-0 h-28 w-28 -translate-x-8 translate-y-8 rounded-full bg-slate-200/70 blur-2xl" />

            <div className="relative flex w-full flex-col">
              <motion.div
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-6 flex items-center gap-4"
              >
                <motion.div
                  variants={iconAnim}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  whileHover={{
                    rotate: [0, -8, 8, 0],
                    transition: { duration: 0.6 },
                  }}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0A4991] to-[#38bdf8] text-white shadow-lg"
                >
                  <TargetIcon />
                </motion.div>

                <motion.div
                  variants={titleLineAnim}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <h3 className="mt-1 text-2xl font-bold text-slate-900 md:text-3xl">
                    Mission
                  </h3>
                </motion.div>
              </motion.div>

              <motion.div
                variants={staggerWrap}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-1 flex-col space-y-4"
              >
                {missionTexts.map((text, index) => (
                  <motion.div
                    key={index}
                    variants={itemAnim}
                    whileHover={{
                      x: 6,
                      backgroundColor: "#f0f7ff",
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                    className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-gradient-to-r from-white to-slate-50 p-4 shadow-sm transition-shadow duration-300 hover:shadow-md"
                  >
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 18,
                        delay: 0.35 + index * 0.2,
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.15, transition: { duration: 0.25 } }}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0A4991]/10 text-sm font-bold text-[#0A4991]"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </motion.div>

                    <p className="text-sm leading-7 text-slate-700 md:text-base">
                      {text}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}