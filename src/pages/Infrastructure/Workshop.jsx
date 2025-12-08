// FacilitiesHero.jsx
import React, { useEffect, useRef, useState } from "react";

const SLIDES = [
  { src: "/assets/workshop-1.png", alt: "VOLVO Accredited Workshop" },
  { src: "/assets/workshop-2.png", alt: "VOLVO Accredited Workshop" },
  { src: "/assets/workshop-3.png", alt: "VOLVO Accredited Workshop" },
];

export default function Workshop({
  slides = SLIDES,
  pillText = "VOLVO Accredited Workshop",
  autoplayMs = 4000,
  staticText = "IESC and VOLVO ACT Team during IESC certification program at Madurai-South Zone",
}) {
  return (
    <section className="w-full bg-white text-neutral-900" id="workshop">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-10">
        {/* Heading */}
        <h2 className="text-[28px] sm:text-[36px] leading-tight tracking-wide mb-6">
          Trusted <span className="font-extrabold ">Volvo Accredited</span>
          <br /> Service Center
        </h2>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* LEFT: slider */}
          <div className="lg:col-span-5">
            <div className="relative bg-secondary overflow-hidden h-[300px] sm:h-[300px]">
              <LeftSlider slides={slides} autoplayMs={autoplayMs} pillText={pillText} />
            </div>
          </div>

          {/* CENTER: vertical dots */}
          <div className="hidden lg:flex lg:col-span-1 items-center justify-center">
            <VerticalDots slides={slides} />
          </div>

          {/* RIGHT: static text (centered vertically) */}
          <aside className="lg:col-span-6 flex items-center">
            <div className="rounded-xl border border-neutral-200 bg-white shadow-sm p-5 sm:p-6 text-center">
              <p className="text-sm sm:text-base text-neutral-800 text-left font-medium leading-6">
                {staticText}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ---------- Left slider ---------- */
function LeftSlider({ slides, autoplayMs = 4000, pillText }) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const next = () => setIdx((p) => (p + 1) % slides.length);

  useEffect(() => {
    if (paused || slides.length <= 1) return;
    timerRef.current = setInterval(next, autoplayMs);
    return () => clearInterval(timerRef.current);
  }, [paused, idx, slides.length, autoplayMs]);

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((s, i) => (
        <img
          key={s.src + i}
          src={s.src}
          alt={s.alt || ""}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
          draggable={false}
        />
      ))}

      {/* pill */}
      <span className="absolute left-4 top-4 select-none rounded-md bg-secondary px-3 py-1.5 text-xs font-semibold text-white shadow-lg shadow-blue-500/20">
        {pillText}
      </span>
    </div>
  );
}

/* ---------- Vertical dots (smaller) ---------- */
function VerticalDots({ slides }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-2">
      {slides.map((_, i) => (
        <button
          key={i}
          onClick={() => setActive(i)}
          aria-label={`Go to slide ${i + 1}`}
          className={`h-2 w-2 rounded-full transition-all ${
            i === active ? "bg-secondary scale-110" : "bg-neutral-300 hover:bg-neutral-400"
          }`}
        />
      ))}
    </div>
  );
}
