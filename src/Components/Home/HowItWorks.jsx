import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Choose Your Safari",
      description: "Standard or VIP, morning, evening or full day. Done in minutes online."
    },
    {
      number: "2",
      title: "We Assign Your Jeep",
      description: "We match you with a verified driver (and certified guide for VIP). WhatsApp confirmation within 2 hours."
    },
    {
      number: "3",
      title: "Meet Your Team",
      description: "VIP guests get picked up at their hotel. Standard guests meet at the agreed point. Jeep is stocked and ready."
    },
    {
      number: "4",
      title: "Into the Wild",
      description: "250+ elephants, leopards, crocodiles, 200+ bird species. Your guide knows exactly where to find them."
    }
  ];

  return (
    <section className="bg-[#FAF7F2] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Subtitle */}
        <p className="text-[#C6923F] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
          Simple Process
        </p>
        
        {/* Main Title */}
        <h2 className="text-[#1A331E] text-4xl md:text-5xl font-medium mb-4">
          How It Works
        </h2>
        
        {/* Description */}
        <p className="text-[#555555] text-base md:text-lg max-w-2xl mx-auto mb-16">
          Book digitally in under 3 minutes. We handle everything else.
        </p>

        {/* Process Steps Timeline */}
        <div className="relative mt-12">
          {/* Horizontal Connector Line */}
          <div className="absolute top-[26px] left-[12%] right-[12%] h-[1.5px] bg-[#C6923F]/60 hidden md:block" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center px-2">
                
                {/* Number Circle */}
                <div className="w-[52px] h-[52px] rounded-full bg-[#1A331E] border-2 border-[#C6923F] flex items-center justify-center mb-6 shadow-sm">
                  <span className="text-white text-lg font-semibold">
                    {step.number}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-[#1A331E] text-xl font-bold mb-3">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-[#555555] text-sm leading-relaxed max-w-[260px]">
                  {step.description}
                </p>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;