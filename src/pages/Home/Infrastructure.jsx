import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const infraData = [
  {
    title: "warehouses & stockyards",
    desc: "PRECARE is a thoughtfully curated bouquet of support solutions aimed at ensuring 'CUSTOMER SUCCESS' in their respective businesses using our products and services.",
    image: "/assets/infra-1.png",
    link: "/infrastructure",
  },
  {
    title: "Machine stockyard",
    desc: "PRECARE is a thoughtfully curated bouquet of support solutions aimed at ensuring 'CUSTOMER SUCCESS' in their respective businesses using our products and services.",
    image: "/assets/infra-2.png",
    link: "/infrastructure",
  },
  {
    title: "Trainings facilities",
    desc: "PRECARE is a thoughtfully curated bouquet of support solutions aimed at ensuring 'CUSTOMER SUCCESS' in their respective businesses using our products and services.",
    image: "/assets/infra-3.png",
    link: "/infrastructure",
  },
  {
    title: "Workshop - Chennai",
    desc: "PRECARE is a thoughtfully curated bouquet of support solutions aimed at ensuring 'CUSTOMER SUCCESS' in their respective businesses using our products and services.",
    image: "/assets/infra-4.png",
    link: "/infrastructure",
  },
  {
    title: "Support vehicle",
    desc: "PRECARE is a thoughtfully curated bouquet of support solutions aimed at ensuring 'CUSTOMER SUCCESS' in their respective businesses using our products and services.",
    image: "/assets/infra-5.png",
    link: "/infrastructure",
  },
];

const mainImage = "/assets/infra-banner.png";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Infrastructure() {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4 md:px-8">
      {/* Section Heading */}
      <motion.h2
        className="text-xl font-semibold mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Infrastructure
      </motion.h2>

    

      <motion.p
        className="text-gray-600 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Infrastructure includes warehouses, machine stockyards, training
        facilities, Chennai workshop, and support vehicles.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Large Image */}
        <motion.div
          className="h-[500px] md:h-[600px] overflow-hidden rounded-md"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={mainImage}
            alt="Infrastructure Main"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right List of Cards */}
        <div className="flex flex-col gap-4">
          {infraData.map((item, idx) => (
            <motion.div
              key={idx}
              className="flex items-center bg-white shadow border rounded-md overflow-hidden"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Left Text */}
              <div className="flex-1 p-4">
                <h3 className="font-semibold text-gray-900 mb-1 capitalize">
                  {item.title}
                </h3>
                

                <p className="text-gray-600 text-sm mb-2">{item.desc}</p>
                <Link
  to={item.link}
  className="text-secondary font-medium text-sm flex items-center gap-1"
>
  LEARN MORE →
</Link>
              </div>

              {/* Right Thumbnail */}
              <div className="w-32 h-full bg-gray-200 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
