'use client'
import { useRouter } from 'next/navigation';
import ServicesTilesProps from '../../../components/ServicesTilesProps';
import useHomepage from '../hooks/useHomepage';

export default function ServicesAll() {
  const router = useRouter();
  const { data, loading, error } = useHomepage();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <button
        onClick={() => router.back()}
        className="mb-6 px-4 py-2 rounded bg-primary text-white font-bold hover:bg-primary/80 transition-colors"
      >
        &larr; Back
      </button>
      <h1 className="heading-font text-3xl font-bold mb-8 text-primary text-center">All Services</h1>
      <ServicesTilesProps data={data || []} loading={loading} error={error} />
    </div>
  );
}
