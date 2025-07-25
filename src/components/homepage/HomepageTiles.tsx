import Link from 'next/link';
import Image from 'next/image';

export type Category = {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
};

type HomepageTilesProps = {
  data: Category[];
  loading: boolean;
  error: string | null;
};

export default function HomepageTiles({ data, loading, error }: HomepageTilesProps) {
  return (
    <>
      {loading && (
        <div className="flex justify-center items-center h-40">
          <span className="inline-block w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></span>
        </div>
      )}
      {error && (
        <div className="text-center text-lg text-red-500">{error}</div>
      )}
      {!loading && !error && Array.isArray(data) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {data.slice(0, 3).map((category: Category) => (
            <Link
              key={category.id}
              href={`/gallery?category=${encodeURIComponent(category.name)}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#e5e7eb] shadow-md hover:shadow-xl hover:border-primary hover:scale-107 transition-all duration-300"
              title={category.description}
            >
              <Image
                src={category.thumbnail}
                alt={category.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white drop-shadow mb-1">
                  {category.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-200 line-clamp-2">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
