import React from "react";
import { FaHandshake } from "react-icons/fa";

export default function WhyChooseACT() {
  return (
    <section className="py-16 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-12">
        {/* Left content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            Why Choose ACT
          </h2>
          <div className="w-32 h-[3px] bg-gradient-to-r from-blue-500 to-blue-800"></div>
          <p className="text-gray-600 mb-8 leading-relaxed pt-5">
            With over 30 years of excellence in the field of construction, ACT
            is a leader in providing construction solutions in the form of
            equipment and service solutions.
          </p>

          {/* Card */}
          <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-100 relative">
            <FaHandshake className="absolute left-[88%] top-3 transform -translate-x-1/4 text-blue-600 text-4xl bg-white p-1 rounded-full shadow-md" />
            <h3 className="font-bold text-black text-lg mb-2">
              WORLD RENOWNED EQUIPMENT
            </h3>
            <div className="w-32 h-[3px] bg-gradient-to-r from-blue-500 to-blue-800"></div>

            <p className="text-gray-600 text-sm leading-relaxed pt-4">
              ACT’s aftermarket support is built on a strong foundation to
              deliver PROACTIVE solutions to the customers. Each brand has a
              dedicated team of highly skilled and continuously trained
              aftermarket team fully geared with special tools and diagnostic
              equipment to deliver best in industry TAT - Turn Around Time.
            </p>
          </div>
        </div>

        {/* Center dots */}
        <div className="flex flex-col items-center space-y-3">
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>

        {/* Right side circle */}
        <div className="flex justify-center items-center relative">
          <div className="w-64 h-64 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex flex-col justify-center items-center text-white shadow-lg relative">
            <FaHandshake className="absolute top-[2.5rem] left-[5%] transform -translate-x-1/2 text-4xl bg-white text-blue-600 rounded-full p-1 shadow-md" />
            <h3 className="text-5xl font-bold">17 Years</h3>
            <p className="text-lg mt-1">of Successful Work</p>
          </div>
        </div>
      </div>
    </section>
  );
}
