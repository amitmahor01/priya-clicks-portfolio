export default function Footer() {
  return (
    <footer className="bg-primary py-8 mt-16">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-700">
          &copy; {new Date().getFullYear()} Photographer Name. All rights reserved.
        </p>
        <p className="text-gray-600 mt-2">Dubai, UAE</p>
      </div>
    </footer>
  );
} 