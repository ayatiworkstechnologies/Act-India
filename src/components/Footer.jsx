"use client";

import {
  Instagram,
  Facebook,
  X,
  Linkedin,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";

function PdfDocIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 48 48"
      className="shrink-0"
    >
      <path
        fill="#fff"
        d="M8 4h22l10 10v30a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
      />
      <path fill="#d32f2f" d="M40 14h-8a2 2 0 0 1-2-2V4z" />
      <path fill="#d32f2f" d="M10 30h28v10H10z" />
      <text
        x="14"
        y="38"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
        fontSize="10"
        fill="#fff"
      >
        PDF
      </text>
    </svg>
  );
}

export default function FooterACT() {
  return (
    <footer className="relative text-white">
      <div className="bg-[#F7F7F7]">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-10 lg:px-12 py-8 md:py-10">

          {/* Logo */}
          <div className="mb-8 -pl-7">
            <img
              src="/assets/logo.svg"
              alt="ACT Logo"
              className="h-14 w-auto"
            />
          </div>

          {/* Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">

            {/* Brand partner */}
            <nav>
              <h3 className="mb-3 font-semibold text-[15px] text-black">
                Brand partners
              </h3>
              <ul className="space-y-2 text-[14px] text-black">
                {[
                  { name: "Volvo", path: "/volvo" },
                  { name: "Epiroc", path: "/epiroc" },
                  { name: "SDLG", path: "/sdlg" },
                  { name: "Ammann", path: "/ammann" },
                  { name: "Husqvarna", path: "/husqvarna" },
                  { name: "Schwing Stetter", path: "/self-loading-mixer" },
                ].map(({ name, path }) => (
                  <li key={name}>
                    <Link to={path}>{name}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Service */}
            <nav>
              <h3 className="mb-3 font-semibold text-[15px] text-black">
                Service
              </h3>
              <ul className="space-y-2 text-[14px] text-black">
                {[
                  "Precare",
                  "Equipments-as-a-Service",
                  "Auxiliary service solutions",
                  "Operator Training & Certification",
                ].map((i) => (
                  <li key={i}>
                    <Link to="/services">{i}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Infrastructure */}
            <nav>
              <h3 className="mb-3 font-semibold text-[15px] text-black">
                Infrastructure
              </h3>
              <ul className="space-y-2 text-[14px] text-black">
                {[
                  "Warehouses & Stockyards",
                  "Machine stockyard",
                  "Trainings facilities",
                  "Workshop - Chennai",
                  "Support vehicle",
                ].map((i) => (
                  <li key={i}>
                    <Link to="/infrastructure">{i}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* News */}
            <section>
              <h3 className="mb-3 font-semibold text-[15px] text-black">
                News
              </h3>
              <ul className="space-y-3">
                {[
                  {
                    title: "ACT Newsletter Oct-2018",
                    href: "/assets/2018.pdf",
                  },
                  {
                    title: "ACT Newsletter July-2019",
                    href: "/assets/2019.pdf",
                  },
                  {
                    title: "ACT Newsletter Jan-2020",
                    href: "/assets/2020.pdf",
                  },
                ].map(({ title, href }) => (
                  <li key={title}>
                    <a
                      href={href}
                      download
                      className="group flex items-center gap-3 text-[14px] text-black"
                    >
                      <PdfDocIcon />
                      <span className="underline-offset-2">
                        {title}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Bottom row */}
          <div className="mt-8 pt-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-xs text-black">
            <p>
              Copyright © Ayatiworks Technologies LLP. All rights reserved
            </p>

            <div className="flex items-center gap-5">

              <a href="https://www.instagram.com/act_official2022/" target="_blank">
                <Instagram size={16} />
              </a>

              <a href="https://www.facebook.com/ACTIndiaOfficial/" target="_blank">
                <Facebook size={16} />
              </a>

              <a href="https://twitter.com/act_digital1" target="_blank">
                <X size={16} />
              </a>

              <a href="https://www.linkedin.com/company/actindia" target="_blank">
                <Linkedin size={16} />
              </a>

              <a href="https://www.youtube.com/channel/UCBlz66KP_vrkw1N3oVRd-Ew" target="_blank">
                <Youtube size={16} />
              </a>

            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}