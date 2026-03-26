import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCogs, FaUsers, FaBoxOpen } from "react-icons/fa";

export default function AboutACT() {
  return (
    <section className="relative text-white">
      <div className="bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-6 py-10 gap-10">
          {/* Left Content */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-3 font-primary">
              About ACT
            </h2>
          
           
            <p className="text-black text-sm sm:text-base leading-relaxed font-secondary">
             Advanced Construction Technologies Pvt Ltd, ACT was established by Mohan Ramanathan as part of a 70 year old business conglomerate with multiple business interests. ACT provides a gateway to bring new and advanced products and services from across the globe to support the Indian Construction Industry. With more than 30 years of excellence in the field of construction, ACT remains a leader in providing solutions in the forms of equipment and services to the construction and infrastructure segments.
            </p>
                   {/* CTA Button */}
          <motion.div
           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/about"
              className="mt-6 inline-block px-4 bg-secondary text-white text-lg shadow-lg transition font-primary"
            >
              Learn More →
            </Link>
          </motion.div>
          </motion.div>
       

          {/* Right Excavator */}
          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src="/assets/home-about.jpg"
              alt="Excavator"
              className="max-h-[400px] sm:max-h-[350px] md:max-h-[600px] w-auto object-contain"
            />
          </motion.div>
       
        </div>
      </div>
    </section>
  );
}
