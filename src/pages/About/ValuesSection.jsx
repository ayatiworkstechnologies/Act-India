import React from "react";
import { motion } from "framer-motion";

const VALUES = [
  {
    icon: "/assets/why-icon-1.png",
    title: "TRUST",
    copy: "We believe that nothing is more important than our reputation built on trust & integrity",
  },
  {
    icon: "/assets/why-icon-2.png",
    title: "FAIR",
    copy: "Everyone deserves equal opportunities",
  },
  {
    icon: "/assets/why-icon-3.png",
    title: "EMPOWERED",
    copy: "Empowered employees are happy, productive and hold themselves accountable",
  },
  {
    icon: "/assets/why-icon-4.png",
    title: "LEAD CHANGE",
    copy: "The ability to bring change, both within and beyond to meet organisational goals",
  },
  {
    icon: "/assets/why-icon-5.png",
    title: "CUSTOMER SUCCESS",
    copy: "Customers define what we are and we owe our existence to them",
  },
  {
    icon: "/assets/why-icon-6.png",
    title: "EXCELLENCE",
    copy: "Excellence needs to be a habit not an act, as habits define what we are",
  },
];

export default function ValuesSection() {
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
        {/* Heading */}
        <div className="mb-10 text-center md:mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-black">
            OUR CORE VALUES
          </h2>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-10 md:gap-y-12"
        >
          {VALUES.map((v, i) => (
            <motion.div
              key={i}
              variants={item}
              className="text-center sm:text-left flex flex-col items-center sm:items-start"
            >
              {/* Icon */}
              <img
                src={v.icon}
                alt={v.title}
                className="w-12 h-12 md:w-14 md:h-14 mb-4 object-contain"
              />

              {/* Number */}
              <div className="text-base md:text-lg font-semibold">
                {String(i + 1).padStart(2, "0")}.
              </div>

              {/* Title */}
              <h3 className="text-base md:text-lg font-bold uppercase mt-1">
                {v.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm md:text-lg leading-relaxed max-w-[280px]">
                {v.copy}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}