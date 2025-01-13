import { Course } from "@/@types";
import CourseCard from "./CourseCard";
import * as S from "./styled/Courses.styled";
import ErrorComponent from "./Error";

export default async function Courses() {
  try {
    const response = await fetch("http://localhost:3000/api/courses");

    const data = await response.json();
    const courses: Course[] = data.courses || [];

    if (!response.ok) return <ErrorComponent status={response.status} text={response.statusText}/>;

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
    throw new Error(`Error fetching courses:${error}`);
  }
}
