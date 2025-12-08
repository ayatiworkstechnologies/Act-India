// ValuesSection.jsx
import React from "react";

const VALUES = [
  {
    num: "01",
    title: "TRUST",
    copy:
      "We believe that nothing is more important than our reputation built on trust & integrity",
  },
  {
    num: "02",
    title: "FAIR",
    copy:
      "Everyone deserves equal opportunities",
  },
  {
    num: "03",
    title: "EMPOWERED",
    copy:
      "Empowered employees are happy, productive and hold themselves accountable",
  },
  {
    num: "04",
    title: "LEAD CHANGE",
    copy:
      "The ability to bring change, both within and beyond to meet organisational goals",
  },
  {
    num: "05",
    title: "CUSTOMER SUCCESS",
    copy:
      "Customers define what we are and we owe our existence to them",
  },
  {
    num: "06",
    title: "EXCELLENCE",
    copy:
      "Excellence needs to be a habit not an act, as habits define what we are",
  },
];

export default function ValuesSection() {
  return (
    <section className="bg-white text-neutral-900 py-12 md:py-16">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        {/* Layout */}
        <div className="grid grid-cols-12 gap-8 lg:gap-10">
          {/* Left copy */}
          <div className="col-span-12 lg:col-span-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight">
              Guided by <br />
              <span className="">Integrity,</span> <br />
              Driven <span className="">Forward</span>
            </h2>

            <p className="mt-6 max-w-[28rem] text-sm md:text-base text-neutral-600 leading-relaxed">
              We provide secure warehouses and well-managed stockyards designed
              to streamline storage, handling, and distribution.
            </p>
          </div>

          {/* Values grid */}
          <div className="col-span-12 lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {VALUES.map((v) => (
                <ValueCard key={v.num} {...v} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueCard({ num, title, copy }) {
  return (
    <article className="relative bg-white rounded-xl shadow-[0_25px_60px_-30px_rgba(0,0,0,0.35)] transition hover:shadow-[0_30px_70px_-32px_rgba(0,0,0,0.35)]">
      {/* Full-bleed dotted border on the card itself */}
      <span className="pointer-events-none absolute inset-0 rounded-xl border-2 border-dotted border-blue-400/70" />

      <div className="p-4 md:p-5">
        <h3 className="text-[13px] md:text-sm font-extrabold tracking-wide uppercase text-neutral-900">
          {num}-{title}
        </h3>
        <p className="mt-3 text-[13px] md:text-[14px] leading-relaxed text-neutral-700">
          {copy}
        </p>
      </div>
    </article>
  );
}
