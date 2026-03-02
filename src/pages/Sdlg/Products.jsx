// ProductsShowcase.jsx
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = ["Products"];

const ITEMS = [
  {
    category: "Products",
    title: "Crawler Excavator",
    subtitle: "Operating Weight: 8T - 14T",
    img: "/assets/e6.jpg",
    gallery: ["/assets/sdlg-p-1.jpg", "/assets/sdlg-p-2.jpg", "/assets/sdlg-p-3.jpg"],
    link: "https://sdlgindia.com/products/#excavators",
  },
  {
    category: "Products",
    title: "Wheel Loaders",
    subtitle: "Rated Load (kg) 1.6T - 8T",
    img: "/assets/s-p-2.png",
    gallery: ["/assets/sdlg-p-4.png", "/assets/sdlg-p-5.png", "/assets/sdlg-p-6.jpg", "/assets/sdlg-p-7.jpg", "/assets/sdlg-p-8.png"],
    link: "https://sdlgindia.com/products/#wheel-loaders",
  },
  {
    category: "Products",
    title: "Motor Grader",
    subtitle: "Rated Power (kw) 105 - 211",
    img: "/assets/s-p-3.png",
    gallery: ["/assets/sdlg-p-9.jpg", "/assets/sdlg-p-10.jpg", "/assets/sdlg-p-11.jpg"  ],
    link: "https://sdlgindia.com/products/#graders",
  },
  {
    category: "Products",
    title: "Hydraulic Breakers",
    subtitle: "Suitable carrier 7T - 34T",
    img: "/assets/s-p-4.png",
    gallery: ["/assets/popup-18.png"],
    link: "#",
  },
 
];

export default function ProductsShowcase() {
  const [active, setActive] = useState("Products");
  const [selected, setSelected] = useState(null);

  const current = ITEMS.filter((i) => i.category === active);

  // Parent container variants to coordinate staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delays each card by 0.1s
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
                      layoutId="activeTab" // Smoothly slides the underline
                      className="absolute left-0 right-0 -bottom-px h-[2px] bg-gradient-primary rounded-full" 
                    />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Animated Grid Wrapper */}
        <motion.div
          key={active} // Re-animates when switching tabs
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {active === "Supplies" ? (
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mx-auto p-2"
            >
              <img
                src={current[0]?.img}
                alt="Supplies"
                className="w-[300px] h-[300px] object-contain bg-white mx-auto"
              />
            </motion.div>
          ) : (
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
        </motion.div>
      </div>

      {/* Popup Modal with AnimatePresence for Exit animations */}
      <AnimatePresence>
        {selected && <ProductModal item={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}

/* ---------------- Product Card ---------------- */
function ProductCard({ img, title, subtitle, link, onClick }) {
  // Individual item variants
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  return (
    <motion.article 
      variants={itemVariants} // Inherits from parent staggered container
      className="bg-white ring-1 ring-gray-100 shadow-[0_20px_55px_-25px_rgba(0,0,0,0.35)] overflow-hidden transition hover:shadow-[0_28px_70px_-30px_rgba(0,0,0,0.35)]"
    >
      <div className="p-4 cursor-pointer" onClick={onClick}>
        <div className="overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.05 }} // Subtle internal hover
            src={img}
            alt={title}
            className="pt-10"
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
    </motion.article>
  );
}

/* ---------------- Popup Modal with Animated Slider ---------------- */
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
              key={index} // Keys trigger the slide animation on change
              src={images[index]}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
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