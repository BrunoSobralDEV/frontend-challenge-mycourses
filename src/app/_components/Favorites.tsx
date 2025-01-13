"use client";
import * as S from "./styled/Favorites.styled";
import CourseCard from "./CourseCard";
import svgHearthSearch from "@icons/heart-search.svg";
import Image from "next/image";
import { useFavorites } from "@providers/FavoritesContext";

export default function Favorites() {
  const { favoriteCourses } = useFavorites();

  return (
    <S.Section style={{ transition: "all 0.3s ease" }}>
      <h1>Meus Favoritos</h1>

      <S.FavoritesWrapper $empty={favoriteCourses.length === 0}>
        {favoriteCourses.length > 0 &&
          favoriteCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}

        {favoriteCourses.length === 0 && (
          <div>
            <Image src={svgHearthSearch} alt="hearth-search icon" />
            <p>Parece que você ainda não tem cursos favoritados </p>
          </div>
        )}
      </S.FavoritesWrapper>
    </S.Section>
  );
}
