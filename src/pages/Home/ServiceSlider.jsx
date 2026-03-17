import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const rowOne = [
  {
    title: "Precare Secure 360°",
    desc: "PRECARE is a thoughtfully curated bouquet of support solutions aimed at ensuring 'CUSTOMER SUCCESS' in their respective businesses using our products and services.",
    icons: [
      "/assets/icon-1.png",
      "/assets/icon-2.png",
      "/assets/icon-3.png",
      "/assets/icon-4.png",
    ],
    image: "/assets/mi.png",
    link: "/services",
  },
  {
    title: "Equipment-as-a-Service",
    desc: "Equipment-as-a-Service (EaaS) provides flexible access to VOLVO machines, ensuring optimum efficiency and performance without long-term commitments.",
    icons: [
      "/assets/icon-9.png",
      "/assets/icon-10.png",
      "/assets/icon-11.png",
      "/assets/icon-12.png",
    ],
    image: "/assets/1.act.jpg",
    link: "/services",
  },
];

const rowTwo = [
  {
    
    title: "Auxillary service solutions",
    desc: "Comprehensive heavy equipment refurbishment — from hard-facing and bush replacements to structural welding, bucket rebuilds, and track link reconditioning.",
    icons: [
      "/assets/icon-5.png",
      "/assets/icon-6.png",
      "/assets/icon-7.png",
      "/assets/icon-8.png",
    ],
    image: "/assets/aux-4.png",
    link: "/services",
  },
  {
    
    title: "Operator training & certification",
    desc: "We conduct annual ESC certification programs to gain participants in safe and efficient equipment operation.",
    icons: [
      "/assets/icon-3.png",
      "/assets/icon-11.png",
      "/assets/icon-2.png",
      "/assets/icon-9.png",
    ],
    image: "/assets/operator-2.png",
    link: "/services",
  },
];

function Card({ item }) {
  return (
    <div className="h-[300px] bg-white shadow-md rounded-lg overflow-hidden flex border">
      {/* Left */}
      <div className="w-[60%] p-6 flex flex-col">
        <h3 className="font-bold text-lg mb-2 capitalize">
          {item.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
          {item.desc}
        </p>

        <div className="flex gap-4">
          {item.icons.map((icon, idx) => (
            <img
              key={idx}
              src={icon}
              alt=""
              className="w-9 h-9 object-contain"
            />
          ))}
        </div>

        <div className="mt-auto">
          <Link
            to={item.link}
            className="text-secondary font-semibold text-sm inline-flex items-center gap-2"
          >
            LEARN MORE →
          </Link>
        </div>
      </div>

      {/* Right */}
      <div className="w-[40%]">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default function ServiceGrid() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      {/* Main Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <div className="flex items-center gap-4 md:gap-6">
          <h2 className="text-2xl md:text-3xl font-bold font-primary">
            Equipment Life Cycle Solutions
          </h2>
          <img
            src="/assets/lifecycle-logo.svg"
            alt="Logo"
            className="w-[6.5rem] md:w-[10.5rem]"
          />
        </div>
      </motion.div>

      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {rowOne.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card item={item} />
          </motion.div>
        ))}
      </div>

      {/* Row 2 – Separate Titles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {rowTwo.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-4 font-primary">
              {item.sectionTitle}
            </h4>
            <Card item={item} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
