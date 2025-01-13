"use client";
import * as S from "@styled/Modal.styled";
import Image from "next/image";
import svgShare from "/public/icons/share.svg";
import { useState } from "react";
import Modal from "./Modal";

interface ModalWrapperProps {
  course: {
    title: string;
    slug: string;
  };
}

export default function ModalWrapper({ course }: Readonly<ModalWrapperProps>) {
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
        <Modal
          title={course.title}
          slug={course.slug}
          toggleFn={handlToggleModal}
          copyFn={handleCopy}
          copyStatus={isCopied}
        />
      )}
    </>
  );
}
