import Image from "next/image";
import { StyledHeader } from "./sharedStyles";

export default function Header() {
  return (
    <StyledHeader>
      <div style={{ display: "flex", flexDirection: "row", gap: "1.25rem" }}>
        <Image
          alt="evob-logo"
          src="/icons/menu.svg"
          width={20}
          height={20}
        />
        <Image
          alt="evob-logo"
          src="/icons/magnifying-glass.svg"
          width={20}
          height={20}
        />
      </div>
      <Image alt="evob-logo" src="/images/logo.svg" width={50} height={20} />
      <Image alt="evob-logo" src="/icons/login.svg" width={32} height={32} />
    </StyledHeader>
  );
}
