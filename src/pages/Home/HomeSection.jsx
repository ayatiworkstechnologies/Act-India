"use client";

import React, { useMemo, useState } from "react";
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
    text: "Leaders in proactive after market solutions for construction equipment",
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

function AnimatedWords({ text, animationKey }) {
  return (
    <h2 className="banner-text text-white font-semibold max-w-full">
      {text.split(" ").map((word, index) => (
        <span
          key={`${animationKey}-${word}-${index}`}
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

  const flatSlides = useMemo(
    () =>
      groupedSlides.flatMap((group, groupIndex) =>
        group.images.map((img, imageIndex) => ({
          ...img,
          text: group.text,
          groupIndex,
          imageIndex,
        }))
      ),
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);

  const activeSlide = flatSlides[activeIndex];
  const activeGroup = groupedSlides[activeSlide?.groupIndex ?? 0];

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
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
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
                  className="hidden md:block w-full h-[520px] lg:h-[620px] object-cover object-center select-none"
                  loading="eager"
                />
                <img
                  src={slide.mobile}
                  alt="banner mobile"
                  className="block md:hidden w-full h-[520px] object-cover object-center select-none"
                  loading="eager"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 z-10 bg-black/35 md:bg-black/25 pointer-events-none" />
            </div>
          </SwiperSlide>
        ))}

        {/* Fixed Text */}
        <div className="absolute left-4 right-4 sm:left-6 sm:right-6 md:left-[7%] md:right-auto bottom-[20%] sm:bottom-[18%] md:bottom-[14%] z-20 max-w-full md:max-w-[62%] pointer-events-none">
          <div className="relative">
            <AnimatedWords
              text={activeGroup.text}
              animationKey={activeGroup.text}
            />
          </div>
        </div>

        {/* Fixed Button */}
        <div className="absolute left-4 sm:left-6 md:left-auto md:right-[7%] bottom-[8%] md:bottom-[18%] z-30">
          <button
            type="button"
            onClick={() => navigate(activeSlide.link)}
            className="inline-flex items-center justify-center border border-white/70 text-white px-4 py-2.5 sm:px-5 sm:py-3 md:px-10 md:py-4 text-[13px] sm:text-sm md:text-[20px] font-semibold bg-white/10 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300"
          >
            Know More
          </button>
        </div>

        {/* Navigation Buttons */}
        <button className="home-prev absolute left-3 sm:left-4 md:left-10 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 md:w-[3rem] md:h-[3rem] rounded-full bg-black/35 hover:bg-black/50 flex items-center justify-center transition-all">
          <ChevronLeft className="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8" />
        </button>

        <button className="home-next absolute right-3 sm:right-4 md:right-10 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 md:w-[3rem] md:h-[3rem] rounded-full bg-black/35 hover:bg-black/50 flex items-center justify-center transition-all">
          <ChevronRight className="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8" />
        </button>
      </Swiper>

      <style jsx>{`
        .banner-text {
          font-size: clamp(20px, 5vw, 35px);
          line-height: 1.2;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);
        }

        .animate-word {
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
            font-size: clamp(20px, 6vw, 30px);
            line-height: 1.25;
          }
        }
      `}</style>
    </section>
  );
}