// StockyardShowcase.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const ITEMS = [
  {
    city: "Coimbatore",
    img: "/assets/stock-1.jpg",
    alt: "Volvo excavator at Coimbatore site",
    direction: 50,
  },
  {
    city: "Tirunelveli",
    img: "/assets/stock-2.jpg",
    alt: "Volvo excavator at Tirunelveli site",
    direction: 50,
  },
  {
    city: "Chennai",
    img: "/assets/stock-3.png",
    alt: "Volvo excavators lined up in Chennai stockyard",
    direction: -50,
  },
];

export default function Stockyard() {
  return (
    <section
      className="w-full bg-white py-10 sm:py-14 overflow-hidden"
      id="machine-stockyard"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center text-[32px] font-semibold"
      >
        Machine Stockyard
      </motion.h2>

      {/* Bigger Grid */}
      <div className="mx-auto mt-10 max-w-7xl px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {ITEMS.map((item) => (
          <Card key={item.city} {...item} />
        ))}
      </div>
    </section>
  );
}

function Card({ city, img, alt, direction }) {
  return (
    <motion.article
      initial={{ opacity: 0, x: direction }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="group relative"
    >
      <div className="relative overflow-hidden bg-white shadow-lg ring-1 ring-indigo-100 rounded-xl">
        
        {/* Badge */}
        <span className="absolute left-4 top-4 z-10 rounded-md bg-secondary px-3 py-1 text-sm font-semibold text-white shadow-sm">
          {city}
        </span>

        {/* Bigger Image */}
        <div className="aspect-[16/10] w-full overflow-hidden">
          <img
            src={img}
            alt={alt}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>
    </motion.article>
  );
}