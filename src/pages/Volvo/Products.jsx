import React, { useEffect, useMemo, useState, useCallback } from "react";

const CATEGORIES = ["Products", "Attachments", "Supplies", "Electric Machines"];

const ITEMS = [
  // Products
  {
    category: "Products",
    title: "Crawler Excavators",
    subtitle: "Operating Weight 20T - 90T",
    img: "/assets/product-1.png",
    gallery: ["/assets/popup-slide-1.png", "/assets/popup-slide-2.png", "/assets/volvo-p-1.webp"],
    link: "https://www.volvoce.com/india/en-in/products/excavators/",
  },
  {
    category: "Products",
    title: "Articulated Haulers",
    subtitle: "Payload Capacity 25T - 50T",
    img: "/assets/product-2.png",
    gallery: ["/assets/popup-slide-5.png"],
    link: "https://www.volvoce.com/india/en-in/products/articulated-haulers/",
  },
  {
    category: "Products",
    title: "Wheel Loaders",
    subtitle: "Static tipping load at full turn 10T - 34T",
    img: "/assets/product-3.png",
    gallery: ["/assets/popup-slide-6.png"],
    link: "https://www.volvoce.com/india/en-in/products/wheel-loaders/",
  },
  {
    category: "Products",
    title: "Vibratory Soil Compactor",
    subtitle: "Operating Weight 11T",
    subtitle1: "SD110",
    img: "/assets/product-4.png",
    gallery: ["/assets/popup-slide-7.png"],
    link: "https://www.volvoce.com/india/en-in/products/compactors/",
  },
  {
    category: "Products",
    title: "Vibratory Asphalt Compactor",
    subtitle: "Operating Weight 9T - 10T",
    img: "/assets/product-5.png",
    gallery: ["/assets/popup-slide-3.png", "/assets/popup-slide-4.png"],
    link: "https://www.volvoce.com/india/en-in/products/compactors/",
  },
  {
    category: "Products",
    title: "Pneumatic Tyre Rollers",
    subtitle: "Operating Weight 10.5T",
    img: "/assets/product-6.png",
    gallery: ["/assets/popup-slide-8.png"],
    link: "#",
  },

  // Attachments
  {
    category: "Attachments",
    title: "Quick Couplers",
    img: "/assets/attach-1.png",
    gallery: ["/assets/popup-6.png"],
    link: "https://www.volvoce.com/india/en-in/attachments/crawler-excavator-attachments/quick-couplers/",
  },
  {
    category: "Attachments",
    title: "Excavator Bucket",
    subtitle: "Available for 20T - 95T",
    img: "/assets/attach-2.png",
    gallery: ["/assets/popup-4.png"],
    link: "https://www.volvoce.com/india/en-in/attachments/crawler-excavator-attachments/buckets/",
  },
  {
    category: "Attachments",
    title: "Wheel Loader Buckets",
    subtitle: "Suitable for 10T - 34T",
    img: "/assets/attach-3.png",
    gallery: ["/assets/volvo-p-2.webp"],
    link: "https://www.volvoce.com/india/en-in/attachments/wheel-loader-attachments/loader-buckets/",
  },
  {
    category: "Attachments",
    title: "Hydraulic Breakers",
    subtitle: "Suitable carrier 10T - 100T",
    img: "/assets/attach-4.png",
    gallery: ["/assets/popup-3.png"],
    link: "https://www.volvoce.com/india/en-in/attachments/crawler-excavator-attachments/hydraulic-breakers/",
  },
  {
    category: "Attachments",
    title: "Wheel Loader Bracket",
    subtitle: "Suitable Carrier 10T - 34T",
    img: "/assets/attach-5.png",
    gallery: ["/assets/volvo-p-3.webp"],
    link: "https://www.volvoce.com/india/en-in/attachments/wheel-loader-attachments/attachment-brackets/",
  },
  {
    category: "Attachments",
    title: "Wheel Loader Forks",
    subtitle: "Suitable for 10T - 34T",
    img: "/assets/attach-6.png",
    gallery: ["/assets/popup-5.png"],
    link: "https://www.volvoce.com/india/en-in/attachments/wheel-loader-attachments/forks/",
  },
  {
    category: "Attachments",
    title: "Grapples",
    subtitle: "Suitable for 10T - 21T",
    img: "/assets/attach-7.png",
    gallery: ["/assets/popup-1.png", "/assets/popup-2.png"],
    link: "https://www.volvoce.com/india/en-in/attachments/wheel-loader-attachments/grapples/",
  },

  // Supplies
  {
    category: "Supplies",
    title: "Genuine Filters",
    subtitle: "Air / Fuel / Hydraulic",
    img: "/assets/supplies.png",
    gallery: ["/assets/supplies.png"],
  },

  // Electric Machines
  {
    category: "Electric Machines",
    title: "Excavator",
    subtitle: "Operating Weight 50T",
    img: "/assets/electric-1.png",
    gallery: ["/assets/volvo-p-4.webp", "/assets/volvo-p-5.webp", "/assets/volvo-p-6.webp"],
    link: "https://www.volvoce.com/india/en-in/products/electric-machines/",
  },
  {
    category: "Electric Machines",
    title: "Pneumatic Roller",
    subtitle: "Operating Weight 11T",
    img: "/assets/electric-2.png",
    gallery: ["/assets/volvo-p-5.webp",],
    link: "https://www.volvoce.com/india/en-in/products/electric-machines/",
  },
  {
    category: "Electric Machines",
    title: "Mini Excavator",
    subtitle: "Operating Weight 5.5 T",
    img: "/assets/electric-3.png",
    gallery: ["/assets/volvo-p-7.webp"],
    link: "https://www.volvoce.com/india/en-in/products/electric-machines/",
  },
  {
    category: "Electric Machines",
    title: "Double Drum Roller",
    subtitle: "Operating Weight 3.8T",
    img: "/assets/electric-4.png",
    gallery: ["/assets/volvo-p-5.webp"],
    link: "https://www.volvoce.com/india/en-in/products/electric-machines/",
  },
];

