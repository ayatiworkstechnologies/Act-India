import React, {useEffect, useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';

/* ===== Data remains exactly as provided ===== */
const SLIDES = [
  { src: '/assets/focus-on-your-core-business.jpg', label: 'Seamless Equipment Access' },
  { src: '/assets/a-global-solution.jpg', label: 'Predictive Maintenance' },
  { src: '/assets/cost-management.jpg', label: 'Cost Efficient Operations' },
  { src: '/assets/guarantee-uptime.jpg', label: 'Maximized Performance' },
  { src: '/assets/flexibility-for-you.jpg', label: 'Flexible Plans' },
];

const features = [
  { icon: '/assets/service-icon1.png', title: 'No ownership hassle' },
  { icon: '/assets/service-icon4.png', title: 'Scalable and flexible' },
  { icon: '/assets/service-icon3.png', title: 'Zero maintenance' },
  { icon: '/assets/service-icon2.png', title: 'Ready-to-use machinery' },
];

export default function EaasService() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (SLIDES.length <= 1) return;
    const id = setInterval(() => setIdx(i => (i + 1) % SLIDES.length), 3200);
    return () => clearInterval(id);
  }, []);

  // --- Animation Variants ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <section className="bg-white text-neutral-900 py-12 md:py-16 overflow-hidden" id="eaas">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10"
        >
          {/* ============ LEFT ============ */}
          <div className="lg:col-span-12 space-y-5">

            {/* Title + Logo Side by Side */}
            <motion.div variants={fadeInUp} className="flex items-center gap-3">
              <h2 className="text-3xl font-bold font-primary tracking-tight">
                EAAS (Equipment as a Service)
              </h2>
              <img
                src="/assets/eaas.jpg"
                alt="EaaS Logo"
                className="w-[5.5rem] h-[7.5rem] object-contain"
              />
            </motion.div>

            <motion.p variants={fadeInUp} className="text-[15px] leading-relaxed text-neutral-700">
              <strong>Equipment as a Service (EaaS)</strong> – an innovative solution
              designed to deliver maximum uptime, cost-efficiency, and seamless performance
              for your operations. EaaS is the perfect way to access state-of-the-art
              VOLVO SDLG machinery without long-term commitments and heavy upfront costs,
              ensuring you only pay for what you use.
            </motion.p>

            {/* Benefits List - Staggered */}
            <motion.ul variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { src: "/assets/seam.png", text: "Seamless Equipment Access" },
                { src: "/assets/pred.png", text: "Predictive Maintenance" },
                { src: "/assets/cost.png", text: "Cost Efficient Operations" },
                { src: "/assets/maxi.png", text: "Maximized Performance" },
                { src: "/assets/flex.png", text: "Flexible Plans" }
              ].map((item, i) => (
                <motion.li key={i} variants={fadeInUp} className="flex items-start gap-3 text-[15px] text-neutral-700">
                  <img src={item.src} alt={item.text} className="w-5 h-5 mt-1 shrink-0" />
                  <strong>{item.text}</strong>
                </motion.li>
              ))}
            </motion.ul>

            <motion.h4 variants={fadeInUp} className="text-2xl md:text-xl font-bold tracking-tight mt-6">
              Smart Choices, Smarter Operations
            </motion.h4>

            {/* Feature grid - Staggered */}
            <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {features.map(({icon, title}, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex items-center gap-3">
                  <img
                    src={icon}
                    alt={title}
                    className="h-10 w-10 object-contain"
                  />
                  <span className="text-sm font-bold text-gray-800">
                    {title}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}