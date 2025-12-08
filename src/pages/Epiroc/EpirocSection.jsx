import React from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function EpirocSection() {
  return (
    <section className="bg-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="flex flex-col items-start space-y-6">
          {/* Logo */}
          <img
            src="/assets/epiroc.png"
            alt="Epiroc Logo"
            className="w-32 mb-4"
          />

          {/* Tagline */}
          <h3 className="text-2xl font-bold leading-snug">
             Innovation,<span className="font-light"> Precision,</span> <br />
            <span className="font-semibold">Performance.</span>
          </h3>

          {/* Divider */}
          
          {/* Image with Left-aligned Arrows */}
          <div className="relative w-[400px] justify-start">
            <img
              src="/assets/epiroc-img.png"
              alt="Volvo Excavator"
              className="w-full"
            />

            
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold leading-snug">
            <span className="font-extrabold">Epiroc</span>{" "}
            <span className="font-normal">
             Powers Mining and Infrastructure Progress
            </span>
          </h2>

          {/* Divider */}
         
          {/* Description */}
          <p className="text-gray-700 text-base leading-relaxed">
            Epiroc is a global technology leader and trusted productivity partner for the mining and infrastructure industries. With a legacy dating back to 1873, Epiroc delivers cutting-edge equipment, consumables, and services for surface and underground mining, civil construction, and well drilling. Born from the legacy of Atlas Copco, Epiroc has been driving progress as a stand-alone brand since 2018 delivering innovation where it matters most.
          </p>

         
        </div>
      </div>
    </section>
  );
}
