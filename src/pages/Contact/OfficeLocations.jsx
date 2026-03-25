"use client";

import React, { useState, useRef, useEffect } from "react";
import { MapPin } from "lucide-react";

const locations = [
  {
    city: "Chennai",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.9788119765326!2d80.02504619999999!3d13.0370206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528b8de7319215%3A0x2dfdb91485f66cbc!2sPACT%20Power%20Solutions%20LLP!5e0!3m2!1sen!2sin!4v1774441842011!5m2!1sen!2sin",
    address:
      "No.5/55, Forest Range Road, Kolathurambakkam Post & Village, Poonamallee Taluk, Thiruvallur Dist., Chennai, Tamil Nadu, 600124.",
  },
  {
    city: "Tirunelveli",
    mapEmbed: "https://www.google.com/maps?q=8.7139,77.7567&z=14&output=embed",
    address:
      "No.165/2, D.No.8/4/5-E1, Valli Illam, Madurai Main Road, Sankar Nagar, Tirunelveli - 627001.",
  },
  {
    city: "Coimbatore - Sulur",
    mapEmbed: "https://www.google.com/maps?q=11.024,77.125&z=14&output=embed",
    address:
      "S.F NO. 560/241, Periya Kadu, Kanuvampalayam, Near Kathayai Toll Plaza, Sulur (Tk), Coimbatore - 641659.",
  },
  {
    city: "Hosur",
    mapEmbed: "https://www.google.com/maps?q=12.7409,77.8253&z=14&output=embed",
    address: "Plot No: 81 & 93, Elumalai Nagar, Muthalli Road, Hosur - 635109.",
  },
  {
    city: "Karur",
    mapEmbed: "https://www.google.com/maps?q=10.9601,78.0766&z=14&output=embed",
    address: "DVN Building, 1st Floor, Kovai Road, Near Periyar Arch, Karur - 639002.",
  },
  {
    city: "Salem",
    mapEmbed: "https://www.google.com/maps?q=11.6643,78.146&z=14&output=embed",
    address: "4/335-1st Floor, Raman Illam, Salem - 636009.",
  },
  {
    city: "Trichy",
    mapEmbed: "https://www.google.com/maps?q=10.7905,78.7047&z=14&output=embed",
    address: "No.6/257/1, Nandhi Nagar, Trichy - 621216.",
  },
  {
    city: "Madurai",
    mapEmbed: "https://www.google.com/maps?q=9.9252,78.1198&z=14&output=embed",
    address: "Flat No:15, Sowbhagya Nagar, Madurai - 625006.",
  },
  {
    city: "Kozhikode",
    mapEmbed: "https://www.google.com/maps?q=11.2588,75.7804&z=14&output=embed",
    address: "15/224 C7, Vallikkunnu, Kozhikode - 673019.",
  },
  {
    city: "Trivandrum",
    mapEmbed: "https://www.google.com/maps?q=8.5241,76.9366&z=14&output=embed",
    address: "MN Towers, Karamana, Trivandrum - 695583.",
  },
  {
    city: "Aluva",
    mapEmbed: "https://www.google.com/maps?q=10.1076,76.351&z=14&output=embed",
    address: "Rayyan Tower, Mukkampeedika, Aluva - 683511.",
  },
];

export default function OfficeLocations() {
  const [selected, setSelected] = useState(locations[0]);
  const scrollRef = useRef(null);
  const autoScrollRef = useRef(null);
  const isPausedRef = useRef(false);
  const isResettingRef = useRef(false);

  useEffect(() => {
    autoScrollRef.current = setInterval(() => {
      if (isPausedRef.current || isResettingRef.current) return;
      const container = scrollRef.current;
      if (!container) return;

      const atBottom =
        container.scrollTop + container.clientHeight >= container.scrollHeight - 2;

      if (atBottom) {
        isResettingRef.current = true;
        container.scrollTo({ top: 0, behavior: "smooth" });
        // Wait for smooth scroll back to top to finish before resuming
        setTimeout(() => {
          isResettingRef.current = false;
        }, 800);
      } else {
        container.scrollBy({ top: 1, behavior: "instant" });
      }
    }, 20);

    return () => clearInterval(autoScrollRef.current);
  }, []);

  return (
    <section className="py-12 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-start">

        {/* LEFT: STICKY MAP */}
        <div className="w-full md:w-1/2 sticky top-6 self-start h-[500px]">
          <iframe
            title="office-map"
            className="w-full h-full shadow-lg border rounded-md"
            src={selected.mapEmbed}
            allowFullScreen
            loading="lazy"
          />
        </div>

        {/* RIGHT: AUTO-SCROLL LOCATIONS (no scrollbar) */}
        <div
          ref={scrollRef}
          onMouseEnter={() => { isPausedRef.current = true; }}
          onMouseLeave={() => { isPausedRef.current = false; }}
          className="w-full md:w-1/2 max-h-[500px] overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style>{`div::-webkit-scrollbar { display: none; }`}</style>
          {locations.map((loc, index) => (
            <div
              key={index}
              onClick={() => setSelected(loc)}
              className={`cursor-pointer bg-white border p-5 rounded-lg transition-all duration-300 
              ${
                selected.city === loc.city
                  ? "border-secondary shadow-xl scale-[1.02]"
                  : "border-gray-200 shadow-md hover:scale-[1.02] hover:shadow-xl"
              }`}
            >
              <div className="flex items-start gap-4">
                <MapPin className="text-secondary w-6 h-6 mt-1 shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-secondary">
                    {loc.city}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    {loc.address}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}