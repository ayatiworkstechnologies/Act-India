"use client";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* ✅ Background Image - Desktop */}
      <img
        src="/assets/banner/sdlg-new.jpg"
        alt="Excavator"
        className="hidden md:block w-full h-full object-cover object-center"
      />

      {/* ✅ Background Image - Mobile */}
      <img
        src="/assets/banner/sdlg-1.jpg"
        alt="Excavator Mobile"
        className="block md:hidden w-full h-full object-cover object-center"
      />

      {/* ✅ Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

      {/* ✅ Animated Button */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="
          absolute 
          bottom-6 left-[30%] -translate-x-1/2   /* ✅ Centered + Lower for Mobile */
          md:bottom-28 md:right-12 md:left-auto md:translate-x-0  /* ✅ Right-aligned on Desktop */
          text-center
        "
      >
        <Link
          to="/contact"
          className="
            border border-white text-white 
            px-5 py-2 text-sm md:text-base font-medium 
            backdrop-blur-sm 
            hover:bg-white hover:text-black 
            transition-all duration-300
          "
        >
          Know More →
        </Link>
      </motion.div>
    </div>
  );
}
