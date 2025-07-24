'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [show, setShow] = useState(true);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <nav
      className={` shadow-lg sticky top-0 z-50 transition-transform duration-300
        ${show ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">

          {/* Hamburger Icon for Mobile */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div></div>{/* space for logo */}
           
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="metallic-hover header-button-hover relative px-3 py-2 rounded transition-colors flex items-center">
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

          {/* Mobile Side Menu */}
          <div
            className={`fixed inset-y-0 right-0 w-64 bg-[var(--pastel-purple)] shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
              } transition-transform duration-300 ease-in-out md:hidden z-50`}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-800 "
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="px-4 py-4">
              <Link
                href="/"
                onClick={handleLinkClick}
                className="metallic-hover header-button-hover relative block px-3 py-2 rounded transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={handleLinkClick}
                className="metallic-hover header-button-hover relative px-3 py-2 rounded transition-colors"
              >
                About Me
              </Link>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="w-full text-left text-gray-800  px-3 py-2 rounded flex items-center justify-between"
                >
                  Services
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
                  <Link
                    href="/services/maternity"
                    onClick={handleLinkClick}
                    className="metallic-hover header-button-hover relative block px-3 py-2 rounded transition-colors"
                  >
                    Maternity Photography
                  </Link>
                  <Link
                    href="/services/maternity-outdoor"
                    onClick={handleLinkClick}
                    className="metallic-hover header-button-hover relative block px-3 py-2 rounded transition-colors"
                  >
                    Maternity Outdoor Photography
                  </Link>
                  <Link
                    href="/services/pregnancy"
                    onClick={handleLinkClick}
                    className="metallic-hover header-button-hover relative block px-3 py-2 rounded transition-colors"
                  >
                    Pregnancy Photoshoot
                  </Link>
                  <Link
                    href="/services/newborn"
                    onClick={handleLinkClick}
                    className="metallic-hover header-button-hover relative block px-3 py-2 rounded transition-colors"
                  >
                    Newborn Photography
                  </Link>
                  <Link
                    href="/services/baby-shoot"
                    onClick={handleLinkClick}
                    className="metallic-hover header-button-hover relative block px-3 py-2 rounded transition-colors"
                  >
                    Baby Shoot
                  </Link>
                  <Link
                    href="/services/baby-photography"
                    onClick={handleLinkClick}
                    className="metallic-hover header-button-hover relative block px-3 py-2 rounded transition-colors"
                  >
                    Baby Photography (1 - 6 Month)
                  </Link>
                  <Link
                    href="/services/family"
                    onClick={handleLinkClick}
                    className="metallic-hover header-button-hover relative block px-3 py-2 rounded transition-colors"
                  >
                    Family Photography
                  </Link>
                  <Link
                    href="/services/growing-baby"
                    onClick={handleLinkClick}
                    className="metallic-hover header-button-hover relative block px-3 py-2 rounded transition-colors"
                  >
                    Growing Baby Photoshoot
                  </Link>
                </div>
              </div>

              <Link
                href="/studio"
                onClick={handleLinkClick}
                className="metallic-hover header-button-hover relative block px-3 py-2 rounded transition-colors"
              >
                Studio & Props
              </Link>
              {/* Cinematography section, in case you want to showcase video shoots! 
             <Link 
                href="/cinematography" 
                onClick={handleLinkClick}
                className="block text-gray-800 hover:bg-[#F66435] hover:text-white transition-colors px-3 py-2 rounded"
              >
                Cinematography
              </Link>*/}
              <Link
                href="/blogs"
                onClick={handleLinkClick}
                className="metallic-hover header-button-hover relative block px-3 py-2 rounded transition-colors"
              >
                Blogs
              </Link>
              <Link
                href="/contact"
                onClick={handleLinkClick}
                className="metallic-hover header-button-hover relative block px-3 py-2 rounded transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Overlay for clicking outside */}
          {isOpen && (
            <div
              className="fixed inset-0 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
          )}
        </div>
      </div>
    </nav>
  );
}
