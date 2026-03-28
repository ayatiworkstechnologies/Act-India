"use client";

import React, { useState, useRef, useEffect } from "react";
import { MapPin } from "lucide-react";

const locations = [
  {
    city: "Chennai",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.963143820697!2d80.0243289!3d13.038018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528b9a0daa8ad9%3A0xeeec9301a3860256!2sAct%20Volvo!5e0!3m2!1sen!2sin!4v1774688082282!5m2!1sen!2sin",
    address:
      "No.5/55, Forest Range Road, Kolathurambakkam Post & Village, Poonamallee Taluk, Thiruvallur Dist., Chennai, Tamil Nadu, 600124.",
  },
  {
    city: "Tirunelveli",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3942.6483072469478!2d77.74651677501643!3d8.819071691234106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwNDknMDguNyJOIDc3wrA0NCc1Ni43IkU!5e0!3m2!1sen!2sin!4v1774688148887!5m2!1sen!2sin",
    address:
      "No.165/2, D.No.8/4/5-E1, Valli Illam, Madurai Main Road, Sankar Nagar, Tirunelveli - 627001.",
  },
  {
    city: "Coimbatore - Sulur",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3915.2895482376657!2d77.14858047504646!3d11.091784489076794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDA1JzMwLjQiTiA3N8KwMDknMDQuMiJF!5e0!3m2!1sen!2sin!4v1774688238424!5m2!1sen!2sin",
    address:
      "S.F NO. 560/241, Periya Kadu, Kanuvampalayam, Near Kathayai Toll Plaza, Sulur (Tk), Coimbatore - 641659.",
  },
  {
    city: "Hosur",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3891.5809270748796!2d77.8571027!3d12.74073949!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae7761f2fa1257%3A0xc02367d696d72a8e!2sACT%20Volvo%20Hosur!5e0!3m2!1sen!2sin!4v1774688365363!5m2!1sen!2sin",
    address: "near, Vathusala gardens phase 3, Alasanatham Rd, Jai Nagar, Punugandoddi, Tamil Nadu 635109",
  },
  {
    city: "Karur",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3917.171167664389!2d78.0545613!3d10.9504396!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2f6127c9a111%3A0x321d49498b1ecfae!2sACT%20Karur%20(Volvo%20Construction%20Equipment%20Dealer)!5e0!3m2!1sen!2sin!4v1774688443592!5m2!1sen!2sin",
    address: "DVN Building, 1, Periyandan Kovil Road,Near Periyar Arch, Karur- 639 002, Karur, Tamil Nadu 639008",
  },
  {
    city: "Salem",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3907.3877843664513!2d78.13698099999999!3d11.666905999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDQwJzAwLjkiTiA3OMKwMDgnMTMuMSJF!5e0!3m2!1sen!2sin!4v1774688512658!5m2!1sen!2sin",
    address: "4/335-1st Floor, Raman Illam, Salem - 636009.",
  },
  {
    city: "Trichy",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3918.128611908944!2d78.70629137504334!3d10.87782128927717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDUyJzQwLjIiTiA3OMKwNDInMzEuOSJF!5e0!3m2!1sen!2sin!4v1774688590072!5m2!1sen!2sin",
    address: "No.6/257/1, Nandhi Nagar, Trichy - 621216.",
  },
  {
    city: "Madurai",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3931.0586981238953!2d78.01762877502912!3d9.845437390252194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNTAnNDMuNiJOIDc4wrAwMScxMi43IkU!5e0!3m2!1sen!2sin!4v1774688672943!5m2!1sen!2sin",
    address: "Flat No:15, Sowbhagya Nagar, Madurai - 625006.",
  },
  {
    city: "Kozhikode",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4334.622358159676!2d75.86423384587573!3d11.235188762350274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65ba5b2419939%3A0xdeaa19767198030d!2sPACT%20Machines%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1774688769503!5m2!1sen!2sin",
    address: "15/224 C7, Vallikkunnu, Kozhikode - 673019.",
  },
   {
    city: "Kazhakkoottam",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.1276363223787!2d76.86711849999999!3d8.5837249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bf7e588e7155%3A0xddca9d6f5a98fb43!2sPACT%20Machines%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1774688886732!5m2!1sen!2sin",
    address: "MN TOWERS, VETTU ROAD, near SAINIK SCHOOL, Kazhakkoottam, Kaniyapuram, Kerala 695585",
  },
  {
    city: "Trivandrum",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3942.6483072469478!2d77.74651677501643!3d8.819071691234106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwNDknMDguNyJOIDc3wrA0NCc1Ni43IkU!5e0!3m2!1sen!2sin!4v1774688947913!5m2!1sen!2sin",
    address: "MN Towers, Karamana, Trivandrum - 695583.",
  },
  {
    city: "Aluva",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.6763204703866!2d76.3127179!3d10.1255584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080fa199f82f8d%3A0xd99aaa6d56a85a6d!2sPACT%20Machines%20Pvt%20Ltd%20-%20Volvo!5e0!3m2!1sen!2sin!4v1774689065583!5m2!1sen!2sin",
    address: "48G7+635, DOOR NO VII/ 267 A , MALIKAMPEEDIKA, ALANGADU, PO, Aluva, Kerala 683511",
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