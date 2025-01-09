import Image from "next/image";
import * as S from "../(home)/layout.styled";

export default function Header() {
  return (
    <S.Header>
      <div style={{ display: "flex", flexDirection: "row", gap: "1.25rem" }}>
        <Image alt="evob-logo" src="/icons/menu.svg" width={20} height={20} />
        <S.Button aria-label="botao lupa">
          <Image
            alt="evob-logo"
            src="/icons/magnifying-glass.svg"
            width={20}
            height={20}
          />
        </S.Button>
      </div>
      <Image alt="evob-logo" src="/images/logo.svg" width={50} height={20} />
      <S.Button aria-label="botao login">
        <Image alt="evob-logo" src="/icons/login.svg" width={32} height={32} />
      </S.Button>
    </S.Header>
  );
}
