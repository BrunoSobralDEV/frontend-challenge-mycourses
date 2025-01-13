import { NextRequest, NextResponse } from "next/server";

const fetchCourseData = async (slug: string) => {
  const apiUrl = `https://api.evob.dev/content/courses/${slug}`;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'http://localhost:3024',
      }
    });

    if (response.status === 404) {
      throw new Error('Curso não encontrado');
    }

    if (!response.ok) {
      throw new Error(`Erro ao buscar dados: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw error; 
    } else {
      throw new Error('Erro desconhecido');
    }
  }
};

export async function GET(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;

  try {
    const data = await fetchCourseData(slug);
    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error)
      const status = error.message === 'Curso não encontrado' ? 404 : 500;
      return NextResponse.json({ error: error.message }, { status });
    } else {
      return NextResponse.json({ error: 'Erro desconhecido' }, { status: 500 });
    }
  }
}
