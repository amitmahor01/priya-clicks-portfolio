import Header from '../components/Header';
import PhotoGrid from '../components/PhotoGrid';
import TestimonialCarousel from '../components/TestimonialCarousel';
import Footer from '../components/Footer';

const photos = [
  { src: '/images/photo1.jpg', alt: 'Photo 1', title: 'Maternity Shoot' },
  { src: '/images/photo2.jpg', alt: 'Photo 2', title: 'Newborn Shoot' },
  { src: '/images/photo3.jpg', alt: 'Photo 3', title: 'Family Shoot' },
];

const testimonials = [
  { text: 'Amazing experience! The photos are stunning.', client: 'Sarah M.' },
  { text: 'Highly recommend for maternity shoots.', client: 'Emily R.' },
  { text: 'Captured the most precious moments.', client: 'Jessica L.' },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-12">
        <h1 className="text-4xl font-serif text-center mb-8">Welcome to My Portfolio</h1>
        <PhotoGrid photos={photos} />
        <TestimonialCarousel testimonials={testimonials} />
      </main>
      <Footer />
    </div>
  );
} 