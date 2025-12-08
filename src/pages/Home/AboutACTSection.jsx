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
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-3 font-primary">
              About ACT
            </h3>
          
            <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 font-secondary text-black">Our Legacy of Excellence</h4>
            <p className="text-black text-sm sm:text-base leading-relaxed font-secondary">
             Advanced Construction Technologies Pvt Ltd stands as a beacon of innovation and reliability in the construction solutions industry. With over 80 years of business legacy, we have empowered more than 2,500 satisfied customers with cutting-edge solutions. Our dedicated team of over 350 passionate professionals ensures exceptional service, maintaining over 4,500 machines under our expert care. As the exclusive dealer for leading global construction equipment brands for over 20 years, we proudly serve Tamil Nadu and Kerala through our expansive network of 16+ branches, with plans for further growth. Our commitment to excellence drives us to redefine industry standards and deliver unparalleled value.
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
              src="/assets/about.png"
              alt="Excavator"
              className="max-h-[280px] sm:max-h-[350px] md:max-h-[400px] w-auto object-contain"
            />
          </motion.div>
       
        </div>
      </div>
    </section>
  );
}
