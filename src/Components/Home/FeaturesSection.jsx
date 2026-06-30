import React from 'react';
import { ClipboardList, ShieldCheck, GraduationCap, Shield, Smartphone, Star, ArrowUpRight } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <ClipboardList className="w-5 h-5 text-amber-700" />,
      title: "Fixed Regulated Prices",
      description: "LKR 7,500 Standard · LKR 15,000 VIP. Charged exactly as stated with zero hidden fees or surprises.",
      bgImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80" // Safari Clipboard/Jeep context
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-700" />,
      title: "Verified Drivers Only",
      description: "Every driver is ID-verified, park-licensed, and vetted by real travelers before joining our inner circle.",
      bgImage: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=600&q=80" // Driver/Jeep perspective
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-indigo-700" />,
      title: "Certified Wildlife Guides",
      description: "Our VIP guides hold official Sri Lanka Tourism credentials—true naturalists who read the wild.",
      bgImage: "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?auto=format&fit=crop&w=600&q=80" // Guide/Naturalist context
    },
    {
      icon: <Shield className="w-5 h-5 text-blue-700" />,
      title: "Comprehensive Insurance",
      description: "Both Standard and VIP tiers include premium activity insurance. Venture into the wild with total peace of mind.",
      bgImage: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=600&q=80" // Safety/Safari vehicle
    },
    {
      icon: <Smartphone className="w-5 h-5 text-teal-700" />,
      title: "100% Digital Booking",
      description: "Skip the gate negotiations. Secure your slot instantly online and get direct confirmation via WhatsApp.",
      bgImage: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80" // Smartphone/Digital context
    },
    {
      icon: <Star className="w-5 h-5 text-amber-600 fill-amber-500/10" />,
      title: "Strict Quality Standards",
      description: "Real-time guest ratings dictate platform placement. Drivers falling below our benchmark are removed instantly.",
      bgImage: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=600&q=80" // Ratings/Lion context
    }
  ];

  return (
    <section className="bg-white text-slate-800 py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Subtle modern background gradient spots */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-50/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-emerald-50/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6 border-b border-slate-100 pb-10">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-[0.25em] text-amber-700 uppercase block mb-3">
              Why Safari Hub
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
              The Standard Every Driver Is Held To
            </h2>
          </div>
          <p className="text-slate-500 text-base md:text-lg max-w-md leading-relaxed font-light">
            We built this to eliminate overpricing and unpredictable experiences at Udawalawe. This is our uncompromising commitment to you.
          </p>
        </div>

        {/* Modernized Grid inspired by "watermarked_img_14580467821230052639.png" */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group cursor-pointer relative h-80 rounded-2xl overflow-hidden bg-slate-50/50 border border-slate-100 p-8 flex flex-col justify-between transition-all duration-300 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:border-slate-200/80"
            >
              {/* Modern Image Fade Overlay Effect */}
              <div className="absolute cursor-pointer inset-0 z-0 pointer-events-none">
                <img 
                  src={feature.bgImage} 
                  alt={feature.title}
                  className="w-full h-full cursor-pointer object-cover object-center transition-all duration-700 ease-out opacity-[85%] scale-100 group-hover:scale-105 group-hover:opacity-[95%] mix-blend-multiply"
                />
                {/* Horizontal vignette fade similar to reference image 
                <div className="absolute inset-0 bg-gradient-to-r from-slate-50/90 via-transparent to-transparent group-hover:from-white/95" />*/}
              </div>

              {/* Top Row: Icon & Action arrow */}
              <div className="relative z-10 flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-slate-200">
                  {feature.icon}
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-300 transform translate-x-1 -translate-y-1 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-slate-400" />
              </div>

              {/* Bottom Row: Content stack */}
              <div className="relative z-10 mt-6">
                <h3 className="text-lg font-semibold text-amber-500 tracking-tight mb-2 transition-colors duration-300 group-hover:text-amber-500">
                  {feature.title}
                </h3>
                <p className="text-amber-100 text-sm leading-relaxed font-normal transition-colors duration-300 group-hover:text-amber-100">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;