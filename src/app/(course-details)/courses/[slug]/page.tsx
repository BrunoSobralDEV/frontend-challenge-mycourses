import ModalWrapper from "@components/ModalWrapper";
import { notFound } from "next/navigation";
import * as S from "./page.styled";
import Image from "next/image";
import { Course } from "@/@types";
import FavoriteButton from "@/app/_components/FavoriteButton";

async function fetchCouseDetails(slug: string) {
  const response = await fetch(`http://localhost:3000/api/courses/${slug}`);
  
  if (!response.ok) return undefined
  return response.json()
}

export default async function CourseDetails({
  params,
}: Readonly<{
  params: Promise<{ slug: string }>;
}>) {
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
        <FavoriteButton course={courseDetails} btnLarge />
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
