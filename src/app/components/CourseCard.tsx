import Image from "next/image";
import * as S from "./styled/CourseCard.styled";
import Favorite from "./FavoriteButton";
import { CourseCardProps } from "./Courses";



export default function CourseCard({ course }: CourseCardProps) {
  return (
    <>
      <S.CourseCard>
        <S.CardHeader>
          <Image
            className="img-banner"
            src={course.thumbnail}
            alt={course.title}
            width="300"
            height="200"
          />
          <S.Favorite>
            <Favorite />
          </S.Favorite>
          <S.FireOnline>
            <Image
              src="/icons/fire.svg"
              width="22"
              height="22"
              alt="fire icon"
            />
            <span>ONLINE</span>
          </S.FireOnline>
        </S.CardHeader>
        <S.CardContent>
          <h3>{course.title}</h3>
          <p>{course.slug}</p>
          <button>Acessar</button>
        </S.CardContent>
      </S.CourseCard>
    </>
  );
}
