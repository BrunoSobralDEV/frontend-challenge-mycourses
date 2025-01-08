import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch('https://api.evob.dev/content/courses', {
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'http://localhost:3024',
      }
    });
    const data = await response.json();
    console.log(JSON.stringify(data));

    return NextResponse.json(data);
  } catch (error) {
    console.error('Erro na requisição:', error);
    return NextResponse.json({ error: 'Erro ao fazer a requisição' }, { status: 500 });
  }
}
