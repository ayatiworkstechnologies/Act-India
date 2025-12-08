import React from "react";
import { Volume2, Scissors, Building2, Recycle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function SolutionsSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
      <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="text-center"
>
  <h2 className="text-3xl md:text-4xl font-bold text-black font-primary">
    Services
  </h2>
  <p className="mt-4 text-gray-700 max-w-3xl mx-auto font-secondary">
   Our offerings span a complete support ecosystem — from Precare solutions that safeguard your equipment and optimize performance, to Auxiliary Services that provide essential on-ground support. We also deliver Equipment-as-a-Service, giving you flexible access to advanced machinery without heavy capital investments. To ensure safe and efficient operations, we provide Operator Training and Certification, empowering your workforce with the skills and confidence to excel.
  </p>

  <Link
    to="/services"   // 👈 set your route here
    className="mt-4 inline-block text-secondary font-semibold font-primary"
  >
    Learn More
  </Link>
      </motion.div>


     
      </div>
    </section>
  );
}
