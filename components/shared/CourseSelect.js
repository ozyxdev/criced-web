import SliceZone from 'next-slicezone'
import { useGetStaticProps, useGetStaticPaths } from 'next-slicezone/hooks'
import Prismic from '@prismicio/client'

import { RichText } from 'prismic-reactjs'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Client } from '../../prismic-configuration'

import resolver from '../../sm-resolver'
import LongArrowIcon from './icons/long-arrow'
import { getAllCourses } from '../../utils/api'

const LevelsStylesContainer = styled.div`
  display: flex;
  justify-content: center;

  li {
    color: var(--dark);
    line-height: 1.2;
    cursor: pointer;
    display: inline;
    padding: 0.5rem 1rem;
    margin: 0 2.1rem;
    position: relative;

    ::after {
      position: absolute;
      background: var(--primary);
      content: '';
      bottom: -0.5rem;
      left: 0;
      height: 2px;
      width: 0;
      transition: width 200ms ease-in;
    }
  }
  [data-selected='true'] {
    color: var(--primary);
    ::after {
      position: absolute;
      background: var(--primary);
      content: '';
      bottom: -0.5rem;
      left: 0;
      height: 2px;
      width: 100%;
    }
  }
`

const GradesStylesContainer = styled.div`
  display: flex;
  justify-content: center;
  li {
    font-size: 12px;
    color: var(--primary);
    line-height: 1.2;
    cursor: pointer;
    border: 1px solid var(--primary);
    border-radius: 0.5rem;
    display: inline;
    padding: 0.5rem 1rem;
    margin: 0 1.2rem;
  }
  [data-selected='true'] {
    background-color: var(--primary);
    color: var(--white);
  }
`

const CardContainerStyles = styled.div`
  margin-top: 7rem;
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(3, 1fr);
`

const CourseCardStyles = styled.article`
  padding: 2rem 3rem;
  border-radius: 1rem;
  background: var(--secondary-light);
  display: flex;
  flex-direction: column;

  :nth-child(2n) {
    background: var(--success-light);
  }
  :nth-child(3n) {
    background: var(--tertiary-light);
  }
  :nth-child(4n) {
    background: var(--primary-light);
  }

  p {
    margin: 0 0 5rem 0;
    font-size: 1.5rem;
    line-height: 140%;

    display: -webkit-box;
    line-clamp: 3;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .cta {
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: bold;
    align-self: end;
    cursor: pointer;
    color: #5c5c77;
    line-height: 1.2;

    svg {
      transition: all 200ms ease-in;
      width: 80%;
      transform-origin: 0 50%;
    }
    :hover {
      svg {
        transform: scaleX(1.3);
      }
    }
  }
`

function CourseSelect({ courses }) {
  const [selectedLevel, setSelectedLevel] = useState('primaria')
  const [selectedGrade, setSelectedGrade] = useState('primero')
  const [availableCourses, setAvailableCourses] = useState([])
  const [grades, setGrades] = useState([])
  const niveles = {
    primaria: {
      grados: ['primero', 'segundo', 'tercero', 'cuarto', 'quinto', 'sexto'],
    },
    secundaria: { grados: ['primero', 'segundo', 'tercero'] },
    preparatoria: {
      grados: ['primero', 'segundo', 'tercero', 'cuarto', 'quinto', 'sexto'],
    },
    universidad: { grados: ['No Aplica'] },
    otro: { grados: ['No Aplica'] },
  }

  useEffect(() => {
    const { grados } = niveles[selectedLevel]
    setGrades(grados)
    setSelectedGrade(grados[0] || '')
  }, [selectedLevel])

  useEffect(() => {
    if (!courses) return
    const filteredCourses = courses.filter(
      (course) =>
        // return course.data.nivel.toLowerCase === selectedLevel.toLowerCase
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
          {Object.keys(niveles).map((nivel) => (
            <li
              id={nivel}
              key={nivel}
              data-selected={selectedLevel === nivel}
              onClick={() => setSelectedLevel(nivel)}
            >
              {nivel}
            </li>
          ))}
        </ul>
      </LevelsStylesContainer>
      <GradesStylesContainer>
        <ul>
          {grades &&
            grades.map(
              (grado) =>
                grado !== 'No Aplica' && (
                  <li
                    key={grado}
                    data-selected={selectedGrade === grado}
                    onClick={() => setSelectedGrade(grado)}
                  >
                    {grado}
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

export default CourseSelect
