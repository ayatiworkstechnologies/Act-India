// GroupOfCompaniesSlider.jsx
import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const GROUPS = [
  {
    company: { name: "Pact Machine (P) Ltd.", logo: "/assets/pact.png" },
    cols: 1,
    partners: [
      { name: "VOLVO", logo: "/assets/volvo-slider.png" },
      { name: "SDLG", logo: "/assets/sdlg.png" },
      { name: "Schwing Stetter", logo: "/assets/sch-logo.png" },
      { name: "AMMANN", logo: "/assets/amman.png" },
    ],
  },
  {
    company: {
      name: "Pact Power Solutions LLP",
      logo: "/assets/pact-power.png",
    },
    cols: 2,
    partners: [
      { name: "VOLVO PENTA", logo: "/assets/volvo-penta.png" },
      { name: "Linde", logo: "/assets/linde.png" },
      { name: "KÄRCHER", logo: "/assets/karcher.png" },
      { name: "CompAir", logo: "/assets/compair.png" },
      { name: "KELLEY", logo: "/assets/kelly.png" },
    ],
  },
  {
    company: {
      name: "Bomacrete LLP | Bringing life to concrete",
      logo: "/assets/bom.png",
    },
    cols: 1,
    partners: [
      {
        name: "Exclusive Manufacturer of Bomanite Systems in India",
        logo: "/assets/bomanite.png",
      },
    ],
  },
];

const COLS_CLASS = { 1: "grid-cols-1", 2: "grid-cols-2", 3: "grid-cols-3" };

export default function GroupOfCompaniesSlider() {
  const [idx, setIdx] = useState(0);
  const timer = useRef(null);
  const containerRef = useRef(null);

  const next = () => setIdx((i) => (i + 1) % GROUPS.length);
  const prev = () => setIdx((i) => (i - 1 + GROUPS.length) % GROUPS.length);

  useEffect(() => {
    const stop = () => {
      if (timer.current) {
        clearInterval(timer.current);
        timer.current = null;
      }
    };

    const start = () => {
      stop();
      timer.current = setInterval(next, 6000);
    };

    start();

    const el = containerRef.current;
    el?.addEventListener("mouseenter", stop);
    el?.addEventListener("mouseleave", start);

    return () => {
      stop();
      el?.removeEventListener("mouseenter", stop);
      el?.removeEventListener("mouseleave", start);
    };
  }, []);

  const group = GROUPS[idx];
  const partnerCols = COLS_CLASS[group.cols || 1];
  const isBomacrete = group.company.name.includes("Bomacrete");

  return (
    <section className="w-full py-12">
      {/* Title */}
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold font-primary text-center">
          Group of Companies
        </h2>
      </div>

      {/* Slider */}
      <div ref={containerRef} className="relative mx-auto mt-8 max-w-4xl px-4">
        
        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 z-10"
        >
          <ArrowLeft className="h-7 w-7 text-secondary bg-white rounded-full shadow-md" />
        </button>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 z-10"
        >
          <ArrowRight className="h-7 w-7 text-secondary bg-white rounded-full shadow-md" />
        </button>

        {/* Panel */}
        <div className="rounded-2xl bg-white shadow-xl ring-1 ring-gray-100 p-6 md:p-8">
          
          {/* 👉 KEY FIX: items-stretch + min height */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_360px] gap-6 md:gap-8 items-stretch min-h-[260px]">
            
            {/* LEFT */}
            <div className="flex flex-col justify-center items-center h-full">
              <div className="w-64 max-w-full flex items-center justify-center">
                <img
                  src={group.company.logo}
                  alt={group.company.name}
                  className="object-contain max-h-[120px]"
                />
              </div>

              <p className="mt-3 text-sm text-gray-600 text-center">
                {group.company.name}
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:flex justify-center">
              <div className="w-px bg-gray-300 h-full border-dashed border-l" />
            </div>

            {/* RIGHT */}
            <div className="flex flex-col justify-center h-full">
              {isBomacrete ? (
                <div className="flex flex-col items-center text-center gap-4">
                  <img
                    src={group.partners[0].logo}
                    alt={group.partners[0].name}
                    className="object-contain max-h-[100px]"
                  />
                  <p className="mt-3 text-sm text-gray-600 text-center">
                    {group.partners[0].name}
                  </p>
                </div>
              ) : (
                <ul className={`grid ${partnerCols} gap-4`}>
                  {group.partners.map((p, i) => (
                    <li key={p.name}>
                      <div className="flex items-center justify-center px-4 py-2">
                        <img
                          src={p.logo}
                          alt={p.name}
                          className="h-16 object-contain"
                        />
                      </div>

                      {i < group.partners.length - 1 && (
                        <div className="w-full h-px bg-gray-300 my-2" />
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}