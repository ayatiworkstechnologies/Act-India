// AuxServicesSection.jsx
import React, { useEffect, useRef, useState } from "react";

const SERVICES = [
  { id: "01", title: "Bucket hard-facing." },
  { id: "02", title: "Breaker hard-facing." },
  { id: "03", title: "Breaker Bush Replacement." },
  { id: "04", title: "Re-building and line boring of Bucket / Arm and Boom Bush bores." },
  { id: "05", title: "Structural Crack welding Repairs Boom / Arm / Lower Frame / Bucket." },
  { id: "06", title: "Bucket Toe Plate Replacement." },
  { id: "07", title: "Bucket Tooth Adaptor Replacement." },
  { id: "08", title: "Bucket Bottom sheet Replacement." },
  { id: "09", title: "Track chain link Recondition repairs." },
];

export default function AuxServicesSection() {
  return (
    <section className="bg-white text-neutral-900 py-12 md:py-16" id="auxillary-services">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <h2 className="text-[28px] md:text-[40px] leading-tight font-light tracking-tight">
          Comprehensive <span className="font-bold">Auxiliary</span>
          <br className="hidden sm:block font-light" /> Service Solutions Hub
        </h2>
        <p className="mt-5 text-sm font-semibold text-neutral-500">Services Offered</p>

        <Marquee items={SERVICES} speed={60} gap={20} />
      </div>
    </section>
  );
}

/** ====== Infinite marquee with NO duplicates ======
 *  Moves the first card to the end once it fully exits.
 *  speed = px/second, gap = px between cards
 */
function Marquee({ items, speed = 60, gap = 20 }) {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || !track.children.length) return;

    let rafId;
    let last = 0;
    let offset = 0;

    const step = (ts) => {
      if (!last) last = ts;
      const dt = (ts - last) / 1000;
      last = ts;

      if (!paused) {
        offset += speed * dt;
        // While we've scrolled past the first card, move it to the end.
        let first = track.children[0];
        // guard when resizing before layout settles
        while (first) {
          const w = first.getBoundingClientRect().width;
          if (offset >= w + gap) {
            offset -= w + gap;
            track.appendChild(first);
            first = track.children[0];
          } else break;
        }
        track.style.transform = `translateX(${-offset}px)`;
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);

    // Reset on resize to avoid drift when card sizes change
    const onResize = () => {
      track.style.transform = "translateX(0)";
      last = 0;
      offset = 0;
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
    };
  }, [speed, gap, paused]);

  return (
    <div
      className="mt-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative overflow-hidden">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10" />

        {/* track (no duplicates rendered) */}
        <div
          ref={trackRef}
          className="flex items-stretch"
          style={{
            gap: `${gap}px`,
            willChange: "transform",
          }}
        >
          {items.map((it) => (
            <Card key={it.id} id={it.id} title={it.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ id, title }) {
  return (
    <article
      className="
        relative w-[240px] md:w-[260px] h-[140px]
        shrink-0 bg-white
        ring-1 ring-gray-200
        shadow-lg       
        px-4 py-3 border border-gray-200
      "
      style={{ marginBottom: "12px" }}  // ⬅ spacing below card
    >
      <div className="text-[13px] font-extrabold tracking-wide text-secondary">
        {id}
      </div>
      <p className="mt-2 text-[14px] md:text-[15px] leading-relaxed text-neutral-800">
        {title}
      </p>
    </article>
  );
}
