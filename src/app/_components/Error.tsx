import { ErrorComponentProps } from '@/@types';
import * as S from './styled/ErrorPage.styled';

export default function ErrorComponent({text}: Readonly<ErrorComponentProps>) {
  
  return (
    <S.Container>
      <S.Title>Oops! Ocorreu um erro!</S.Title>
      <S.Message>
        {text}
      </S.Message>
      <S.RetryButton >Tentar novamente</S.RetryButton>
    </S.Container>
  );
}
