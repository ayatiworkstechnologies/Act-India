import React from "react";
import { motion } from "framer-motion";

export default function WorkshopChennai() {
  // Animation variants for the image containers
  const slideInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="w-full py-10 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">

        {/* Title - Bottom to Top Animation */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center text-[30px] leading-[1.25] tracking-wide mb-10"
        >
          Workshop - Chennai
        </motion.h2>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">

          {/* Row 1 - Image 1 (Left Slide) */}
          <motion.div 
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-block"
          >
            <img
              src="/assets/workshop-1.jpg"
              alt="Workshop Image 1"
              width={436}
              height={259}
              className="object-contain"
            />
          </motion.div>

          {/* Row 1 - Image 2 (Right Slide) */}
          <motion.div 
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-block"
          >
            <img
              src="/assets/workshop-2.jpg"
              alt="Workshop Image 2"
              width={436}
              height={259}
              className="object-contain"
            />
          </motion.div>

          {/* Row 2 - Image 3 (Left Slide) */}
          <motion.div 
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-block"
          >
            <img
              src="/assets/workshop-3.jpg"
              alt="Workshop Image 3"
              width={436}
              height={259}
              className="object-contain"
            />
          </motion.div>

          {/* Row 2 - Certificate Image (Right Slide) */}
          <motion.div 
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-block"
          >
            <img
              src="/assets/workshop-4.jpg"
              alt="Certificate"
              width={436}
              height={259}
              className="object-contain"
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}