import Image from "next/image";
import * as S from "@styled/Modal.styled";
import svgCopy from "@icons/copy.svg";
import svgCheck from "@icons/check-circle.svg";
import svgClose from "@icons/close.svg";
import svgWhatsApp from "@icons/whatsapp.svg";
import { ModalProps } from "@/@types";

export default function Modal({
  toggleFn,
  copyFn,
  slug,
  title,
  copyStatus,
}: Readonly<ModalProps>) {
  return (
    <S.ModalOverlay onClick={toggleFn}>
      <S.Modal onClick={(e) => e.stopPropagation()}>
        <S.ModalHeader>
          <h2>Compartilhar curso</h2>
          <Image onClick={toggleFn} src={svgClose} alt="close icon" />
        </S.ModalHeader>
        <S.InputContainer>
          <input type="text" value={`https://www.curso.com/${slug}`} readOnly />
          <Image
            onClick={copyFn}
            src={copyStatus ? svgCheck : svgCopy}
            alt="whatsapp icon"
          />
        </S.InputContainer>
        <S.ButtonWhatsApp
          href={`https://wa.me/?text=${encodeURIComponent(
            `Olá, curso: "${title}".`
          )}`}
          target="_blank"
        >
          <Image src={svgWhatsApp} alt="whatsapp icon" />
          Compartilhar via WhatsApp
        </S.ButtonWhatsApp>
        <S.Footer>
          <button onClick={toggleFn}>Fechar</button>
        </S.Footer>
      </S.Modal>
    </S.ModalOverlay>
  );
}
