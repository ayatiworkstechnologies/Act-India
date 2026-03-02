import React, { useState, useEffect, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ---------- Tabs ---------- */
const TABS = ["Products", "Accessories"];

/* ---------- Products data ---------- */
const PRODUCT_SECTIONS = [
  {
    heading: "Products",
    items: [
      {
        title: "Ride On Trowels",
        subtitle: "",
        img: "/assets/h-p-1.png",
        gallery: ["/assets/hus-p-1.webp", "/assets/hus-p-2.webp", "/assets/hus-p-3.webp"],
        link: "https://www.husqvarnaconstruction.com/int/power-trowels/crt36/",
      },
      {
        title: "Wall",
        subtitle: "Diamond Blade 600 - 1600mm",
        img: "/assets/h-p-2.png",
        gallery: ["/assets/hus-p-66.webp", "/assets/hus-p-67.webp", "/assets/hus-p-68.webp", "/assets/hus-p-69.webp", "/assets/hus-p-70.webp"],
        link: "https://www.husqvarnaconstruction.com/in/wall-saws/ws482hf/",
      },
      {
        title: "Wire Saws",
        subtitle: "Cutting Depth 250mm – 730mm",
        img: "/assets/h-p-3.png",
        gallery: ["/assets/hus-p-71.webp", "/assets/hus-p-72.webp", "/assets/hus-p-73.webp", "/assets/hus-p-74.webp"],
        link: "https://www.husqvarnaconstruction.com/in/wire-saws/cs10/",
      },
      {
        title: "Power Pack",
        subtitle: "",
        img: "/assets/h-p-4.png",
        gallery: ["/assets/hus-p-4.webp", "/assets/hus-p-5.webp", "/assets/hus-p-6.webp", "/assets/hus-p-7.webp"],
        link: "https://www.husqvarnaconstruction.com/in/power-packs/pp492/",
      },
      {
        title: "Floor Scarifiers",
        subtitle: "Working width 200 – 300mm • 230V / 400V",
        img: "/assets/h-p-5.png",
        gallery: ["/assets/hus-p-8.webp", "/assets/hus-p-9.webp", "/assets/hus-p-10.webp"],
        link: "https://www.husqvarnaconstruction.com/in/floor-scarifiers/bmp215/",
      },
      {
        title: "Floor Grinders",
        subtitle: "Engine Power 15 kW, Grinding width 350 – 850mm",
        img: "/assets/h-p-6.png",
        gallery: ["/assets/hus-p-11.webp", "/assets/hus-p-12.webp", "/assets/hus-p-13.webp", "/assets/hus-p-14.webp"],
        link: "https://www.husqvarnaconstruction.com/int/floor-grinders/pg8s/",
      },
      {
        title: "Dust & Slurry Equipment",
        subtitle: "",
        img: "/assets/h-p-7.png",
        gallery: ["/assets/hus-p-15.webp"],
        link: "https://www.husqvarnaconstruction.com/int/dust-and-slurry-equipment/s26/",
      },
      {
        title: "Floor Saws",
        subtitle: "Cutting Depth 450 – 620mm, Blade Diameter 350 – 1500mm",
        img: "/assets/h-p-8.png",
        gallery: ["/assets/hus-p-16.webp", "/assets/hus-p-17.webp", "/assets/hus-p-18.webp", "/assets/hus-p-19.webp", "/assets/hus-p-20.webp"],
        link: "https://www.husqvarnaconstruction.com/in/floor-saws/fs400lv/",
      },
      {
        title: "Tile and Masonry Saws",
        subtitle: "TS 350E 14”/350mm Cutting Depth 125mm, Blade Diameter 350 mm",
        img: "/assets/h-p-9.png",
        gallery: ["/assets/hus-p-21.webp"],
        link: "https://www.husqvarnaconstruction.com/in/tile-and-masonry-saws/ts300e/",
      },
      {
        title: "Concrete Core Drills",
        subtitle: "Cutting Depth 0 – 450mm",
        img: "/assets/h-p-10.png",
        gallery: ["/assets/hus-p-22.webp", "/assets/hus-p-23.webp", "/assets/hus-p-24.webp", "/assets/hus-p-25.webp", "/assets/hus-p-26.webp", "/assets/hus-p-27.webp"],
        link: "https://www.husqvarnaconstruction.com/int/concrete-core-drills/dm400/",
      },
      {
        title: "Shot Blasters",
        subtitle: "Working width 250 – 500mm • 400V",
        img: "/assets/h-p-11.png",
        gallery: ["/assets/hus-p-28.webp", "/assets/hus-p-29.webp", "/assets/hus-p-30.webp", "/assets/hus-p-31.webp"],
        link: "https://www.husqvarnaconstruction.com/in/shot-blasters/blastrac-1-10dps75/",
      },
      {
        title: "Demolition Equipment",
        subtitle: "1 Ton to 5 Ton Reach tools & Bits • 18kw to 27kw",
        img: "/assets/h-p-12.png",
        gallery: ["/assets/hus-p-32.webp", "/assets/hus-p-33.webp", "/assets/hus-p-34.webp", "/assets/hus-p-35.webp", "/assets/hus-p-36.webp", "/assets/hus-p-37.webp"],
        link: "https://www.husqvarnaconstruction.com/in/demolition-equipment/dxr305/",
      },
    ],
  },
  {
    heading: "Soil Compactors",
    items: [
      {
        title: "SOIL COMPACTORS",
        img: "/assets/h-s-1.png",
        gallery: ["/assets/hus-p-38.webp"],
        specs: ["Centrifugal Force: 25.4kN", "Weight: 180 kg, Plate Width: 500mm", "Engine: 3.2 kW / 4.3 Hp (Forward)"],
        link: "https://www.husqvarnaconstruction.com/in/compactors/lf160-mp-146015104/",
      },
      {
        title: "SOIL COMPACTORS",
        img: "/assets/h-s-2.png",
        gallery: ["/assets/hus-p-39.webp"],
        specs: ["Centrifugal Force: 20kN", "Weight: 681 kg, Drum Width: 650mm", "Engine: 5.6 kW / 7.5 Hp"],
        link: "https://www.husqvarnaconstruction.com/in/compactors/lp6500/",
      },
      {
        title: "SOIL COMPACTORS",
        img: "/assets/h-s-3.png",
        gallery: ["/assets/hus-p-40.webp"],
        specs: ["Centrifugal Force: 36kN", "Weight: 245 kg, Plate Width: 500mm", "Engine: 3.1 kW / 4.15 Hp (Forward & Rev)"],
        link: "https://www.husqvarnaconstruction.com/in/compactors/lg200/",
      },
      {
        title: "SOIL COMPACTORS",
        img: "/assets/h-s-4.png",
        gallery: ["/assets/hus-p-41.webp", "/assets/hus-p-42.webp", "/assets/hus-p-43.webp"],
        specs: ["Weight: 60 kg to 92 kg", "Plate Width: 11–13 inch", "Diesel | Petrol"],
        link: "https://www.husqvarnaconstruction.com/in/compactors/lt8005/",
      },
    ],
  },
  {
    heading: "Power Cutters",
    items: [
      {
        title: "Power Cutters",
        subtitle: "Cutting Depth 155mm",
        gallery: ["/assets/hus-p-44.webp", "/assets/hus-p-45.webp", "/assets/hus-p-46.webp"],
        img: "/assets/h-c-1.png",
        link: "https://www.husqvarnaconstruction.com/in/power-cutters/k970/",
      },
      {
        title: "Power Cutters",
        subtitle: "Cutting Depth 400mm",
        gallery: ["/assets/hus-p-47.webp", "/assets/hus-p-48.webp", "/assets/hus-p-49.webp", "/assets/hus-p-50.webp", "/assets/hus-p-51.webp", "/assets/hus-p-52.webp"],
        img: "/assets/h-c-2.png",
        link: "https://www.husqvarnaconstruction.com/in/power-cutters/k4000-cut-n-break/",
      },
      {
        title: "Power Cutters",
        subtitle: "Cutting Depth 155mm",
        gallery: ["/assets/hus-p-53.webp", "/assets/hus-p-54.webp", "/assets/hus-p-55.webp"],
        img: "/assets/h-c-3.png",
        link: "https://www.husqvarnaconstruction.com/in/power-cutters/k1270-rail/",
      },
    ],
  },
  {
    heading: "Concrete Vibrators",
    items: [
      {
        title: "Poker",
        subtitle: "Size: 26 - 90mm; High Frequency Electrical/Mechanical, 5m, 10m, 12m",
        gallery: ["/assets/hus-p-56.webp"],
        img: "/assets/h-v-1.png",
        link: "https://www.husqvarnaconstruction.com/in/concrete-vibrators/smart/",
      },
      {
        title: "Shutter Vibrator",
        subtitle: "RPM 3000 | 6000",
        gallery: ["/assets/hus-p-57.webp"],
        img: "/assets/h-v-2.png",
        link: "https://www.husqvarnaconstruction.com/in/concrete-vibrators/er407b/",
      },
    ],
  },
];

/* ---------- Accessories data ---------- */
const ACCESSORIES = [
  { img: "/assets/access-1.png", gallery: ["/assets/hus-p-58.webp","/assets/hus-p-59.webp",], link: "https://www.husqvarnaconstruction.com/int/diamond-tools/diamond-blades/vari-cut-s50/" },
  { img: "/assets/access-2.png", gallery: ["/assets/hus-p-60.webp"], link: "https://www.husqvarnaconstruction.com/in/diamond-tools/diamond-blades/el10-cnb/" },
  { img: "/assets/access-3.png", gallery: ["/assets/hus-p-61.webp","/assets/hus-p-62.webp", "/assets/hus-p-63.webp", "/assets/hus-p-64.webp"], link: "https://www.husqvarnaconstruction.com/in/diamond-tools/diamond-core-drill-bits/elite-drill-d1640/?article=546153502" },
  { img: "/assets/access-4.png", gallery: ["/assets/hus-p-65.webp"], link: "https://www.husqvarnaconstruction.com/in/diamond-tools/diamond-wires/elite-wire-c1000/" },
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/* ---------- Updated Grid Wrapper ---------- */
function AnimatedGrid({ children, activeKey }) {
  return (
    <motion.div
      key={activeKey} // Re-animates when tab changes
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {children}
    </motion.div>
  );
}

/* ---------- Updated Cards with motion ---------- */
function ProductCard({ img, title, subtitle, link, onClick }) {
  return (
    <motion.article
      variants={itemVariants}
      className="bg-white overflow-hidden shadow-[0_18px_50px_-28px_rgba(0,0,0,0.35)] transition hover:shadow-[0_24px_70px_-32px_rgba(0,0,0,0.35)] cursor-pointer h-full"
      onClick={onClick}
    >
      <div className="p-4">
        <motion.img 
          whileHover={{ scale: 1.05 }} 
          src={img} alt={title} className="object-contain p-6 w-full h-auto" 
        />
      </div>
      <div className="px-5 pb-6 text-left">
        <h3 className="uppercase tracking-wide font-extrabold text-[15px] md:text-[16px] text-black">{title}</h3>
        {subtitle && <p className="mt-2 text-[13px] md:text-[14px] text-neutral-600 leading-relaxed">{subtitle}</p>}
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block px-5 py-2 bg-secondary text-white text-sm font-medium">
            View Details →
          </a>
        )}
      </div>
    </motion.article>
  );
}

