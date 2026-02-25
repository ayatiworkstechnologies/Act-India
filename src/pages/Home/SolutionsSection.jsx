import React from 'react';
import {Volume2, Scissors, Building2, Recycle} from 'lucide-react';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

export default function SolutionsSection () {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <motion.div
          initial={{opacity: 0, y: 40}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
          viewport={{once: true}}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-black font-primary">
            Services
          </h2>
          <p className="mt-4 text-gray-700 max-w-5xl mx-auto font-secondary">
           As authorised dealer for world leading construction equipment brands, we commit ourselves to providing proactive service solutions designed to deliver maximum uptime, enhanced performance and longer economic life.<br/>
           Our customised aftermarket packages ensure customer’s success and our LIFECYCLE SOLUTIONS ensures CRADLE to CRADLE solutions based on customer needs. <br/>
           Supported by a competent team of OEM trained expert, we enable customers to reduce operating costs, improve productivity and thereby achieve maximum return on their equipment.
          </p>

          <Link
            to="/services" // 👈 set your route here
            className="mt-4 inline-block text-secondary font-semibold font-primary"
          >
            Learn More
          </Link>
        </motion.div>

   

      </div>
    </section>
  );
}
