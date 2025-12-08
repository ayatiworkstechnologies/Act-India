"use client";
import React from "react";
import CountUp from "react-countup";

export default function StatsSlidder() {
  const stats = [
    { value: 2500, suffix: "+", label: "Satisfied\nCustomers" },
    { value: 4500, suffix: "+", label: "Guarded\nMachines" },
    { value: 350, suffix: "+", label: "Drivers\nAchievers" },
    { value: 16, suffix: "+", label: "Expanding\nTamil Nadu, Kerala" },
    { value: 80, suffix: "+", label: "Business Legacy\nSpan" },
    { value: 20, suffix: "+", label: "Regional Brand\nDominance" },
  ];

  return (
    <section className="w-full px-4 py-10 flex justify-center">
      <div className="relative w-full max-w-6xl bg-[#F5F5F5] p-6 rounded-2xl">
        
        {/* Grid showing all 6 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((item, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center justify-center text-center 
                         rounded-xl px-4 py-6 h-[150px] md:h-[180px] 
                         bg-white text-gray-900 hover:bg-secondary hover:text-white 
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
  );
}
