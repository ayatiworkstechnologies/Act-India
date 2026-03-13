"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const groupedSlides = [
  {
    id: 1,
    text: "Pioneer in introducing advanced technologies for the construction industry",
    images: [
      {
        desktop: "/assets/banner/volvo-web.jpg",
        mobile: "/assets/banner/volvo-mob.jpg",
        link: "/volvo",
      },
      {
        desktop: "/assets/banner/Epiroc-web.jpg",
        mobile: "/assets/banner/Epiroc-mob.jpg",
        link: "/epiroc",
      },
    ],
  },
  {
    id: 2,
    text: "One stop shop for world leading construction, mining and infrastructure equipment",
    images: [
      {
        desktop: "/assets/banner/SDLG-web.jpg",
        mobile: "/assets/banner/SDLG-mob.jpg",
        link: "/sdlg",
      },
      {
        desktop: "/assets/banner/Ammann-web.jpg",
        mobile: "/assets/banner/Ammann-mob.jpg",
        link: "/ammann",
      },
    ],
  },
  {
    id: 3,
    text: "Leaders in proactive aftermarket solutions for construction equipment",
    images: [
      {
        desktop: "/assets/banner/Husqvarna-web.jpg",
        mobile: "/assets/banner/Husqvarna-mob.jpg",
        link: "/husqvarna",
      },
      {
        desktop: "/assets/banner/schwin-stetter-web.jpg",
        mobile: "/assets/banner/schwin-stetter-mob.jpg",
        link: "/self-loading-mixer",
      },
    ],
  },
];

function AnimatedWords({ text }) {
  return (
    <h2 className="banner-text text-white font-semibold max-w-full md:max-w-[900px]">
      {text.split(" ").map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block opacity-0 animate-word mr-2"
          style={{ animationDelay: `${index * 0.08}s` }}
        >
          {word}
        </span>
      ))}
    </h2>
  );
}

export default function HomeSection() {
  const navigate = useNavigate();
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);

  // each group current image index
  const [imageIndexes, setImageIndexes] = useState(
    groupedSlides.map(() => 0)
  );

  // switch only the current active group's image every 2.2s
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndexes((prev) =>
        prev.map((value, index) => {
          if (index !== activeGroupIndex) return 0;
          return (value + 1) % groupedSlides[index].images.length;
        })
      );
    }, 2200);

    return () => clearInterval(interval);
  }, [activeGroupIndex]);

  return (
    <section className="relative w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 4400, disableOnInteraction: false }}
        speed={900}
        loop={true}
        simulateTouch={true}
        preventClicks={false}
        preventClicksPropagation={false}
        navigation={{
          nextEl: ".home-next",
          prevEl: ".home-prev",
        }}
        onSlideChange={(swiper) => {
          setActiveGroupIndex(swiper.realIndex);
        }}
        onSwiper={(swiper) => {
          setActiveGroupIndex(swiper.realIndex || 0);
        }}
        className="homeBanner w-full"
      >
        {groupedSlides.map((slide, groupIndex) => {
          const currentImageIndex = imageIndexes[groupIndex];
          const currentImage = slide.images[currentImageIndex];
          const currentLink = currentImage.link;

          return (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-full">
                {/* clickable image */}
                <div
                  className="w-full h-full cursor-pointer"
                  onClick={() => navigate(currentLink)}
                >
                  <img
                    src={currentImage.desktop}
                    alt={`banner desktop ${groupIndex + 1}`}
                    className="hidden md:block w-full h-[520px] object-cover object-center select-none"
                    loading="eager"
                    draggable="false"
                  />
                  <img
                    src={currentImage.mobile}
                    alt={`banner mobile ${groupIndex + 1}`}
                    className="block md:hidden w-full h-[420px] object-cover object-center select-none"
                    loading="eager"
                    draggable="false"
                  />
                </div>

                {/* overlay */}
                <div className="absolute inset-0 z-10 bg-black/20 pointer-events-none" />

                {/* text */}
                <div className="absolute left-[6%] md:left-[7%] bottom-[12%] md:bottom-[14%] z-20 max-w-[88%] md:max-w-[62%] pointer-events-none">
                  <div className="text-wrap relative">
                    <AnimatedWords text={slide.text} />
                  </div>
                </div>

                {/* button */}
                <div className="absolute left-[6%] md:left-auto md:right-[7%] bottom-[6%] md:bottom-[18%] z-30">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(currentLink);
                    }}
                    className="
                      inline-flex items-center justify-center
                      border border-white/70 text-white
                      px-5 py-2.5
                      md:px-10 md:py-4
                      text-sm md:text-[20px]
                      font-semibold
                      bg-white/10 backdrop-blur-sm
                      hover:bg-white hover:text-black
                      transition-all duration-300
                    "
                  >
                    Know More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        {/* arrows */}
        <button
          type="button"
          className="home-prev absolute left-3 md:left-10 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-16 md:h-16 rounded-full bg-black/35 hover:bg-black/50 flex items-center justify-center cursor-pointer transition-all duration-300"
        >
          <ChevronLeft className="text-white w-5 h-5 md:w-8 md:h-8" />
        </button>

        <button
          type="button"
          className="home-next absolute right-3 md:right-10 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-16 md:h-16 rounded-full bg-black/35 hover:bg-black/50 flex items-center justify-center cursor-pointer transition-all duration-300"
        >
          <ChevronRight className="text-white w-5 h-5 md:w-8 md:h-8" />
        </button>
      </Swiper>

      <style>{`
        .banner-text {
          font-size: clamp(22px, 3vw, 54px);
          line-height: 1.15;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);
        }

        .homeBanner .swiper-slide-active .text-wrap .animate-word {
          animation: wordUp 0.45s ease forwards;
        }

        @keyframes wordUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 767px) {
          .banner-text {
            font-size: 22px;
            line-height: 1.22;
            max-width: 300px;
          }
        }
      `}</style>
    </section>
  );
}