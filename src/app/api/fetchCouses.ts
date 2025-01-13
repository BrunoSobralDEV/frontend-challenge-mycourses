export const fetchCourseData = async () => {
  const apiUrl = `${process.env.EVOB_API_BASEURL}/courses/`;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'http://localhost:3024',
      }
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Curso não encontrado. Verifique se a URL está correta.");
      }

      throw new Error(`Erro ao buscar dados: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === "fetch failed") throw new Error("Lista de cursos não disponível no momento. Por favor, tente mais tarde!")
      throw error;
    } else {
      throw new Error('Erro desconhecido');
    }
  }
};
