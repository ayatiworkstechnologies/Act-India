import React from "react";

const SERVICES = [
  { id: "01", title: "Bucket hard-facing." },
  { id: "02", title: "Breaker hard-facing." },
  { id: "03", title: "Breaker Bush Replacement." },
  {
    id: "04",
    title:
      "Re-building and line boring of Bucket / Arm and Boom Bush bores.",
  },
  {
    id: "05",
    title:
      "Structural Crack welding Repairs Boom / Arm / Lower Frame / Bucket.",
  },
  { id: "06", title: "Bucket Toe Plate Replacement." },
  { id: "07", title: "Bucket Tooth Adaptor Replacement." },
  { id: "08", title: "Bucket Bottom sheet Replacement." },
  { id: "09", title: "Track chain link Recondition repairs." },
];

export default function AuxServicesSection() {
  return (
    <section
      className="bg-white text-neutral-900 py-12 md:py-16"
      id="auxillary-services"
    >
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        {/* Heading */}
        <h2 className="text-[36px] tracking-tight text-center">
          Auxiliary Service Solutions
        </h2>

        <p className="mt-5 text-md font-semibold text-neutral-500 text-center">
          Services Offered
        </p>

        {/* GRID */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/** ✅ CARD = SAME Design Language as ValuesSection */
function ServiceCard({ id, title }) {
  return (
    <article
      className="
        relative w-full max-w-[260px] min-h-[150px]
        bg-white rounded-xl
        shadow-[0_25px_60px_-30px_rgba(0,0,0,0.35)]
        transition hover:shadow-[0_30px_70px_-32px_rgba(0,0,0,0.35)]
        flex items-center justify-center
        px-4
        text-center
      "
    >
      {/* Dotted border */}
      <span className="pointer-events-none absolute inset-0 rounded-xl border-2 border-dotted border-blue-400/70" />

      {/* Content */}
      <div className="relative z-10">
        <div className="text-[13px] font-extrabold tracking-wide text-neutral-900">
          {id}
        </div>
        <p className="mt-2 text-[14px] md:text-[15px] leading-snug text-neutral-700">
          {title}
        </p>
      </div>
    </article>
  );
}
