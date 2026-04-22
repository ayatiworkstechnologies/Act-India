"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function SocialLinks() {
  const socials = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/ACTIndiaOfficial/",
      color: "bg-[#1877F2]",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/act_official2022/",
      color: "bg-gradient-to-r from-pink-500 to-yellow-500",
    },
    {
      name: "X",
      icon: <FaXTwitter />,
      link: "https://twitter.com/act_digital1",
      color: "bg-black",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/company/actindia",
      color: "bg-[#0A66C2]",
    },
    {
      name: "YouTube",
      icon: <FaYoutube />,
      link: "https://www.youtube.com/channel/UCBlz66KP_vrkw1N3oVRd-Ew",
      color: "bg-[#FF0000]",
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">

        <h2 className="text-2xl font-semibold text-[#2f3192] mb-8 mt-10">
          Follow Us
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {socials.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 group"
            >
              <div
                className={`w-12 h-12 rounded-full text-white flex items-center justify-center text-lg ${item.color} group-hover:scale-110 transition`}
              >
                {item.icon}
              </div>
              <span className="text-sm text-gray-600 group-hover:text-[#2f3192]">
                {item.name}
              </span>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}