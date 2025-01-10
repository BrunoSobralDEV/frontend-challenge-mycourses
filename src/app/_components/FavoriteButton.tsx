"use client";
import Image from "next/image";
import * as S from "./styled/FavoriteButton.styled";
import { useFavorite } from "../hooks/useFavorite";

interface FavoriteButtonProps {
  course: {
    id: number;
    slug: string;
    title: string;
    thumbnail: string;
  };
}

export default function FavoriteButton({ course }: FavoriteButtonProps) {
  const { isFavorited, toggleFavorite } = useFavorite(course);

  return (
    <S.FavoriteWrapper onClick={toggleFavorite}>
      <Image
        src={isFavorited ? "/icons/heart-fill.svg" : "/icons/heart.svg"}
        width="22"
        height="22"
        alt="heart icon"
      />
    </S.FavoriteWrapper>
  );
}
