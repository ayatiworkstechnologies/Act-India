// ProductsShowcase.jsx
import React, { useState, useEffect, useCallback } from "react";

/* ---- Replace these with your real images/titles/subtitles ---- */
const CATEGORIES = ["Products", "Supplies"];

const ITEMS = [
  // Products
  {
    category: "Products",
    title: "Hydraulic Breaker",
    subtitle: "SB Range (2.5T - 13T), MB Range (10T - 32T), HB Range (22T - 140T)",
    img: "/assets/1.png",
    gallery: ["/assets/popup-7.png"],
    link: "https://www.epiroc.com/en-in/products/excavator-attachments/hydraulic-breaker/hydraulic-breakers",
  },
  {
    category: "Products",
    title: "Bulk Pulverizer",
    subtitle: "(18T - 40T)",
    img: "/assets/2.png",
    gallery: ["/assets/epiroc-p-1.webp"],
    link: "https://www.epiroc.com/en-in/products/excavator-attachments/hydraulic-pulverizers",
  },
  {
    category: "Products",
    title: "Combi Cutter",
    subtitle: "(13T - 85T)",
    img: "/assets/3.png",
    gallery: ["/assets/popup-9.png", "/assets/popup-10.png"],
    link: "https://www.epiroc.com/en-in/products/excavator-attachments/concrete-cutter",
  },
  {
    category: "Products",
    title: "Drum Cutter",
    subtitle: "(0.6T - 125T)",
    img: "/assets/4.png",
    gallery: ["/assets/popup-11.png"],
    link: "https://www.epiroc.com/en-in/products/excavator-attachments/drum-cutters",
  },
  {
    category: "Products",
    title: "Steel Shears",
    subtitle: "Carrier Weight – Boom (2T - 65T), Stick (14T - 110T)",
    img: "/assets/5.png",
    gallery: ["/assets/5.png"],
    link: "#",
  },
  {
    category: "Products",
    title: "Crusher Bucket",
    subtitle: "(18T - 54T)",
    img: "/assets/6.png",
    gallery: ["/assets/popup-8.png"],
    link: "https://www.epiroc.com/en-in/products/excavator-attachments/crusher-buckets",
  },
  {
    category: "Products",
    title: "Compactor",
    subtitle: "(1T - 40T)",
    img: "/assets/7.png",
    gallery: ["/assets/popup-12.png"],
    link: "https://www.epiroc.com/en-in/products/excavator-attachments/hydraulic-compactors",
  },
  {
    category: "Products",
    title: "Multi Grab",
    subtitle: "16T - 100T",
    img: "/assets/8.png",
    gallery: ["/assets/popup-14.png"],
    link: "https://www.epiroc.com/en-in/products/excavator-attachments/excavator-grapple",
  },
  {
    category: "Products",
    title: "Magnet",
    subtitle: "(12T - 43T)",
    img: "/assets/9.png",
    gallery: ["/assets/popup-13.png"],
    link: "https://www.epiroc.com/en-in/products/excavator-attachments/excavator-magnet",
  },

  // Supplies
  {
    category: "Supplies",
    img: "/assets/supplies-2.png",
    gallery: ["/assets/supplies-2.png"],
  },
];

export default function ProductsShowcase() {
  const [active, setActive] = useState("Products");
  const [selected, setSelected] = useState(null);

  const current = ITEMS.filter((i) => i.category === active);

  return (
    <section className="bg-[#F5F5F5] text-neutral-900 py-10 md:py-16">
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

        {/* Supplies: big image */}
        {active === "Supplies" ? (
          <div className="mx-auto p-2">
            <img src={current[0]?.img} alt="Supplies" className="w-full h-auto object-contain bg-white" />
          </div>
        ) : (
          // Product grid
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {current.map((p, i) => (
              <ProductCard key={`${p.title ?? "item"}-${i}`} {...p} onClick={() => setSelected(p)} />
            ))}
          </div>
        )}
      </div>

      {/* Popup Modal */}
      {selected && <ProductModal item={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}

/* ------------------- Product Card ------------------- */
function ProductCard({ img, title, subtitle, onClick, link }) {
  return (
    <article
      className="bg-white ring-1 ring-gray-100 shadow-[0_20px_55px_-25px_rgba(0,0,0,0.35)] overflow-hidden transition hover:shadow-[0_28px_70px_-30px_rgba(0,0,0,0.35)] cursor-pointer"
    >
      <div className="p-4 overflow-hidden" onClick={onClick}>
        <img src={img} alt={title} className="pt-10 transition-transform duration-300 hover:scale-[1.03]" />
      </div>
      <div className="px-5 pb-5">
        <h3 className="uppercase tracking-wide font-extrabold text-[15px] md:text-[16px] text-black">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-2 text-[13px] md:text-[14px] text-neutral-600 leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* Visit Page Button */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-5 py-2 bg-secondary text-white text-sm font-medium transition"
          >
            View Details →
          </a>
        )}
      </div>
    </article>
  );
}

/* ------------------- Popup Modal with Slider ------------------- */
function ProductModal({ item, onClose }) {
  const images = item.gallery?.length ? item.gallery : [item.img];
  const [index, setIndex] = useState(0);

  const clamp = useCallback((n) => (n + images.length) % images.length, [images.length]);
  const goPrev = useCallback(() => setIndex((i) => clamp(i - 1)), [clamp]);
  const goNext = useCallback(() => setIndex((i) => clamp(i + 1)), [clamp]);

  // ESC & arrow keys
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goPrev, goNext, onClose]);

  // Swipe gestures
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
      // only close if the click target is the overlay itself (prevents accidental close on clicks inside)
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
        {/* Close Button */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation(); // ensures overlay onClick won't trigger
            onClose?.();
          }}
          aria-label="Close"
          className="absolute top-3 right-3 h-9 w-9 flex items-center justify-center rounded-full bg-black/80 text-white text-xl hover:bg-black z-50"
        >
          ×
        </button>

        {/* Image Slider */}
        <div className="relative" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <div className="aspect-[16/9] flex items-center justify-center bg-transparent">
            <img
              key={images[index]}
              src={images[index]}
              alt={`${item.title} ${index + 1}`}
              className="max-h-[70vh] w-auto object-contain mx-auto select-none"
              draggable={false}
            />
          </div>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/70 text-white h-10 w-10 rounded-full hover:bg-black"
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/70 text-white h-10 w-10 rounded-full hover:bg-black"
                aria-label="Next image"
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
                className={`h-2.5 w-2.5 rounded-full ${i === index ? "bg-blue-600 scale-110" : "bg-gray-300 hover:bg-gray-400"}`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
