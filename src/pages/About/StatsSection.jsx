"use client";
import React from "react";
import CountUp from "react-countup";

export default function StatsSection() {
  const stats = [
    { value: 2500, suffix: "+", label: "Satisfied\nCustomers" },
    { value: 4500, suffix: "+", label: "Guarded\nMachines" },
    { value: 350, suffix: "+", label: "Drivers\nAchievers" },
    { value: 16, suffix: "+", label: "Expanding\nTamil Nadu, Kerala" },
    { value: 80, suffix: "+", label: "Business Legacy\nSpan" },
  ];

 const VALUES = [
  {
    num: "01",
    title: "WORLD RENOWNED EQUIPMENT",
    copy: "ACT represents and deals only with the most renowned brands offering latest technology and best in quality products and services.",
  },
  {
    num: "02",
    title: "LATEST TECHNOLOGY",
    copy: "When you choose ACT Construction Equipment, you can be rest assured that you can always have access to the latest innovations and technologies from around the world.",
  },
  {
    num: "03",
    title: "PROACTIVE AFTERMARKET SUPPORT",
    copy: "ACT's aftermarket support is built on a strong foundation to deliver PROACTIVE solutions to the customers. Each brand has a dedicated team of highly skilled and continuously trained aftermarket team fully geared with special tools and diagnostic equipment to deliver best in industry TAT - Turn Around Time.",
  },
  {
    num: "04",
    title: "BEST IN INDUSTRY BUSINESS PROCESSES",
    copy: "Systems and processes are our cornerstones. We have been acknowledged by the industry to be highly process driven and system focussed organisation focussed to deliver the best for our customers in terms of products and services.",
  },
   {
    num: "05",
    title: "QUALITY AND SAFETY ASSURED",
    copy: "Quality and Safety are deeply ingrained into every ACTian. Every product and service we deliver commits to very high standards of quality and every process and service we render adheres to highest standards of safety to all stakeholders.",
  },
];


  return (
    <>
      <section className="w-full px-4 py-10 flex justify-center">
        <div className="relative w-full max-w-6xl bg-[#F5F5F5] p-6 rounded-2xl">
          {/* Show all cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {stats.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center text-center 
                         rounded-xl px-4 py-6 h-[150px] md:h-[180px]
                         bg-white text-gray-900 
                         hover:bg-secondary hover:text-white
                         transition-all duration-300 ease-in-out"
              >
                {/* Value */}
                <h3 className="text-2xl md:text-3xl font-bold mb-1">
                  <CountUp
                    start={0}
                    end={item.value}
                    duration={2}
                    separator=","
                    suffix={item.suffix}
                  />
                </h3>

                {/* Label */}
                <p className="text-xs sm:text-sm font-medium whitespace-pre-line">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full bg-white mt-6">
        <div className="max-w-6xl mx-auto px-4  text-center">
          <h2 className="text-3xl md:text-2xl font-bold mb-4">
            Why Choose ACT
          </h2>
        </div>
      </section>
     <section className="py-16">
  <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1.5fr_minmax(0,1fr)] gap-10 items-stretch">
    {/* LEFT – 4 POINTS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
      {VALUES.map((v) => (
        <div key={v.num} className="flex items-start gap-4">
          <span className="text-3xl font-bold text-[#0066cc] leading-none">
            {v.num}
          </span>
          <div>
            <h3 className="text-xs font-semibold tracking-[0.25em] uppercase">
              {v.title}
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
              {v.copy}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* RIGHT – FULL-WIDTH IMAGE */}
    <div className="h-full">
    <img
  src="/assets/act-why-choose.jpg"
  alt="ACT Construction Equipment"
  className="w-full max-h-[520px] object-contain"
/>
    </div>
  </div>
</section>

    </>
  );
}

function ValueCard({ num, title, copy }) {
  return (
    <article className="relative bg-white rounded-xl shadow-[0_25px_60px_-30px_rgba(0,0,0,0.35)] transition hover:shadow-[0_30px_70px_-32px_rgba(0,0,0,0.35)]">
      {/* Full-bleed dotted border on the card itself */}
      <span className="pointer-events-none absolute inset-0 rounded-xl border-2 border-dotted border-blue-400/70" />

      <div className="p-4 md:p-5">
        <h3 className="text-[13px] md:text-sm font-extrabold tracking-wide uppercase text-neutral-900">
          {num}-{title}
        </h3>
        <p className="mt-3 text-[13px] md:text-[14px] leading-relaxed text-neutral-700">
          {copy}
        </p>
      </div>
    </article>
  );
}
