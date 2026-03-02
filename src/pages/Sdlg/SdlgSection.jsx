import React, { useEffect, useRef, useState } from "react";

export default function SdlgSection() {
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

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .sdlg-slide-up {
          opacity: 0;
        }
        .sdlg-slide-up.visible {
          animation: slideUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .sdlg-fade-left {
          opacity: 0;
        }
        .sdlg-fade-left.visible {
          animation: fadeInLeft 0.75s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .sdlg-fade-up {
          opacity: 0;
        }
        .sdlg-fade-up.visible {
          animation: fadeInUp 0.65s ease forwards;
        }

        .sdlg-delay-100 { animation-delay: 0.1s !important; }
        .sdlg-delay-200 { animation-delay: 0.2s !important; }
        .sdlg-delay-300 { animation-delay: 0.3s !important; }
        .sdlg-delay-400 { animation-delay: 0.4s !important; }
        .sdlg-delay-500 { animation-delay: 0.5s !important; }

        .sdlg-img-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 55%;
          background: linear-gradient(to top, rgba(0,0,0,0.12), transparent);
          pointer-events: none;
          border-radius: 0 0 2px 2px;
        }
      `}</style>

      <section ref={sectionRef} className="bg-white py-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Column — bottom-to-top animation */}
          <div className="flex flex-col items-start space-y-6">

            {/* Logo slides up first */}
            <img
              src="/assets/sdlg.png"
              alt="SDLG Logo"
              className={`w-32 mb-4 sdlg-slide-up sdlg-delay-100 ${visible ? "visible" : ""}`}
            />

            {/* Image slides up after logo */}
            <div className={`relative justify-start w-full sdlg-slide-up sdlg-delay-200 ${visible ? "visible" : ""}`}>
              <img
                src="/assets/sd.jpeg"
                alt="Volvo Excavator"
                className="w-full rounded-sm"
              />
              <div className="sdlg-img-overlay" />
            </div>
          </div>

          {/* Right Column — bottom-to-top animation for text */}
          <div className="space-y-6">

            {/* Heading slides up */}
            <h2 className={`text-3xl font-bold leading-snug sdlg-fade-left sdlg-delay-200 ${visible ? "visible" : ""}`}>
              <span className="font-extrabold">SDLG</span>
            </h2>

            {/* Paragraph fades up with delay */}
            <p className={`text-gray-700 text-base leading-relaxed sdlg-fade-up sdlg-delay-400 ${visible ? "visible" : ""}`}>
              SDLG (Shandong Lingong Construction Machinery) is a trusted global brand known for delivering reliable and cost-effective construction machinery since 1972. Backed by Volvo CE since 2007, SDLG combines robust engineering with global standards to serve infrastructure and construction needs worldwide. Its value-driven machines are designed for performance, durability, and easy maintenance making them ideal for high-demand environments.<br />
              ACT has been the authorised dealer for SDLG products since 2008 in the 2 south Indian states of Tamil Nadu & Kerala. This long and successful association is testimony to the trust and capability of delivering value to our customers over the years.
            </p>

          </div>
        </div>
      </section>
    </>
  );
}