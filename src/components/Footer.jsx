// FooterACT.tsx
import { Instagram, Facebook, X } from "lucide-react";
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
              className="h-14 w-auto "
            />
          </div>

          {/* Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {/* Brand partner */}
            <nav>
              <h3 className="mb-3 font-semibold text-[15px] text-black">Brand partner</h3>
              <ul className="space-y-2 text-[14px] text-black">
                {[
                  { name: "Volvo", path: "/volvo" },
                  { name: "SDLG", path: "/sdlg" },
                  { name: "Epiroc", path: "/epiroc" },
                  { name: "Ammann", path: "/ammann" },
                  { name: "Husqvarna", path: "/husqvarna" },
                ].map(({ name, path }) => (
                  <li key={name}>
                    <Link
                      to={path}
                      className=" transition-colors"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Service */}
            <nav>
              <h3 className="mb-3 font-semibold text-[15px] text-black">Service</h3>
              <ul className="space-y-2 text-[14px] text-black">
                {[
                  "Precare",
                  "Auxiliary service solutions",
                  "Equipments-as-a-Service",
                  "Operator Training & Certification",
                ].map((i) => (
                  <li key={i}>
                    <Link
                      to="/services"
                      className=" transition-colors"
                    >
                      {i}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Infrastructure */}
            <nav>
              <h3 className="mb-3 font-semibold text-[15px] text-black">Infrastructure</h3>
              <ul className="space-y-2 text-[14px] text-black">
                {[
                  "Warehouses & Stockyards",
                  "Machine stockyard",
                  "Trainings facilities",
                  "Workshop - Chennai",
                  "Support vehicle",
                ].map((i) => (
                  <li key={i}>
                    <Link
                      to="/infrastructure"
                      className=" transition-colors"
                    >
                      {i}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* News */}
            <section>
              <h3 className="mb-3 font-semibold text-[15px] text-black">News</h3>
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
                      className="group flex items-center gap-3 text-[14px] text-black transition-colors"
                    >
                      <PdfDocIcon />
                      <span className="decoration-transparent group-hover:decoration-white/70 underline-offset-2">
                        {title}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Bottom row */}
          <div className="mt-8  pt-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-xs text-black">
            <p>Copyright © Ayatiworks Technologies LLP. All rights reserved</p>
            <div className="flex items-center gap-5">
              <Link to="#" aria-label="Instagram" className="">
                <Instagram size={16} />
              </Link>
              <Link to="#" aria-label="Facebook" className="">
                <Facebook size={16} />
              </Link>
              <Link to="#" aria-label="X" className="">
                <X size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* subtle sheen */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,.06),transparent_30%)]" />
    </footer>
  );
}
