import React from 'react'
import CalendarIcon from '../../components/shared/icons/CalendarIcon'
import ClockIcon from '../../components/shared/icons/ClockIcon'
import { CourseHeaderStyles } from '../../components/styles/CourseHeaderStyles'

const CourseHeaderSlice = ({ slice }) => (
  <CourseHeaderStyles className="container-full-width">
    <div className="container">
      <div className="content">
        <div className="copy">
          <span className="info">
            {slice.primary.modality} | {slice.primary.duration}
          </span>
          <h1>{slice.primary.title}</h1>
          <p>{slice.primary.description}</p>
        </div>
        <div className="schedule">
          <div className="schedule-item">
            <CalendarIcon />
            <span>{slice.primary.frequency}</span>
          </div>
          <div className="schedule-item">
            <ClockIcon />
            <span>{slice.primary.time}</span>
          </div>
        </div>
      </div>
      <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
    </div>
  </CourseHeaderStyles>
)

export default CourseHeaderSlice
