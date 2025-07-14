import { useEffect, useState } from 'react';

export default function useHomepage() {
  type Category = {
    id: number;
    name: string;
    description: string;
    thumbnail: string;
  };
  const [data, setData] = useState<Category[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch('/api/homepage');
        if (!res.ok) throw new Error('Failed to fetch homepage data');
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { data, loading, error };
}
