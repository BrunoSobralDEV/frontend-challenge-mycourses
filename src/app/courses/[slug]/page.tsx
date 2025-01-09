import * as S from "./styled/Index.styled";
import Image from "next/image";
import svgHeart from "/public/icons/heart.svg";
import svgShare from "/public/icons/share.svg";
import { Course } from "@/app/components/Courses";

export default async function Course({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  console.log("SLUG ==> " + slug);
  // try {
  const response = await fetch(`http://localhost:3000/api/courses/${slug}`);
  const course: Course = await response.json();
  // console.log('course aqui',Object(course));
  // } catch (error) {
  // console.log('deu ruim', error);
  // }

  return (
    <S.Section>
      <S.Banner>
        <Image
          src={course.banner_mobile}
          width={374}
          height={140}
          alt="banner"
        />
      </S.Banner>
      <S.Wrapper>
        <S.Button>
          <Image src={svgHeart} width={12} height={12} alt="heart icon" />
          Favoritar
        </S.Button>
        <S.Content>
          <h1>{course.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: course.long_description }} />
        </S.Content>
        <S.Share>
          <Image src={svgShare} width={24} height={24} alt="share icon" />
        </S.Share>
      </S.Wrapper>
    </S.Section>
  );
}
