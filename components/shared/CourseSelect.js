import { RichText } from 'prismic-reactjs'
import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import LongArrowIcon from './icons/long-arrow'
import { gradesEnum, levels, levelsEnum } from '../../utils/constants'
import { useMediaQuery } from '../../utils/useMediaQuery'
import { queryCursos } from '../../utils/prismicQueries'

const LevelsStylesContainer = styled.div`
  margin-top: 4rem;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 6rem auto 6rem;
  }

  ul {
    grid-column-start: 2;
    text-decoration: none;
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media (min-width: 768px) {
      grid-template-columns: repeat(6, 1fr);
      grid-column-start: 2;
    }
  }

  li {
    display: flex;
    justify-content: center;
    color: var(--dark);
    line-height: 1;
    cursor: pointer;
    margin: 1rem;
    padding: 1rem 0.5rem;
    position: relative;
    border: 1px solid var(--primary);
    border-radius: 0.5rem;
    color: var(--primary);
  }
  [data-selected='true'] {
    background: var(--primary);
    color: var(--white);
  }
`

const GradesStylesContainer = styled.div`
  margin-top: 2rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 16rem auto 16rem;
  }

  ul {
    grid-column-start: 2;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(6, 1fr);

    @media (min-width: 768px) {
      display: flex;
      justify-content: center;
    }
  }
  li {
    display: flex;
    justify-content: center;
    font-size: 12px;
    color: var(--success);
    line-height: 1.2;
    cursor: pointer;
    border: 1px solid var(--success);
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    margin: 0 1.2rem;
  }
  [data-selected='true'] {
    background-color: var(--success);
    color: var(--white);
  }
`

const CardContainerStyles = styled.div`
  margin-top: 7rem;
  display: grid;
  grid-gap: 3rem;
  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
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

  a {
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

function CourseSelect() {
  const [selectedLevel, setSelectedLevel] = useState(levelsEnum.PRIMARIA)
  const [selectedGrade, setSelectedGrade] = useState(gradesEnum.PRIMERO)
  const [availableCourses, setAvailableCourses] = useState([])
  const [gradesOptions, setGradesOptions] = useState([])
  const [gradesOrdinalsOptions, setGradesOrdinalsOptions] = useState([])
  const isOverMobile = useMediaQuery('(min-width: 480px)')

  const [courses, setCourses] = useState(null)

  // Recursive function to retrieve all courses
  const recursivelyFetchAllCourses = useCallback(
    async (currentCursor = null) => {
      const response = await queryCursos(currentCursor)
      const currentCourse = response.data.allCursos.edges.map(
        (edge) => edge.node
      )

      if (!response.data.allCursos.pageInfo.hasNextPage) {
        return currentCourse
      }

      const newCursor = response.data.allCursos.pageInfo.endCursor
      const newCourse = await recursivelyFetchAllCourses(newCursor)

      return [...currentCourse, ...newCourse]
    },
    []
  )

  // Fetch all courses when the component mounts
  useEffect(() => {
    const fetchAllCourses = async () => {
      const allCourses = await recursivelyFetchAllCourses()
      setCourses(allCourses)
    }
    fetchAllCourses()
  }, [recursivelyFetchAllCourses])

  useEffect(() => {
    const { grades, gradesOrdinals } = levels[selectedLevel]
    setGradesOptions(grades)
    setGradesOrdinalsOptions(gradesOrdinals)
    setSelectedGrade(grades[0] || '')
  }, [selectedLevel, courses])

  useEffect(() => {
    if (!courses) return
    const filteredCourses = courses.filter((course) => {
      if (selectedGrade.toLowerCase() === gradesEnum.NA) {
        return course.level.toLowerCase() === selectedLevel.toLowerCase()
      }
      return (
        course.grade.toLowerCase() === selectedGrade.toLowerCase() &&
        course.level.toLowerCase() === selectedLevel.toLowerCase()
      )
    })
    setAvailableCourses(filteredCourses)
  }, [selectedGrade, selectedLevel, courses])
  if (courses) {
    return (
      <>
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
                (grade, i) =>
                  grade !== gradesEnum.NA && (
                    <li
                      key={grade}
                      data-selected={selectedGrade === grade}
                      onClick={() => setSelectedGrade(grade)}
                    >
                      {isOverMobile ? grade : gradesOrdinalsOptions[i]}
                      {!isOverMobile && <>&ordm;</>}
                    </li>
                  )
              )}
          </ul>
        </GradesStylesContainer>

        <CardContainerStyles>
          {availableCourses.map((course) => {
            const { _meta, title, description } = course
            return (
              <CourseCardStyles key={_meta.uid}>
                <RichText render={title} />
                <RichText render={description} />
                <Link href={`/cursos/${_meta.uid}`}>
                  <a href="">
                    Conocer mas <LongArrowIcon />
                  </a>
                </Link>
              </CourseCardStyles>
            )
          })}
        </CardContainerStyles>
      </>
    )
  }
  return null
}

export default CourseSelect
