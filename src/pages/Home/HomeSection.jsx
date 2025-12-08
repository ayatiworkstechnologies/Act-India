"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const slides = [
  { id: 1, desktop: "/assets/banner/volvo-new.jpg", mobile: "/assets/banner/volvo-1.jpg", link: "/volvo" },
  { id: 2, desktop: "/assets/banner/epiroc-new.jpg", mobile: "/assets/banner/epiroc-1.jpg", link: "/epiroc" },
  { id: 3, desktop: "/assets/banner/sdlg-new.jpg", mobile: "/assets/banner/sdlg-1.jpg", link: "/sdlg" },
   { id: 5, desktop: "/assets/banner/ammann-new.jpg", mobile: "/assets/banner/ammann-1.jpg", link: "/ammann" },
  { id: 4, desktop: "/assets/banner/husqvarna-new.jpg", mobile: "/assets/banner/husqvarna-1.jpg", link: "/husqvarna" },
];

export default function HomeSection() {
  return (
    <section className="relative w-full overflow-hidden mb-12">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={800}
        loop
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        allowTouchMove
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="!h-full">
            <Link to={slide.link} className="block relative w-full h-full">
              {/* Desktop Image */}
              <img
                src={slide.desktop}
                alt={`Slide ${slide.id} desktop`}
                className="hidden md:block w-full h-full object-cover object-center"
                loading="eager"
              />

              {/* Mobile Image */}
              <img
                src={slide.mobile}
                alt={`Slide ${slide.id} mobile`}
                className="block md:hidden w-full h-full object-cover object-center"
                loading="eager"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none"></div>

              {/* ✅ Know More Button (slightly lower on mobile) */}
              <button
                className="
                  absolute
                  bottom-8 sm:bottom-14 md:bottom-20 
                  right-1/2 md:right-10 
                  translate-x-1/2 md:translate-x-0 
                  border border-white text-white 
                  px-5 py-2 text-sm md:text-base font-medium 
                  backdrop-blur-sm 
                  hover:bg-white hover:text-black 
                  transition-all duration-300 
                  
                "
              >
                Know More
              </button>
            </Link>
          </SwiperSlide>
        ))}

        {/* Prev Button */}
        <div className="swiper-button-prev-custom absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 cursor-pointer bg-black/30 hover:bg-black/60 backdrop-blur-md p-2 md:p-3 rounded-full transition-all duration-300 shadow-md">
          <ChevronLeft className="text-white w-4 h-4 md:w-6 md:h-6" />
        </div>

        {/* Next Button */}
        <div className="swiper-button-next-custom absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 cursor-pointer bg-black/30 hover:bg-black/60 backdrop-blur-md p-2 md:p-3 rounded-full transition-all duration-300 shadow-md">
          <ChevronRight className="text-white w-4 h-4 md:w-6 md:h-6" />
        </div>
      </Swiper>
    </section>
  );
}
