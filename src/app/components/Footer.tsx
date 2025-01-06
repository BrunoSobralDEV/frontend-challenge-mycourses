import Image from 'next/image'
import * as S from './sharedStyles'

export default function Footer() {
  return (
    <S.Footer>
      <div className="social-media">
        <Image
          alt="whatsapp-icon"
          src="/icons/whatsapp.svg"
          width={20}
          height={20}
        />
        <Image
          alt="youtube-icon"
          src="/icons/youtube.svg"
          width={20}
          height={20}
        />
        <Image
          alt="facebook-icon"
          src="/icons/facebook.svg"
          width={20}
          height={20}
        />
        <Image
          alt="instagram-icon"
          src="/icons/instagram.svg"
          width={20}
          height={20}
        />
        
        
      </div>
      <p>Termos de uso</p>
      <p>Política de privacidade</p>
      <div className="links">
        <span>PT</span>
        <span>EN</span>
        <span>ES</span>
      </div>
    </S.Footer>
  )
}
