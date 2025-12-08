import React from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function SdlgSection() {
  return (
    <section className="bg-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="flex flex-col items-start space-y-6">
          {/* Logo */}
          <img
            src="/assets/sdlg.png"
            alt="Epiroc Logo"
            className="w-32 mb-4"
          />

          {/* Tagline */}
          <h3 className="text-2xl font-bold leading-snug">
             Reliable,<span className="font-light"> Afford,</span> <br />
            <span className="font-semibold">Efficient.</span>
          </h3>

          {/* Divider */}
          
          {/* Image with Left-aligned Arrows */}
          <div className="relative w-[400px] justify-start">
            <img
              src="/assets/sdlg-img.png"
              alt="Volvo Excavator"
              className="w-full"
            />

            
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold leading-snug">
            <span className="font-extrabold">SDLG</span>{" "}
            <span className="font-normal">
             Powering Global Construction with Reliability
            </span>
          </h2>

          {/* Divider */}
          

          {/* Description */}
          <p className="text-gray-700 text-base leading-relaxed">
            SDLG (Shandong Lingong Construction Machinery) is a trusted global brand known for delivering reliable and cost-effective construction machinery since 1972. Backed by Volvo CE since 2007, SDLG combines robust engineering with global standards to serve infrastructure and construction needs worldwide. Its value-driven machines are designed for performance, durability, and easy maintenance making them ideal for high-demand environments. 
          </p>

         
        </div>
      </div>
    </section>
  );
}
