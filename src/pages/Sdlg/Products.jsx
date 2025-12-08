// ProductsShowcase.jsx
import React, { useState, useEffect, useCallback } from "react";

const CATEGORIES = ["Products", "Supplies"];

const ITEMS = [
  {
    category: "Products",
    title: "Crawler Excavator",
    subtitle: "Operating Weight: 8T - 14T",
    img: "/assets/sdlg-1.png",
    gallery: ["/assets/sdlg-p-1.jpg", "/assets/sdlg-p-2.jpg", "/assets/sdlg-p-3.jpg"],
    link: "https://sdlgindia.com/products/#excavators",
  },
  {
    category: "Products",
    title: "Wheel Loaders",
    subtitle: "Rated Load (kg) 1.6T - 8T",
    img: "/assets/sdlg-2.png",
    gallery: ["/assets/sdlg-p-4.png", "/assets/sdlg-p-5.png", "/assets/sdlg-p-6.jpg", "/assets/sdlg-p-7.jpg", "/assets/sdlg-p-8.png"],
    link: "https://sdlgindia.com/products/#wheel-loaders",
  },
  {
    category: "Products",
    title: "Motor Grader",
    subtitle: "Rated Power (kw) 105 - 211",
    img: "/assets/sdlg-3.png",
    gallery: ["/assets/sdlg-p-9.jpg", "/assets/sdlg-p-10.jpg", "/assets/sdlg-p-11.jpg"  ],
    link: "https://sdlgindia.com/products/#graders",
  },
  {
    category: "Products",
    title: "Hydraulic Breakers",
    subtitle: "Suitable carrier 7T - 34T",
    img: "/assets/sdlg-4.png",
    gallery: ["/assets/popup-18.png"],
    link: "#",
  },
  { category: "Supplies", img: "/assets/supplies-3.png" },
];

export default function ProductsShowcase() {
  const [active, setActive] = useState("Products");
  const [selected, setSelected] = useState(null);

  const current = ITEMS.filter((i) => i.category === active);

  return (
    <section className="bg-[#F5F5F5]  text-neutral-900 py-10 md:py-16">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        {/* Tabs */}
        <div className="mb-8 flex justify-center">
          <nav className="flex gap-6 text-sm font-medium">
            {CATEGORIES.map((c) => {
              const isActive = c === active;
              return (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`relative py-3 -mb-px transition-colors }`}
                >
                  {c}
                  {isActive && (
                    <span className="absolute left-0 right-0 -bottom-px h-[2px] bg-gradient-primary rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Supplies big image */}
        {active === "Supplies" ? (
          <div className="mx-auto p-2">
            <img
              src={current[0]?.img}
              alt="Supplies"
              className="w-[300px] h-[300px] object-contain bg-white mx-auto"
            />
          </div>
        ) : (
          // Product grid
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {current.map((p, i) => (
              <ProductCard
                key={`${p.title}-${i}`}
                {...p}
                onClick={() => setSelected(p)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Popup Modal */}
      {selected && <ProductModal item={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}

/* ---------------- Product Card ---------------- */
function ProductCard({ img, title, subtitle, link, onClick }) {
  return (
    <article className="bg-white ring-1 ring-gray-100 shadow-[0_20px_55px_-25px_rgba(0,0,0,0.35)] overflow-hidden transition hover:shadow-[0_28px_70px_-30px_rgba(0,0,0,0.35)]">
      <div className="p-4 cursor-pointer" onClick={onClick}>
        <div className="overflow-hidden">
          <img
            src={img}
            alt={title}
            className="pt-10 transition-transform duration-300 hover:scale-[1.03]"
          />
        </div>
      </div>
      <div className="px-5 pb-5 text-left">
  <h3 className="uppercase tracking-wide font-extrabold text-[15px] md:text-[16px] text-black">
    {title}
  </h3>
  {subtitle && (
    <p className="mt-2 text-[13px] md:text-[14px] text-neutral-600 leading-relaxed">
      {subtitle}
    </p>
  )}

  {/* 🔗 Left-aligned Link button */}
  {link && (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-4 px-4 py-2 text-sm font-medium bg-secondary text-white transition"
    >
      View Details →
    </a>
  )}
</div>

    </article>
  );
}

/* ---------------- Popup Modal with Slider ---------------- */
function ProductModal({ item, onClose }) {
  const images = item.gallery?.length ? item.gallery : [item.img];
  const [index, setIndex] = useState(0);

  // reset to first image whenever a new item is opened
  useEffect(() => {
    setIndex(0);
  }, [item]);

  const clamp = useCallback(
    (n) => (n + images.length) % images.length,
    [images.length]
  );

  const goPrev = useCallback(() => setIndex((i) => clamp(i - 1)), [clamp]);
  const goNext = useCallback(() => setIndex((i) => clamp(i + 1)), [clamp]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goPrev, goNext, onClose]);

  const [startX, setStartX] = useState(null);
  const onTouchStart = (e) => setStartX(e.touches?.[0]?.clientX ?? null);
  const onTouchEnd = (e) => {
    if (startX == null) return;
    const endX = e.changedTouches?.[0]?.clientX ?? startX;
    const dx = endX - startX;
    if (Math.abs(dx) > 40) {
      dx > 0 ? goPrev() : goNext();
    }
    setStartX(null);
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
      role="dialog"
      aria-modal="true"
      // only close if the click happened on the overlay itself
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose?.();
        }
      }}
    >
      <div
        className="rounded-xl w-full max-w-4xl overflow-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button: stops propagation so overlay doesn't receive the click */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onClose?.();
          }}
          aria-label="Close"
          className="absolute top-3 right-3 h-9 w-9 flex items-center justify-center rounded-full bg-black/80 text-white text-xl hover:bg-black z-50"
        >
          ×
        </button>

        {/* Image Slider */}
        <div
          className="relative"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="aspect-[16/9] flex items-center justify-center">
            <img
              key={images[index]}
              src={images[index]}
              alt={`${item.title} ${index + 1}`}
              className="max-h-[70vh] w-auto object-contain mx-auto select-none"
              draggable={false}
            />
          </div>

          {/* Navigation Arrows - stop propagation when clicked */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/70 text-white h-10 w-10 rounded-full hover:bg-black"
              >
                ‹
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/70 text-white h-10 w-10 rounded-full hover:bg-black"
              >
                ›
              </button>
            </>
          )}
        </div>

        {/* Dots */}
        {images.length > 1 && (
          <div className="px-4 pb-5 flex justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setIndex(i);
                }}
                aria-label={`Go to image ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full ${i === index ? "bg-blue-600 scale-110" : "bg-gray-300 hover:bg-gray-400"}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
