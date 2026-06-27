import React from 'react';
import { FiCheck, FiArrowRight } from 'react-icons/fi';

export default function SafariPackages() {
  const standardInclusions = [
    { title: 'Luxury Open-Roof Jeep', desc: '360° views, padded seats' },
    { title: 'Private Jeep Only', desc: 'No group sharing ever' },
    { title: 'Full Insurance', desc: 'Zero excess coverage' },
    { title: 'HD Binoculars', desc: 'Provided for everyone' },
    { title: 'Premium Snacks', desc: 'Stocked fresh daily' },
    { title: 'Licensed Driver', desc: 'ID-checked & rated' },
    { title: 'WhatsApp Update', desc: 'Sent within 2 hours' },
  ];

  const vipInclusions = [
    { title: 'Naturalist Guide', desc: 'Certified expert tracker' },
    { title: 'Rice & Curry Lunch', desc: 'Traditional mid-day meal' },
    { title: 'Priority Park Entry', desc: 'Guaranteed sunrise slot' },
    { title: 'Wildlife Radio', desc: 'Live network updates' },
    { title: 'Door-to-Door Transfer', desc: 'Hotel pickup & drop' },
    { title: 'DSLR Photography', desc: 'Edited digital photos' },
    { title: 'Souvenir Gift Bag', desc: 'Guide book & keepsakes' },
    { title: 'WhatsApp Concierge', desc: 'Personal priority support' },
  ];

  return (
    <section className="w-full py-20 px-4 bg-white text-stone-900 flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
        
        {/* Centered Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-emerald-800 font-bold mb-3 block">
            Flexible Tiers · No Hidden Fees
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-stone-900 leading-tight mb-4">
            Standard is Already Premium. <br />
            VIP is Extraordinary.
          </h2>
          <p className="text-sm md:text-base text-stone-500 font-light leading-relaxed">
            We raised the floor. Every Standard booking now includes features that used to be luxury add-on packages. VIP takes it to an entirely different level.
          </p>
        </div>

        {/* Horizontal Cards Layout (Side-by-Side Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto items-stretch justify-center">
          
          {/* 1. STANDARD SAFARI CARD */}
          <div className="bg-[#121a14] text-white rounded-[2rem] p-6 lg:p-10 border border-emerald-950 shadow-xl relative flex flex-col justify-between transition-all duration-300">
            <div className="absolute -top-3 left-8 bg-emerald-700 text-white text-[10px] font-extrabold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-md">
              Most Popular Option
            </div>
            
            <div>
              <div className="flex justify-between items-center gap-4 border-b border-emerald-900/40 pb-5 mb-8 mt-4">
                <div>
                  <h3 className="text-3xl font-bold text-white">Standard</h3>
                  <p className="text-xs font-bold tracking-wider text-emerald-500/70 uppercase mt-1">
                    Premium Baseline Experience
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold text-white block">LKR 7,500</span>
                  <span className="text-xs text-stone-400">/ person</span>
                </div>
              </div>

              {/* 2-Column internal grid with increased text scaling */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 mb-10">
                {standardInclusions.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FiCheck className="text-emerald-400 text-xs stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-stone-100 leading-tight">{item.title}</h4>
                      <p className="text-[13px] text-stone-400 mt-1 leading-snug">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <button className="group w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-100 text-stone-950 font-bold text-sm uppercase tracking-wider py-4 rounded-xl transition-all duration-200 active:scale-[0.99]">
              Book Standard Safari
              <FiArrowRight className="transform transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* 2. VIP EXPERIENCE CARD */}
          <div className="bg-[#0b0d0c] text-white rounded-[2rem] p-6 lg:p-10 shadow-2xl relative flex flex-col justify-between transition-all duration-300 overflow-hidden">
            {/* Gold Border Edge Lines */}
            <div className="absolute inset-0 p-[1.5px] bg-gradient-to-br from-amber-300 via-amber-600 to-amber-200 rounded-[2rem] pointer-events-none z-0 opacity-80" />
            <div className="absolute inset-[1.5px] bg-[#0b0d0c] rounded-[1.95rem] z-0" />

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="flex justify-between items-center gap-4 border-b border-amber-500/10 pb-5 mb-8 mt-4">
                  <div>
                    <div className="inline-block bg-gradient-to-r from-amber-500/20 to-amber-400/10 border border-amber-500/40 text-amber-400 text-[9px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-full mb-2">
                      ★ Elite Tier
                    </div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent">
                      VIP Pass
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-amber-400 block">LKR 15,000</span>
                    <span className="text-xs text-stone-400">/ person</span>
                  </div>
                </div>

                {/* 2-Column internal grid with increased text scaling */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 mb-10">
                  {vipInclusions.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FiCheck className="text-amber-400 text-xs stroke-[3]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-stone-100 leading-tight">{item.title}</h4>
                        <p className="text-[13px] text-amber-100/70 mt-1 leading-snug">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="group w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-stone-950 font-extrabold text-sm uppercase tracking-wider py-4 rounded-xl transition-all duration-200 active:scale-[0.99]">
                ★ Book VIP Experience
                <FiArrowRight className="transform transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}