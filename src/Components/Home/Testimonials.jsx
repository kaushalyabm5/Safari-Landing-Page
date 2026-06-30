import React from "react";

const testimonialsData = [
  {
    id: 1,
    stars: 5,
    badge: "VIP FULL DAY",
    text: "The certified guide knew every animal by behaviour. The rice and curry lunch was outstanding, the DSLR photos they sent were incredible. This is how safaris should be done.",
    name: "Sophie M.",
    location: "Germany",
    countryCode: "DE",
    initial: "S"
  },
  {
    id: 2,
    stars: 5,
    badge: null,
    text: "Was quoted LKR 12,000 at the gate with nothing included. Booked Standard here for 7,500 — private jeep, binoculars, snacks, everything. Same great wildlife. Always book through the Hub.",
    name: "Rajan K.",
    location: "India",
    countryCode: "IN",
    initial: "R"
  },
  {
    id: 3,
    stars: 5,
    badge: "VIP MORNING",
    text: "The sunrise priority entry was surreal — just us and the elephants. The tracker radio meant our guide knew exactly where a leopard had been spotted. We found it within 20 minutes.",
    name: "Emma T.",
    location: "Australia",
    countryCode: "AU",
    initial: "E"
  }
];

export default function Testimonials() {
  // Triple the data array to create a perfectly seamless illusion loop
  const loopData = [...testimonialsData, ...testimonialsData, ...testimonialsData];

  return (
    <div className="bg-[var(--green-color)] text-white py-30 overflow-hidden relative">
      
      {/* 1. Injecting pure CSS directly for the Left-To-Right loop and fading edges */}
      <style>{`
        @keyframes marqueeLTR {
          0% { transform: translateX(-33.3333%); }
          100% { transform: translateX(0%); }
        }
        .animate-scroll-ltr {
          animation: marqueeLTR 25s linear infinite;
        }
        .carousel-mask {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}</style>

      {/* Header Section */}
      <div className="text-center mb-12 px-4">
        <span className="text-[#dca134] text-xs font-bold tracking-[0.2em] uppercase block mb-3">
          Guest Stories
        </span>
        <h2 className="text-3xl md:text-5xl text-[#f4efe6]">
          What Our Guests Say
        </h2>
      </div>

      {/* Infinite Carousel Container */}
      <div className="w-full flex overflow-hidden select-none relative carousel-mask">
        {/* Row wrapper utilizing the injected inline CSS animation */}
        <div className="flex gap-6 animate-scroll-ltr whitespace-nowrap py-4">
          {loopData.map((item, index) => (
            <div
              key={index}
              className="inline-block w-[350px] md:w-[400px] shrink-0 bg-[#091f13] border border-[#dca134]/25 hover:border-[#dca134]/60 rounded-xl p-6 whitespace-normal transition-all duration-300 shadow-xl"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-3 text-[#f1be33]">
                {[...Array(item.stars)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>

              {/* Optional Badge */}
              {item.badge && (
                <div className="inline-flex items-center gap-1 bg-[#dca134]/10 border border-[#dca134]/60 text-[#dca134] font-bold text-[10px] tracking-wider px-2 py-0.5 rounded mb-4">
                  <span>★</span> {item.badge}
                </div>
              )}

              {/* Testimonial Text */}
              <p className="text-[#f4efe6]/80 text-sm md:text-base leading-relaxed italic mb-6">
                "{item.text}"
              </p>

              {/* User Meta Data */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f1be33] text-[#0b2416] font-bold flex items-center justify-center text-base shadow-inner">
                  {item.initial}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#f4efe6]">{item.name}</h4>
                  <p className="text-xs text-gray-400">
                    <span className="text-gray-500 font-semibold mr-1">{item.countryCode}</span> {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}