"use client";

import React, { useState, useEffect } from "react";

const VALUES = [
  {
    num: "01",
    title: "WORLD RENOWNED EQUIPMENT",
    copy: "ACT represents and deals only with the most renowned brands offering latest technology and best in quality products and services.",
  },
  {
    num: "02",
    title: "LATEST TECHNOLOGY",
    copy: "When you choose ACT Construction Equipment, you can always access the latest innovations and technologies.",
  },
  {
    num: "03",
    title: "PROACTIVE AFTERMARKET SUPPORT",
    copy: "ACT's aftermarket support is built on a strong foundation to deliver proactive solutions to customers.",
  },
  {
    num: "04",
    title: "BEST IN INDUSTRY BUSINESS PROCESSES",
    copy: "Systems and processes are our cornerstones. We are a highly process-driven organization.",
  },
  {
    num: "05",
    title: "QUALITY AND SAFETY ASSURED",
    copy: "Quality and Safety are deeply ingrained into every ACTian.",
  },
];

const sliderImages = [
  "/assets/why-image.png",
  "/assets/epi.webp",
  "/assets/sd.jpeg",
  "/assets/aman.webp",
  "/assets/hus.jpeg",
  "/assets/sch.jpeg",
];

export default function StatsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="w-full bg-white mt-6">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose ACT
          </h2>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1.5fr_minmax(0,1fr)] gap-10 items-center">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
            {VALUES.map((v) => (
              <div key={v.num} className="flex items-start gap-4">
                <span className="text-3xl font-bold text-[#0066cc]">
                  {v.num}
                </span>
                <div>
                  <h3 className="text-xs font-semibold tracking-[0.25em] uppercase">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                    {v.copy}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative w-full h-[420px] overflow-hidden">
            {sliderImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`slide-${i}`}
                className="absolute inset-0 w-full h-full object-contain transition-opacity duration-1000"
                style={{ opacity: i === current ? 1 : 0 }}
              />
            ))}

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {sliderImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 transition-all duration-300 ${
                    i === current ? "" : ""
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}