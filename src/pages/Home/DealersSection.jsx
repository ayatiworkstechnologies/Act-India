import React from "react";
import { Link } from "react-router-dom";

/* ================== DATA ================== */
const dealers = [
  {
    id: 1,
    logo: "/assets/volvo-brand.svg",
    title: "Mfg of Heavy Construction Equipment & Road Machinery",
    link: "/volvo",
  },
  {
    id: 2,
    logo: "/assets/epiroc-brand.svg",
    title: "Hydraulic Attachments",
    link: "/epiroc",
  },
  {
    id: 3,
    logo: "/assets/sdlg-brand.svg",
    title: "Mfg of Heavy Construction Equipment",
    link: "/sdlg",
  },
  {
    id: 4,
    logo: "/assets/husqvarna-brand.svg",
    title: "Construction Equipment",
    link: "/husqvarna",
  },
  {
    id: 5,
    logo: "/assets/ammann-brand.svg",
    title: "Road Machinery",
    link: "/ammann",
  },
  {
    id: 6,
    logo: "/assets/schwing-stetter-brand.svg",
    title: "Concrete Machinery",
    link: "/self-loading-mixer",
  },
];

export default function DealersSection() {
  return (
    <section className="w-full bg-[#F5F5F5] py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* ================== HEADER ================== */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl font-bold font-primary">
            Brand Partner
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4" />
        </div>

        {/* ================== STATIC GRID ================== */}
        {/* Grid Config:
            - 1 column on mobile
            - 2 columns on small tablets
            - 3 columns on desktop 
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {dealers.map((dealer) => (
            <div
              key={dealer.id}
              className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow 
                         flex flex-col justify-between rounded-lg border border-gray-100"
            >
              <div>
                <div className="h-16 flex items-center mb-6">
                  <img
                    src={dealer.logo}
                    alt={dealer.title}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <p className="text-md text-gray-700 mb-6 leading-relaxed">
                  {dealer.title}
                </p>
              </div>
              
              <Link
                to={dealer.link}
                className="text-secondary font-bold flex items-center group"
              >
                Learn More 
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}