/* ---------- Modal with AnimatePresence ---------- */
function ProductModal({ item, onClose }) {
  const images = item.gallery?.length ? item.gallery : [item.img];
  const [index, setIndex] = useState(0);

  const goPrev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const goNext = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm" 
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden" 
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-3 right-3 z-50 h-10 w-10 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 text-black text-2xl">
          ×
        </button>

        <div className="relative flex items-center justify-center bg-white p-8">
          <AnimatePresence mode="wait">
            <motion.img 
              key={index}
              src={images[index]} 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-h-[70vh] w-auto object-contain mx-auto" 
            />
          </AnimatePresence>

          {images.length > 1 && (
            <>
              <button onClick={goPrev} className="absolute left-4 bg-white/90 shadow-md text-black h-12 w-12 flex items-center justify-center rounded-full">‹</button>
              <button onClick={goNext} className="absolute right-4 bg-white/90 shadow-md text-black h-12 w-12 flex items-center justify-center rounded-full">›</button>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ---------- Main Component Updates ---------- */
export default function ProductsShowcase() {
  const [active, setActive] = useState("Products");
  const [selected, setSelected] = useState(null);

  return (
    <section className="bg-gray-100 text-neutral-900 py-10 md:py-16">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        
        {/* Tabs Section */}
        <nav className="flex gap-6 text-sm font-medium justify-center border-b border-neutral-200 pb-3">
          {TABS.map((tab) => (
            <button key={tab} onClick={() => setActive(tab)} className="relative py-2 leading-none">
              {tab}
              {active === tab && (
                <motion.span layoutId="underline" className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-blue-700 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        <div className="mt-8">
          {active === "Accessories" ? (
            <AnimatedGrid activeKey="acc">
              {ACCESSORIES.map((a, i) => (
                <ProductCard key={i} {...a} onClick={() => setSelected(a)} />
              ))}
            </AnimatedGrid>
          ) : (
            <div className="space-y-14">
              {PRODUCT_SECTIONS.map((section, si) => (
                <div key={si}>
                  <h2 className="text-xl md:text-2xl font-semibold mb-6">{section.heading}</h2>
                  <AnimatedGrid activeKey={`${active}-${si}`}>
                    {section.items.map((p, i) => (
                      <ProductCard key={i} {...p} onClick={() => setSelected(p)} />
                    ))}
                  </AnimatedGrid>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProductModal item={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
