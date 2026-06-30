import React from 'react';
// Importing a clean arrow icon from react-icons
import { FiArrowRight } from 'react-icons/fi';

export default function HomeHero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 sm:px-8 overflow-hidden bg-transparent py-20">
      
      {/* Dark Overlay to tone down the background image underneath */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none z-0" />

      {/* Warm Golden Safari Sunlight Glow Effect */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0">
        <div className="absolute w-[800px] h-[400px] rounded-[50%] bg-amber-600/10 blur-[120px] top-[-120px]"></div>
        <div className="absolute w-[1000px] h-[300px] border-t border-amber-500/10 rounded-[50%] top-12 blur-[2px]"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Top pill badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 mb-6 rounded-full border border-amber-500/20 bg-amber-500/10 backdrop-blur-md text-xs font-medium text-amber-400 tracking-widest uppercase">
          <span className="text-[10px]">🌿</span> The Ultimate Wilderness Experience
        </div>

 {/* Main Headline - Cinematic Luxury Edition */}
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-medium tracking-[0.25em] uppercase text-stone-300 max-w-5xl leading-none mb-4">
  Witness Raw Nature At
  <span className="block mt-4 font-serif text-amber-500 font-normal tracking-tight normal-case text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-[0.9]">
    Udawalawe Safari Hub
  </span>
</h1>

        {/* Subtitle / Description - ටැබ්ලට් වලදී කියවන්න ලේසි වෙන්න text-base සහ max-w-2xl දැම්මා */}
        <p className="text-sm sm:text-base md:text-[1.1rem] text-stone-300 max-w-2xl mx-auto font-light leading-relaxed tracking-wide mb-8">
          Embark on expert-guided private expeditions through untamed wetlands. Discover majestic elephant herds, elusive leopards, and exotic wildlife in their natural habitat.
        </p>

        {/* New Styled Pricing & Info Badge - ටැබ්ලට් වල තෙරපෙන්නේ නැති වෙන්න flex-wrap සහ gap වෙනස් කළා */}
        <div className="inline-flex items-center flex-wrap justify-center gap-x-3 gap-y-2 px-5 py-2.5 mb-10 rounded-2xl sm:rounded-full border border-stone-700/40 bg-stone-900/45 backdrop-blur-sm text-[11px] md:text-xs font-medium text-stone-300 tracking-widest uppercase max-w-md sm:max-w-none">
          <span>Standard from <span className="text-amber-400 font-semibold">LKR 7,500</span></span>
          <span className="hidden sm:inline text-stone-600 font-normal">·</span>
          <span>VIP from <span className="text-amber-400 font-semibold">LKR 15,000</span></span>
          <span className="hidden md:inline text-stone-600 font-normal">·</span>
          <span className="text-stone-400 block sm:inline w-full sm:w-auto">No haggling · No surprises</span>
        </div>

        {/* Call to Actions - මොබයිල් සහ ටැබ්ලට් වල බටන් දෙක ලස්සනට පෙළගැස්සුවා */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Primary CTA with React Icon */}
          <button className="group cursor-pointer inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-sm tracking-wide px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-amber-500/10 active:scale-95 w-full sm:w-auto">
            Book Standard Safari
            <FiArrowRight className="text-base transform transition-transform duration-200 group-hover:translate-x-1" />
          </button>

          {/* Secondary CTA with VIP Pulsing Star */}
          <button className="group cursor-pointer inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 border border-stone-600 hover:border-amber-500/40 text-stone-200 hover:text-white font-medium text-sm tracking-wide px-7 py-3.5 rounded-full transition-all duration-200 active:scale-95 w-full sm:w-auto">
            <span className="text-amber-400 animate-pulse">★</span>
            Explore VIP Experience
          </button>
        </div>

      </div>
    </section>
  );
}