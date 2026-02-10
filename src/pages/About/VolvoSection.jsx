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
          {/* <h3 className="text-2xl font-bold leading-snug">
            Strength,<span className="font-light"> Innovation,</span> <br />
            <span className="font-semibold">Reliability.</span>
          </h3> */}

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
           Founded in 1927, the Volvo Group is committed to shaping the future landscape of sustainable transport and infrastructure solutions. Every day our customers use our products and services to transport, deliver, build, and ferry goods, objects and people around the world. Our products and services help to put food on our tables, carry people to work or school, build roads, keep our cities clean and much, much more, effectively helping to meet the growing demands of our world. <br/>
           ACT & its group company PACT MACHINES have been the authorised dealer for VOLVO CONSTRUCTION EQUIPMENT products for 2 decades (since 2007) in the 2 south Indian states of Tamil Nadu & Kerala respectoively. This long and successful association is testimony to the trust and capability of delivering value to our customers over the years.
          </p>

         

          
        </div>
      </div>
    </section>
  );
}
