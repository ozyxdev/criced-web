import React from 'react'
import CourseSelect from '../../components/shared/CourseSelect'
import { HeaderStyles } from '../../components/shared/HeaderStyles'

function CourseMenu({ courses, slice }) {
  return (
    <section>
      <HeaderStyles>
        <h2>{slice.primary.title}</h2>
        <p>{slice.primary.description}</p>
      </HeaderStyles>
      <CourseSelect courses={courses} />
    </section>
  )
}

export default CourseMenu
