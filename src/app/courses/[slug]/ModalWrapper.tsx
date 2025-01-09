"use client";
import * as S from "./styled/Modal.styled";
import Image from "next/image";
import svgShare from "/public/icons/share.svg";
import svgCopy from "/public/icons/copy.svg";
import svgCheck from "/public/icons/check-circle.svg";

import svgWhatsApp from "/public/icons/whatsapp.svg";
import { useState } from "react";

interface ModalWrapperProps {
  course: {
    title: string;
    slug?: string;
  };
}

export default function ModalWrapper({ course }: ModalWrapperProps) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handlToggleModal = () => setModalOpen(!isModalOpen);
  const handleCopy = () => {
    navigator.clipboard.writeText(`https://www.curso.com/${course.slug}`);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <>
      <S.ShareButton onClick={handlToggleModal}>
        <Image src={svgShare} width={24} height={24} alt="share icon" />
      </S.ShareButton>
      {isModalOpen && (
        <S.ModalOverlay onClick={handlToggleModal}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <h2>Compartilhar curso</h2>
            <S.InputContainer>
              <input type="text" value={`https://www.curso.com/${course.slug}`} readOnly />
              <Image
                onClick={handleCopy}
                src={isCopied ? svgCheck : svgCopy}
                alt="whatsapp icon"
              />
            </S.InputContainer>
            <S.ButtonWhatsApp
              href={`https://wa.me/?text=${encodeURIComponent(
                `Olá, curso: "${course.title}".`
              )}`}
              target="_blank"
            >
              <Image src={svgWhatsApp} alt="whatsapp icon" />
              Compartilhar via WhatsApp
            </S.ButtonWhatsApp>
            <S.Footer>
              <button onClick={handlToggleModal}>Fechar</button>
            </S.Footer>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </>
  );
}
