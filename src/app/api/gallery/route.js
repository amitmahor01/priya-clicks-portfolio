import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('service_category');
    if (!category) {
      return NextResponse.json({ error: 'Category is required' }, { status: 400 });
    }
    const baseURL = process.env.API_URL;
    const albumsUrl = `${baseURL}/api/albums/?service_category=${encodeURIComponent(category)}`;
    console.log('Calling albums API:', albumsUrl);
    const apiRes = await fetch(albumsUrl);
    const data = await apiRes.json();
    let result = data;
    if (data && typeof data === 'object') {
      const arrProp = Object.keys(data).find(key => Array.isArray(data[key]));
      if (arrProp) {
        result = data[arrProp];
      }
    }
    if (!Array.isArray(result)) {
      result = [];
    }
    return NextResponse.json(result, { status: apiRes.status });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
