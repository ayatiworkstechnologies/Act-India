import React from "react";
import { ArrowRight } from "lucide-react";

export default function ActSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-16 px-6 md:px-12"
      style={{
        backgroundImage: "url('/assets/act-bg.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0"></div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Description */}
        <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10">
          Advanced Construction Technologies Pvt Ltd, ACT was established by
          Mohan Ramanathan as part of a 70 year old business conglomerate with
          multiple business interests. ACT provides a gateway to bring new and
          advanced products and services from across the globe to support the
          Indian Construction Industry. With more than 30 years of excellence in
          the field of construction, ACT remains a leader in providing solutions
          in the forms of equipment and services to the construction and
          infrastructure segments.
        </p>

        {/* Stats */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-10">
          <div className="text-center">
            <p className="text-3xl font-bold">1122+</p>
            <p className="text-sm uppercase tracking-wider">Customers</p>
          </div>
          <div className="hidden md:block h-12 w-px bg-white/50"></div>
          <div className="text-center">
            <p className="text-3xl font-bold">1618+</p>
            <p className="text-sm uppercase tracking-wider">Equipment</p>
          </div>
          <div className="hidden md:block h-12 w-px bg-white/50"></div>
          <div className="text-center">
            <p className="text-3xl font-bold">7+</p>
            <p className="text-sm uppercase tracking-wider">Product Lines</p>
          </div>
        </div>

        {/* Button */}
        <div>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-white text-black font-medium px-6 py-2 rounded-md hover:bg-gray-200 transition"
          >
            Know More <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
