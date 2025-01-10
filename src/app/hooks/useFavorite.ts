import { useState, useEffect } from "react";

interface localStorageCourseProps {
  id: number, slug: string, title: string, thumbnail: string
}

const getFavoriteCourses = (): localStorageCourseProps[] => {
  const storedFavorites = localStorage.getItem("favoriteCourses");
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

const setFavoriteCourses = (favorites: localStorageCourseProps[]): void => {
  localStorage.setItem("favoriteCourses", JSON.stringify(favorites));
};

export function useFavorite(course: localStorageCourseProps) {
  const [isFavorited, setIsFavorited] = useState<boolean>(false);

  useEffect(() => {
    const favoriteCourses = getFavoriteCourses();
    setIsFavorited(favoriteCourses.some(fav => fav.slug === course.slug));
  }, [course.slug]);

  const toggleFavorite = () => {
    const favoriteCourses = getFavoriteCourses();
    if (favoriteCourses.some(fav => fav.slug === course.slug)) {
      const updatedFavorites = favoriteCourses.filter((fav) => fav.slug !== course.slug);
      setFavoriteCourses(updatedFavorites);
      setIsFavorited(false);
    } else {
      const updatedFavorites = [...favoriteCourses, course];
      setFavoriteCourses(updatedFavorites);
      setIsFavorited(true);
    }
  };

  return { isFavorited, toggleFavorite };
}
