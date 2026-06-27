import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll behavior to toggle the navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out px-6 py-4 md:px-12 ${
        isScrolled
          ? 'bg-[#131913]/90 backdrop-blur-md shadow-lg  py-3'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left Corner: Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-xl font-bold tracking-wider text-white group-hover:text-amber-500 transition-colors">
            Udawalawe <span className="text-amber-500 group-hover:text-white transition-colors">Safari Hub</span>
          </span>
        </a>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm tracking-wide">
          <a href="#vip" className="text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors animate-pulse">
            ★ VIP
          </a>
          <a href="#packages" className="text-zinc-200 hover:text-amber-500 transition-colors">
            Packages
          </a>
          <a href="#included" className="text-zinc-200 hover:text-amber-500 transition-colors">
            What's Included
          </a>
          <a href="#pricing" className="text-zinc-200 hover:text-amber-500 transition-colors">
            Pricing
          </a>
          <a href="#reviews" className="text-zinc-200 hover:text-amber-500 transition-colors">
            Reviews
          </a>
          <a href="#contact" className="text-zinc-200 hover:text-amber-500 transition-colors">
            Contact
          </a>
        </div>

        {/* Right Corner: Book Now Button */}
        <div>
          <a
            href="#book"
            className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-[#131913] font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 shadow-md shadow-amber-500/10 active:scale-95"
          >
            Book Now
          </a>
        </div>

      </div>
    </nav>
  );
}