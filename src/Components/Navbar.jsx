import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  const menuVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } 
    },
    exit: { 
      opacity: 0, 
      y: "-100%",
      transition: { duration: 0.3, ease: "easeInOut" } 
    }
  };

  const navLinks = [
    { href: "#vip", label: "★ VIP", isVip: true },
    { href: "#packages", label: "Packages" },
    { href: "#included", label: "What's Included" },
    { href: "#pricing", label: "Pricing" },
    { href: "#reviews", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out px-6 py-4 lg:px-12 ${
          isScrolled
            ? 'bg-[var(--green-color)] shadow-lg py-3'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group z-50">
            <span className="text-xl font-bold tracking-wider text-white group-hover:text-amber-500 transition-colors">
              Udawalawe <span className="text-amber-500 group-hover:text-white transition-colors">Safari Hub</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8 font-medium text-sm tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={link.isVip 
                  ? "text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors animate-pulse"
                  : "text-zinc-200 hover:text-amber-500 transition-colors"
                }
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="hidden lg:block">
            <a
              href="#book"
              className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-[#131913] font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 shadow-md shadow-amber-500/10 active:scale-95"
            >
              Book Now
            </a>
          </div>

          {/* Mobile & Tablet Hamburger Button */}
          <div className="lg:hidden z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-amber-500 transition-colors focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>
      </nav>

      {/* Full-Screen Mobile & Tablet Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-[var(--green-color)] z-40 flex flex-col items-center justify-center h-screen w-screen lg:hidden px-6"
          >
            {/* Links Container: මෙතන gap එක සහ padding ටැබ්ලට් වලට ගැලපෙන්න වැඩි කළා */}
            <div className="flex flex-col items-center gap-5 sm:gap-8 font-semibold tracking-wide w-full max-w-sm">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  // සාමාන්‍ය මොබයිල් වලදී text-xl සහ iPad/Tablets වලදී text-2xl සහ පුළුල් ඉඩක් (py-2) ලැබෙනවා
                  className={`${
                    link.isVip 
                      ? "text-amber-400 hover:text-amber-300 animate-pulse text-2xl sm:text-3xl"
                      : "text-zinc-200 hover:text-amber-500 transition-colors text-xl sm:text-2xl"
                  } py-2 w-full text-center border-b border-white/5 sm:border-none`}
                >
                  {link.label}
                </a>
              ))}
              
              {/* Mobile/Tablet Book Now Button */}
              <a
                href="#book"
                onClick={() => setIsOpen(false)}
                className="mt-6 inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-[#131913] font-bold text-base sm:text-lg px-8 py-3 sm:px-10 sm:py-3.5 rounded-full transition-all duration-200 shadow-md shadow-amber-500/10 active:scale-95 w-full text-center"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}