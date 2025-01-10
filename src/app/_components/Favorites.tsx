"useState";
import * as S from './styled/Favorites.styled'
import CourseCard from './CourseCard'
import { Course } from './Courses'
import svgHearthSearch from '/public/icons/heart-search.svg';
import Image from 'next/image';
import { getFavoriteCourses, useFavorite } from '../hooks/useFavorite';

export default function Favorites() {
  const courses = getFavoriteCourses()

  return (
    <S.Section>
      <h1>Meus Favoritos</h1>

      <S.FavoritesWrapper $empty={courses.length === 0}>
        {courses.length > 0 && courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
        
        {courses.length === 0 && (
          <div>
            <Image src={svgHearthSearch} alt="hearth-search icon"/>
            <p>Parece que você ainda não tem cursos favoritados </p>
          </div>
        )}
      </S.FavoritesWrapper>
    </S.Section>
  )
}
