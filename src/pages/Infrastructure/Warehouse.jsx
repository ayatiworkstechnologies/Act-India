// WarehousingHero.jsx
import React, { useEffect, useState, useRef } from "react";

const SLIDES = [
 
  { src: "/assets/karur.jpg", alt: "Stockyard forklifts", label: "Karur" },
  { src: "/assets/coimbatore.jpg", alt: "Loading dock operations", label: "Coimbatore" },
  { src: "/assets/tirunelveli.jpg", alt: "Inventory scanning", label: "Tirunelveli" },
    { src: "/assets/chennai.jpg", alt: "Inventory scanning", label: "Chennai" },

];

// 🔁 Replace these with your actual icon image files
const FEATURE_ICONS = [
  { src: "/assets/infra-icon1.png", alt: "Multi-city hubs" },
  { src: "/assets/infra-icon2.png",  alt: "Material handling" },
  { src: "/assets/infra-icon3.png",     alt: "In/Out logistics" },
  { src: "/assets/infra-icon4.png",    alt: "Secure storage" },
];

export default function Warehouse() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const timerRef = useRef(null);
  const sectionRef = useRef(null);

  // autoplay every 4s
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setIdx((i) => (i + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(timerRef.current);
  }, [paused]);

  // IntersectionObserver for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes wh-slideUp {
          from { opacity: 0; transform: translateY(70px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes wh-fadeInRight {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes wh-fadeInUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .wh-slide-up   { opacity: 0; }
        .wh-fade-right { opacity: 0; }
        .wh-fade-up    { opacity: 0; }

        .wh-slide-up.visible   { animation: wh-slideUp    0.85s cubic-bezier(0.22,1,0.36,1) forwards; }
        .wh-fade-right.visible { animation: wh-fadeInRight 0.75s cubic-bezier(0.22,1,0.36,1) forwards; }
        .wh-fade-up.visible    { animation: wh-fadeInUp    0.65s ease forwards; }

        .wh-d1 { animation-delay: 0.1s !important; }
        .wh-d2 { animation-delay: 0.2s !important; }
        .wh-d3 { animation-delay: 0.35s !important; }
        .wh-d4 { animation-delay: 0.5s !important; }
      `}</style>

      <section
        ref={sectionRef}
        className="w-full bg-white text-neutral-900 mt-14"
        id="warehouse"
      >
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">

          {/* LEFT: SLIDER — slides up from bottom */}
          <aside
            className={`relative lg:col-span-5 bg-neutral-100 border-b lg:border-b-0 lg:border-r border-neutral-200 overflow-hidden wh-slide-up wh-d1 ${visible ? "visible" : ""}`}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Slides */}
            <div className="relative h-[280px] sm:h-[360px] lg:h-full">
              {SLIDES.map((s, i) => (
                <img
                  key={s.src}
                  src={s.src}
                  alt={s.alt}
                  className={[
                    "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
                    i === idx ? "opacity-100" : "opacity-0",
                  ].join(" ")}
                />
              ))}
            </div>

            {/* Floating pill */}
            <div className="absolute left-4 top-4">
              <span className="select-none rounded-md bg-secondary px-3 py-1.5 text-xs font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-500">
                {SLIDES[idx].label}
              </span>
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={[
                    "h-2 w-2 rounded-full transition-all",
                    i === idx ? "bg-neutral-800 w-3" : "bg-neutral-300",
                  ].join(" ")}
                />
              ))}
            </div>
          </aside>

          {/* RIGHT: COPY */}
          <div className="lg:col-span-7 px-6 sm:px-10 py-10">
            <div className="max-w-3xl">

              {/* Heading fades in from right */}
              <h2 className={`text-[30px] leading-[1.25] tracking-wide wh-fade-right wh-d2 ${visible ? "visible" : ""}`}>
                Warehouses &amp; Stockyards
              </h2>

              {/* Paragraph fades up */}
              <p className={`mt-5 max-w-2xl text-sm leading-6 text-neutral-600 wh-fade-up wh-d4 ${visible ? "visible" : ""}`}>
                Our warehouse infrastructure is designed to ensure safe storage, efficient handling, and seamless movement of goods across the supply chain. Equipped with well-organized storage systems and modern handling practices, we maintain optimal inventory levels to meet customer demands without delays.<br/>
                With a strong focus on accuracy and efficiency, our operations integrate inventory management and warehousing processes to ensure the right products are available at the right time. From receiving and storage to dispatch, every stage is managed with precision to support faster turnaround and reliable service.

              </p>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}

