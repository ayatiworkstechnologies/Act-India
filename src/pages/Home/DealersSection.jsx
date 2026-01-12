import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

/* ================== DATA ================== */
const dealers = [
  {
    id: 1,
    logo: "/assets/volvo-brand.svg",
    title: "Mfg of Heavy Construction Equipment & Road Machinery",
    link: "/volvo",
  },
  {
    id: 2,
    logo: "/assets/epiroc-brand.svg",
    title: "Hydraulic Attachments",
    link: "/epiroc",
  },
  {
    id: 3,
    logo: "/assets/sdlg-brand.svg",
    title: "Construction Equipment",
    link: "/sdlg",
  },
  {
    id: 4,
    logo: "/assets/husqvarna-brand.svg",
    title: "Road Machinery",
    link: "/husqvarna",
  },
  {
    id: 5,
    logo: "/assets/ammann-brand.svg",
    title: "Mfg of Heavy Construction Equipment",
    link: "/ammann",
  },
  {
    id: 6,
    logo: "/assets/schwing-stetter-brand.svg",
    title: "Efficient. Compact. Ready-Mix Anywhere.",
    link: "/self-loading-mixer",
  },
];

export default function DealersSection() {
  const [index, setIndex] = useState(0);
  const mobileRef = useRef(null);

  /* ================== DESKTOP SLIDER ================== */
  const prevSlide = () =>
    setIndex((p) => (p - 1 + dealers.length) % dealers.length);

  const nextSlide = () =>
    setIndex((p) => (p + 1) % dealers.length);

  const visible = Array.from(
    { length: 3 },
    (_, i) => dealers[(index + i) % dealers.length]
  );

  /* ================== AUTOPLAY (DESKTOP ONLY) ================== */
  useEffect(() => {
    if (window.innerWidth < 640) return;

    const timer = setInterval(() => {
      setIndex((p) => p + 1);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  /* ================== MOBILE SCROLL ================== */
  const scrollMobile = (dir) => {
    if (!mobileRef.current) return;

    const scrollAmount = mobileRef.current.offsetWidth * 0.8;

    mobileRef.current.scrollBy({
      left: dir === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-[#F5F5F5] py-12">
      <div className="max-w-6xl mx-auto px-4">

        {/* ================== HEADER ================== */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end">
          <h2 className="text-3xl md:text-4xl font-bold font-primary pb-4">
            Brand Partner
          </h2>

          {/* Desktop arrows */}
          <div className="hidden md:flex gap-4">
            <button
              onClick={prevSlide}
              className="p-3 bg-white rounded-full shadow hover:bg-gray-100"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 bg-white rounded-full shadow hover:bg-gray-100"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* ================== MOBILE CAROUSEL ================== */}
        <div className="sm:hidden mt-8 relative">
          <div
            ref={mobileRef}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
          >
            {dealers.map((dealer) => (
              <div
                key={dealer.id}
                className="min-w-[85%] bg-white p-5 shadow
                           flex flex-col justify-between snap-center rounded-lg"
              >
                <img
                  src={dealer.logo}
                  alt={dealer.title}
                  className="h-10 object-contain mb-3"
                />
                <p className="text-sm text-gray-700 mb-4">
                  {dealer.title}
                </p>
                <Link
                  to={dealer.link}
                  className="text-secondary font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile arrows */}
          <button
            onClick={() => scrollMobile("prev")}
            className="absolute left-1 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={() => scrollMobile("next")}
            className="absolute right-1 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* ================== DESKTOP GRID ================== */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {visible.map((dealer) => (
            <div
              key={dealer.id}
              className="bg-white p-6 shadow-lg
                         flex flex-col justify-between "
            >
              <img
                src={dealer.logo}
                alt={dealer.title}
                className="h-12 object-contain mb-4"
              />
              <p className="text-sm text-gray-700 mb-4">
                {dealer.title}
              </p>
              <Link
                to={dealer.link}
                className="text-secondary font-semibold"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
