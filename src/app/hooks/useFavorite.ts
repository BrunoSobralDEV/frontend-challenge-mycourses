import { useState, useEffect } from "react";

export const getFavoriteCourses = (): string[] => {
  const storedFavorites = localStorage.getItem("favoriteCourses");
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

const setFavoriteCourses = (favorites: string[]): void => {
  localStorage.setItem("favoriteCourses", JSON.stringify(favorites));
};

export function useFavorite(slug: string) {
  const [isFavorited, setIsFavorited] = useState<boolean>(false);

  useEffect(() => {
    const favoriteCourses = getFavoriteCourses();
    setIsFavorited(favoriteCourses.includes(slug)); 
  }, [slug]);

  const toggleFavorite = () => {
    const favoriteCourses = getFavoriteCourses();
    if (favoriteCourses.includes(slug)) {
      const updatedFavorites = favoriteCourses.filter((courseSlug) => courseSlug !== slug);
      setFavoriteCourses(updatedFavorites);
      setIsFavorited(false);
    } else {
      const updatedFavorites = [...favoriteCourses, slug];
      setFavoriteCourses(updatedFavorites);
      setIsFavorited(true);
    }
  };

  return { isFavorited, toggleFavorite };
}
