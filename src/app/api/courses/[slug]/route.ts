import { NextRequest, NextResponse } from "next/server";
// Test
const mockCourse = {
  banner: "https://i0.wp.com/www.datageeks.com.br/wp-content/uploads/2024/02/IA-que-Cria-Imagens.webp?w=1792&ssl=1 1792w, https://i0.wp.com/www.datageeks.com.br/wp-content/uploads/2024/02/IA-que-Cria-Imagens.webp?resize=300%2C171&ssl=1 300w, https://i0.wp.com/www.datageeks.com.br/wp-content/uploads/2024/02/IA-que-Cria-Imagens.webp?resize=1024%2C585&ssl=1 1024w, https://i0.wp.com/www.datageeks.com.br/wp-content/uploads/2024/02/IA-que-Cria-Imagens.webp?resize=768%2C439&ssl=1 768w, https://i0.wp.com/www.datageeks.com.br/wp-content/uploads/2024/02/IA-que-Cria-Imagens.webp?resize=1536%2C878&ssl=1 1536w, https://i0.wp.com/www.datageeks.com.br/wp-content/uploads/2024/02/IA-que-Cria-Imagens.webp?w=1452&ssl=1 1452w",
  banner_mobile: "https://i0.wp.com/www.datageeks.com.br/wp-content/uploads/2024/02/IA-que-Cria-Imagens.webp?fit=726%2C415&ssl=1",
  title: "VSCode para iniciantes",
  long_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
};

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

    if (response.status === 503) {
      console.warn('503 Service Temporarily Unavailable');
      return mockCourse;
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
      const status = error.message === 'Curso não encontrado' ? 404 : 500;
      return NextResponse.json({ error: error.message }, { status });
    } else {
      return NextResponse.json({ error: 'Erro desconhecido' }, { status: 500 });
    }
  }
}
