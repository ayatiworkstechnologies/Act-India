// StockyardShowcase.jsx
import React from "react";

const ITEMS = [
  {
    city: "Chennai",
    img: "/assets/yard-1.png",
    alt: "Volvo excavators lined up in Chennai stockyard",
  },
  {
    city: "Coimbatore",
    img: "/assets/yard-2.png",
    alt: "Volvo excavator at Coimbatore site",
  },
];

export default function Stockyard() {
  return (
    <section className="w-full bg-white py-10 sm:py-14" id="machine-stockyard">
      {/* Title */}
      <h2 className="text-center text-[30px] leading-[1.25] tracking-wide">
       Machine Stockyard
      </h2>

      {/* Grid */}
      <div className="mx-auto mt-8 max-w-6xl px-5 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2">
        {ITEMS.map((item) => (
          <Card key={item.city} {...item} />
        ))}
      </div>
    </section>
  );
}

function Card({ city, img, alt }) {
  return (
    <article className="group relative">
      {/* Outer dotted frame */}
      <div className="absolute -inset-2 " />

      {/* Card */}
      <div className="relative  overflow-hidden bg-white shadow-[0_15px_35px_-15px_rgba(99,102,241,0.35)] ring-1 ring-indigo-100">
        {/* Badge */}
        <span className="absolute left-3 top-3 z-10 rounded-md bg-secondary px-2.5 py-1 text-[11px] font-semibold text-white shadow-sm">
          {city}
        </span>

        {/* Image */}
        <div className="aspect-[4/3] w-full overflow-hidden">
          <img
            src={img}
            alt={alt}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
      </div>
    </article>
  );
}
