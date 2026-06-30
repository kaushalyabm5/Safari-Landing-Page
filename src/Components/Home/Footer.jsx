import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--green-color)] text-[#f4efe6] pt-16 pb-8 px-6 md:px-12 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Brand Identity / Logo Section */}
        <div className="flex items-center justify-center gap-2 mb-4 group">
          {/* Minimalist Wild Leaf Icon */}
          
          <h2 className="text-xl md:text-2xl tracking-wide">
            Udawalawe <span className="text-[#dca134] font-semibold">Safari Hub</span>
          </h2>
        </div>

        {/* Brand Mission Subtext */}
        <p className="text-sm text-[#f4efe6]/60 max-w-xl mb-8 leading-relaxed">
          Sri Lanka's only regulated digital safari booking platform for Udawalawe National Park.
        </p>

        {/* Navigation Menu Links */}
        <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mb-12 text-sm font-medium text-[#f4efe6]/80">
          {[
            { label: "Home", href: "#" },
            { label: "VIP Safari", href: "#" },
            { label: "Packages", href: "#" },
            { label: "What's Included", href: "#" },
            { label: "Pricing", href: "#" },
            { label: "Book Now", href: "#" },
            { label: "Contact", href: "#" }
          ].map((link, idx) => (
            <a 
              key={idx} 
              href={link.href} 
              className="hover:text-[#dca134] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#dca134] hover:after:w-full after:transition-all after:duration-300 pb-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Bottom Legal bar & Admin Actions */}
        <div className="w-full pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* Copyright Notice */}
          <p className="text-xs text-center text-[#f4efe6]/40 order-2 sm:order-1">
            © {currentYear} Udawalawe Safari Hub. All rights reserved.
          </p>

          {/* Admin Dashboard Action Trigger */}
         

        </div>
      </div>
    </footer>
  );
}