"use client"
import Image from "next/image";
import * as S from "./styled/FavoriteButton.styled";
import { useFavorite } from "../hooks/useFavorite";

interface FavoriteButtonProps {
  slug: string;
}

export default function FavoriteButton({ slug }: FavoriteButtonProps) {
  const { isFavorited, toggleFavorite } = useFavorite(slug);

  return (
    <S.FavoriteWrapper  onClick={toggleFavorite}>
      <Image
        src={isFavorited ? "/icons/heart-fill.svg" : "/icons/heart.svg"}
        width="22"
        height="22"
        alt="heart icon"
      />
    </S.FavoriteWrapper>
  );
}
