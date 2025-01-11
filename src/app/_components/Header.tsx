"use client";
import Image from "next/image";
import * as S from "../(home)/layout.styled";
import svgMenu from "/public/icons/menu.svg";
import svgMagnifyingGlass from "/public/icons/magnifying-glass.svg";
import svgSignUp from "/public/icons/sign-up.svg";
import svgLogin from "/public/icons/login.svg";
import svgLoginWhite from "/public/icons/login-white.svg";
import { useMediaQuery } from "../hooks/useMediaQuery";

export default function Header() {
  const isDesktop = useMediaQuery("(min-width: 769px)");
  const isMobile = useMediaQuery("(max-width: 769px)");

  return (
    <S.Header>
      <S.LeftSection>
        {isDesktop && (
          <S.SearchWrapper>
            <S.SearchLink href="#">
              <Image alt="magnifying icon" src={svgMagnifyingGlass} />
            </S.SearchLink>
            <span>Busca</span>
          </S.SearchWrapper>
        )}{" "}
        {isMobile && (
          <S.MobileMenu>
            <Image alt="menu icon" src={svgMenu} />
            <S.SearchLink href="#">
              <Image
                alt="magnifying icon"
                src={svgMagnifyingGlass}
              />
            </S.SearchLink>
          </S.MobileMenu>
        )}
      </S.LeftSection>

      <S.Logo href="/">
        <Image alt="Evob-logo" src="/images/logo.svg" width={50} height={20} />
      </S.Logo>

      <S.RightSection>
        {isDesktop && (
          <S.LinksWrapper>
            <S.SignUpLink href="#">
              <Image alt="Sign-up icon" src={svgSignUp} />
              Cadastre-se
            </S.SignUpLink>
            <S.LoginLink href="#">
              <Image
                alt="login icon"
                src={isDesktop ? svgLoginWhite : svgLogin}
              />
              <span>Entrar</span>
            </S.LoginLink>
          </S.LinksWrapper>
        )}{" "}
        {isMobile && (
          <S.LoginLink href="#">
            <Image
              alt="login icon"
              src="/icons/login.svg"
              width={32}
              height={32}
            />
          </S.LoginLink>
        )}
      </S.RightSection>
    </S.Header>
  );
}
