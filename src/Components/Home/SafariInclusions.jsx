import React from 'react';
// Icons සඳහා react-icons පාවිච්චි කරමු. (ඔයාට කැමති icons දාගන්න පුළුවන්)
import { 
  FiAward, FiCoffee, FiSun, FiRadio, 
  FiTruck, FiCamera, FiGift, FiMessageSquare 
} from 'react-icons/fi';

export default function SafariInclusions() {
  // සෙක්ෂන් එකේ තියෙන කාඩ්ස් 8 විස්තර සහිතව array එකක් ලෙස
  const inclusions = [
    {
      icon: <FiAward className="text-amber-500 text-2xl" />,
      title: "Tourist Board Certified Guide",
      desc: "An approved wildlife naturalist who knows every species, behaviour pattern and habitat in the park."
    },
    {
      icon: <FiCoffee className="text-amber-500 text-2xl" />,
      title: "Sri Lankan Rice & Curry Lunch",
      desc: "Authentic traditional meal cooked fresh, served with premium snacks and chilled drinks throughout."
    },
    {
      icon: <FiSun className="text-amber-500 text-2xl" />,
      title: "Sunrise Priority Entry",
      desc: "Guaranteed golden hour slot – first vehicles through the gates when the park is at its most magical."
    },
    {
      icon: <FiRadio className="text-amber-500 text-2xl" />,
      title: "Wildlife Tracker Radio",
      desc: "Dedicated radio network for live animal sightings – your driver knows exactly where the leopards are."
    },
    {
      icon: <FiTruck className="text-amber-500 text-2xl" />,
      title: "Door-to-Door Transfer",
      desc: "Luxury pickup from your hotel or villa – no tuk-tuks, no taxis, no hassle from start to finish."
    },
    {
      icon: <FiCamera className="text-amber-500 text-2xl" />,
      title: "Professional DSLR Photos",
      desc: "A photographer captures your best moments – edited, digital delivery after the trip. No extra cost."
    },
    {
      icon: <FiGift className="text-amber-500 text-2xl" />,
      title: "Souvenir Gift Bag",
      desc: "Wildlife guide book, postcards & handcrafted local keepsakes to take home."
    },
    {
      icon: <FiMessageSquare className="text-amber-500 text-2xl" />,
      title: "WhatsApp Concierge",
      desc: "A dedicated Safari Hub contact manages everything personally – before, during, and after your day."
    }
  ];

  return (
    <section className="bg-[#0b0f0b] text-white py-16 px-6 sm:py-24 sm:px-12 lg:px-20 relative overflow-hidden">
      
      {/* Background Glow Effect */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0">
        <div className="w-[600px] h-[300px] bg-amber-600/5 blur-[150px] rounded-full bottom-0"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        
        {/* Top Mini Tag */}
        <span className="text-xs font-semibold tracking-widest text-amber-500 uppercase block mb-3">
          ★ The Premium Experience
        </span>

        {/* Section Headline */}
        <h2 className="title-font text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 max-w-3xl mx-auto leading-tight">
          This Isn't Just a Safari. <br />
          It's a <span className="text-amber-500 italic font-serif font-medium">Curated Encounter.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-stone-400 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed mb-12 sm:mb-16">
          Eight exclusive inclusions that transform a great safari into a story you'll tell for the rest of your life.
        </p>

        {/* Inclusions Responsive Grid */}
        {/* Mobile: 1 col | Tablet: 2 cols | Laptop: 3 cols | Desktop: 4 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
          {inclusions.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#121812]/60 border border-stone-800/60 hover:border-amber-500/30 p-6 rounded-xl flex flex-col items-center text-center sm:items-start sm:text-left transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm group"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors duration-300">
                <span className="group-hover:text-stone-950 transition-colors">
                  {item.icon}
                </span>
              </div>

              {/* Card Title */}
              <h3 className="font-semibold text-lg text-stone-100 mb-2 tracking-wide">
                {item.title}
              </h3>

              {/* Card Description */}
              <p className="text-stone-400 text-sm font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Call-To-Action Button */}
        <div className="mt-14 sm:mt-16 flex flex-col items-center gap-3">
          <button className="cursor-pointer inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-sm tracking-wider px-8 py-4 rounded-full transition-all duration-200 shadow-xl shadow-amber-500/10 active:scale-95 uppercase">
            ★ Reserve Your VIP Safari — LKR 15,000
          </button>
          <span className="text-[11px] text-stone-500 tracking-wide uppercase">
            Limited VIP slots daily · All 8 inclusions guaranteed · Instant WhatsApp confirmation
          </span>
        </div>

      </div>
    </section>
  );
}