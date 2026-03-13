"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const groupedSlides = [
  {
    text: "Pioneer in introducing advanced technologies for the construction industry",
    images: [
      { desktop: "/assets/banner/volvo-web.jpg", mobile: "/assets/banner/volvo-mob.jpg", link: "/volvo" },
      { desktop: "/assets/banner/Epiroc-web.jpg", mobile: "/assets/banner/Epiroc-mob.jpg", link: "/epiroc" },
    ],
  },
  {
    text: "One stop shop for world leading construction, mining and infrastructure equipment",
    images: [
      { desktop: "/assets/banner/SDLG-web.jpg", mobile: "/assets/banner/SDLG-mob.jpg", link: "/sdlg" },
      { desktop: "/assets/banner/Ammann-web.jpg", mobile: "/assets/banner/Ammann-mob.jpg", link: "/ammann" },
    ],
  },
  {
    text: "Leaders in proactive aftermarket solutions for construction equipment",
    images: [
      { desktop: "/assets/banner/Husqvarna-web.jpg", mobile: "/assets/banner/Husqvarna-mob.jpg", link: "/husqvarna" },
      { desktop: "/assets/banner/schwin-stetter-web.jpg", mobile: "/assets/banner/schwin-stetter-mob.jpg", link: "/self-loading-mixer" },
    ],
  },
];

// Flatten the array so each image is a slide but keeps the parent text
const flatSlides = groupedSlides.flatMap((group) =>
  group.images.map((img) => ({
    text: group.text,
    ...img,
  }))
);

function AnimatedWords({ text }) {
  return (
    <h2 className="banner-text text-white font-semibold max-w-full md:max-w-[900px]">
      {text.split(" ").map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block opacity-0 animate-word mr-2"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {word}
        </span>
      ))}
    </h2>
  );
}

export default function HomeSection() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={1000}
        loop={true}
        navigation={{
          nextEl: ".home-next",
          prevEl: ".home-prev",
        }}
        className="homeBanner w-full"
      >
        {flatSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Image Layer */}
              <div
                className="w-full h-full cursor-pointer"
                onClick={() => navigate(slide.link)}
              >
                <img
                  src={slide.desktop}
                  alt="banner desktop"
                  className="hidden md:block w-full h-[520px] object-cover object-center select-none"
                  loading="eager"
                />
                <img
                  src={slide.mobile}
                  alt="banner mobile"
                  className="block md:hidden w-full h-[420px] object-cover object-center select-none"
                  loading="eager"
                />
              </div>

              {/* UI Layers */}
              <div className="absolute inset-0 z-10 bg-black/20 pointer-events-none" />

              <div className="absolute left-[6%] md:left-[7%] bottom-[12%] md:bottom-[14%] z-20 max-w-[88%] md:max-w-[62%] pointer-events-none">
                <div className="text-wrap relative">
                  <AnimatedWords text={slide.text} />
                </div>
              </div>

              <div className="absolute left-[6%] md:left-auto md:right-[7%] bottom-[6%] md:bottom-[18%] z-30">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(slide.link);
                  }}
                  className="inline-flex items-center justify-center border border-white/70 text-white px-5 py-2.5 md:px-10 md:py-4 text-sm md:text-[20px] font-semibold bg-white/10 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300"
                >
                  Know More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        <button className="home-prev absolute left-3 md:left-10 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-16 md:h-16 rounded-full bg-black/35 hover:bg-black/50 flex items-center justify-center transition-all">
          <ChevronLeft className="text-white w-5 h-5 md:w-8 md:h-8" />
        </button>
        <button className="home-next absolute right-3 md:right-10 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-16 md:h-16 rounded-full bg-black/35 hover:bg-black/50 flex items-center justify-center transition-all">
          <ChevronRight className="text-white w-5 h-5 md:w-8 md:h-8" />
        </button>
      </Swiper>

      <style jsx>{`
        .banner-text {
          font-size: clamp(22px, 3vw, 54px);
          line-height: 1.15;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);
        }
        .homeBanner .swiper-slide-active .animate-word {
          animation: wordUp 0.45s ease forwards;
        }
        @keyframes wordUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}