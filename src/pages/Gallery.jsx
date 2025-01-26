import Header from '../components/Header';
import PhotoGrid from '../components/PhotoGrid';
import Footer from '../components/Footer';

const galleryPhotos = [
  { src: '/images/gallery1.jpg', alt: 'Gallery Photo 1', title: 'Maternity Magic' },
  { src: '/images/gallery2.jpg', alt: 'Gallery Photo 2', title: 'Newborn Bliss' },
  { src: '/images/gallery3.jpg', alt: 'Gallery Photo 3', title: 'Family Love' },
];

export default function Gallery() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-12">
        <h1 className="text-4xl font-serif text-center mb-8">Gallery</h1>
        <PhotoGrid photos={galleryPhotos} />
      </main>
      <Footer />
    </div>
  );
} 