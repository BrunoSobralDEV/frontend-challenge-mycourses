"use client";
import Image from "next/image";
import * as S from "./styled/FavoriteButton.styled";
import { FavoriteButtonProps } from "@/@types";
import { useFavorites } from "../Providers/FavoritesContext";



export default function FavoriteButton({ course }: FavoriteButtonProps) {
  const { favoriteCourses, toggleFavorite } = useFavorites();
  const isFavorited = favoriteCourses.some((fav) => fav.slug === course.slug);


  return (
    <S.FavoriteWrapper onClick={() => toggleFavorite(course)}>
      <Image
        src={isFavorited ? "/icons/heart-fill.svg" : "/icons/heart.svg"}
        width="22"
        height="22"
        alt="heart icon"
      />
    </S.FavoriteWrapper>
  );
}
