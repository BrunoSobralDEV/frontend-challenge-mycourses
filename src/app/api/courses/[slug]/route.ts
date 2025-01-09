import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const mockCourse = {
    banner: "https://i0.wp.com/www.datageeks.com.br/wp-content/uploads/2024/02/IA-que-Cria-Imagens.webp?w=1792&ssl=1 1792w, https://i0.wp.com/www.datageeks.com.br/wp-content/uploads/2024/02/IA-que-Cria-Imagens.webp?resize=300%2C171&ssl=1 300w, https://i0.wp.com/www.datageeks.com.br/wp-content/uploads/2024/02/IA-que-Cria-Imagens.webp?resize=1024%2C585&ssl=1 1024w, https://i0.wp.com/www.datageeks.com.br/wp-content/uploads/2024/02/IA-que-Cria-Imagens.webp?resize=768%2C439&ssl=1 768w, https://i0.wp.com/www.datageeks.com.br/wp-content/uploads/2024/02/IA-que-Cria-Imagens.webp?resize=1536%2C878&ssl=1 1536w, https://i0.wp.com/www.datageeks.com.br/wp-content/uploads/2024/02/IA-que-Cria-Imagens.webp?w=1452&ssl=1 1452w",
    banner_mobile: "https://i0.wp.com/www.datageeks.com.br/wp-content/uploads/2024/02/IA-que-Cria-Imagens.webp?fit=726%2C415&ssl=1",
    title: "VSCode para iniciantes",
    long_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  };

  try {
    const slug = (await params).slug;

    const baseUrl = 'https://api.evob.dev/content/courses';
    const apiUrl = slug ? `${baseUrl}/${slug}` : baseUrl;

    const response = await fetch(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'http://localhost:3024',
      }
    });
    if(response.status == 404) {
      return NextResponse.json({ error: 'Curso não encontrado' }, { status: 404 });
    }
    if(response.status == 503) {
      console.warn('503 Service Temporarily Unavailable');
      return NextResponse.json(mockCourse);
    }
    if(!response.ok) {
      return NextResponse.json({ error: 'Erro ao fazer a requisição' }, { status: response.status });
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Erro na requisição:', error);
    return NextResponse.json({ error: 'Erro ao fazer a requisição' }, { status: 500 });
  }
}
