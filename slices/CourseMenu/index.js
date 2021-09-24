import React from 'react'
import { RichText } from 'prismic-reactjs'
import CourseSelect from '../../components/shared/CourseSelect'

function CourseMenu({ slice }) {
  return (
    <section>
      <CourseSelect />
      <style jsx>{`
        section {
          max-width: 80vw;
          margin: 4em auto;
          text-align: center;
        }
        .title {
          color: #8592e0;
        }
      `}</style>
    </section>
  )
}

export default CourseMenu
