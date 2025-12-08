import React from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function VolvoSection() {
  return (
    <section className="bg-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="flex flex-col items-start space-y-6">
          {/* Logo */}
          <img
            src="/assets/inner-1.svg"
            alt="Volvo Logo"
            className="w-32 mb-4"
          />

          {/* Tagline */}
          <h3 className="text-2xl font-bold leading-snug">
            Strength,<span className="font-light"> Innovation,</span> <br />
            <span className="font-semibold">Reliability.</span>
          </h3>

          {/* Divider */}
         

          {/* Image with Left-aligned Arrows */}
          <div className="relative w-full justify-start">
            <img
              src="/assets/volvo.webp"
              alt="Volvo Excavator"
              className="w-full"
            />

            
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold leading-snug">
            <span className="font-extrabold">Volvo</span>{" "}
            <span className="font-normal">
              Construction Solutions Backed by ACT Expertise
            </span>
          </h2>

          {/* Divider */}
         

          {/* Description */}
          <p className="text-gray-700 text-base leading-relaxed">
            Volvo is a global leader in trucks, buses, construction equipment,
            and industrial power systems. ACT, through its group company PACT
            Machines Pvt. Ltd., is an authorized dealer for Volvo Construction
            Equipment in Tamil Nadu and Kerala. Volvo operates on strong core
            values: Quality, Safety, and Environmental Care.
          </p>

         

          
        </div>
      </div>
    </section>
  );
}
