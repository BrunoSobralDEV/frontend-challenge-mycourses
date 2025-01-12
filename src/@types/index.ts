export interface CourseSummary {
  id: number;
  slug: string;
  title: string;
  thumbnail: string;
}
export interface Course extends CourseSummary {
  description: string;
  long_description: string;
  banner: string;
  banner_mobile: string;
}

export interface CourseCardProps {
  course: CourseSummary;
}

export interface FavoriteButtonProps {
  course: CourseSummary;
  btnLarge?: boolean;
}

export interface FavoritesContextProps {
  favoriteCourses: CourseSummary[];
  toggleFavorite: (course: CourseSummary) => void;
}

