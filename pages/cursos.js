import CourseSelect from '../components/shared/CourseSelect'
import { HeaderStyles } from '../components/shared/HeaderStyles'
import { getAllCourses } from '../utils/api'

function Courses({ courses }) {
  return (
    <>
      {/* todo fetch from hom page */}
      <HeaderStyles>
        <h2>Habitant morbi tristique senectus.</h2>
        <p>
          Feugiat sed lectus vestibulum mattis ullamcorper velit sed
          ullamcorper. Sit amet facilisis magna etiam tempor orci eu.
        </p>
      </HeaderStyles>

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
