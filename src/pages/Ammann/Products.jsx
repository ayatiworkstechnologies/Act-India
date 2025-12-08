import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const CATEGORIES = ["Products", "Supplies"];

const ITEMS = [
  {
    category: "Products",
    title: "Tracked Pavers",
    subtitle: "Paving Width, max 4.5m - 13m",
    img: "/assets/amman-1.png",
    gallery: ["/assets/amman-p-1.webp"],
    link: "https://www.ammann.com/en-IN/machines/asphalt-pavers/asphalt-pavers/?products%5BrefinementList%5D%5Bundercarriage%5D%5B0%5D=Tracked",
  },
  {
    category: "Products",
    title: "Wheeled Pavers",
    subtitle: "Paving Width, max 4.5m - 9m",
    img: "/assets/amman-2.png",
    gallery: ["/assets/popup-20.png"],
    link: "https://www.ammann.com/en-IN/machines/asphalt-pavers/",
  },
  { category: "Supplies", img: "/assets/supplies-4.png" },
];

export default function AmmannProducts() {
  const [active, setActive] = useState("Products");
  const [selected, setSelected] = useState(null);
  const current = ITEMS.filter((i) => i.category === active);

  return (
    <section className="bg-[#F5F5F5] text-black py-10 md:py-16">
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
                  className={`relative py-3 -mb-px transition-colors
                  }`}
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

        {/* Supplies */}
        {active === "Supplies" ? (
          <div className="mx-auto p-2">
            <img
              src={current[0]?.img}
              alt={current[0]?.title || "Supplies"}
              className="w-[300px] h-[300px] object-contain bg-white mx-auto"
            />
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-6">
            {current.map((p, i) => (
              <ProductCard key={i} {...p} onImageClick={() => setSelected(p)} />
            ))}
          </div>
        )}
      </div>

      {/* Popup Modal */}
      {selected && <ProductModal item={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}

function ProductCard({ img, title, subtitle, link, onImageClick }) {
  return (
    <article className="bg-white ring-1 ring-gray-100 shadow-[0_20px_55px_-25px_rgba(0,0,0,0.35)] overflow-hidden transition hover:shadow-[0_28px_70px_-30px_rgba(0,0,0,0.35)]">
      <div className="p-4">
        <div className="overflow-hidden cursor-pointer" onClick={onImageClick}>
          <img
            src={img}
            alt={title}
            className="pt-10 transition-transform duration-300 hover:scale-[1.03]"
          />
        </div>
      </div>
    <div className="px-5 pb-6 text-left">
  <h3 className="uppercase tracking-wide font-extrabold text-[15px] md:text-[16px] text-black">
    {title}
  </h3>
  {subtitle && (
    <p className="mt-2 text-[13px] md:text-[14px] text-neutral-600 leading-relaxed">
      {subtitle}
    </p>
  )}
  {link && (
    <div className="mt-3">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-4 py-2 text-sm font-medium bg-secondary text-white transition"
      >
        View Details →
      </a>
    </div>
  )}
</div>

    </article>
  );
}

function ProductModal({ item, onClose }) {
  const images = item.gallery?.length ? item.gallery : [item.img];
  const [index, setIndex] = useState(0);

  // Reset index whenever a new item is opened
  useEffect(() => setIndex(0), [item]);

  const clamp = useCallback((n) => (n + images.length) % images.length, [images.length]);
  const goPrev = useCallback(() => setIndex((i) => clamp(i - 1)), [clamp]);
  const goNext = useCallback(() => setIndex((i) => clamp(i + 1)), [clamp]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
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
    const dx = (e.changedTouches?.[0]?.clientX ?? startX) - startX;
    if (Math.abs(dx) > 40) dx > 0 ? goPrev() : goNext();
    setStartX(null);
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose(); // only close on backdrop click
      }}
    >
      <div
        className="rounded-xl w-full max-w-4xl overflow-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-3 right-3 h-9 w-9 flex items-center justify-center rounded-full bg-black/80 text-white text-xl hover:bg-black z-50"
        >
          ×
        </button>

        {/* Slider */}
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

          {/* Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/70 text-white h-10 w-10 rounded-full hover:bg-black"
              >
                ‹
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
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
                className={`h-2.5 w-2.5 rounded-full ${
                  i === index ? "bg-blue-600 scale-110" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
