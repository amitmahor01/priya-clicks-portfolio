import Link from 'next/link';

export default function Header() {
  return (
    <nav className="bg-[#F4EFCA] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-[#F66435] text-xl font-bold">
              Priya Clicks
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-800 hover:bg-[#F66435] hover:text-white transition-colors px-3 py-2 rounded">
              Home
            </Link>
            <Link href="/about" className="text-gray-800 hover:bg-[#F66435] hover:text-white transition-colors px-3 py-2 rounded">
              About Me
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-gray-800 hover:bg-[#F66435] hover:text-white transition-colors flex items-center px-3 py-2 rounded">
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-[#F4EFCA] shadow-lg rounded-lg mt-2 py-2 w-64 transition-all duration-300 delay-300">
                <Link href="/services/maternity" className="block px-4 py-2 text-gray-800 hover:bg-[#F66435] hover:text-white transition-colors">
                  Maternity Photography
                </Link>
                <Link href="/services/maternity-outdoor" className="block px-4 py-2 text-gray-800 hover:bg-[#F66435] hover:text-white transition-colors">
                  Maternity Outdoor Photography
                </Link>
                <Link href="/services/pregnancy" className="block px-4 py-2 text-gray-800 hover:bg-[#F66435] hover:text-white transition-colors">
                  Pregnancy Photoshoot
                </Link>
                <Link href="/services/newborn" className="block px-4 py-2 text-gray-800 hover:bg-[#F66435] hover:text-white transition-colors">
                  Newborn Photography
                </Link>
                <Link href="/services/baby-shoot" className="block px-4 py-2 text-gray-800 hover:bg-[#F66435] hover:text-white transition-colors">
                  Baby Shoot
                </Link>
                <Link href="/services/baby-photography" className="block px-4 py-2 text-gray-800 hover:bg-[#F66435] hover:text-white transition-colors">
                  Baby Photography (1 - 6 Month)
                </Link>
                <Link href="/services/family" className="block px-4 py-2 text-gray-800 hover:bg-[#F66435] hover:text-white transition-colors">
                  Family Photography
                </Link>
                <Link href="/services/growing-baby" className="block px-4 py-2 text-gray-800 hover:bg-[#F66435] hover:text-white transition-colors">
                  Growing Baby Photoshoot
                </Link>
              </div>
            </div>

            <Link href="/studio" className="text-gray-800 hover:bg-[#F66435] hover:text-white transition-colors px-3 py-2 rounded">
              Studio & Props
            </Link>
            <Link href="/cinematography" className="text-gray-800 hover:bg-[#F66435] hover:text-white transition-colors px-3 py-2 rounded">
              Cinematography
            </Link>
            <Link href="/blogs" className="text-gray-800 hover:bg-[#F66435] hover:text-white transition-colors px-3 py-2 rounded">
              Blogs
            </Link>
            <Link href="/contact" className="text-gray-800 hover:bg-[#F66435] hover:text-white transition-colors px-3 py-2 rounded">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
