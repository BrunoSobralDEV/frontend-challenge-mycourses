import { ErrorComponentProps } from '@/@types';
import * as S from './styled/ErrorPage.styled';

export default function ErrorComponent({status, text}: Readonly<ErrorComponentProps>) {
  
  return (
    <S.Container>
      <S.ErrorCode>
        <span>{status}</span>
      </S.ErrorCode>
      <S.Message>Oops! Ocorreu um erro!</S.Message>
      <S.Message>
        {text}
      </S.Message>
      <S.RetryButton >Tentar novamente</S.RetryButton>
    </S.Container>
  );
}
