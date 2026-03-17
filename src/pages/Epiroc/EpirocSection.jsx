import React, { useEffect, useRef, useState } from "react";

export default function EpirocSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(80px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .anim-slide-up {
          opacity: 0;
        }
        .anim-slide-up.visible {
          animation: slideUp 1.1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .anim-fade-right {
          opacity: 0;
        }
        .anim-fade-right.visible {
          animation: fadeInRight 1.0s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .anim-fade-up {
          opacity: 0;
        }
        .anim-fade-up.visible {
          animation: fadeInUp 1.0s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        /* One-by-one: each waits for the previous to nearly finish */
        .epiroc-delay-1 { animation-delay: 0.1s !important; }
        .epiroc-delay-2 { animation-delay: 0.6s !important; }
        .epiroc-delay-3 { animation-delay: 1.1s !important; }
        .epiroc-delay-4 { animation-delay: 1.6s !important; }

        .img-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 60%;
          background: linear-gradient(to top, rgba(0,0,0,0.15), transparent);
          pointer-events: none;
        }
      `}</style>

      <section ref={sectionRef} className="bg-white py-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Column */}
          <div className="flex flex-col items-start space-y-6">

            {/* 1st — Logo */}
            <img
              src="/assets/epiroc.png"
              alt="Epiroc Logo"
              className={`w-32 mb-4 anim-slide-up epiroc-delay-1 ${visible ? "visible" : ""}`}
            />

            {/* 2nd — Image */}
            <div
              className={`relative w-full anim-slide-up epiroc-delay-2 ${visible ? "visible" : ""}`}
            >
              <img
                src="/assets/epi.webp"
                alt="Epiroc Equipment"
                className="w-full rounded-sm"
              />
              <div className="img-overlay" />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">

            {/* 3rd — Heading */}
            <h2
              className={`text-3xl font-bold leading-snug anim-fade-right epiroc-delay-3 ${visible ? "visible" : ""}`}
            >
              <span className="font-extrabold">Epiroc</span>{" "}
              <span className="font-normal">
                Powers Mining and Infrastructure Progress
              </span>
            </h2>

            {/* 4th — Paragraph */}
            <p
              className={`text-gray-700 text-base leading-relaxed anim-fade-up epiroc-delay-4 ${visible ? "visible" : ""}`}
            >
              Epiroc is a global technology leader and trusted productivity
              partner for the mining and infrastructure industries. With a
              legacy dating back to 1873, Epiroc delivers cutting-edge
              equipment, consumables, and services for surface and underground
              mining, civil construction, and well drilling. Born from the
              legacy of Atlas Copco, Epiroc has been driving progress as a
              stand-alone brand since 2018 delivering innovation where it
              matters most.
              <br />
              <br />
              ACT has been the authorised dealer for ATLAS COPCO / EPIROC
              products for 2 decades (since 2007) in the 2 south Indian states
              of Tamil Nadu & Kerala. This long and successful association is
              testimony to the trust and capability of delivering value to our
              customers over the years.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}