export default function ProductsShowcase() {
  const [active, setActive] = useState("Products");
  const [selected, setSelected] = useState(null);

  const current = useMemo(() => ITEMS.filter((i) => i.category === active), [active]);

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
                  className={`relative py-3 -mb-px transition-colors}`}
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

        {/* Supplies: big showcase */}
        {active === "Supplies" ? (
          <div className="mx-auto">
            <div className="p-2">
              <img src={current[0]?.img} alt={current[0]?.title || "Supplies"} className="w-full h-auto object-contain bg-white" />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {current.map((p, i) => (
              <ProductCard key={`${p.title}-${i}`} {...p} onClick={() => setSelected(p)} />
            ))}
          </div>
        )}
      </div>

      {/* Popup Modal */}
      {selected && <ProductModal item={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}

/* -------------------- Product Card -------------------- */
function ProductCard({ img, title, subtitle, subtitle1, link, onClick }) {
  return (
    <article className="bg-white ring-1 ring-gray-100 shadow-[0_8px_55px_-25px_rgba(0,0,0,0.35)] overflow-hidden transition hover:shadow-[0_28px_70px_-30px_rgba(0,0,0,0.35)] cursor-pointer">
      <div className="p-4" onClick={onClick}>
        <div className="overflow-hidden">
          <img
            src={img}
            alt={title}
            className="pt-10 transition-transform duration-300 hover:scale-[1.03]"
          />
        </div>
      </div>
      <div className="px-5 pb-5">
        <h3 className="uppercase tracking-wide font-extrabold text-[15px] md:text-[16px] text-black">
          {title}
        </h3>
{subtitle1 && (
          <p className="text-[13px] md:text-lg font-bold text-black leading-relaxed mt-2">
            {subtitle1}
          </p>
        )}
        {subtitle && (
          <p className="mt-2 text-[13px] md:text-[14px] text-neutral-600 leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* ✅ Added subtitle1 support */}
        

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


/* -------------------- Modal -------------------- */
function ProductModal({ item, onClose }) {
  const images = item.gallery?.length ? item.gallery : [item.img];
  const [index, setIndex] = useState(0);

  const clamp = useCallback((n) => (images.length ? (n + images.length) % images.length : 0), [images.length]);
  const goPrev = useCallback(() => setIndex((i) => clamp(i - 1)), [clamp]);
  const goNext = useCallback(() => setIndex((i) => clamp(i + 1)), [clamp]);

  // ESC & Arrow Keys
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goPrev, goNext, onClose]);

  // Swipe support
  const [startX, setStartX] = useState(null);
  const onTouchStart = (e) => setStartX(e.touches?.[0]?.clientX ?? null);
  const onTouchEnd = (e) => {
    if (startX == null) return;
    const dx = (e.changedTouches?.[0]?.clientX ?? startX) - startX;
    if (Math.abs(dx) > 40) (dx > 0 ? goPrev() : goNext());
    setStartX(null);
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-[1px] flex items-center justify-center z-50 px-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="rounded-xl w-full max-w-4xl overflow-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          type="button"
          onClick={(e) => {
            // ensure the overlay onClick doesn't accidentally re-run or block the handler
            e.stopPropagation();
            e.preventDefault();
            onClose?.();
          }}
          className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/80 text-white text-xl leading-none hover:bg-black focus:outline-none z-50"
          aria-label="Close"
        >
          ×
        </button>

        {/* Slider */}
        <div className="relative" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <div className="aspect-[16/9] w-full overflow-hidden flex items-center justify-center">
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
              <button onClick={goPrev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/70 text-white h-10 w-10 rounded-full grid place-items-center hover:bg-black">
                ‹
              </button>
              <button onClick={goNext} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/70 text-white h-10 w-10 rounded-full grid place-items-center hover:bg-black">
                ›
              </button>
            </>
          )}
        </div>

        {/* Dots */}
        {images.length > 1 && (
          <div className="px-4 pb-5 md:px-6 md:pb-6">
            <div className="flex items-center justify-center gap-2 md:gap-3 flex-wrap">
              {images.map((src, i) => (
                <button
                  key={src + i}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 w-2.5 rounded-full transition ${i === index ? "bg-blue-600 scale-110" : "bg-gray-300 hover:bg-gray-400"}`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
