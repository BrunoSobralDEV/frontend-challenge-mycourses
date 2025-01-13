import ModalWrapper from "@components/ModalWrapper";
import { notFound } from "next/navigation";
import * as S from "./page.styled";
import Image from "next/image";
import { Course } from "@/@types";
import FavoriteButton from "@/app/_components/FavoriteButton";
import ErrorComponent from "@/app/_components/Error";
import { fetchCouseDetails } from "@/app/api/fetchCourseDetails";


export default async function CourseDetails({
  params,
}: Readonly<{
  params: Promise<{ slug: string }>;
}>) {
  try {
    const slug = (await params).slug;
    const courseDetails: Course = await fetchCouseDetails(slug);

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
              dangerouslySetInnerHTML={{
                __html: courseDetails.long_description,
              }}
            />
          </S.Content>
          <ModalWrapper course={courseDetails} />
        </S.Wrapper>
      </S.Section>
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Erro desconhecido";
      if (errorMessage === "Curso não encontrado") {
        notFound();
      } else {
        return <ErrorComponent text={errorMessage} />;
      }
  }
}
