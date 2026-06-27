import React from 'react';
import { FiMap, FiMessageSquare, FiUsers, FiEye, FiArrowRight } from 'react-icons/fi';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <FiMap className="text-2xl text-[#E5C158]" />,
      title: "Choose Your Safari",
      desc: "Select standard or VIP layouts, morning/evening game drives, or immersive full-day tracking. Reserved online instantly.",
      badge: "Instant Booking",
      className: "md:col-span-2 lg:col-span-2"
    },
    {
      number: "02",
      icon: <FiMessageSquare className="text-2xl text-[#E5C158]" />,
      title: "Jeep Assignment",
      desc: "Matched with a professional driver and certified expert tracker. Private WhatsApp coordination group dispatched within 2 hours.",
      badge: "Fast Dispatch",
      className: "md:col-span-1 lg:col-span-2"
    },
    {
      number: "03",
      icon: <FiUsers className="text-2xl text-[#E5C158]" />,
      title: "Meet Your Team",
      desc: "VIP direct hotel pickup with a fully stocked luxury 4x4 expedition vehicle. Standard travelers connect seamlessly at our dedicated basecamp gate.",
      badge: "Premium Care",
      className: "md:col-span-1 lg:col-span-2"
    },
    {
      number: "04",
      icon: <FiEye className="text-2xl text-[#E5C158]" />,
      title: "Into the Wild",
      desc: "Track massive elephant herds, hidden leopards, and apex crocodiles across dense reservation corridors with master wilderness guides.",
      badge: "The Expedition",
      className: "md:col-span-2 lg:col-span-2"
    }
  ];

  return (
    <section className="bg-[#040a06] text-stone-100 py-24 px-6 sm:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-[#163a21]/20 blur-[150px] rounded-full pointer-events-none" />

      {/* Main Premium Header Panel (Pure Black Capsule Area) */}
      <div className="max-w-5xl mx-auto bg-black border border-stone-800/60 p-8 sm:p-12 rounded-3xl mb-16 relative z-10 shadow-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158]" />
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#E5C158] uppercase">
              Expedition Blueprint
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase font-sans">
            How It Works
          </h2>
        </div>
        <p className="text-stone-400 text-sm font-light leading-relaxed max-w-sm">
          A seamless digital-to-wilderness transition pipeline. Secure your expedition layout in under three minutes while we orchestrate the logistics.
        </p>
      </div>

      {/* Premium Bento Grid Structure */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-b from-[#0b1a10] to-[#06100a] border border-stone-800/40 p-8 rounded-2xl relative group transition-all duration-500 hover:border-[#D4AF37]/40 hover:-translate-y-1 flex flex-col justify-between min-h-[280px] shadow-lg ${step.className}`}
            >
              {/* Card Interactive Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#D4AF37]/0 to-[#D4AF37]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Upper Section: Step Tracker and Icon */}
              <div>
                <div className="flex justify-between items-start mb-8">
                  {/* Glassmorphic Icon Circle */}
                  <div className="w-14 h-14 bg-black/40 border border-stone-800/80 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-inner">
                    {step.icon}
                  </div>
                  {/* Gold Linear Number Frame */}
                  <span className="font-mono text-2xl font-bold bg-gradient-to-b from-[#E5C158] to-[#9A7B1C] bg-clip-text text-transparent opacity-80 group-hover:opacity-100 transition-opacity">
                    {step.number}
                  </span>
                </div>

                {/* Content Block */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono tracking-wider text-stone-500 uppercase px-2 py-0.5 bg-black/30 border border-stone-800/40 rounded-full">
                      {step.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-wide pt-1">
                    {step.title}
                  </h3>
                  <p className="text-stone-400 text-xs font-light leading-relaxed pt-1">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Micro Interactive Footer Indicator */}
              <div className="pt-6 mt-auto flex items-center justify-end border-t border-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[10px] font-mono tracking-wider text-[#E5C158] flex items-center gap-1.5 uppercase">
                  Discover details <FiArrowRight className="text-xs" />
                </span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}