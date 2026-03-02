import React from "react";
import { motion } from "framer-motion"; // Add Framer Motion

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
  // Animation variant for the heading
  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Animation variants for the staggered cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each card entrance
      },
    },
  };

  return (
    <section className="bg-white text-neutral-900 py-12 md:py-16 overflow-hidden">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 lg:gap-10">
          
          {/* Heading - Side Animation */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
            className="col-span-12 lg:col-span-4"
          >
            <h2 className="text-2xl md:text-3xl lg:text-5xl leading-tight">
              Our Core Values
            </h2>
          </motion.div>

          {/* Cards Container - Staggered Animation */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="col-span-12 lg:col-span-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {VALUES.map((v, i) => (
                <ValueCard key={i} {...v} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ValueCard({ icon, title, copy }) {
  // Entrance animation for individual cards
  const cardItem = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.article 
      variants={cardItem}
      className="relative bg-white rounded-xl shadow-[0_25px_60px_-30px_rgba(0,0,0,0.35)] transition hover:shadow-[0_30px_70px_-32px_rgba(0,0,0,0.35)]"
    >
      <span className="pointer-events-none absolute inset-0 rounded-xl border-2 border-primary" />

      <div className="p-4 md:p-5">
        <img src={icon} alt={title} className="w-10 h-10 mb-3" />

        <h3 className="text-[13px] md:text-sm font-extrabold tracking-wide uppercase text-neutral-900">
          {title}
        </h3>

        <p className="mt-3 text-[13px] md:text-[14px] leading-relaxed text-neutral-700">
          {copy}
        </p>
      </div>
    </motion.article>
  );
}