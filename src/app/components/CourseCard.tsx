import Image from 'next/image';
import * as S from './styled/CourseCard.styled'

export default function CourseCard() {
  const courses = [
    { id: 1, title: 'Webscrapping', author: 'Lucas', image: '/path/to/image1.jpg' },
    { id: 2, title: 'Ciência de dados', author: 'Daniel', image: '/path/to/image2.jpg' },
    { id: 3, title: 'Python para IA', author: 'Lucas', image: '/path/to/image3.jpg' },
  ];

  return (
    <>
    {courses.map((course) => (
      <S.CourseCard key={course.id}>
        <Image src="/images/course.png" alt={course.title} width="0" height="0"/>
        <S.FireOnline>
          <Image src="/icons/fire.svg" width='22' height='22' alt='fire icon' />
          <span>ONLINE</span>
        </S.FireOnline>
        <div className="content">
          <h3>{course.title}</h3>
          <p>{course.author}</p>
          <button>Acessar</button>
        </div>
      </S.CourseCard>
    ))}
  </>
  )
}
