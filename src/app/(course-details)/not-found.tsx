import Image from "next/image";
import Link from "next/link";
import * as S from "./not-found.styled";
import png404 from "@images/404.png";

export default function Custom404() {
  return (
    <S.NotFoundContainer>
      <S.NotFoundImage>
        <Image src={png404} alt="404 illustration" />
      </S.NotFoundImage>
      <h1>404</h1>
      <p>Oops! A página que você tentou acessar não foi encontrada.</p>
      <Link href="/">Voltar para a página inicial</Link>
    </S.NotFoundContainer>
  );
}
