import Image from 'next/image';
import Link from 'next/link';
import Carousel from './carousel';
import infantPhotography from '../../assests/specialized/infantPhotography.webp';
import portraitPhotography from '../../assests/specialized/portraitsPhotography.webp';
import maternityPhotography from '../../assests/specialized/maternityPhotography.webp';


export default function HomePage() {

  const featuredCategories = [
    {
      title: 'Maternity',
      image: maternityPhotography,
      link: '/portfolio/maternity'
    },
    {
      title: 'Portraits',
      image: portraitPhotography,
      link: '/portfolio/portraits'
    },
    {
      title: 'Infant',
      image: infantPhotography,
      link: '/portfolio/infant'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F4EFCA] text-black">
      
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-20rem)]">
        
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 bg-primary-80">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            Priya Clicks Photography
          </h1>
          <p className="text-lg md:text-xl text-secondary mb-8 max-w-2xl">
            Capturing life's most precious moments - from maternity to childhood
          </p>
          <div className="flex gap-4">
            <Link
              href="/portfolio"
              className="bg-primary font-bold px-6 py-3 rounded-lg hover:bg-[#D4532D] hover:text-white transition-colors"
            >
              Book a Session
            </Link>
          </div>
        </div>
      </section>
      <Carousel/>

      {/* Spacer to prevent overlap */}
      <div className="relative z-10 bg-[#F4EFCA] h-16"></div>

      {/* Main Content Container */}
      <div className="bg-[#F4EFCA]">
        {/* Featured Categories Section */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">
            Specialized Photography Services
          </h2>
          <div className="grid grid-cols-1 text-gray-300 md:grid-cols-3 gap-8">
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
                <div className="absolute inset-0 bg-black/35 flex items-end p-6">
                  <h3 className="text-xl font-bold text-secondary">
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
              className="bg-primary font-bold px-6 py-3 rounded-lg hover:bg-[#D4532D] hover:text-white transition-colors"
            >
              Learn More
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
