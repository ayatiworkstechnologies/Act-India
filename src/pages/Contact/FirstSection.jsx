import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function FirstSection() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image - Desktop */}
      <img
        src="/assets/banner/Epiroc-web.jpg"
        alt="Excavator"
        className="hidden md:block w-full h-full object-cover object-center"
      />

      {/* Background Image - Mobile */}
      <img
        src="/assets/banner/Epiroc-mob.jpg"
        alt="Excavator Mobile"
        className="block md:hidden w-full h-full object-cover object-center"
      />

      {/* Optional Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

    

     
    </div>
  );
}
