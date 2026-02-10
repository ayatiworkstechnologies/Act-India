import React from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function SelfLoadingMixerSection() {
  return (
    <section className="bg-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="flex flex-col items-start space-y-6">
          {/* Logo */}
          <img
            src="/logos/schwing-stetter-web.svg"
            alt="Schwing Stetter Logo"
            className="w-32 mb-4"
          />

          {/* Tagline */}
          {/* <h3 className="text-2xl font-bold leading-snug">
            Innovation,<span className="font-light">Quality,</span> <br />
            <span className="font-semibold">Precision.</span>
          </h3> */}

          {/* Divider */}
          
          {/* Image with Left-aligned Arrows */}
          <div className="relative w-[400px] justify-start">
            <img
              src="/assets/schwin-stetter.png"
              alt="Volvo Excavator"
              className="w-full"
            />

            
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold leading-snug">
            <span className="font-extrabold">SCHWING</span>{" "}
            <span className="font-normal">
             Construction Solutions Backed by ACT Expertise
            </span>
          </h2>

          {/* Divider */}
         

          {/* Description */}
          <p className="text-gray-700 text-base leading-relaxed">
            SCHWING STETTER is the world's leading system house for concrete construction machines, offering the entire spectrum of ready-mix concrete technology. <br/>
            The premium products offered for the production, transport, placing and environmentally friendly recycling of concrete mean maximum safety, reliability and cost-effectiveness for customers - with the highest resale value for SCHWING-Stetter products. <br/>
            SCHWING STETTER India is a 100% subsidiary of the Schwing group of companies GmbH was incorporated in the year 1998. A pioneer in concrete construction equipment manufacturing As a global leader in construction equipment. <br/>
            ACT & its group company PACT MACHINES were appointed as authorised dealer for SCHWING STETTER products in the 2 south Indian states of Tamil Nadu & Kerala respectively since Nov 2025.
          </p>

         
        </div>
      </div>
    </section>
  );
}
