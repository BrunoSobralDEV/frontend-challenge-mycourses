import CourseCard from './CourseCard'
import * as S from './styled/Courses.styled'

export default function Courses() {
  return (
    <S.Section>
      <h2>Meus Cursos</h2>
      <div className="grid">
        <CourseCard />
      </div>
    </S.Section>
  )
}
