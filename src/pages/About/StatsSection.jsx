"use client";
import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion"; // Add Framer Motion

export default function StatsSection() {
  const VALUES = [
    {
      num: "01",
      title: "WORLD RENOWNED EQUIPMENT",
      copy: "ACT represents and deals only with the most renowned brands offering latest technology and best in quality products and services.",
    },
    {
      num: "02",
      title: "LATEST TECHNOLOGY",
      copy: "When you choose ACT Construction Equipment, you can be rest assured that you can always have access to the latest innovations and technologies from around the world.",
    },
    {
      num: "03",
      title: "PROACTIVE AFTERMARKET SUPPORT",
      copy: "ACT's aftermarket support is built on a strong foundation to deliver PROACTIVE solutions to the customers. Each brand has a dedicated team of highly skilled and continuously trained aftermarket team fully geared with special tools and diagnostic equipment to deliver best in industry TAT - Turn Around Time.",
    },
    {
      num: "04",
      title: "BEST IN INDUSTRY BUSINESS PROCESSES",
      copy: "Systems and processes are our cornerstones. We have been acknowledged by the industry to be highly process driven and system focussed organisation focussed to deliver the best for our customers in terms of products and services.",
    },
    {
      num: "05",
      title: "QUALITY AND SAFETY ASSURED",
      copy: "Quality and Safety are deeply ingrained into every ACTian. Every product and service we deliver commits to very high standards of quality and every process and service we render adheres to highest standards of safety to all stakeholders.",
    },
  ];

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <>
      <section className="w-full bg-white mt-6 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* Animated Heading */}
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Why Choose ACT
          </motion.h2>
        </div>
      </section>

      <section className="py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1.5fr_minmax(0,1fr)] gap-10 items-stretch">
          
          {/* LEFT – 5 POINTS (Staggered Bottom-to-Top) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10"
          >
            {VALUES.map((v) => (
              <motion.div key={v.num} variants={fadeInUp} className="flex items-start gap-4">
                <span className="text-3xl font-bold text-[#0066cc] leading-none">
                  {v.num}
                </span>
                <div>
                  <h3 className="text-xs font-semibold tracking-[0.25em] uppercase">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {v.copy}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT – IMAGE (Side Slide) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
            className="h-full"
          >
            <img
              src="/assets/why-image.png"
              alt="ACT Construction Equipment"
              className="w-full max-h-[520px] object-contain"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}