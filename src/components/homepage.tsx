"use client"
import Image from 'next/image';
import Link from 'next/link';
import PhotoCarousel from './PhotoCarousel';
import useHomepage from './hooks/useHomepage';

type Category = {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
};

export default function HomePage() {
  const { data, loading, error } = useHomepage();

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-20rem)]">
        <div className="absolute md:mt-50 inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="heading-font text-4xl md:text-6xl font-bold text-primary mb-4">
            Priya Clicks Photography
          </h1>
          <p className="text-lg md:text-xl text-secondary mb-8 max-w-2xl">
            Capturing life&apos;s most precious moments - from maternity to childhood
          </p>
          <div className="flex gap-4 p-4">
            <Link
              href="/portfolio"
              className="body-button-hover meta-font text-xl font-bold px-6 py-3 rounded-lg group flex items-center"
            >
              Book a Session
              <span
                className="ml-2 mt-3 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-[-8px] transition-all duration-300"
                style={{ display: "inline-flex" }}
              >
                {/* multicolored camera svg */}
                <span className="w-8 mt-1 h-8 inline-block">
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
      <div className=' mt-30 px-8 py-8 '>
        <PhotoCarousel />
      </div>
      {/* Spacer to prevent overlap */}
      <div className="relative z-10  h-16"></div>

      {/* Main Content Container */}
      <div className="">
        {/* Featured Categories Section */}
        <section className="py-12 px-4 max-w-7xl mx-auto">
          <h2 className="heading-font text-4xl font-bold text-center mb-2 text-primary">
            Explore Our Services
          </h2>
          {loading && (
            <div className="text-center text-lg text-gray-500">Loading categories...</div>
          )}
          {error && (
            <div className="text-center text-lg text-red-500">{error}</div>
          )}
          {!loading && !error && Array.isArray(data) && (
            <div className="grid grid-cols-1 mt-10 text-gray-300 md:grid-cols-3 gap-8">
              {data.map((category: Category) => (
                <Link
                  key={category.id}
                  href={`/gallery?category=${encodeURIComponent(category.name)}`}
                  className="group relative aspect-square overflow-hidden rounded-lg shadow-lg"
                  title={category.description}
                >
                  <Image
                    src={category.thumbnail}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/35 flex items-end p-6">
                    <h3 className="text-xl font-bold text-secondary">
                      {category.name} Photography
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

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
