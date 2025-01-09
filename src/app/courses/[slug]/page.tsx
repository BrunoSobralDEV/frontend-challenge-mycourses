import * as S from "./styled/Index.styled";
import Image from "next/image";
import svgHeart from "/public/icons/heart.svg";

import { Course } from "@/app/components/Courses";
import ModalWrapper from "./_components/ModalWrapper";

export default async function Course({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  // try {
  const response = await fetch(`http://localhost:3000/api/courses/${slug}`);
  const courseDetails: Course = await response.json();
  // console.log('course aqui',Object(course));
  // } catch (error) {
  // console.log('deu ruim', error);
  // }

  return (
    <S.Section>
      <S.Banner>
        <Image
          src={courseDetails.banner_mobile}
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
          <h1>{courseDetails.title}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: courseDetails.long_description }}
          />
        </S.Content>
        <ModalWrapper course={courseDetails} />
      </S.Wrapper>
    </S.Section>
  );
}
