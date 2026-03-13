"use client";
import React from "react";
import { motion } from "framer-motion";

export default function MissionVision({
  missionTexts = [
    "We Will pioneer innovative technology and solutions to customers delivering improved productivity, efficiency, profitability, ensuring high brand recall.",
    "We will evolve to attract the best of talent and provide an enabling environment to learn, lead, contribute and grow into future leaders.",
    "We will continuously improve and implement robust business processes that ensures fulfilment of our goals with integrity, speed and accuracy.",
    "We will consistently deliver profitable growth and build sustainable, scalable streams of business.",
  ],
  visionText =
    "ACT will enrich the construction and infrastructure sector through innovative technology and solutions.",
}) {
  return (
    <section className="bg-white text-neutral-900 py-14 md:py-20 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">

        {/* ================= VISION SECTION ================= */}
        <div className="grid grid-cols-12 items-center gap-8 mb-20">

          {/* Left Vision Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-4 flex lg:justify-center"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-black">
              VISION
            </h2>
          </motion.div>

          {/* Vision Content */}
          <div className="col-span-12 lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-[0_25px_60px_-30px_rgba(0,0,0,0.35)] ring-1 ring-gray-100 p-6 md:p-8"
            >
              <ul className="list-disc pl-5 marker:text-[#0066cc]">
                <li className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {visionText}
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* ================= MISSION SECTION ================= */}
        <div className="grid grid-cols-12 items-center gap-8">

          {/* Mission Content */}
          <div className="col-span-12 lg:col-span-8">
            <div className="bg-white rounded-2xl shadow-[0_25px_60px_-30px_rgba(0,0,0,0.35)] ring-1 ring-gray-100 p-6 md:p-8">

              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4 list-disc pl-5 marker:text-[#0066cc]"
              >
                {missionTexts.map((text, index) => (
                  <motion.li
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: index * 0.25,
                          duration: 0.6,
                          ease: "easeOut",
                        },
                      },
                    }}
                    className="text-slate-600 leading-relaxed text-sm md:text-base"
                  >
                    {text}
                  </motion.li>
                ))}
              </motion.ul>

            </div>
          </div>

          {/* Right Mission Title */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-4 flex lg:justify-center"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-black">
              MISSION
            </h2>
          </motion.div>

        </div>

      </div>
    </section>
  );
}