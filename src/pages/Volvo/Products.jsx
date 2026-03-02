import { useState, useMemo, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
const CATEGORIES = ["Products", "Attachments", "Electric Machines"];

const ITEMS = [
  // Products
  {
    category: "Products",
    title: "Crawler Excavators",
    subtitle: "Operating Weight 20T - 90T",
    img: "/assets/v-p-1.png",
    gallery: ["/assets/popup-slide-1.png", "/assets/popup-slide-2.png", "/assets/volvo-p-1.webp"],
    link: "https://www.volvoce.com/india/en-in/products/excavators/",
  },
   {
    category: "Products",
    title: "Vibratory Soil Compactor",
    subtitle: "Operating Weight 11T",
    subtitle1: "SD110",
    img: "/assets/v-p-4.png",
    gallery: ["/assets/popup-slide-7.png"],
    link: "https://www.volvoce.com/india/en-in/products/compactors/",
  },
  {
    category: "Products",
    title: "Vibratory Asphalt Compactor",
    subtitle: "Operating Weight 9T - 10T",
    img: "/assets/v-p-5.png",
    gallery: ["/assets/popup-slide-3.png", "/assets/popup-slide-4.png"],
    link: "https://www.volvoce.com/india/en-in/products/compactors/",
  },
  {
    category: "Products",
    title: "Pneumatic Tyre Rollers",
    subtitle: "Operating Weight 10.5T",
    img: "/assets/v-p-6.png",
    gallery: ["/assets/popup-slide-8.png"],
    link: "#",
  },
   {
    category: "Products",
    title: "Wheel Loaders",
    subtitle: "Static tipping load at full turn 10T - 34T",
    img: "/assets/v-p-3.png",
    gallery: ["/assets/popup-slide-6.png"],
    link: "https://www.volvoce.com/india/en-in/products/wheel-loaders/",
  },
  {
    category: "Products",
    title: "Articulated Haulers",
    subtitle: "Payload Capacity 25T - 50T",
    img: "/assets/v-p-2.png",
    gallery: ["/assets/popup-slide-5.png"],
    link: "https://www.volvoce.com/india/en-in/products/articulated-haulers/",
  },
 
 
  

  // Attachments
    {
    category: "Attachments",
    title: "Hydraulic Breakers",
    subtitle: "Suitable carrier 10T - 100T",
    img: "/assets/v-a-1.png",
    gallery: ["/assets/popup-3.png"],
    link: "https://www.volvoce.com/india/en-in/attachments/crawler-excavator-attachments/hydraulic-breakers/",
  },
  {
    category: "Attachments",
    title: "Quick Couplers",
    img: "/assets/v-a-2.png",
    gallery: ["/assets/popup-6.png"],
    link: "https://www.volvoce.com/india/en-in/attachments/crawler-excavator-attachments/quick-couplers/",
  },
  {
    category: "Attachments",
    title: "Excavator Bucket",
    subtitle: "Available for 20T - 95T",
    img: "/assets/v-a-3.png",
    gallery: ["/assets/popup-4.png"],
    link: "https://www.volvoce.com/india/en-in/attachments/crawler-excavator-attachments/buckets/",
  },
  {
    category: "Attachments",
    title: "Wheel Loader Buckets",
    subtitle: "Suitable for 10T - 34T",
    img: "/assets/v-a-4.png",
    gallery: ["/assets/volvo-p-2.webp"],
    link: "https://www.volvoce.com/india/en-in/attachments/wheel-loader-attachments/loader-buckets/",
  },

  {
    category: "Attachments",
    title: "Wheel Loader Bracket",
    subtitle: "Suitable Carrier 10T - 34T",
    img: "/assets/v-a-5.png",
    gallery: ["/assets/volvo-p-3.webp"],
    link: "https://www.volvoce.com/india/en-in/attachments/wheel-loader-attachments/attachment-brackets/",
  },
  {
    category: "Attachments",
    title: "Wheel Loader Forks",
    subtitle: "Suitable for 10T - 34T",
    img: "/assets/v-a-6.png",
    gallery: ["/assets/popup-5.png"],
    link: "https://www.volvoce.com/india/en-in/attachments/wheel-loader-attachments/forks/",
  },
  {
    category: "Attachments",
    title: "Grapples",
    subtitle: "Suitable for 10T - 21T",
    img: "/assets/v-a-7.png",
    gallery: ["/assets/popup-1.png", "/assets/popup-2.png"],
    link: "https://www.volvoce.com/india/en-in/attachments/wheel-loader-attachments/grapples/",
  },

 

  // Electric Machines
  {
    category: "Electric Machines",
    title: "Excavator",
    subtitle: "Operating Weight 50T",
    img: "/assets/v-e-1.png",
    gallery: ["/assets/volvo-p-4.webp", "/assets/volvo-p-5.webp", "/assets/volvo-p-6.webp"],
    link: "https://www.volvoce.com/india/en-in/products/electric-machines/",
  },
  {
    category: "Electric Machines",
    title: "Pneumatic Roller",
    subtitle: "Operating Weight 11T",
    img: "/assets/v-e-2.png",
    gallery: ["/assets/volvo-p-5.webp",],
    link: "https://www.volvoce.com/india/en-in/products/electric-machines/",
  },
  {
    category: "Electric Machines",
    title: "Mini Excavator",
    subtitle: "Operating Weight 5.5 T",
    img: "/assets/v-e-3.png",
    gallery: ["/assets/volvo-p-7.webp"],
    link: "https://www.volvoce.com/india/en-in/products/electric-machines/",
  },
  {
    category: "Electric Machines",
    title: "Double Drum Roller",
    subtitle: "Operating Weight 3.8T",
    img: "/assets/v-e-4.png",
    gallery: ["/assets/volvo-p-5.webp"],
    link: "https://www.volvoce.com/india/en-in/products/electric-machines/",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // This creates the "one-by-one" effect
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

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
                  className="relative py-3 -mb-px transition-colors"
                >
                  {c}
                  {isActive && (
                    <motion.span 
                      layoutId="underline" 
                      className="absolute left-0 right-0 -bottom-px h-[2px] bg-gradient-primary rounded-full" 
                    />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Grid with staggered animation */}
        <motion.div
          key={active} // Re-runs animation when category changes
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={active === "Supplies" ? "mx-auto" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"}
        >
          {active === "Supplies" ? (
            <motion.div variants={cardVariants} className="p-2">
              <img src={current[0]?.img} alt="Supplies" className="w-full h-auto object-contain bg-white" />
            </motion.div>
          ) : (
            current.map((p, i) => (
              <motion.div key={`${p.title}-${i}`} variants={cardVariants}>
                <ProductCard {...p} onClick={() => setSelected(p)} />
              </motion.div>
            ))
          )}
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && <ProductModal item={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}

/* -------------------- Product Card -------------------- */
function ProductCard({ img, title, subtitle, subtitle1, link, onClick }) {
  return (
    <article 
      className="bg-white ring-1 ring-gray-100 shadow-[0_8px_55px_-25px_rgba(0,0,0,0.35)] overflow-hidden transition hover:shadow-[0_28px_70px_-30px_rgba(0,0,0,0.35)] cursor-pointer h-full"
      onClick={onClick}
    >
      <div className="p-4">
        <div className="overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={img}
            alt={title}
            className="pt-10 w-full h-auto"
          />
        </div>
      </div>
      <div className="px-5 pb-5">
        <h3 className="uppercase tracking-wide font-extrabold text-[15px] md:text-[16px] text-black">{title}</h3>
        {subtitle1 && <p className="text-[13px] md:text-lg font-bold text-black mt-2">{subtitle1}</p>}
        {subtitle && <p className="mt-2 text-[13px] md:text-[14px] text-neutral-600">{subtitle}</p>}
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-5 py-2 bg-secondary text-white text-sm font-medium">
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

  const goPrev = useCallback(() => setIndex((i) => (i === 0 ? images.length - 1 : i - 1)), [images.length]);
  const goNext = useCallback(() => setIndex((i) => (i === images.length - 1 ? 0 : i + 1)), [images.length]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-[2px] flex items-center justify-center z-50 px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-xl w-full max-w-4xl overflow-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-3 right-3 h-9 w-9 bg-black/80 text-white rounded-full z-50">×</button>

        <div className="relative overflow-hidden bg-white aspect-[16/9] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={images[index]}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-h-[70vh] w-auto object-contain select-none"
            />
          </AnimatePresence>
          
          {images.length > 1 && (
            <div className="absolute inset-0 flex items-center justify-between px-4">
              <button onClick={goPrev} className="bg-black/50 text-white p-2 rounded-full">‹</button>
              <button onClick={goNext} className="bg-black/50 text-white p-2 rounded-full">›</button>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
