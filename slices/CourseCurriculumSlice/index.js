import { RichText } from 'prismic-reactjs'
import React from 'react'
import styled from 'styled-components'
import {
  CourseCurriculumItemStyles,
  CourseCurriculumStyles,
} from '../../components/styles/CourseCurriculum'

const CourseCurriculumSlice = ({ slice }) => (
  <CourseCurriculumStyles>
    <div className="title">
      <span>Curriculum</span>
      <h2>{slice.primary.title}</h2>
    </div>
    <div className="curriculum-items">
      {slice?.items?.map((item, i) => (
        <CourseCurriculumItemStyles number={i + 1} key={item.topic}>
          <h3>{item.topic}</h3>
          <RichText render={item.subjects} />
        </CourseCurriculumItemStyles>
      ))}
    </div>
  </CourseCurriculumStyles>
)

export default CourseCurriculumSlice
