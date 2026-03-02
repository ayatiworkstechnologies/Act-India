// ProductsShowcase.jsx
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ---- Replace these with your real images/titles/subtitles ---- */
const CATEGORIES = ["Products"];

const ITEMS = [
  // Products
  {
    category: "Products",
    title: "Hydraulic Breaker",
    subtitle: "SB Range (2.5T - 13T), MB Range (10T - 32T), HB Range (22T - 140T)",
    img: "/assets/e-p-1.png",
    gallery: ["/assets/popup-7.png"],
    link: "https://www.epiroc.com/en-in/products/excavator-attachments/hydraulic-breaker/hydraulic-breakers",
  },
  {
    category: "Products",
    title: "Bulk Pulverizer",
    subtitle: "(18T - 40T)",
    img: "/assets/e-p-2.png",
    gallery: ["/assets/epiroc-p-1.webp"],
    link: "https://www.epiroc.com/en-in/products/excavator-attachments/hydraulic-pulverizers",
  },
  {
    category: "Products",
    title: "Combi Cutter",
    subtitle: "(13T - 85T)",
    img: "/assets/e-p-3.png",
    gallery: ["/assets/popup-9.png", "/assets/popup-10.png"],
    link: "https://www.epiroc.com/en-in/products/excavator-attachments/concrete-cutter",
  },
  {
    category: "Products",
    title: "Drum Cutter",
    subtitle: "(0.6T - 125T)",
    img: "/assets/e-p-4.png",
    gallery: ["/assets/popup-11.png"],
    link: "https://www.epiroc.com/en-in/products/excavator-attachments/drum-cutters",
  },
  {
    category: "Products",
    title: "Steel Shears",
    subtitle: "Carrier Weight – Boom (2T - 65T), Stick (14T - 110T)",
    img: "/assets/e-p-5.png",
    gallery: ["/assets/e-p-5.png"],
    link: "#",
  },
  {
    category: "Products",
    title: "Crusher Bucket",
    subtitle: "(18T - 54T)",
    img: "/assets/e-p-6.png",
    gallery: ["/assets/popup-8.png"],
    link: "https://www.epiroc.com/en-in/products/excavator-attachments/crusher-buckets",
  },
  {
    category: "Products",
    title: "Compactor",
    subtitle: "(1T - 40T)",
    img: "/assets/e-p-7.png",
    gallery: ["/assets/popup-12.png"],
    link: "https://www.epiroc.com/en-in/products/excavator-attachments/hydraulic-compactors",
  },
  {
    category: "Products",
    title: "Multi Grab",
    subtitle: "16T - 100T",
    img: "/assets/e-p-8.png",
    gallery: ["/assets/popup-14.png"],
    link: "https://www.epiroc.com/en-in/products/excavator-attachments/excavator-grapple",
  },
  {
    category: "Products",
    title: "Magnet",
    subtitle: "(12T - 43T)",
    img: "/assets/e-p-9.png",
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

  // Grid Container Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // This creates the "one by one" delay
      },
    },
  };

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
                  className="relative py-3 -mb-px transition-colors"
                >
                  {c}
                  {isActive && (
                    <motion.span 
                      layoutId="activeTab" // Smooth sliding line
                      className="absolute left-0 right-0 -bottom-px h-[2px] bg-gradient-primary rounded-full" 
                    />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Animated Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active} // Re-triggers animation when category changes
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className={active === "Supplies" ? "mx-auto" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"}
          >
            {active === "Supplies" ? (
              <motion.div 
                variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                className="mx-auto p-2"
              >
                <img src={current[0]?.img} alt="Supplies" className="w-full h-auto object-contain bg-white" />
              </motion.div>
            ) : (
              current.map((p, i) => (
                <ProductCard key={`${p.title ?? "item"}-${i}`} {...p} onClick={() => setSelected(p)} />
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selected && <ProductModal item={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}

/* ------------------- Product Card ------------------- */
function ProductCard({ img, title, subtitle, onClick, link }) {
  // Individual Card Variant
  const cardItem = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.article
      variants={cardItem} // Inherits stagger from parent
      className="bg-white ring-1 ring-gray-100 shadow-[0_20px_55px_-25px_rgba(0,0,0,0.35)] overflow-hidden transition hover:shadow-[0_28px_70px_-30px_rgba(0,0,0,0.35)] cursor-pointer"
    >
      <div className="p-4 overflow-hidden" onClick={onClick}>
        <motion.img 
          whileHover={{ scale: 1.05 }}
          src={img} 
          alt={title} 
          className="pt-10" 
        />
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
    </motion.article>
  );
}

/* ------------------- Popup Modal with Animated Slider ------------------- */
function ProductModal({ item, onClose }) {
  const images = item.gallery?.length ? item.gallery : [item.img];
  const [index, setIndex] = useState(0);

  const goPrev = useCallback(() => setIndex((i) => (i === 0 ? images.length - 1 : i - 1)), [images.length]);
  const goNext = useCallback(() => setIndex((i) => (i === images.length - 1 ? 0 : i + 1)), [images.length]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
      onClick={(e) => e.target === e.currentTarget && onClose?.()}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-xl w-full max-w-4xl overflow-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 h-9 w-9 flex items-center justify-center rounded-full bg-black/80 text-white text-xl hover:bg-black z-50"
        >
          ×
        </button>

        <div className="relative overflow-hidden aspect-[16/9] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={index} // Keys are vital for AnimatePresence
              src={images[index]}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="max-h-[70vh] w-auto object-contain mx-auto select-none"
              draggable={false}
            />
          </AnimatePresence>

          {images.length > 1 && (
            <>
              <button onClick={goPrev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/70 text-white h-10 w-10 rounded-full">‹</button>
              <button onClick={goNext} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/70 text-white h-10 w-10 rounded-full">›</button>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="px-4 pb-5 flex justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${i === index ? "bg-blue-600 scale-125" : "bg-gray-300"}`}
              />
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}