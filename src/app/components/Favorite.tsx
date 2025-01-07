"use client"
import React, { useState } from "react";
import Image from "next/image";
import * as S from "./styled/Favorite.styled";

export default function Favorite() {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited((prev) => !prev);
  };

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
