import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold text-accent">
          Photographer Name
        </Link>
        <ul className="flex space-x-8">
          <li>
            <Link to="/" className="text-gray-700 hover:text-accent transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="text-gray-700 hover:text-accent transition duration-300">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-700 hover:text-accent transition duration-300">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
} 