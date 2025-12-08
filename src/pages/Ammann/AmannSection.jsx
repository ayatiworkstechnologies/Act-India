import React from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function AmannSection() {
  return (
    <section className="bg-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="flex flex-col items-start space-y-6">
          {/* Logo */}
          <img
            src="/assets/amman.png"
            alt="Ammann Logo"
            className="w-32 mb-4"
          />

          {/* Tagline */}
          <h3 className="text-2xl font-bold leading-snug">
             Proven,<span className="font-light">Progressive,</span> <br />
            <span className="font-semibold">Pioneering.</span>
          </h3>

          {/* Divider */}
          

          {/* Image with Left-aligned Arrows */}
          <div className="relative w-[400px] justify-start">
            <img
              src="/assets/img.png"
              alt="Volvo Excavator"
              className="w-full"
            />

            
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold leading-snug">
            <span className="font-extrabold">Ammann</span>{" "}
            <span className="font-normal">
            Delivering Durable, Customer-Centric Solutions
            </span>
          </h2>

          {/* Divider */}
         

          {/* Description */}
          <p className="text-gray-700 text-base leading-relaxed">
            Ammann is a global leader in mixing plants, road construction equipment, and services, with a legacy of excellence since 1869. With 150+ years of innovation, the sixth-generation family-run business continues to drive productivity and performance in transportation infrastructure worldwide. Despite its global reach and evolving technology, Ammann’s core commitment remains unchanged delivering customer-centric, forward-thinking solutions built to last. 
          </p>

         
        </div>
      </div>
    </section>
  );
}
