import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const infraData = [
  {
    title: "warehouses & stockyards",
    desc: "ACT operates secure, strategically managed warehouses and stockyards built to support high-volume storage, streamlined handling, and seamless distribution for leading global brands. Our facilities ensure operational continuity, inventory visibility, and uncompromised safety standards.",
    image: "/assets/infra-1.png",
    link: "/infrastructure",
  },
  {
    title: "Machine stockyard",
    desc: "Our machine stockyards are engineered for efficient equipment staging, inspection, and movement—enabling OEMs and enterprise partners to maintain deployment speed and asset readiness at scale.",
    image: "/assets/infra-2.png",
    link: "/infrastructure",
  },
  {
    title: "Trainings facilities",
    desc: "ACT’s training environments empower workforce development with hands-on technical learning, certified modules, and real-equipment simulations tailored to industry requirements. We build talent pipelines ready for modern service and operational demands.",
    image: "/assets/infra-3.png",
    link: "/infrastructure",
  },
  {
    title: "Workshop - Chennai",
    desc: "Our Chennai workshop delivers advanced repair, refurbishment, and component-level servicing with precision workflows and OEM-aligned standards. It is a hub for quality, reliability, and fast-turnaround technical support.",
    image: "/assets/infra-4.png",
    link: "/infrastructure",
  },
  {
    title: "Support vehicle",
    desc: "ACT maintains a fleet of fully equipped support vehicles designed for rapid field response, onsite troubleshooting, and maintenance deployment—ensuring uptime and business continuity for our partners.",
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
