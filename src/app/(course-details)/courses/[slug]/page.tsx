import ModalWrapper from "@components/ModalWrapper";
import { Course } from "@/app/_components/Courses";
import svgHeart from "/public/icons/heart.svg";
import { notFound } from "next/navigation";
import * as S from "./page.styled";
import Image from "next/image";

async function fetchCouseDetails(slug: string) {
  const response = await fetch(`http://localhost:3000/api/courses/${slug}`);
  
  if (!response.ok) return undefined
  return response.json()
}

export default async function Course({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const courseDetails: Course = await fetchCouseDetails(slug);

  if (!courseDetails) {
    notFound();
  }

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
