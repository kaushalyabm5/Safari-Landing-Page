import React from 'react';
import { FiClock, FiArrowRight } from 'react-icons/fi';

export default function Packages() {
  const packages = [
    // --- STANDARD PACKAGES ---
    {
      type: 'standard',
      badge: 'STANDARD · LKR 7,500 / PERSON',
      timeBadge: '🌅 6:00 AM - 10:00 AM',
      duration: '4 HOURS',
      title: 'Morning Safari',
      desc: 'Best for: Elephant sightings & bird watching at peak activity hours.',
      price: 'LKR 7,500',
      bgGradient: 'from-emerald-950/80 to-[#121812]',
    },
    {
      type: 'standard',
      badge: 'STANDARD · LKR 7,500 / PERSON',
      timeBadge: '🌇 2:30 PM - 6:30 PM',
      duration: '4 HOURS',
      title: 'Evening Safari',
      desc: 'Best for: Golden hour photography & dramatic landscape views at dusk.',
      price: 'LKR 7,500',
      bgGradient: 'from-amber-950/40 to-[#121812]',
    },
    {
      type: 'standard',
      badge: 'STANDARD · LKR 7,500 / PERSON',
      timeBadge: '☀️ 6:00 AM - 6:00 PM',
      duration: '12 HOURS',
      title: 'Full Day Safari',
      desc: 'Best for: Deep jungle exploration & spotting rare, elusive wildlife.',
      price: 'LKR 7,500',
      bgGradient: 'from-stone-900 to-[#121812]',
    },
    // --- VIP PACKAGES ---
    {
      type: 'vip',
      badge: '★ VIP · LKR 15,000 / PERSON',
      timeBadge: '👑 6:00 AM - 10:00 AM',
      duration: 'VIP · 4 HOURS',
      title: 'Morning VIP Safari',
      desc: 'Certified guide + sunrise priority entry. See the park wake up before anyone else.',
      price: 'LKR 15,000',
      bgGradient: 'from-amber-900/40 to-[#151c15]',
    },
    {
      type: 'vip',
      badge: '★ VIP · LKR 15,000 / PERSON',
      timeBadge: '👑 2:30 PM - 6:30 PM',
      duration: 'VIP · 4 HOURS',
      title: 'Evening VIP Safari',
      desc: 'Golden hour from a private luxury jeep with a certified guide tracking live wildlife.',
      price: 'LKR 15,000',
      bgGradient: 'from-amber-800/30 to-[#151c15]',
    },
    {
      type: 'vip',
      badge: '★ VIP · LKR 15,000 / PERSON',
      timeBadge: '👑 6:00 AM - 6:00 PM',
      duration: 'VIP · 12 HOURS',
      title: 'Full Day VIP Safari',
      desc: 'Sunrise to sunset. Deep jungle exploration, expert guide all day, photos, gift bag and more.',
      price: 'LKR 15,000',
      bgGradient: 'from-amber-950/60 to-[#151c15]',
    },
  ];

  return (
    <section className="bg-[#fcfbf7] text-stone-900 py-16 px-6 sm:py-24 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div className="text-left">
            <span className="text-xs font-bold tracking-widest text-amber-600 uppercase block mb-2">
              CHOOSE YOUR TIME SLOT
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#131913]">
              Safari Packages
            </h2>
          </div>
          <p className="text-stone-600 text-sm sm:text-base max-w-md text-left lg:text-right font-light leading-relaxed">
            Each slot is available as Standard (LKR 7,500) or VIP (LKR 15,000). Every inclusion is fixed — no upselling on the day.
          </p>
        </div>

        {/* Packages Grid */}
        {/* Mobile: 1 col | Tablet: 2 cols | Desktop: 3 cols */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-gradient-to-b ${pkg.bgGradient} border ${
                pkg.type === 'vip' ? 'border-amber-500/30' : 'border-stone-800/10'
              } rounded-2xl p-6 flex flex-col justify-between text-white shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <div>
                {/* Top Info Header */}
                <div className="text-[10px] tracking-wider uppercase font-semibold text-stone-400 mb-4 border-b border-white/10 pb-2">
                  {pkg.badge}
                </div>

                {/* Time Badge */}
                <div className="inline-block bg-black/40 backdrop-blur-md px-3 py-1 rounded-md text-xs font-medium text-amber-400 mb-4">
                  {pkg.timeBadge}
                </div>

                {/* Duration */}
                <div className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-1 flex items-center gap-1">
                  <FiClock /> {pkg.duration}
                </div>

                {/* Title */}
                <h3 className="title-font text-xl sm:text-2xl font-bold mb-3 tracking-wide text-white">
                  {pkg.title}
                </h3>

                {/* Description */}
                <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                  {pkg.desc}
                </p>
              </div>

              {/* Price & Action Button */}
              <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-stone-400 block uppercase tracking-wider">From</span>
                  <span className="text-lg font-bold text-white">{pkg.price} <span className="text-xs font-light text-stone-400">/ person</span></span>
                </div>

                <button
                  className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-lg transition-all ${
                    pkg.type === 'vip'
                      ? 'bg-amber-500 hover:bg-amber-600 text-stone-950'
                      : 'bg-stone-800 hover:bg-stone-700 text-white'
                  }`}
                >
                  Select <FiArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}