import Prismic from '@prismicio/client'

import { RichText } from 'prismic-reactjs'
import { useEffect, useState } from 'react'
import { Client } from '../prismic-configuration'

import LongArrowIcon from '../components/shared/icons/long-arrow'
import {
  LevelsStylesContainer,
  GradesStylesContainer,
  CardContainerStyles,
  CourseCardStyles,
} from '../components/styles/CoursesStyles'
import { gradesEnum, levels, levelsEnum } from '../utils/constants'

function Courses({ courses }) {
  const [selectedLevel, setSelectedLevel] = useState(levelsEnum.PRIMARIA)
  const [selectedGrade, setSelectedGrade] = useState(gradesEnum.PRIMERO)
  const [availableCourses, setAvailableCourses] = useState([])
  const [gradesOptions, setGradesOptions] = useState([])

  useEffect(() => {
    const { grades } = levels[selectedLevel]
    setGradesOptions(grades)
    setSelectedGrade(grades[0] || '')
  }, [selectedLevel])

  useEffect(() => {
    if (!courses) return
    const filteredCourses = courses.filter(
      (course) =>
        course.data.grade.toLowerCase() === selectedGrade.toLowerCase() &&
        course.data.level.toLowerCase() === selectedLevel.toLowerCase()
    )
    setAvailableCourses(filteredCourses)
  }, [selectedGrade, selectedLevel, courses])

  return (
    <>
      <h1>Courses</h1>
      <LevelsStylesContainer>
        <ul>
          {Object.keys(levels).map((level) => (
            <li
              id={level}
              key={level}
              data-selected={selectedLevel === level}
              onClick={() => setSelectedLevel(level)}
            >
              {level}
            </li>
          ))}
        </ul>
      </LevelsStylesContainer>
      <GradesStylesContainer>
        <ul>
          {gradesOptions &&
            gradesOptions.map(
              (grade) =>
                grade !== gradesEnum.NA && (
                  <li
                    key={grade}
                    data-selected={selectedGrade === grade}
                    onClick={() => setSelectedGrade(grade)}
                  >
                    {grade}
                  </li>
                )
            )}
        </ul>
      </GradesStylesContainer>

      <CardContainerStyles>
        {availableCourses.map((course) => (
          <CourseCardStyles key={course.id}>
            <RichText render={course.data.shortTitle} />
            <RichText render={course.data.description} />
            <span className="cta">
              Conocer mas <LongArrowIcon />
            </span>
          </CourseCardStyles>
        ))}
      </CardContainerStyles>
    </>
  )
}

export async function getStaticProps({ params }) {
  const client = Client()

  const courses = await client.query(
    Prismic.Predicates.at('document.type', 'curso')
  )

  return {
    props: {
      courses: courses.results,
    },
  }
}

export default Courses
