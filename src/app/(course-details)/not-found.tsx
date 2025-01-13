import Image from "next/image";
import Link from "next/link";
import * as S from "./not-found.styled";
import svg404 from "@images/404-peoples.svg";

export default function Custom404() {
  return (
    <S.NotFoundContainer>
      <S.NotFoundContent>
        <h1>404</h1>
        <p>Oops! A página que você tentou acessar não foi encontrada.</p>
        <Link href="/">Voltar para a página inicial</Link>
      </S.NotFoundContent>
      <S.NotFoundImage>
        <Image src={svg404} alt="404 illustration" />
      </S.NotFoundImage>
    </S.NotFoundContainer>
  );
}
