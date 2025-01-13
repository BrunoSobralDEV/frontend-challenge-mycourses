import Image from "next/image";
import * as S from "./styled/Footer.styled";
import Link from "next/link";
import svgWhatsApp from "@icons/whatsapp.svg";
import svgYouTube from "@icons/youtube.svg";
import svgFaceBook from "@icons/facebook.svg";
import svgInstagram from "@icons/instagram.svg";

export default function Footer() {
  return (
    <S.Footer>
      <div className="social-media">
        <Link href="https://evob.com.br/">
          <Image alt="whatsapp-icon" src={svgWhatsApp} />
        </Link>
        <Link href="https://evob.com.br">
          <Image alt="youtube-icon" src={svgYouTube} />
        </Link>
        <Link href="https://evob.com.br">
          <Image alt="facebook-icon" src={svgFaceBook} />
        </Link>
        <Link href="https://evob.com.br">
          <Image alt="instagram-icon" src={svgInstagram} />
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
