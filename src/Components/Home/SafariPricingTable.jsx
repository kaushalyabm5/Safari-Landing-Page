import React from 'react';
import { FiCheck, FiMinus } from 'react-icons/fi';
// 1. Import the background image
import bgImg from '../../assets/images/bg-img-1.png';

export default function SafariPricingTable() {
  const tableData = [
    {
      packageName: "Morning Safari",
      time: "6:00 AM - 10:00 AM",
      duration: "4 Hrs",
      standardPrice: "LKR 7,500",
      vipPrice: "LKR 15,000",
      standardIncludes: ["Private Jeep", "Binoculars", "Snacks", "Insurance", "Driver"],
      vipAdds: ["Guide", "Sunrise", "Photos", "Transfer", "Concierge"]
    },
    {
      packageName: "Evening Safari",
      time: "2:30 PM - 6:30 PM",
      duration: "4 Hrs",
      standardPrice: "LKR 7,500",
      vipPrice: "LKR 15,000",
      standardIncludes: ["Private Jeep", "Binoculars", "Snacks", "Insurance", "Driver"],
      vipAdds: ["Guide", "Tracker", "Photos", "Transfer", "Concierge"]
    },
    {
      packageName: "Full Day Safari",
      time: "6:00 AM - 6:00 PM",
      duration: "12 Hrs",
      standardPrice: "LKR 7,500",
      vipPrice: "LKR 15,000",
      standardIncludes: ["Private Jeep", "Binoculars", "Snacks", "Insurance", "Driver"],
      vipAdds: ["Guide", "Lunch", "Tracker", "Photos", "Gift Bag", "Transfer", "Concierge"]
    }
  ];

  return (
    /* 2. Added relative, bg-cover, bg-center classes and the inline style for overlay + image */
    <section 
      className="relative text-white py-16 px-4 sm:py-24 sm:px-8 lg:px-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(var(--green-color-rgb, 17, 22, 17), 0.85), rgba(var(--green-color-rgb, 17, 22, 17), 0.85)), url(${bgImg})`
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest text-emerald-500 uppercase block mb-3">
            ■ REGULATED PRICING
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            Fixed. Fair. Transparent.
          </h2>
          <p className="text-stone-400 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            No negotiation at the park gate. The price you see here is what you pay — always.
          </p>
          
          {/* Unregulated warning badge */}
          <div className="inline-block mt-6 bg-amber-500/10 border border-amber-500/20 rounded-lg px-4 py-2 text-xs text-amber-400 tracking-wide">
            Unregulated street drivers charge <span className="font-semibold line-through text-stone-500">LKR 8,500 - 15,000</span> with zero guarantees. We fix it, verify it, and include everything.
          </div>
        </div>

        {/* Comparison Table Container */}
        <div className="w-full overflow-x-auto rounded-xl border border-stone-800 bg-[#111611]/60 backdrop-blur-none shadow-2xl custom-scrollbar">
          <table className="w-full text-left border-collapse min-w-[800px]">
            
            {/* Table Header */}
            <thead>
              <tr className="border-b border-stone-800 text-[11px] font-bold tracking-widest uppercase text-stone-400 bg-stone-900/50">
                <th className="py-4 px-6">Package</th>
                <th className="py-4 px-6 text-stone-300">Standard</th>
                <th className="py-4 px-6 text-amber-400">★ VIP</th>
                <th className="py-4 px-6">Standard Includes</th>
                <th className="py-4 px-6 text-amber-500/80">VIP Adds</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-stone-800/60 text-sm">
              {tableData.map((row, index) => (
                <tr key={index} className="hover:bg-white/[0.02] transition-colors">
                  
                  {/* Package Column */}
                  <td className="py-5 px-6">
                    <div className="font-bold text-stone-100 text-base">{row.packageName}</div>
                    <div className="text-xs text-stone-400 font-light mt-0.5">{row.time}</div>
                    <div className="text-[11px] text-stone-500 uppercase tracking-wider mt-1">{row.duration}</div>
                  </td>

                  {/* Standard Price */}
                  <td className="py-5 px-6 font-semibold text-stone-200 text-base">
                    {row.standardPrice}
                  </td>

                  {/* VIP Price */}
                  <td className="py-5 px-6 font-bold text-amber-400 text-base">
                    {row.vipPrice}
                  </td>

                  {/* Standard Includes Tags */}
                  <td className="py-5 px-6 max-w-xs">
                    <div className="flex flex-wrap gap-1.5">
                      {row.standardIncludes.map((inc, i) => (
                        <span key={i} className="text-[10px] bg-stone-800/60 text-stone-300 px-2 py-0.5 rounded-md border border-stone-700/30">
                          {inc}
                        </span>
                      ))}
                    </div>
                  </td>

                  {/* VIP Adds Tags */}
                  <td className="py-5 px-6 max-w-sm">
                    <div className="flex flex-wrap gap-1.5">
                      {row.vipAdds.map((add, i) => (
                        <span key={i} className="text-[10px] bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded-md border border-amber-500/20 font-medium">
                          + {add}
                        </span>
                      ))}
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* Table Bottom Caption */}
        <div className="mt-4 text-right">
          <span className="text-[11px] text-stone-500 italic">
            * All prices are net, inclusive of park tickets, luxury jeep, government taxes and tracking services.
          </span>
        </div>

      </div>
    </section>
  );
}