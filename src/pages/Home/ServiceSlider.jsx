import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const data = [
  {
    title: "precare",
    desc: "PRECARE is a thoughtfully curated bouquet of support solutions aimed at ensuring 'CUSTOMER SUCCESS' in their respective businesses using our products and services.",
    icons: ["/assets/icon-1.png", "/assets/icon-2.png", "/assets/icon-3.png", "/assets/icon-4.png"],
    image: "/assets/image-1.png",
    link: "/services",
  },
  {
    title: "Auxillary service solutions",
    desc: "Comprehensive heavy equipment refurbishment — from hard-facing and bush replacements to structural welding, bucket rebuilds, and track link reconditioning.",
    icons: ["/assets/icon-5.png", "/assets/icon-6.png", "/assets/icon-7.png", "/assets/icon-8.png"],
    image: "/assets/image-2.png",
    link: "/services",
  },
  {
    title: "Equipment-as-a-Service",
    desc: "Equipment-as-a-Service (EaaS) provides flexible access to VOLVO machines, ensuring optimum efficiency and performance without long-term commitments.",
    icons: ["/assets/icon-9.png", "/assets/icon-10.png", "/assets/icon-11.png", "/assets/icon-12.png"],
    image: "/assets/image-3.png",
    link: "/services",
  },
  {
    title: "Operator training & certification",
    desc: "We conduct annual ESC certification programs to gain participants in safe and efficient equipment operation.",
    icons: ["/assets/icon-3.png", "/assets/icon-11.png", "/assets/icon-2.png", "/assets/icon-9.png"],
    image: "/assets/image-4.png",
    link: "/services",
  },
];

export default function ServiceSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!swiperRef.current || !prevRef.current || !nextRef.current) return;
    const swiper = swiperRef.current;

    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;

    if (swiper.navigation) {
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-10 relative px-4">
      {/* Header + Nav Arrows */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-6">
        {/* Title or empty left space (if needed later) */}
        <div></div>

        {/* Right-aligned Arrows */}
        <div className="flex gap-4 md:gap-6 mt-4 md:mt-0 ml-auto">
          <button
            ref={prevRef}
            className="p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition"
            aria-label="Previous"
          >
            <FaArrowLeft className="text-lg text-secondary" />
          </button>
          <button
            ref={nextRef}
            className="p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition"
            aria-label="Next"
          >
            <FaArrowRight className="text-lg text-secondary" />
          </button>
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        allowTouchMove={false}
        spaceBetween={30}
        slidesPerView={2}
        slidesPerGroup={2}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 30 },
        }}
        className="!pb-2"
      >
        {data.map((item, i) => (
          <SwiperSlide key={i} className="!h-auto">
            <div className="h-[300px] bg-white shadow-md rounded-lg overflow-hidden flex border">
              {/* Left */}
              <div className="w-[60%] p-6 flex flex-col">
                <h3 className="font-bold text-lg mb-2 capitalize">{item.title}</h3>


                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
                  {item.desc}
                </p>

                <div className="flex gap-4">
                  {item.icons.map((icon, idx) => (
                    <img
                      key={idx}
                      src={icon}
                      alt={`icon-${idx}`}
                      className="w-9 h-9 object-contain shrink-0"
                      loading="lazy"
                      decoding="async"
                    />
                  ))}
                </div>

                <div className="mt-auto">
                  <Link
                    to={item.link}
                    className="text-secondary font-semibold text-sm inline-flex items-center gap-2"
                  >
                    LEARN MORE →
                  </Link>
                </div>
              </div>

              {/* Right */}
              <div className="w-[40%]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
