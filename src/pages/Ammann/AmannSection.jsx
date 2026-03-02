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
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes ammann-fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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
          animation: ammann-slideUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .ammann-fade-right {
          opacity: 0;
        }
        .ammann-fade-right.visible {
          animation: ammann-fadeInRight 0.75s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .ammann-fade-up {
          opacity: 0;
        }
        .ammann-fade-up.visible {
          animation: ammann-fadeInUp 0.65s ease forwards;
        }

        .ammann-delay-100 { animation-delay: 0.1s !important; }
        .ammann-delay-200 { animation-delay: 0.2s !important; }
        .ammann-delay-300 { animation-delay: 0.3s !important; }
        .ammann-delay-400 { animation-delay: 0.4s !important; }
        .ammann-delay-500 { animation-delay: 0.5s !important; }

        .ammann-img-overlay {
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

          {/* Left Column — bottom-to-top animation */}
          <div className="flex flex-col items-start space-y-6">

            {/* Logo slides up first */}
            <img
              src="/assets/amman.png"
              alt="Ammann Logo"
              className={`w-32 mb-4 ammann-slide-up ammann-delay-100 ${visible ? "visible" : ""}`}
            />

            {/* Image slides up after logo */}
            <div className={`relative justify-start w-full ammann-slide-up ammann-delay-200 ${visible ? "visible" : ""}`}>
              <img
                src="/assets/aman.webp"
                alt="Ammann Equipment"
                className="w-full rounded-sm"
              />
              
            </div>
          </div>

          {/* Right Column — bottom-to-top animation for text */}
          <div className="space-y-6">

            {/* Heading fades in from right */}
            <h2 className={`text-3xl font-bold leading-snug ammann-fade-right ammann-delay-200 ${visible ? "visible" : ""}`}>
              <span className="font-extrabold">Ammann</span>{" "}
              <span className="font-normal">
                Delivering Durable, Customer-Centric Solutions
              </span>
            </h2>

            {/* Paragraph fades up with delay */}
            <p className={`text-gray-700 text-base leading-relaxed ammann-fade-up ammann-delay-400 ${visible ? "visible" : ""}`}>
              Ammann is a global leader in mixing plants, road construction equipment, and services, with a legacy of excellence since 1869. With 150+ years of innovation, the sixth-generation family-run business continues to drive productivity and performance in transportation infrastructure worldwide. Despite its global reach and evolving technology, Ammann's core commitment remains unchanged delivering customer-centric, forward-thinking solutions built to last.
            </p>

          </div>
        </div>
      </section>
    </>
  );
}