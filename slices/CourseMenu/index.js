import React from 'react'
import { RichText } from 'prismic-reactjs'
import CourseSelect from '../../components/shared/CourseSelect'

function CourseMenu({ slice }) {
  return (
    <section>
      <span className="title">
        {slice.primary.title ? (
          <RichText render={slice.primary.title} />
        ) : (
          <h2>Template slice, update me!</h2>
        )}
      </span>
      {slice.primary.description ? (
        <RichText render={slice.primary.description} />
      ) : (
        <p>start by editing this slice from inside Prismic builder!</p>
      )}

      <CourseSelect />
      <style jsx>{`
        section {
          max-width: 600px;
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
