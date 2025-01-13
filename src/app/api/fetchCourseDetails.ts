export const fetchCouseDetails = async (slug: string) => {
  const apiUrl = `https://api.evob.dev/content/courses/${slug}`;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'http://localhost:3024',
      }
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Curso não encontrado');
      }
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