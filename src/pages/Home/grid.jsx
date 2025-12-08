import React from "react";

export default function GridPage() {
  return (
    <section className="w-full px-4 md:px-6 lg:px-8 py-6 bg-white mb-12">
      <div className="mt-4 mb-10">
        <h2 className="text-3xl text-secondary text-center">
          Awards that Inspire<br />
          <span className="text-xl text-black">
            Redefining Construction Standards for Over 80 Years
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {/* ---------- Column 1 ---------- */}
        <div className="grid gap-4">
          {["r1-1", "r2-1", "r3-1"].map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-md bg-gray-100 shadow-lg shadow-gray-400/50 hover:shadow-xl transition-all duration-300"
            >
              <img
                src={`/assets/${img}.jpg`}
                alt={`Award ${i + 1}`}
                className="w-full object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* ---------- Column 2 ---------- */}
        <div className="grid gap-4">
          {["r1-2", "r2-2", "r3-2"].map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-md bg-gray-100 shadow-lg shadow-gray-400/50 hover:shadow-xl transition-all duration-300"
            >
              <img
                src={`/assets/${img}.jpg`}
                alt={`Award ${i + 4}`}
                className="w-full object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* ---------- Column 3 ---------- */}
        <div className="grid gap-4">
          {["r1-3", "r2-3", "r3-3"].map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-md bg-gray-100 shadow-lg shadow-gray-400/50 hover:shadow-xl transition-all duration-300"
            >
              <img
                src={`/assets/${img}.jpg`}
                alt={`Award ${i + 7}`}
                className="w-full object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* ---------- Column 4 ---------- */}
        <div className="grid gap-4">
          {["r1-4", "r2-4", "r3-4"].map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-md bg-gray-100 shadow-lg shadow-gray-400/50 hover:shadow-xl transition-all duration-300"
            >
              <img
                src={`/assets/${img}.jpg`}
                alt={`Award ${i + 10}`}
                className="w-full object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
