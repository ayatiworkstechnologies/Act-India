// ContactStamp.tsx
import { Phone, Mail } from "lucide-react";

export default function ContactStamp() {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="mx-auto max-w-3xl px-4 text-center">
        {/* Company Name */}
        <h2 className="font-extrabold tracking-[0.18em] uppercase text-neutral-900 text-[15px] md:text-[17px]">
          Advanced Construction Technologies Pvt Ltd.
        </h2>

        {/* Address */}
        <address className="not-italic mt-3 md:mt-4 text-[12.5px] md:text-[13.5px] leading-relaxed text-neutral-600">
          No. 5/55, Kuthambakkam Village &amp; Post, Forest<br className="hidden md:block" />
          Range Road, Chettipedu, Poonamallee TK,<br className="hidden md:block" />
          Thiruvallur Dist., Chennai 600124. INDIA.
        </address>

        {/* Contact Row */}
        <div className="mt-5 md:mt-6 flex items-center justify-center gap-6 md:gap-10 text-[13px] md:text-[14px]">
          {/* Phone */}
          <a
            href="tel:+919884757350"
            className="inline-flex items-center gap-2 text-neutral-800 hover:text-neutral-900"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-secondary text-secondary">
              <Phone size={16} />
            </span>
            <span className="tracking-wide">+91 98847 57350</span>
          </a>

          {/* Email */}
          <a
            href="mailto:info@actcind.com"
            className="inline-flex items-center gap-2 text-neutral-800 hover:text-neutral-900"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-secondary text-secondary">
              <Mail size={16} />
            </span>
            <span className="tracking-wide">info@actcind.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}
