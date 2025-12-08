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
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl md:text-2xl font-bold mb-4">
          Why ACT 
         </h2>
        <p className="text-gray-700 text-base md:text-md leading-relaxed max-w-4xl mx-auto">
          ACT stands as a trusted partner for global brands, built on a foundation of integrity, fairness, and a commitment to long-term value creation. Our people are empowered to take ownership, drive innovation, and lead meaningful change that advances organisational goals. Every decision, process, and interaction is engineered to enable customer success, because our clients define who we are and the impact we deliver.  
          ACT isn’t just a service provider, we are an operational force multiplier for the businesses we support. 
        </p>
      </div>
    </section>
    </>
  
  );
}
