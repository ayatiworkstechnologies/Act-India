import React, { useEffect, useRef } from "react";

export default function VolvoSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.15 }
    );

    const animatedEls = sectionRef.current?.querySelectorAll(".anim-el");
    animatedEls?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .anim-el {
          opacity: 0;
          transform: translateY(48px);
          transition: opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .anim-el.from-left {
          transform: translateX(-60px);
        }

        .anim-el.animate-in {
          opacity: 1;
          transform: translate(0, 0);
        }

        .anim-el:nth-child(1) { transition-delay: 0s; }
        .anim-el:nth-child(2) { transition-delay: 0.12s; }
        .anim-el:nth-child(3) { transition-delay: 0.24s; }
        .anim-el:nth-child(4) { transition-delay: 0.36s; }
        .anim-el:nth-child(5) { transition-delay: 0.48s; }

        .delay-0  { transition-delay: 0s !important; }
        .delay-1  { transition-delay: 0.1s !important; }
        .delay-2  { transition-delay: 0.22s !important; }
        .delay-3  { transition-delay: 0.34s !important; }
        .delay-4  { transition-delay: 0.46s !important; }
        .delay-5  { transition-delay: 0.58s !important; }

        .img-hover {
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.5s ease;
        }
        .img-hover:hover {
          transform: scale(1.025);
          box-shadow: 0 20px 50px rgba(0,0,0,0.15);
        }
      `}</style>

      <section ref={sectionRef} className="bg-white py-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Column */}
          <div className="flex flex-col items-start space-y-6">
            {/* Logo */}
            <div className="anim-el from-left delay-0">
              <img
                src="/assets/inner-1.svg"
                alt="Volvo Logo"
                className="w-32 mb-4"
              />
            </div>

            {/* Image */}
            <div className="anim-el from-left delay-1 relative w-full justify-start">
              <img
                src="/assets/ec.jpg"
                alt="Volvo Excavator"
                className="w-full img-hover"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="anim-el delay-2">
              <h2 className="text-3xl font-bold leading-snug">
                <span className="font-extrabold">Volvo</span>
              </h2>
            </div>

            <div className="anim-el delay-3">
              <p className="text-gray-700 text-base leading-relaxed">
                Founded in 1927, the Volvo Group is committed to shaping the future landscape of sustainable transport and infrastructure solutions. Every day our customers use our products and services to transport, deliver, build, and ferry goods, objects and people around the world. Our products and services help to put food on our tables, carry people to work or school, build roads, keep our cities clean and much, much more, effectively helping to meet the growing demands of our world.{" "}
                <br />
                <br />
                ACT & its group company PACT MACHINES have been the authorised dealer for VOLVO CONSTRUCTION EQUIPMENT products for 2 decades (since 2007) in the 2 south Indian states of Tamil Nadu & Kerala respectively. This long and successful association is testimony to the trust and capability of delivering value to our customers over the years.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}