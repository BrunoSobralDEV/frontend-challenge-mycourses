import { Course } from "@/@types";
import CourseCard from "./CourseCard";
import * as S from "./styled/Courses.styled";
import ErrorComponent from "./Error";
import { fetchCourseData } from "../api/fetchCouses";

export default async function Courses() {
  try {
    const data = await fetchCourseData();
    const courses: Course[] = data.courses;
    
    return (
      <S.Section>
        <h1>Meus Cursos</h1>
        <S.CoursesCourses>
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </S.CoursesCourses>
      </S.Section>
    );
  } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";
      if (error) {
        return <ErrorComponent text={errorMessage} />;
      }
  }
}
