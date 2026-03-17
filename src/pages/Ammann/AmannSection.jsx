import React, { useEffect, useRef, useState } from "react";

export default function AmannSection() {
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
        @keyframes ammann-slideUp {
          from {
            opacity: 0;
            transform: translateY(80px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes ammann-fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes ammann-fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .ammann-slide-up {
          opacity: 0;
        }
        .ammann-slide-up.visible {
          animation: ammann-slideUp 1.1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .ammann-fade-right {
          opacity: 0;
        }
        .ammann-fade-right.visible {
          animation: ammann-fadeInRight 1.0s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .ammann-fade-up {
          opacity: 0;
        }
        .ammann-fade-up.visible {
          animation: ammann-fadeInUp 1.0s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        /* One-by-one: each element waits for the previous to finish */
        .ammann-delay-1 { animation-delay: 0.1s !important; }
        .ammann-delay-2 { animation-delay: 0.55s !important; }
        .ammann-delay-3 { animation-delay: 1.0s !important; }
        .ammann-delay-4 { animation-delay: 1.5s !important; }
      `}</style>

      <section ref={sectionRef} className="bg-white py-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Column */}
          <div className="flex flex-col items-start space-y-6">

            {/* 1st — Logo */}
            <img
              src="/assets/amman.png"
              alt="Ammann Logo"
              className={`w-32 mb-4 ammann-slide-up ammann-delay-1 ${visible ? "visible" : ""}`}
            />

            {/* 2nd — Image */}
            <div
              className={`relative w-full ammann-slide-up ammann-delay-2 ${visible ? "visible" : ""}`}
            >
              <img
                src="/assets/aman.webp"
                alt="Ammann Equipment"
                className="w-full rounded-sm"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">

            {/* 3rd — Heading */}
            <h2
              className={`text-3xl font-bold leading-snug ammann-fade-right ammann-delay-3 ${visible ? "visible" : ""}`}
            >
              <span className="font-extrabold">Ammann</span>{" "}
              <span className="font-normal">
                Delivering Durable, Customer-Centric Solutions
              </span>
            </h2>

            {/* 4th — Paragraph */}
            <p
              className={`text-gray-700 text-base leading-relaxed ammann-fade-up ammann-delay-4 ${visible ? "visible" : ""}`}
            >
              Ammann is a global leader in mixing plants, road construction
              equipment, and services, with a legacy of excellence since 1869.
              With 150+ years of innovation, the sixth-generation family-run
              business continues to drive productivity and performance in
              transportation infrastructure worldwide. Despite its global reach
              and evolving technology, Ammann's core commitment remains
              unchanged delivering customer-centric, forward-thinking solutions
              built to last.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}