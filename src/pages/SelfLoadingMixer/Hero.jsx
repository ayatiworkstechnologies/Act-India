import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image - Desktop */}
      <img
        src="/assets/banner/schwin-banner.jpg"
        alt="Excavator"
        className="hidden md:block w-full h-full object-cover object-center"
      />

      {/* Background Image - Mobile */}
      <img
        src="/assets/banner/schwin-mob.jpg"
        alt="Excavator Mobile"
        className="block md:hidden w-full h-full object-cover object-center"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-2 sm:px-6 lg:px-12">
        <div className="max-w-4xl w-full text-center md:text-left mt-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="
              flex justify-center md:block
              absolute md:absolute
              bottom-16 left-[30%] md:left-auto
              right-auto md:right-12
              transform -translate-x-1/2 md:translate-x-0
              md:bottom-32
            "
          >
            <Link
              to="/contact"
              className="border border-white text-white px-5 py-2 text-sm md:text-base font-medium backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300"
            >
              Know More →
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
