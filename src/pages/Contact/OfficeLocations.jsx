"use client";

import React, { useState } from "react";
import { MapPin } from "lucide-react";

const locations = [
  {
    city: "Chennai",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.963143820697!2d80.0243289!3d13.038018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528b9a0daa8ad9%3A0xeeec9301a3860256!2sAct%20Volvo!5e0!3m2!1sen!2sin!4v1774688082282!5m2!1sen!2sin",
    address:
      "No.5/55, Forest Range Road, Kolathurambakkam Post & Village, Poonamallee Taluk, Thiruvallur Dist., Chennai, Tamil Nadu, 600124.",
  },
  {
    city: "Tirunelveli",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3942.6483072469478!2d77.74651677501643!3d8.819071691234106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwNDknMDguNyJOIDc3wrA0NCc1Ni43IkU!5e0!3m2!1sen!2sin!4v1774688148887!5m2!1sen!2sin",
    address:
      "No.165/2, D.No.8/4/5-E1, Valli Illam, Madurai Main Road, Sankar Nagar, Tirunelveli - 627001.",
  },
  {
    city: "Karur",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3917.171167664389!2d78.0545613!3d10.9504396!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2f6127c9a111%3A0x321d49498b1ecfae!2sACT%20Karur%20(Volvo%20Construction%20Equipment%20Dealer)!5e0!3m2!1sen!2sin!4v1774688443592!5m2!1sen!2sin",
    address:
      "DVN Building, 1, Periyandan Kovil Road, Near Periyar Arch, Karur - 639 002, Karur, Tamil Nadu 639008",
  },
  {
    city: "Salem",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3907.3877843664513!2d78.13698099999999!3d11.666905999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDQwJzAwLjkiTiA3OMKwMDgnMTMuMSJF!5e0!3m2!1sen!2sin!4v1774688512658!5m2!1sen!2sin",
    address: "4/335-1st Floor, Raman Illam, Salem - 636009.",
  },
  {
    city: "Trichy",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3918.128611908944!2d78.70629137504334!3d10.87782128927717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDUyJzQwLjIiTiA3OMKwNDInMzEuOSJF!5e0!3m2!1sen!2sin!4v1774688590072!5m2!1sen!2sin",
    address: "No.6/257/1, Nandhi Nagar, Trichy - 621216.",
  },
  {
    city: "Madurai",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3931.0586981238953!2d78.01762877502912!3d9.845437390252194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNTAnNDMuNiJOIDc4wrAwMScxMi43IkU!5e0!3m2!1sen!2sin!4v1774688672943!5m2!1sen!2sin",
    address: "Flat No:15, Sowbhagya Nagar, Madurai - 625006.",
  },
];

export default function OfficeLocations() {
  const [selected, setSelected] = useState(locations[0]);

  return (
    <section className="py-12 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-start">

        {/* LEFT - MAP */}
        <div className="w-full md:w-1/2 md:sticky md:top-6 self-start h-[500px]">
          <iframe
            title="office-map"
            className="w-full h-full shadow-lg border rounded-md"
            src={selected.mapEmbed}
            allowFullScreen
            loading="lazy"
          />
        </div>

        {/* RIGHT - LOCATIONS */}
        <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {locations.map((loc, index) => (
            <div
              key={index}
              onClick={() => setSelected(loc)}
              className={`
                cursor-pointer
                bg-white
                border
                p-5
                rounded-lg
                transition-all
                duration-300
                ${
                  selected.city === loc.city
                    ? "border-secondary shadow-xl scale-[1.02]"
                    : "border-gray-200 shadow-md hover:scale-[1.02] hover:shadow-xl"
                }
              `}
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