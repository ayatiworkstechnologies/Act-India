import React, { useEffect, useRef, useState } from "react";

export default function SelfLoadingMixerSection() {
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
        @keyframes schwing-slideUp {
          from {
            opacity: 0;
            transform: translateY(80px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes schwing-fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes schwing-fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .schwing-slide-up {
          opacity: 0;
        }
        .schwing-slide-up.visible {
          animation: schwing-slideUp 1.1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .schwing-fade-right {
          opacity: 0;
        }
        .schwing-fade-right.visible {
          animation: schwing-fadeInRight 1.0s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .schwing-fade-up {
          opacity: 0;
        }
        .schwing-fade-up.visible {
          animation: schwing-fadeInUp 1.0s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        /* One-by-one: each waits for the previous to nearly finish */
        .schwing-delay-1 { animation-delay: 0.1s !important; }
        .schwing-delay-2 { animation-delay: 0.6s !important; }
        .schwing-delay-3 { animation-delay: 1.1s !important; }
        .schwing-delay-4 { animation-delay: 1.6s !important; }

        .schwing-img-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 55%;
          background: linear-gradient(to top, rgba(0,0,0,0.12), transparent);
          pointer-events: none;
        }
      `}</style>

      <section ref={sectionRef} className="bg-white py-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Column */}
          <div className="flex flex-col items-start space-y-6">

            {/* 1st — Logo */}
            <img
              src="/logos/schwing-stetter-web.svg"
              alt="Schwing Stetter Logo"
              className={`w-32 mb-4 schwing-slide-up schwing-delay-1 ${visible ? "visible" : ""}`}
            />

            {/* 2nd — Image */}
            <div
              className={`relative w-full schwing-slide-up schwing-delay-2 ${visible ? "visible" : ""}`}
            >
              <img
                src="/assets/sch.jpeg"
                alt="Schwing Stetter Equipment"
                className="w-full rounded-sm"
              />
              <div className="schwing-img-overlay" />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">

            {/* 3rd — Heading */}
            <h2
              className={`text-3xl font-bold leading-snug schwing-fade-right schwing-delay-3 ${visible ? "visible" : ""}`}
            >
              <span className="font-extrabold">SCHWING</span>{" "}
              <span className="font-normal">
                Construction Solutions Backed by ACT Expertise
              </span>
            </h2>

            {/* 4th — Paragraph */}
            <p
              className={`text-gray-700 text-base leading-relaxed schwing-fade-up schwing-delay-4 ${visible ? "visible" : ""}`}
            >
              SCHWING STETTER is the world's leading system house for concrete
              construction machines, offering the entire spectrum of ready-mix
              concrete technology.
              <br />
              <br />
              The premium products offered for the production, transport,
              placing and environmentally friendly recycling of concrete mean
              maximum safety, reliability and cost-effectiveness for customers —
              with the highest resale value for SCHWING-Stetter products.
              <br />
              <br />
              SCHWING STETTER India is a 100% subsidiary of the Schwing group
              of companies GmbH was incorporated in the year 1998. A pioneer in
              concrete construction equipment manufacturing as a global leader
              in construction equipment.
              <br />
              <br />
              ACT & its group company PACT MACHINES were appointed as
              authorised dealer for SCHWING STETTER products in the 2 south
              Indian states of Tamil Nadu & Kerala respectively since Nov 2025.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}