// EquipmentAas.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BadgeCheck,
  Wrench,
  PiggyBank,
  Gauge,
  Cpu,
  Boxes,
} from "lucide-react";

/* ===== Replace these images/labels with your assets ===== */
const SLIDES = [
  { src: "/assets/eaas-1.png", label: "Seamless Equipment Access" },
  { src: "/assets/eaas-2.png", label: "Predictive Maintenance" },
  { src: "/assets/eaas-3.png", label: "Cost Efficient Operations" },
  { src: "/assets/eaas-4.png", label: "Maximized Performance" },
  { src: "/assets/eaas-5.png", label: "Flexible Plans" },
];

const features = [
  { icon: Boxes, title: "No ownership hassle", para: "Access latest machinery, no upfront costs" },
  { icon: Cpu, title: "Scalable and flexible" },
  { icon: Wrench, title: "Zero maintenance" },
  { icon: BadgeCheck, title: "Ready-to-use machinery" },
];

export default function EaasService() {
  const [idx, setIdx] = useState(0);

  // Auto-advance the right-side slide
  useEffect(() => {
    if (SLIDES.length <= 1) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % SLIDES.length), 3200);
    return () => clearInterval(id);
  }, []);

  const current = SLIDES[idx];

  return (
    <section className="bg-white text-neutral-900 py-12 md:py-16" id="eaas">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* ============ LEFT ============ */}
          <div className="lg:col-span-7 space-y-5">

            {/* ⭐ UPDATED: Title + Logo Side by Side ⭐ */}
            <div className="flex items-center gap-3">
              <h2 className="text-[24px] tracking-tight">
                EAAS (Equipment as a Service)
              </h2>

              {/* Logo beside the title */}
              <img
                src="/assets/eaas.jpg"  // <-- change to your actual logo path
                alt="EaaS Logo"
                className="w-[5.5rem] h-[7.5rem] object-contain"
              />
            </div>

            <p className="text-[15px] leading-relaxed text-neutral-700">
              <strong>Equipment as a Service (EaaS)</strong> – an innovative solution
              designed to deliver maximum uptime, cost-efficiency, and seamless performance
              for your operations. EaaS is the perfect way to access state-of-the-art
              VOLVO SDLG machinery without long-term commitments and heavy upfront costs,
              ensuring you only pay for what you use.
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li className="text-[15px] leading-relaxed text-neutral-700">
                <strong>Seamless Equipment Access</strong>
              </li>
              <li className="text-[15px] leading-relaxed text-neutral-700">
                <strong>Predictive Maintenance</strong>
              </li>
              <li className="text-[15px] leading-relaxed text-neutral-700">
                <strong>Cost Efficient Operations</strong>
              </li>
              <li className="text-[15px] leading-relaxed text-neutral-700">
                <strong>Maximized Performance</strong>
              </li>
              <li className="text-[15px] leading-relaxed text-neutral-700">
                <strong>Flexible Plans</strong>
              </li>
            </ul>

            <h2 className="text-2xl md:text-2xl font-bold tracking-tight mt-6">
              Smart Choices, Smarter Operations
            </h2>

            {/* Feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map(({ icon: Icon, title }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl bg-white ring-1 ring-gray-200 px-4 py-3 shadow-sm hover:shadow-md transition"
                >
                  <div className="h-8 w-8 rounded-md bg-blue-50 flex items-center justify-center ring-1 ring-blue-200">
                    <Icon className="h-4 w-4 text-blue-600" />
                  </div>

                  <span className="font-semibold text-[15px]">{title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ============ RIGHT (Auto Slider) ============ */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden">
              
              {/* Image Slider */}
              <div className="relative h-[360px] md:h-[420px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current.src}
                    src={current.src}
                    alt={current.label}
                    className="absolute inset-0 h-full w-full object-cover"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </AnimatePresence>

                {/* Label Tag */}
                <div className="absolute top-4 left-4">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={current.label}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="inline-block bg-secondary text-white text-xs md:text-sm font-medium px-4 py-2 rounded-md"
                    >
                      {current.label}
                    </motion.span>
                  </AnimatePresence>
                </div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/15 to-transparent" />
              </div>

              <div className="h-4" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
