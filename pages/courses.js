import SliceZone from 'next-slicezone'
import { useGetStaticProps, useGetStaticPaths } from 'next-slicezone/hooks'
import Prismic from '@prismicio/client'

import { RichText } from 'prismic-reactjs'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Client } from '../prismic-configuration'

import resolver from '../sm-resolver'

// function useAvailableCourses() {

//   useEffect(()=>{

//   },[selectedLevel,selectedGrade])
// }

const LevelsStyles = styled.div`
  cursor: pointer;
  border: 1px solid #a29bfe;
  background-color: ${(props) => (props.isChecked ? '#a29bfe' : 'white')};
  border-radius: 4px;
  display: inline;
  padding: 8px 16px;
  margin: 4px;
  position: relative;
  input {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.01;
    z-index: 100;
  }
`

function Courses({ courses }) {
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
    const filteredCourses = courses.filter((course) => {
      console.log(`${course.data.level.toLowerCase()}`)
      // return course.data.nivel.toLowerCase === selectedLevel.toLowerCase
      return (
        course.data.grade.toLowerCase() === selectedGrade.toLowerCase() &&
        course.data.level.toLowerCase() === selectedLevel.toLowerCase()
      )
    })
    setAvailableCourses(filteredCourses)
  }, [selectedGrade, selectedLevel])

  return (
    <>
      <h1>Courses</h1>
      <form>
        {Object.keys(niveles).map((nivel) => (
          <LevelsStyles key={nivel} isChecked={selectedLevel === nivel}>
            <input
              type="radio"
              id={nivel}
              value={nivel}
              checked={selectedLevel === nivel}
              onChange={() => setSelectedLevel(nivel)}
            />
            <label htmlFor={nivel}>{nivel}</label>
          </LevelsStyles>
        ))}
        {grades &&
          grades.map((grado) => (
            <div key={grado}>
              <input
                type="radio"
                id={grado}
                value={grado}
                checked={selectedGrade === grado}
                onChange={() => setSelectedGrade(grado)}
              />
              <label htmlFor={grado}>{grado}</label>
            </div>
          ))}
      </form>

      {availableCourses.map((course) => (
        <div key={course.id}>
          <RichText render={course.data.title} />
        </div>
      ))}
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
