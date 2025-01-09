import Image from "next/image";
import * as S from "../(home)/layout.styled";
import Link from "next/link";

export default function Footer() {
  return (
    <S.Footer>
      <div className="social-media">
        <Link href="https://evob.com.br/">
          <Image
            alt="whatsapp-icon"
            src="/icons/whatsapp.svg"
            width={20}
            height={20}
          />
        </Link>
        <Link href="https://evob.com.br">
          <Image
            alt="youtube-icon"
            src="/icons/youtube.svg"
            width={20}
            height={20}
          />
        </Link>
        <Link href="https://evob.com.br">
          <Image
            alt="facebook-icon"
            src="/icons/facebook.svg"
            width={20}
            height={20}
          />
        </Link>
        <Link href="https://evob.com.br">
          <Image
            alt="instagram-icon"
            src="/icons/instagram.svg"
            width={20}
            height={20}
          />
        </Link>
      </div>
      <div className="details">
        <p>Termos de uso</p>
        <p>Política de privacidade</p>
        <div className="languages">
          <span>PT</span>
          <span>EN</span>
          <span>ES</span>
        </div>
      </div>
    </S.Footer>
  );
}
