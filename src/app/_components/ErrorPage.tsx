"use client"
import * as S from './styled/ErrorPage.styled';

export default function ErrorPage({
  reset,
}: Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>) {
  return (
    <S.Container>
      <S.ErrorCode>
        5<span>0</span>0
      </S.ErrorCode>
      <S.Message>Oops! Ocorreu um erro!</S.Message>
      <S.Message>
        Fique tranquilo, estamos cientes e trabalhando na correção.
      </S.Message>
      <S.RetryButton onClick={() => reset()}>Tentar novamente</S.RetryButton>
    </S.Container>
  );
}
