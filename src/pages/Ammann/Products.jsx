import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = ["Products"];

const ITEMS = [
  {
    category: "Products",
    title: "Tracked Pavers",
    subtitle: "Paving Width, max 4.5m - 13m",
    img: "/assets/a-p-1.png",
    gallery: ["/assets/amman-p-1.webp"],
    link: "https://www.ammann.com/en-IN/machines/asphalt-pavers/asphalt-pavers/?products%5BrefinementList%5D%5Bundercarriage%5D%5B0%5D=Tracked",
  },
  {
    category: "Products",
    title: "Wheeled Pavers",
    subtitle: "Paving Width, max 4.5m - 9m",
    img: "/assets/a-p-2.png",
    gallery: ["/assets/popup-20.png"],
    link: "https://www.ammann.com/en-IN/machines/asphalt-pavers/",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.35,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.0,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AmmannProducts() {
  const [active, setActive] = useState("Products");
  const [selected, setSelected] = useState(null);
  const current = ITEMS.filter((i) => i.category === active);

  return (
    <section className="bg-[#F5F5F5] text-black py-10 md:py-16 overflow-hidden">
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
                      layoutId="ammannTabUnderline"
                      className="absolute left-0 right-0 -bottom-px h-[2px] bg-gradient-primary rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Animated Grid */}
        <motion.div
          key={active}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.05 }}
        >
          <div className="flex flex-wrap justify-center gap-6">
            {current.map((p, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]"
              >
                <ProductCard {...p} onImageClick={() => setSelected(p)} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProductModal item={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

/* ---------------- Product Card ---------------- */
function ProductCard({ img, title, subtitle, link, onImageClick }) {
  return (
    <article className="bg-white ring-1 ring-gray-100 shadow-[0_20px_55px_-25px_rgba(0,0,0,0.35)] overflow-hidden transition hover:shadow-[0_28px_70px_-30px_rgba(0,0,0,0.35)] w-full h-full">
      <div className="p-4">
        <div className="overflow-hidden cursor-pointer" onClick={onImageClick}>
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={img}
            alt={title}
            className="pt-10 w-full h-auto"
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

/* ---------------- Product Modal ---------------- */
function ProductModal({ item, onClose }) {
  const images = item.gallery?.length ? item.gallery : [item.img];
  const [index, setIndex] = useState(0);

  useEffect(() => setIndex(0), [item]);

  const goPrev = useCallback(
    () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1)),
    [images.length]
  );
  const goNext = useCallback(
    () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1)),
    [images.length]
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
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
              key={index}
              src={images[index]}
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -80, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="max-h-[70vh] w-auto object-contain mx-auto select-none"
            />
          </AnimatePresence>

          {images.length > 1 && (
            <>
              <button
                onClick={goPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/70 text-white h-10 w-10 rounded-full"
              >
                ‹
              </button>
              <button
                onClick={goNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/70 text-white h-10 w-10 rounded-full"
              >
                ›
              </button>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="px-4 pb-5 flex justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  i === index ? "bg-blue-600 scale-125" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}