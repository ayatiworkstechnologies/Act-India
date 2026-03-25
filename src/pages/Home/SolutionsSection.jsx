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
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-black font-primary">
            Services
          </h2>

          {/* Description (CENTER + JUSTIFY FIX) */}
          <div className="mt-4 max-w-5xl mx-auto text-gray-700 font-secondary leading-relaxed text-left md:text-justify space-y-2">
            
            <p>
              As authorised dealer for world leading construction equipment
              brands, we commit ourselves to providing proactive service
              solutions designed to deliver maximum uptime, enhanced
              performance and longer economic life.
            </p>

            <p>
              Our customised aftermarket packages ensure customer success and
              our lifecycle solutions deliver cradle-to-cradle support based on
              customer needs.
            </p>

            <p>
              Supported by a competent team of OEM trained experts, we help
              customers reduce operating costs, improve productivity and
              achieve maximum return on their equipment.
            </p>

          </div>

          {/* CTA */}
          <Link
            to="/services"
            className="mt-6 inline-block text-secondary font-semibold font-primary hover:none transition"
          >
            Learn More
          </Link>
        </motion.div>

      </div>
    </section>
  );
}