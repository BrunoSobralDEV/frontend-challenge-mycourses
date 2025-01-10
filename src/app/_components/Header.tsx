"use client";
import Image from "next/image";
import * as S from "../(home)/layout.styled";
import svgMenu from "/public/icons/menu.svg";
import svgSignUp from "/public/icons/sign-up.svg";
import Link from "next/link";
import { useMediaQuery } from "../hooks/useMediaQuery";

export default function Header() {
  const isDesktop = useMediaQuery("(min-width: 769px)");

  return (
    <S.Header>
      {isDesktop ? (
        <div>
          <S.Button aria-label="botao lupa">
            <Image
              alt="magnifying icon"
              src="/icons/magnifying-glass.svg"
              width={20}
              height={20}
            />
          </S.Button>
          <span>Busca</span>
        </div>
      ) : (

        <div style={{ display: "flex", flexDirection: "row", gap: "1.25rem" }}>
          <Image alt="menu icon" src={svgMenu} />
          <S.Button aria-label="botao lupa">
            <Image
              alt="magnifying icon"
              src="/icons/magnifying-glass.svg"
              width={20}
              height={20}
            />
          </S.Button>
        </div>
      )}
      <Link href="/">
        <Image alt="Evob-logo" src="/images/logo.svg" width={50} height={20} />
      </Link>
      {isDesktop ? (
        <div>
          <Link href="/cadastro">
            <Image alt="Sign-up icon" src={svgSignUp} />
            Cadastre-se
          </Link>
          <S.Button aria-label="botao login">
            <Image
              alt="login icon"
              src="/icons/login.svg"
              width={32}
              height={32}
            />
            <span>Entrar</span>
          </S.Button>
        </div>
      ) : (
        <S.Button aria-label="botao login">
          <Image
            alt="login icon"
            src="/icons/login.svg"
            width={32}
            height={32}
          />
        </S.Button>
      )}
    </S.Header>
  );
}
