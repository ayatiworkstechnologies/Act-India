import React, { useState } from "react";
import { Quote } from "lucide-react"; // for quote icon

const testimonials = [
  {
    id: 1,
    name: "Ravi Kumar",
    role: "Site Manager",
    image: "/assets/person-1.png",
    title: "Their team delivered exactly as promised",
    rating: 5,
    text: "ACT India delivered silent demolition without disturbing nearby offices. Highly professional and safety-focused team. We’ll definitely work with them again."
  },
  {
    id: 2,
    name: "Arjun Mehta",
    role: "Contractor",
    image: "/assets/person-2.png",
    title: "Great support and execution",
    rating: 4,
    text: "The team was extremely supportive throughout the project and executed it flawlessly with attention to detail."
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Infrastructure Consultant",
    image: "/assets/person-3.png",
    title: "Professional and reliable",
    rating: 5,
    text: "Working with ACT India has always been smooth. Their professional approach ensures projects are completed on time."
  },
  {
    id: 4,
    name: "Manoj Sharma",
    role: "Civil Engineer",
    image: "/assets/person-4.png",
    title: "Excellent service quality",
    rating: 5,
    text: "I highly recommend ACT India. The quality of their work and attention to safety is remarkable."
  }
];

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-8 items-center">
      {/* Left - Clients */}
      <div>
        <h2 className="text-3xl font-bold mb-6">
          What Our Client Says
        </h2>
        <div className="w-32 h-[3px] bg-gradient-to-r from-blue-500 to-blue-800"></div>

        <div className="space-y-4 pt-10">
          {testimonials.map((client, index) => (
            <div
              key={client.id}
              onClick={() => setActiveIndex(index)}
              className={`flex items-center space-x-4 p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                activeIndex === index
                  ? "bg-gray-100 shadow-md"
                  : "hover:bg-gray-50"
              }`}
            >
              <img
                src={client.image}
                alt={client.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p
                  className={`font-semibold ${
                    activeIndex === index ? "text-blue-600" : "text-gray-800"
                  }`}
                >
                  {client.name}
                </p>
                <p className="text-sm text-gray-500">{client.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right - Testimonial */}
      <div className="relative p-6 border rounded-lg shadow-sm bg-white transition-all duration-500">
        <Quote className="absolute top-4 left-4 text-blue-600 w-6 h-6" />
        <h3 className="font-semibold text-lg mb-2 pt-5">
          {testimonials[activeIndex].title}
        </h3>
        {/* Rating stars */}
        <div className="flex items-center mb-3">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-xl ${
                i < testimonials[activeIndex].rating
                  ? "text-yellow-400"
                  : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
        </div>
        <p className="text-gray-600 leading-relaxed">
          {testimonials[activeIndex].text}
        </p>
        <Quote className="absolute bottom-4 right-4 text-blue-600 w-6 h-6 rotate-180" />
      </div>
    </div>
  );
}
