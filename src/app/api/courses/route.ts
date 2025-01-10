import { NextResponse } from "next/server";

const fetchCoursesData = async (url: string) => {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'http://localhost:3024',
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    throw new Error(`Erro ao buscar dados: ${error}`);
  }
};
export async function GET() {
  const apiUrl = 'https://api.evob.dev/content/courses';
  try {
    const data = await fetchCoursesData(apiUrl);
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
