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
          Why Choose ACT 
         </h2>
     <ul className="mt-4 text-left max-w-3xl mx-auto space-y-2 text-gray-700 list-disc list-inside">
        <li>WORLD RENOWNED EQUIPMENT <br/>
ACT represents and deals only with the most renowned brands offering latest technology and best in quality products and services.</li>
 <li>LATEST TECHNOLOGY <br/>
When you choose ACT Construction Equipment, you can be rest assured that you can always have access to the latest innovations and technologies from around the world.</li>
 <li>PROACTIVE AFTERMARKET SUPPORT<br/>
ACT's aftermarket support is built on a strong foundation to deliver PROACTIVE solutions to the customers. Each brand has a dedicated team of highly skilled and continuously trained aftermarket team fully geared with special tools and diagnostic equipment to deliver best in industry TAT- Turn Around Time.</li>
 <li>BEST IN INDUSTRY BUSINESS PROCESSES<br/>
Systems and Processes are our cornerstones. We have been acknowledged by the industry to be highly process driven and system focussed organisation focussed to deliver the best for our customers in terms of products and services.</li>
 <li>QUALITY AND SAFETY ASSURED<br/>
Quality and Safety are deeply ingrained into every ACTian. Every product and service we deliver commits to very high standards of quality and every process and service we render adheres to highest standards of safety to all stakeholders.</li>
      
      </ul>

      </div>
    </section>
    </>
  
  );
}
