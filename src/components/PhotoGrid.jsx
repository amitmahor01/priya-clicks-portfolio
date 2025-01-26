export default function PhotoGrid({ photos }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {photos.map((photo, index) => (
        <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
            <p className="text-white text-lg font-serif">{photo.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
} 