import React, { useState, useEffect } from "react";

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle button visibility based on scroll depth
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smooth scroll handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={scrollToTop}
        className={`
          flex cursor-pointer items-center justify-center
          w-12 h-12 rounded-xl
          bg-[var(--green-color)] text-[#dca134]
          border border-[#dca134]/30 hover:border-[#dca134]
          shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5)]
          transition-all duration-300 ease-in-out group
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
        `}
        aria-label="Scroll to top"
      >
        {/* Modern Minimalist Chevron/Arrow that shifts slightly up on hover */}
        <svg 
          className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform duration-300" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M4.5 15.75l7.5-7.5 7.5 7.5" 
          />
        </svg>

        {/* Subtle decorative inner tracking circle ring */}
        <div className="absolute inset-0.5 rounded-[10px] border border-[#dca134]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </button>
    </div>
  );
}