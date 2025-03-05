import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const featuredCategories = [
    {
      title: 'Maternity',
      image: '/images/maternity/featured.jpg',
      link: '/portfolio/maternity'
    },
    {
      title: 'Portraits',
      image: '/images/portraits/featured.jpg',
      link: '/portfolio/portraits'
    },
    {
      title: 'Infant',
      image: '/images/infant/featured.jpg',
      link: '/portfolio/infant'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F4EFCA] text-black">
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="/images/hero.jpg"
          alt="Photography Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            Priya Clicks Photography
          </h1>
          <p className="text-lg md:text-xl text-secondary mb-8 max-w-2xl">
            Capturing life's most precious moments - from maternity to childhood
          </p>
          <div className="flex gap-4">
            <Link
              href="/portfolio"
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-[#D4532D] transition-colors"
            >
              View Portfolio
            </Link>
            <Link
              href="/contact"
              className="bg-secondary text-gray-800 px-6 py-3 rounded-lg hover:bg-[#E4DFBA] transition-colors"
            >
              Book a Session
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">
          Specialized Photography Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCategories.map((category, index) => (
            <Link
              key={index}
              href={category.link}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-end p-6">
                <h3 className="text-2xl font-bold text-secondary">
                  {category.title} Photography
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">
            About My Work
          </h2>
          <p className="text-lg text-gray-800 mb-8">
            Specializing in maternity, portrait, and infant photography, I create timeless memories
            that capture the beauty of life's most precious stages. With a gentle touch and artistic
            eye, I help families preserve their most cherished moments in stunning detail.
          </p>
          <Link
            href="/about"
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-[#D4532D] transition-colors"
          >
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
}
