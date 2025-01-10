import Image from "next/image";
import * as S from "./styled/CourseCard.styled";
import FavoriteButton from "./FavoriteButton";
import { CourseCardProps } from "./Courses";
import Link from "next/link";

export default function CourseCard({ course }: CourseCardProps) {
  const courseForFavorite = {
    id: course.id,
    slug: course.slug,
    title: course.title,
    thumbnail: course.thumbnail
  };

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
            <FavoriteButton course={courseForFavorite} />
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
          <p>{course.id}</p>
          <Link href={`/courses/${course.slug}`}>
            <button>Acessar</button>
          </Link>
        </S.CardContent>
      </S.CourseCard>
    </>
  );
}
