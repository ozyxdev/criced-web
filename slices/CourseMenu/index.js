import React from 'react'
import CourseSelect from '../../components/shared/CourseSelect'

function CourseMenu({ courses }) {
  return (
    <section>
      <CourseSelect courses={courses} />
    </section>
  )
}

export default CourseMenu
