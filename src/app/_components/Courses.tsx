import { Course } from '@/@types';
import CourseCard from './CourseCard'
import * as S from './styled/Courses.styled'


export default async function Courses() {
  const response = await fetch('http://localhost:3000/api/courses');
  const data = await response.json();
  const courses:Course[] = data.courses;

  return (
    <S.Section>
      <h1>Meus Cursos</h1>
      <div className="grid">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </S.Section>
  )
}
