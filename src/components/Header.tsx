'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    // Clean up on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);


  return (
    <nav className="shadow-lg sticky top-0 z-50 transition-transform duration-300  backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 relative">

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden flex items-center relative w-full">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`absolute z-41 flex items-center justify-center w-12 h-12 rounded-xl bg-white/80 shadow-lg font-extrabold transition-all duration-300
                ${isOpen ? 'left-76 top-2' : 'left-0 top-2'}`}
              aria-label="Toggle menu"
            >
              <span className={`block absolute w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? 'rotate-45 top-1/2' : '-translate-y-2'}`}></span>
              <span className={`block absolute w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block absolute w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? '-rotate-45 top-1/2' : 'translate-y-2'}`}></span>
            </button>
          </div>
          <div></div>{/* space for logo */}
           
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative group">
              <button className=" header-button-hover relative px-3 py-2 rounded transition-colors flex items-center">
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-[var(--pastel-purple)] shadow-lg rounded-lg mt-2 py-2 w-64 transition-all duration-300 delay-300">
                <Link href="/services/newborn" className="metallic-hover header-button-hover relative block px-4 py-2 rounded transition-colors">
                  Newborn
                </Link>
                <Link href="/services/maternity" className="metallic-hover header-button-hover relative block px-4 py-2 rounded transition-colors">
                  Maternity
                </Link>
                <Link href="/services/cake-smash" className="metallic-hover header-button-hover relative block px-4 py-2 rounded transition-colors">
                  Cake Smash
                </Link>
                <Link href="/services/baby-toddler" className="metallic-hover header-button-hover relative block px-4 py-2 rounded transition-colors">
                  Babies & Toddlers
                </Link>
                <Link href="/services/family" className="metallic-hover header-button-hover relative block px-4 py-2 rounded transition-colors">
                  Family
                </Link>
              </div>
            </div>

            <Link href="/studio" className="metallic-hover header-button-hover relative px-3 py-2 rounded transition-colors">
              Studio & Props
            </Link>
            <Link href="/blogs" className="metallic-hover header-button-hover relative px-3 py-2 rounded transition-colors">
              Blogs
            </Link>
            <Link href="/contact" className="metallic-hover header-button-hover relative px-3 py-2 rounded transition-colors">
              Contact Us
            </Link>
            <Link href="/about" className="metallic-hover header-button-hover relative px-3 py-2 rounded transition-colors">
              About Me
            </Link>
          </div>

          {/* Mobile Modal Menu & Backdrop */}
          <AnimatePresence>
            {isOpen && (
              <div className="absolute -left-4 top-0 w-[100vw] h-[100vh] z-40 flex items-start justify-start md:hidden">
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 w-full h-[100vh] backdrop-blur-lg"
                  onClick={() => setIsOpen(false)}
                />
                {/* Modal Side Menu */}
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ 
                    type: "tween", 
                    stiffness: 400, 
                    damping: 30,
                    duration: 0.3
                  }}
                  className="absolute top-0 left-0 h-screen w-[83vw] max-w-xs bg-[#b496b4] z-50 shadow-2xl rounded-r-2xl"
                >
                <div className="px-4 py-8 flex flex-col gap-2 text-gray-800 bg-[#b496b4]">
                  <Link
                    href="/"
                    onClick={handleLinkClick}
                    className="
                      flex items-center gap-3 text-base font-medium
                      rounded-lg
                      px-4 py-2
                      transition-colors duration-150
                      hover:bg-[#f3e9f4] focus:bg-[#f3e9f4]
                      active:bg-[#e5d3e8]
                      focus:outline-none
                    "
                  >
                    {/* Optional: Use a muted icon */}
                    {/* <FontAwesomeIcon icon={icons.home} className="text-lg text-gray-400" /> */}
                    Home
                  </Link>
                  <Link
                    href="/about"
                    onClick={handleLinkClick}
                    className="flex items-center gap-3 text-lg rounded-xl hover:bg-[#F4EFCA] transition-colors px-4 py-3"
                  >
                    About Me
                    
                  </Link>
                  {/* Services Dropdown */}
                  <div className="relative">
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="
                        flex items-center justify-between w-full text-base font-medium
                        rounded-lg px-4 py-2
                        transition-colors duration-150
                        hover:bg-[#f3e9f4] focus:bg-[#f3e9f4]
                        active:bg-[#e5d3e8]
                        focus:outline-none
                      "
                    >
                      <span className="flex items-center gap-3">
                        Services
                      </span>
                      <svg
                        className={`w-4 h-4 ml-1 transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className={`pl-4 mt-1 space-y-1 border-l-2 border-[#F66435] overflow-hidden transition-all duration-300 ${isServicesOpen ? 'max-h-96' : 'max-h-0'}`}>
                      <Link href="/services/newborn" onClick={handleLinkClick} className="block px-4 py-2 rounded-lg text-base font-normal hover:bg-[#f3e9f4] focus:bg-[#f3e9f4] transition-colors duration-150">Newborn</Link>
                      <Link href="/services/maternity" onClick={handleLinkClick} className="block px-4 py-2 rounded-lg text-base font-normal hover:bg-[#f3e9f4] focus:bg-[#f3e9f4] transition-colors duration-150">Maternity</Link>
                      <Link href="/services/cake-smash" onClick={handleLinkClick} className="block px-4 py-2 rounded-lg text-base font-normal hover:bg-[#f3e9f4] focus:bg-[#f3e9f4] transition-colors duration-150">Cake Smash</Link>
                      <Link href="/services/baby-toddler" onClick={handleLinkClick} className="block px-4 py-2 rounded-lg text-base font-normal hover:bg-[#f3e9f4] focus:bg-[#f3e9f4] transition-colors duration-150">Babies & Toddlers</Link>
                      <Link href="/services/family" onClick={handleLinkClick} className="block px-4 py-2 rounded-lg text-base font-normal hover:bg-[#f3e9f4] focus:bg-[#f3e9f4] transition-colors duration-150">Family</Link>
                    </div>
                  </div>
                  <Link
                    href="/studio"
                    onClick={handleLinkClick}
                    className="flex items-center gap-3 text-lg rounded-xl hover:bg-[#F4EFCA] transition-colors px-4 py-3"
                  >
                     Studio & Props
                  </Link>
                  <Link
                    href="/blogs"
                    onClick={handleLinkClick}
                    className="flex items-center gap-3 text-lg rounded-xl hover:bg-[#F4EFCA] transition-colors px-4 py-3"
                  >
                     Blogs 
                  </Link>
                  <Link
                    href="/contact"
                    onClick={handleLinkClick}
                    className="flex items-center gap-3 text-lg rounded-xl hover:bg-[#F4EFCA] transition-colors px-4 py-3"
                  >
                    Contact Us
                  </Link>
                </div>
              </motion.div>
            </div>
          )}
          </AnimatePresence>
          </div>
          </div>
        </nav>
      );
    }
