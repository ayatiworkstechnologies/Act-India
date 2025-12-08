"use client";

export default function BrandsSlider() {
  const logos = [
    "/assets/logo-1.svg",
    "/assets/logo-2.svg",
    "/assets/logo-3.svg",
    "/assets/logo-4.svg",
    "/assets/logo-5.svg",
    "/assets/logo-6.svg",
    "/assets/logo-7.svg",
    "/assets/logo-8.svg",
    "/assets/logo-9.svg",
    "/assets/logo-10.svg",
    "/assets/logo-11.svg",
    "/assets/logo-12.svg",
  ];

  return (
    <section className="w-full py-12 bg-white overflow-hidden">
  <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-16">
          Group of Company
        </h2>
        
      </div>
      {/* Row 1 - Move Right */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-20 animate-slide-right whitespace-nowrap items-center">
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`brand ${i}`}
              width={120}
              height={60}
              loading="lazy"
              className="object-contain inline-block"
            />
          ))}
        </div>
      </div>

      {/* Row 2 - Move Left */}
      <div className="relative w-full overflow-hidden mt-16">
        <div className="flex gap-10 animate-slide-left whitespace-nowrap items-center">
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`brand ${i}`}
              width={120}
              height={60}
              loading="lazy"
              className="object-contain inline-block"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
