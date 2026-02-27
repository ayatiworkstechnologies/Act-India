// EquipmentAas.jsx
import React, {useEffect, useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {BadgeCheck, Wrench, PiggyBank, Gauge, Cpu, Boxes} from 'lucide-react';

/* ===== Replace these images/labels with your assets ===== */
const SLIDES = [
  {
    src: '/assets/focus-on-your-core-business.jpg',
    label: 'Seamless Equipment Access',
  },
  {src: '/assets/a-global-solution.jpg', label: 'Predictive Maintenance'},
  {src: '/assets/cost-management.jpg', label: 'Cost Efficient Operations'},
  {src: '/assets/guarantee-uptime.jpg', label: 'Maximized Performance'},
  {src: '/assets/flexibility-for-you.jpg', label: 'Flexible Plans'},
];

const features = [
  {
    icon: '/assets/service-icon1.png',
    title: 'No ownership hassle',
  },
  {
    icon: '/assets/service-icon4.png',
    title: 'Scalable and flexible',
  },
  {
    icon: '/assets/service-icon3.png',
    title: 'Zero maintenance',
  },
  {
    icon: '/assets/service-icon2.png',
    title: 'Ready-to-use machinery',
  },
];

export default function EaasService () {
  const [idx, setIdx] = useState (0);

  // Auto-advance the right-side slide
  useEffect (() => {
    if (SLIDES.length <= 1) return;
    const id = setInterval (() => setIdx (i => (i + 1) % SLIDES.length), 3200);
    return () => clearInterval (id);
  }, []);

  const current = SLIDES[idx];

  return (
    <section className="bg-white text-neutral-900 py-12 md:py-16" id="eaas">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* ============ LEFT ============ */}
          <div className="lg:col-span-12 space-y-5">

            {/* ⭐ UPDATED: Title + Logo Side by Side ⭐ */}
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-bold font-primary tracking-tight">
                EAAS (Equipment as a Service)
              </h2>

              {/* Logo beside the title */}
              <img
                src="/assets/eaas.jpg" // <-- change to your actual logo path
                alt="EaaS Logo"
                className="w-[5.5rem] h-[7.5rem] object-contain"
              />
            </div>

            <p className="text-[15px] leading-relaxed text-neutral-700">
              <strong>Equipment as a Service (EaaS)</strong>
              {' '}
              – an innovative solution
              designed to deliver maximum uptime, cost-efficiency, and seamless performance
              for your operations. EaaS is the perfect way to access state-of-the-art
              VOLVO SDLG machinery without long-term commitments and heavy upfront costs,
              ensuring you only pay for what you use.
            </p>

                     <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  <li className="flex items-start gap-3 text-[15px] text-neutral-700">
    <img
      src="/assets/seam.png"
      alt="Seamless Equipment Access"
      className="w-5 h-5 mt-1 shrink-0"
    />
    <strong>Seamless Equipment Access</strong>
  </li>

  <li className="flex items-start gap-3 text-[15px] text-neutral-700">
    <img
      src="/assets/pred.png"
      alt="Predictive Maintenance"
      className="w-5 h-5 mt-1 shrink-0"
    />
    <strong>Predictive Maintenance</strong>
  </li>

  <li className="flex items-start gap-3 text-[15px] text-neutral-700">
    <img
      src="/assets/cost.png"
      alt="Cost Efficient Operations"
      className="w-5 h-5 mt-1 shrink-0"
    />
    <strong>Cost Efficient Operations</strong>
  </li>

  <li className="flex items-start gap-3 text-[15px] text-neutral-700">
    <img
      src="/assets/maxi.png"
      alt="Maximized Performance"
      className="w-5 h-5 mt-1 shrink-0"
    />
    <strong>Maximized Performance</strong>
  </li>

  <li className="flex items-start gap-3 text-[15px] text-neutral-700">
    <img
      src="/assets/flex.png"
      alt="Flexible Plans"
      className="w-5 h-5 mt-1 shrink-0"
    />
    <strong>Flexible Plans</strong>
  </li>
</ul>

            <h4 className="text-2xl md:text-xl font-bold tracking-tight mt-6">
              Smart Choices, Smarter Operations
            </h4>

            {/* Feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {features.map (({icon, title}, i) => (
                <div key={i} className="flex items-center gap-3">
                  <img
                    src={icon}
                    alt={title}
                    className="h-10 w-10 object-contain"
                  />
                  <span className="text-sm font-bold text-gray-800">
                    {title}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* ============ RIGHT (Auto Slider) ============ */}
          

        </div>
      </div>
    </section>
  );
}
