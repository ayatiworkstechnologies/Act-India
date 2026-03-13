import React, { useEffect, useRef, useState } from "react";

export default function HusqvarnaSection() {
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
        @keyframes husq-slideUp {
          from {
            opacity: 0;
            transform: translateY(80px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes husq-fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes husq-fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .husq-slide-up {
          opacity: 0;
        }
        .husq-slide-up.visible {
          animation: husq-slideUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .husq-fade-right {
          opacity: 0;
        }
        .husq-fade-right.visible {
          animation: husq-fadeInRight 0.75s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .husq-fade-up {
          opacity: 0;
        }
        .husq-fade-up.visible {
          animation: husq-fadeInUp 0.65s ease forwards;
        }

        .husq-delay-100 { animation-delay: 0.1s !important; }
        .husq-delay-200 { animation-delay: 0.2s !important; }
        .husq-delay-300 { animation-delay: 0.3s !important; }
        .husq-delay-400 { animation-delay: 0.4s !important; }
        .husq-delay-500 { animation-delay: 0.5s !important; }

        .husq-img-overlay {
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
              src="/assets/Husqvarna.png"
              alt="Husqvarna Logo"
              className={`w-32 mb-4 husq-slide-up husq-delay-100 ${visible ? "visible" : ""}`}
            />

            {/* Image slides up after logo */}
            <div className={`relative justify-start w-full husq-slide-up husq-delay-200 ${visible ? "visible" : ""}`}>
              <img
                src="/assets/hus.jpeg"
                alt="Husqvarna Equipment"
                className="w-full rounded-sm"
              />
              <div className="husq-img-overlay" />
            </div>
          </div>

          {/* Right Column — text animations */}
          <div className="space-y-6">

            {/* Heading fades in from right */}
            <h2 className={`text-3xl font-bold leading-snug husq-fade-right husq-delay-200 ${visible ? "visible" : ""}`}>
              <span className="font-extrabold">Husqvarna</span>{" "}
              <span className="font-normal">
                Leading Global Construction Tool Innovation
              </span>
            </h2>

            {/* Paragraph fades up with delay */}
            <p className={`text-gray-700 text-base leading-relaxed husq-fade-up husq-delay-400 ${visible ? "visible" : ""}`}>
              Husqvarna Construction, a part of the renowned Husqvarna Group, is a global leader in equipment and diamond tools for the light construction industry. Built for professionals shaping concrete, stone, and urban landscapes, our solutions combine cutting-edge technology with uncompromising performance. With a focus on precision and partnership, Husqvarna keeps you ahead of every project, every time.
            </p>

          </div>
        </div>
      </section>
    </>
  );
}