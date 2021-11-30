import CourseSelect from '../components/shared/CourseSelect'
import { HeaderStyles } from '../components/shared/HeaderStyles'

function Courses() {
  return (
    <>
      <HeaderStyles>
        <h2>Conoce nuestros cursos</h2>
        <p>
          Contamos con regularizaciones en todos los niveles educativos, así
          como con asesorías individuales. Explora los temarios y decide el
          curso más adecuado para ti.
        </p>
      </HeaderStyles>
      <CourseSelect />
    </>
  )
}
export default Courses
