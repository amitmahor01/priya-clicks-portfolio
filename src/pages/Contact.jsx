import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-12">
        <h1 className="text-4xl font-serif text-center mb-8">Contact Me</h1>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
} 