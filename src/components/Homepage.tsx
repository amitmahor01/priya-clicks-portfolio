"use client"
import Link from 'next/link';
import PhotoCarousel from './PhotoCarousel';
import useHomepage from './hooks/useHomepage';
import HomepageTiles from './homepage/HomepageTiles';


export default function HomePage() {
  const { data, loading, error } = useHomepage();

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative h-auto md:h-[calc(100vh-20rem)]">
        <div className="relative md:static inset-0 flex flex-col justify-center items-center text-center px-2 md:px-4 mt-8 md:mt-40">
          <h1 className="lavishly-yours-regular text-4xl sm:text-4xl md:text-6xl font-extrabold mb-2 md:mb-4">
            Priya Clicks Photography
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-secondary mb-4 md:mb-8 max-w-xs sm:max-w-2xl">
            Capturing life&apos;s most precious moments - from maternity to childhood
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 p-2 sm:p-4 w-full sm:w-auto">
            <Link
              href="/portfolio"
              className="body-button-hover meta-font text-base sm:text-xl font-bold px-4 py-2 sm:px-6 sm:py-3 rounded-lg group inline-flex items-center justify-center"
            >
              Book a Session
              <span
                className="ml-2 mt-3 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-[-8px] transition-all duration-300 flex-shrink-0"
                style={{ display: "inline-flex" }}
              >
                {/* multicolored camera svg */}
                <span className="w-8 mt-1 h-8 inline-block flex-shrink-0">
                  <svg viewBox="0 0 64 64" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6" y="18" width="52" height="34" rx="6" fill="#B2B5E0" />
                    <rect x="14" y="10" width="12" height="8" rx="2" fill="#F66435" />
                    <circle cx="32" cy="35" r="12" fill="#C5ADC5" />
                    <circle cx="32" cy="35" r="7" fill="#fff" />
                    <rect x="48" y="24" width="6" height="6" rx="2" fill="#F4EFCA" />
                    <rect x="10" y="24" width="6" height="6" rx="2" fill="#F4EFCA" />
                    <rect x="24" y="44" width="16" height="4" rx="2" fill="#F66435" />
                    <ellipse cx="32" cy="35" rx="4" ry="4" fill="#B2B5E0" opacity="0.5" />
                    <rect x="6" y="18" width="52" height="34" rx="6" stroke="#1a1a1a" strokeWidth="2" />
                    <circle cx="32" cy="35" r="12" stroke="#1a1a1a" strokeWidth="2" />
                  </svg>
                </span>
              </span>
            </Link>
          </div>
        </div>
      </section>
      <div className="px-10 py-8 md:px-8 md:py-8 pt-4 md:pt-0">
        <PhotoCarousel />
      </div>
      {/* Spacer to prevent overlap */}
      <div className="relative z-10  h-6"></div>

      {/* Main Content Container */}
      <div className="">
        {/* Featured Categories Section */}
        <section className="py-12 px-4 max-w-7xl mx-auto">
          <h2 className="heading-font text-4xl font-bold text-center mb-2 text-primary">
            Explore Our Services
          </h2>
          <HomepageTiles data={data || []} loading={loading} error={error} />
          <div className='flex items-center justify-center p-4 mt-5'>
              <Link
                href="/all-services"
                className="body-button-hover w-auto meta-font text-lg font-bold px-6 py-3 rounded-lg group flex items-center"
              >
                view more
              </Link>
            </div>
        </section>


      {/* Spacer to prevent overlap */}
      <div className="relative z-10  h-2"></div>

        {/* About Section */}
        <section className="py-16 px-4 ">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-font text-4xl font-bold mb-6 text-primary">
              About My Work
            </h2>
            <p className="text-lg text-gray-800 mb-8">
              Specializing in maternity, portrait, and infant photography, I create timeless memories
              that capture the beauty of life&apos;s most precious stages. With a gentle touch and artistic
              eye, I help families preserve their most cherished moments in stunning detail.
            </p>
            <div className='flex items-center justify-center p-4'>
              <Link
                href="/about"
                className="body-button-hover w-auto meta-font text-xl font-bold px-6 py-3 rounded-lg group flex items-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
