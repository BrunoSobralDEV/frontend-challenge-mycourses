import * as S from './styled/Favorites.styled'
import CourseCard from './CourseCard'

export default function Favorites() {
  const courses = [
    {
      id: 1,
      title: 'Curso de React',
      slug: '1231',
      description: 'string',
      long_description: 'string',
      banner: '/images/banner.png',
      banner_mobile: 'string',
      thumbnail: '/images/banner.png',
    },
    {
      id: 2,
      title: 'Curso de NodeJS',
      slug: '1231',
      description: 'string',
      long_description: 'string',
      banner: 'string',
      banner_mobile: 'string',
      thumbnail: '/images/banner.png',
    },
  ]
  return (
    <S.Section>
      <h1>Meus Favoritos</h1>

      <div className="grid">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </S.Section>
  )
}
