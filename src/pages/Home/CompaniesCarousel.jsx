// GroupOfCompaniesSlider.jsx
import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

/** ====== SLIDES ====== */
const GROUPS = [
  {
    company: { name: "Pact Machine (P) Ltd.", logo: "/assets/pact.png" },
    cols: 1,
    partners: [
      { name: "VOLVO", logo: "/assets/volvo-slider.png" },
         { name: "SDLG", logo: "/assets/sdlg.png" },
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
    company: { name: "Bomanite LLP", logo: "/assets/bom.png" },
    cols: 1,
    partners: [
      { name: "Bomanite Systems", logo: "/assets/bomanite.png" },
    ],
  },
];

const COLS_CLASS = { 1: "grid-cols-1", 2: "grid-cols-2", 3: "grid-cols-3" };

export default function GroupOfCompaniesSlider() {
  const [idx, setIdx] = useState(0);
  const timer = useRef(null);

  const next = () => setIdx((i) => (i + 1) % GROUPS.length);
  const prev = () => setIdx((i) => (i - 1 + GROUPS.length) % GROUPS.length);

  // Auto-slide (pause on hover)
  const containerRef = useRef(null);
  useEffect(() => {
    const start = () => {
      stop();
      timer.current = window.setInterval(next, 6000);
    };
    const stop = () => {
      if (timer.current) {
        window.clearInterval(timer.current);
        timer.current = null;
      }
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

  return (
    <section className="w-full py-12">
      {/* Title */}
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center">
          Group Companies 
        </h2>
        
      </div>

      {/* Slider Frame */}
      <div ref={containerRef} className="relative mx-auto mt-8 max-w-4xl px-4">
        {/* Left arrow – slim blue, no circle */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="
            absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8
            p-1 md:p-4 text-blue-600 hover:scale-110 active:scale-95
            transition transform
          "
        >
          <ArrowLeft className="h-6 w-6 md:h-7 md:w-7 text-secondary rounded-full bg-white shadow-md hover:bg-gray-100 transition" />
        </button>

        {/* Right arrow – slim blue, no circle */}
        <button
          onClick={next}
          aria-label="Next"
          className="
            absolute right-0 top-1/2 -translate-y-1/2 translate-x-8
            p-1 md:p-4 text-blue-600 hover:scale-110 active:scale-95
            transition transform
          "
        >
          <ArrowRight className="h-6 w-6 md:h-7 md:w-7 text-secondary rounded-full bg-white shadow-md hover:bg-gray-100 transition" />
        </button>

        {/* Panel */}
        <div className="rounded-2xl bg-white shadow-xl ring-1 ring-gray-100 px-4 sm:px-6 md:px-8 py-6 md:py-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_360px] gap-6 md:gap-8 items-center">
            {/* Left company card */}
            <div className="flex flex-col items-center">
              <div className="relative w-64 max-w-full  ">
                <img
                  src={group.company.logo}
                  alt={group.company.name}
                  className="w-full h-42 object-contain p-6"
                />
              </div>
              <p className="mt-3 text-sm text-gray-600">{group.company.name}</p>
            </div>

            {/* Center divider */}
            <div className="hidden md:block h-full w-px mx-auto">
              <div className="h-full w-px bg-gradient-to-b border border-dashed from-transparent via-gray-200 to-transparent" />
            </div>

            {/* Right partners */}
            <div className="mx-auto w-full max-w-sm p-4 md:p-5 ">
              <ul className={`grid ${partnerCols} gap-4`}>
               {group.partners.map((p, i) => (
  <li key={p.name}>
    <div className="flex items-center justify-center px-4 py-2">
      <img
        src={p.logo}
        alt={p.name}
        className="w-full h-20 object-contain"
      />
    </div>

    {/* Divider line except after last item */}
    {i < group.partners.length - 1 && (
      <div className="w-full h-px bg-gray-300 my-2" />
    )}
  </li>
))}

              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
