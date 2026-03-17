import React, { useEffect, useRef } from "react";

export default function VolvoSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const els = entry.target.querySelectorAll(".anim-el");
            els.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("animate-in");
              }, i * 350);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .anim-el {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .anim-el.from-left {
          transform: translateX(-60px);
        }

        .anim-el.from-right {
          transform: translateX(60px);
        }

        .anim-el.animate-in {
          opacity: 1;
          transform: translate(0, 0);
        }

        .img-hover {
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
                      box-shadow 0.5s ease;
        }
        .img-hover:hover {
          transform: scale(1.025);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
        }
      `}</style>

      <section ref={sectionRef} className="bg-white py-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Column */}
          <div className="flex flex-col items-start space-y-6">
            {/* Logo */}
            <div className="anim-el from-left">
              <img
                src="/assets/inner-1.svg"
                alt="Volvo Logo"
                className="w-32 mb-4"
              />
            </div>

            {/* Image */}
            <div className="anim-el from-left relative w-full">
              <img
                src="/assets/ec.jpg"
                alt="Volvo Excavator"
                className="w-full img-hover"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Heading */}
            <div className="anim-el from-right">
              <h2 className="text-3xl font-bold leading-snug">
                <span className="font-extrabold">Volvo</span>
              </h2>
            </div>

            {/* Paragraph 1 */}
            <div className="anim-el from-right">
              <p className="text-gray-700 text-base leading-relaxed">
                Founded in 1927, the Volvo Group is committed to shaping the
                future landscape of sustainable transport and infrastructure
                solutions. Every day our customers use our products and services
                to transport, deliver, build, and ferry goods, objects and people
                around the world. Our products and services help to put food on
                our tables, carry people to work or school, build roads, keep our
                cities clean and much, much more, effectively helping to meet the
                growing demands of our world.
              </p>
            </div>

            {/* Paragraph 2 */}
            <div className="anim-el from-right">
              <p className="text-gray-700 text-base leading-relaxed">
                ACT & its group company PACT MACHINES have been the authorised
                dealer for VOLVO CONSTRUCTION EQUIPMENT products for 2 decades
                (since 2007) in the 2 south Indian states of Tamil Nadu & Kerala
                respectively. This long and successful association is testimony
                to the trust and capability of delivering value to our customers
                over the years.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}