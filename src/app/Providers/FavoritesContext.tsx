"use client";
import { FavoritesContextProps, CourseSummary } from "@/@types";
import React, { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext<FavoritesContextProps | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favoriteCourses, setFavoriteCourses] = useState<CourseSummary[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favoriteCourses");
    setFavoriteCourses(storedFavorites ? JSON.parse(storedFavorites) : []);
  }, []);

  const toggleFavorite = (course: CourseSummary) => {
    const isFavorited = favoriteCourses.some((fav) => fav.slug === course.slug);
    const updatedFavorites = isFavorited
      ? favoriteCourses.filter((fav) => fav.slug !== course.slug)
      : [...favoriteCourses, course];

    setFavoriteCourses(updatedFavorites);
    localStorage.setItem("favoriteCourses", JSON.stringify(updatedFavorites));
  };

  return (
    <FavoritesContext.Provider value={{ favoriteCourses, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = (): FavoritesContextProps => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
