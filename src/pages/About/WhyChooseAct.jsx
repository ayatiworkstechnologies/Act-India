"use client";

import React, { useEffect, useState } from "react";

const VALUES = [
  {
    num: "01",
    title: "WORLD RENOWNED EQUIPMENT",
    copy: "ACT represents and deals only with the most renowned brands offering latest technology and best in quality products and services.",
    icon: "🏆",
    image: "/assets/why-image-1.png",
  },
  {
    num: "02",
    title: "LATEST TECHNOLOGY",
    copy: "When you choose ACT Construction Equipment, you can always access the latest innovations and technologies.",
    icon: "⚡",
    image: "/assets/epi.webp",
  },
  {
    num: "03",
    title: "PROACTIVE AFTERMARKET SUPPORT",
    copy: "ACT's aftermarket support is built on a strong foundation to deliver proactive solutions to customers.",
    icon: "🛠️",
    image: "/assets/sd.jpeg",
  },
  {
    num: "04",
    title: "BEST IN INDUSTRY BUSINESS PROCESSES",
    copy: "Systems and processes are our cornerstones. We are a highly process-driven organization.",
    icon: "📊",
    image: "/assets/aman.webp",
  },
  {
    num: "05",
    title: "QUALITY AND SAFETY ASSURED",
    copy: "Quality and Safety are deeply ingrained into every ACTian.",
    icon: "🛡️",
    image: "/assets/hus.jpeg",
  },
];

export default function StatsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % VALUES.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const activeItem = VALUES[current];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold tracking-[0.25em] uppercase text-[#0066cc] mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
            Why Choose ACT
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#0066cc]" />
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Featured active card */}
            <div className="relative overflow-hidden rounded-[28px] bg-white border border-slate-200 shadow-lg p-6 md:p-8">
              <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-[#0066cc] via-sky-500 to-cyan-400" />

              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="h-14 w-14 rounded-2xl bg-[#0066cc]/10 flex items-center justify-center text-3xl">
                  {activeItem.icon}
                </div>
                <div className="text-[#0066cc] text-sm font-bold tracking-widest">
                  {activeItem.num}
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug mb-4">
                {activeItem.title}
              </h3>

              <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-6">
                {activeItem.copy}
              </p>

              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-[#0066cc]" />
                <p className="text-sm text-slate-500">
                  Trusted solutions for performance, reliability, and long-term value.
                </p>
              </div>
            </div>

            {/* Mini cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {VALUES.map((item, i) => (
                <button
                  key={item.num}
                  onClick={() => setCurrent(i)}
                  className={`text-left rounded-2xl border p-4 transition-all duration-300 ${
                    i === current
                      ? "bg-[#0066cc] text-white border-[#0066cc] shadow-lg scale-[1.02]"
                      : "bg-white text-slate-800 border-slate-200 hover:border-[#0066cc]/40 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span
                      className={`text-xs font-bold px-2 py-1 rounded-full ${
                        i === current
                          ? "bg-white/20 text-white"
                          : "bg-[#0066cc]/10 text-[#0066cc]"
                      }`}
                    >
                      {item.num}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold uppercase tracking-wide leading-snug">
                    {item.title}
                  </h4>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE CARD */}
          <div className="lg:col-span-7">
            <div className="relative h-[380px] sm:h-[450px] lg:h-full min-h-[500px] overflow-hidden rounded-[30px] shadow-xl bg-slate-200">
              {VALUES.map((item, i) => (
                <img
                  key={item.num}
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-1000"
                  style={{
                    opacity: i === current ? 1 : 0,
                    transform: i === current ? "scale(1)" : "scale(1.08)",
                  }}
                />
              ))}

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/75 via-slate-900/20 to-transparent" />

              {/* Floating text */}
              <div className="absolute left-6 bottom-6 md:left-8 md:bottom-8 z-20 max-w-xl text-white">
                <span className="inline-flex items-center rounded-full bg-white/15 backdrop-blur-md px-4 py-1.5 text-xs font-semibold tracking-[0.25em] uppercase border border-white/20 mb-4">
                  ACT Advantage
                </span>

                <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-3">
                  {activeItem.title}
                </h3>

                <p className="text-sm md:text-base text-white/85 leading-relaxed max-w-lg">
                  {activeItem.copy}
                </p>
              </div>

              {/* Counter */}
              <div className="absolute top-5 right-5 z-20 rounded-full bg-black/35 backdrop-blur-md text-white text-sm px-4 py-2 border border-white/10">
                {current + 1} / {VALUES.length}
              </div>

              {/* Dots */}
              <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2">
                {VALUES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-8 h-2 bg-white"
                        : "w-2 h-2 bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}