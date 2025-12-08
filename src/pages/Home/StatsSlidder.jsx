"use client";
import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { ArrowUpRight } from "lucide-react";

export default function StatsSlidder() {
  const stats = [
    { value: 2500, suffix: "+", label: "Satisfied\nCustomers" },
    { value: 4500, suffix: "+", label: "Guarded\nMachines" },
    { value: 350, suffix: "+", label: "Drivers\nAchievers" },
    { value: 16, suffix: "+", label: "Expanding\nTamil Nadu, Kerala" },
    { value: 80, suffix: "+", label: "Business Legacy\nSpan" },
      { value: 20, suffix: "+", label: "Regional Brand\nDominance" },
    { value: 2500, suffix: "+", label: "Satisfied\nCustomers" },
    { value: 4500, suffix: "+", label: "Guarded\nMachines" },
    { value: 350, suffix: "+", label: "Drivers\nAchievers" },
    { value: 16, suffix: "+", label: "Expanding\nTamil Nadu, Kerala" },
    { value: 80, suffix: "+", label: "Business Legacy\nSpan" },
      { value: 20, suffix: "+", label: "Regional Brand\nDominance" },
      { value: 2500, suffix: "+", label: "Satisfied\nCustomers" },
    { value: 4500, suffix: "+", label: "Guarded\nMachines" },
    { value: 350, suffix: "+", label: "Drivers\nAchievers" },
    { value: 16, suffix: "+", label: "Expanding\nTamil Nadu, Kerala" },
    { value: 80, suffix: "+", label: "Business Legacy\nSpan" },
      { value: 20, suffix: "+", label: "Regional Brand\nDominance" },
       { value: 2500, suffix: "+", label: "Satisfied\nCustomers" },
    { value: 4500, suffix: "+", label: "Guarded\nMachines" },

  ]; 

  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const perSlide = isMobile ? 2 : 4;
  const totalSlides = Math.ceil(stats.length / perSlide);

  const next = () => setIndex((i) => (i + 1) % totalSlides);
  const prev = () => setIndex((i) => (i - 1 + totalSlides) % totalSlides);

  // ✅ Auto move every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => next(), 3000);
    return () => clearInterval(timer);
  }, [isMobile]);

  const visible = stats.slice(index * perSlide, index * perSlide + perSlide);

  return (
    <section className="w-full px-4 py-10 flex justify-center">
      <div className="relative w-full max-w-6xl bg-[#F5F5F5] p-6 rounded-2xl overflow-hidden">
        {/* ✅ Cards Grid */}
        <div
          className={`grid gap-4 transition-all duration-700 ease-in-out transform ${
            isMobile ? "grid-cols-2" : "grid-cols-4"
          }`}
        >
          {visible.map((item, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center justify-center text-center rounded-xl px-4 py-6 h-[150px] md:h-[180px] 
                         bg-white text-gray-900 hover:bg-secondary hover:text-white transition-all duration-300 ease-in-out"
            >
              {/* ✅ Arrow (shows on hover) */}
              <div className="absolute top-3 right-3 rounded-full p-1 bg-white transition-all duration-300 opacity-0 group-hover:opacity-100">
                <ArrowUpRight size={16} className="text-blue-600" />
              </div>

              {/* ✅ Animated Value */}
              <h3 className="text-2xl md:text-3xl font-bold mb-1">
                <CountUp
                  start={0}
                  end={item.value}
                  duration={2}
                  separator=","
                  suffix={item.suffix}
                />
              </h3>

              {/* ✅ Label */}
              <p className="text-xs sm:text-sm font-medium whitespace-pre-line">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
