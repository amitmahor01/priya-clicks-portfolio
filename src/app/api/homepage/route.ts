import { NextRequest, NextResponse } from 'next/server';

// GET: Fetch categories from external API
export async function GET(req: NextRequest) {
  const baseUrl = process.env.API_URL;
  const res = await fetch(`${baseUrl}/api/categories/`);
  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to fetch categories' }, { status: res.status });
  }
  const data = await res.json();
  return NextResponse.json(data);
}
