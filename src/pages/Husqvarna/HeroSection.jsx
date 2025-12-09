"use client";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image - Desktop */}
      <img
        src="/assets/banner/Husqvarna-web.jpg"
        alt="Excavator"
        className="hidden md:block w-full h-full object-cover object-center"
      />

      {/* Background Image - Mobile */}
      <img
        src="/assets/banner/Husqvarna-mob.jpg"
        alt="Excavator Mobile"
        className="block md:hidden w-full h-full object-cover object-center"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

      {/* Know More Button — Desktop Only */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="
          hidden md:flex     /* ✅ Hide on mobile */
          absolute 
          md:bottom-24 md:right-12
        "
      >
        <Link
          to="/contact"
          className="
            border border-white text-white 
            px-5 py-2 text-base font-medium 
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
