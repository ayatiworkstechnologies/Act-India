import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const infraData = [
  {
    title: "Warehouses & Stockyards",
    desc: "ACT operates secure, strategically managed warehouses and stockyards built to support high-volume storage, streamlined handling, and seamless distribution for leading global brands. Our facilities ensure operational continuity, inventory visibility, and uncompromised safety standards.",
    image: "/assets/warehouse.jpg",
    link: "/infrastructure",
  },
  {
    title: "Machine Stockyard",
    desc: "Our machine stockyards are engineered for efficient equipment staging, inspection, and movement—enabling OEMs and enterprise partners to maintain deployment speed and asset readiness at scale.",
    image: "/assets/machine.jpg",
    link: "/infrastructure",
  },
  {
    title: "Training Facilities",
    desc: "ACT's training environments empower workforce development with hands-on technical learning, certified modules, and real-equipment simulations tailored to industry requirements. We build talent pipelines ready for modern service and operational demands.",
    image: "/assets/training.jpg",
    link: "/infrastructure",
  },
  {
    title: "Workshop – Chennai",
    desc: "Our Chennai workshop delivers advanced repair, refurbishment, and component-level servicing with precision workflows and OEM-aligned standards. It is a hub for quality, reliability, and fast-turnaround technical support.",
    image: "/assets/workshop.jpg",
    link: "/infrastructure",
  },
  {
    title: "Support Vehicle",
    desc: "ACT maintains a fleet of fully equipped support vehicles designed for rapid field response, onsite troubleshooting, and maintenance deployment—ensuring uptime and business continuity for our partners.",
    image: "/assets/support.jpg",
    link: "/infrastructure",
  },
];

export default function Infrastructure() {
  const trackRef = useRef(null);
  const posRef = useRef(0);
  const rafRef = useRef(null);
  const isPausedRef = useRef(false);
  const [activeImage, setActiveImage] = useState(infraData[0].image);
  const [fadingImage, setFadingImage] = useState(false);
  const currentIdxRef = useRef(-1);
  const containerRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const container = containerRef.current;
    if (!track || !container) return;

    const speed = 0.5;
    const singleHeight = track.scrollHeight / 2;

    const updateMainImage = () => {
      const cards = track.querySelectorAll("[data-card]");
      const containerTop = container.getBoundingClientRect().top;
      let closestIdx = 0;
      let minDist = Infinity;

      cards.forEach((card, i) => {
        const idx = i % infraData.length;
        const rect = card.getBoundingClientRect();
        const dist = Math.abs(rect.top - containerTop - 80);
        if (dist < minDist) {
          minDist = dist;
          closestIdx = idx;
        }
      });

      if (closestIdx !== currentIdxRef.current) {
        currentIdxRef.current = closestIdx;
        setFadingImage(true);
        setTimeout(() => {
          setActiveImage(infraData[closestIdx].image);
          setFadingImage(false);
        }, 250);
      }
    };

    const animate = () => {
      if (!isPausedRef.current) {
        posRef.current += speed;
        if (posRef.current >= singleHeight) posRef.current -= singleHeight;
        track.style.transform = `translateY(-${posRef.current}px)`;
        updateMainImage();
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    const pause = () => (isPausedRef.current = true);
    const resume = () => (isPausedRef.current = false);
    container.addEventListener("mouseenter", pause);
    container.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(rafRef.current);
      container.removeEventListener("mouseenter", pause);
      container.removeEventListener("mouseleave", resume);
    };
  }, []);

  // Duplicate cards for seamless loop
  const allCards = [...infraData, ...infraData];

  return (
    <section className="max-w-7xl mx-auto py-12 px-4 md:px-8">
      {/* Heading */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold font-primary mb-3">
          Infrastructure
        </h2>
        <motion.p
          className="text-gray-600 max-w-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Infrastructure includes warehouses, machine stockyards, training
          facilities, Chennai workshop, and support vehicles.
        </motion.p>
      </motion.div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

        {/* Left — Sticky Image */}
        <div className="lg:sticky lg:top-8 h-[400px] md:h-[500px] lg:h-[620px]">
          <div className="h-full w-full overflow-hidden rounded-2xl shadow-lg">
            <img
              src={activeImage}
              alt="Infrastructure"
              className="w-full h-full"
              style={{
                opacity: fadingImage ? 0 : 1,
                transition: "opacity 0.3s ease",
              }}
            />
          </div>
        </div>

        {/* Right — Auto-scrolling Cards */}
        <div
          ref={containerRef}
          className="h-[400px] md:h-[500px] lg:h-[620px] overflow-hidden relative"
        >
          {/* Fade masks */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

          <div ref={trackRef} className="flex flex-col gap-4">
            {allCards.map((item, idx) => (
              <div
                key={idx}
                data-card
                className="flex flex-col sm:flex-row items-stretch bg-white shadow border rounded-xl overflow-hidden flex-shrink-0"
              >
                {/* Text */}
                <div className="flex-1 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 capitalize">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-6 mb-3">
                    {item.desc}
                  </p>
                  <Link
                    to={item.link}
                    className="text-secondary font-medium text-sm inline-flex items-center gap-1"
                  >
                    LEARN MORE →
                  </Link>
                </div>

                {/* Image */}
                <div className="w-full sm:w-32 md:w-36 h-40 sm:h-auto bg-gray-200 flex items-center justify-center shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}