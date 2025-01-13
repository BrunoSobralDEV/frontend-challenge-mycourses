import Image from "next/image";
import * as S from "./styled/CourseCard.styled";
import FavoriteButton from "./FavoriteButton";
import Link from "next/link";
import { CourseCardProps } from "@/@types";
import svgFire from "/public/icons/fire.svg";

export default function CourseCard({ course }: CourseCardProps) {
  const courseForFavorite = {
    id: course.id,
    slug: course.slug,
    title: course.title,
    thumbnail: course.thumbnail,
    short_description: course.short_description,
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
              src={svgFire}
              alt="fire icon"
            />
            <span>ONLINE</span>
          </S.FireOnline>
        </S.CardHeader>
        <S.CardContent>
          <div>
            <h3>{course.title}</h3>
            <p>{course.short_description}</p>
          </div>
          <Link href={`/courses/${course.slug}`}>
            <button>Acessar</button>
          </Link>
        </S.CardContent>
      </S.CourseCard>
    </>
  );
}
