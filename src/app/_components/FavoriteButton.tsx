"use client";
import Image from "next/image";
import * as S from "./styled/FavoriteButton.styled";
import { FavoriteButtonProps } from "@/@types";
import { useFavorites } from "@providers/FavoritesContext";
import svgHeart from "/public/icons/heart.svg";
import svgHeartFill from "/public/icons/heart-fill.svg";
import svgHeartBlack from "/public/icons/heart-black.svg";

export default function FavoriteButton({
  course,
  btnLarge,
}: Readonly<FavoriteButtonProps>) {
  const { favoriteCourses, toggleFavorite } = useFavorites();
  const isFavorited = favoriteCourses.some((fav) => fav.slug === course.slug);

  return (
    <S.FavoriteWrapper
      onClick={() => toggleFavorite(course)}
      $btnLarge={!!btnLarge}
    >
      {btnLarge ? (
        <Image
          src={isFavorited ? svgHeartFill : svgHeartBlack}
          alt="heart icon"
        />
      ) : (
        <Image src={isFavorited ? svgHeartFill : svgHeart} alt="heart icon" />
      )}
      {btnLarge && (
        <S.FavoriteText>{isFavorited ? "Remover" : "Favoritar"}</S.FavoriteText>
      )}
    </S.FavoriteWrapper>
  );
}
