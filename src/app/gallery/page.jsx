'use client';

import { useEffect, useState } from 'react';

export default function GalleryPage() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get category from URL params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    if (!category) {
      setLoading(false);
      return;
    }

    // Call the API route using GET
    fetch(`/api/gallery?service_category=${encodeURIComponent(category)}`)
      .then(res => res.json())
      .then(data => {
        setAlbums(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="h-screen w-full flex items-center justify-center text-2xl">Loading...</div>;
  }

  if (!albums.length) {
    return <div className="h-screen w-full flex items-center justify-center text-xl">No albums found.</div>;
  }

  return (
    <div className="min-h-screen w-full p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {albums.map(album => (
        <div key={album.id} className="rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-2xl transition">
          <img
            src={album.thumbnail}
            alt={album.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h2 className="font-bold text-lg">{album.title.replace(/"/g, '')}</h2>
            <p className="text-sm text-gray-500">{album.service_category} Photography</p>
          </div>
        </div>
      ))}
    </div>
  );
}
