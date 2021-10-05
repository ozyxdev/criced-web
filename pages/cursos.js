import CourseSelect from '../components/shared/CourseSelect'
import { getAllCourses } from '../utils/api'

function Courses({ courses }) {
  return (
    <>
      <CourseSelect courses={courses} />
    </>
  )
}

export async function getStaticProps({ params }) {
  const courses = await getAllCourses()

  return {
    props: {
      courses,
    },
  }
}

export default Courses
