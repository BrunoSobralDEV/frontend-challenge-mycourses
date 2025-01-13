import { NextResponse } from "next/server";

const fetchCoursesData = async (url: string) => {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Origin': 'http://localhost:3024',
    }
  });

  return response;
};
export async function GET() {
  const apiUrl = 'https://api.evob.dev/content/courses';
  try {
    const response = await fetchCoursesData(apiUrl);
    
    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        {
          error: response.statusText || "Erro desconhecido",
          details: errorText,
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);

    return NextResponse.json(
      { error: "Erro ao se comunicar com o servidor." },
      { status: 500 }
    );
  }
}
