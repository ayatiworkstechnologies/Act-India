import React from "react";

import epirocLogo from "/assets/epiroc-final.svg";
import ammannLogo from "/assets/Ammann.svg";
import husqvarnaLogo from "/assets/husqvarna-final.svg";

const logos = [
      {
    name: "Volvo",
    image: "/logos/volvo-web.svg",
    link: "https://www.volvoce.com/india/en-in/", // ✅ add link here
  },
      {
    name: "Epiroc",
    image: "/logos/epiroc-web.svg",
    link: "https://www.epiroc.com/en-in",
  },
  {
    name: "SDLG",
    image : "/logos/sdlg-web.svg",
    link: "https://www.sdlgindia.com/",
  },
    {
    name: "Ammann",
    image: "/logos/ammann-web.svg",
    link: "https://www.ammann.com/en-IN/",
  },
    {
    name: "Husqvarna",
    image: "/logos/husqvarna-web.svg",
    link: "https://www.husqvarna.com/in/",
  },

    {
    name: "Schwing Stetter",
    image: "/logos/schwing-stetter-web.svg",
    link: "https://www.schwingstetterindia.com/products/concrete-machinery/self-loading-mixer", // ✅ add link here
  },





  
];

export default function ClientSection() {
  return (
    <section className="mt-6 bg-white mb-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-6">
          {logos.map((logo, index) => (
            <React.Fragment key={index}>
              <a
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-28 h-16 sm:w-32 sm:h-20 md:w-36 md:h-20 lg:w-[8rem] lg:h-[3rem] transition hover:scale-105"
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="max-h-full max-w-full object-contain"
                />
              </a>

              {/* Divider line between logos (not after last one) */}
              {index !== logos.length - 1 && (
                <div className="w-px h-10 bg-gray-300 hidden sm:block"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
