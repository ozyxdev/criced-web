const levelsEnum = {
  PRIMARIA: 'primaria',
  SECUNDARIA: 'secundaria',
  PREPARATORIA: 'preparatoria',
  UNIVERSIDAD: 'universidad',
  INGLES: 'inglés',
  OTRO: 'otros',
}

const gradesEnum = {
  PRIMERO: 'primero',
  SEGUNDO: 'segundo',
  TERCERO: 'tercero',
  CUARTO: 'cuarto',
  QUINTO: 'quinto',
  SEXTO: 'sexto',
  SEPTIMO: 'septimo',
  OCTAVO: 'octavo',
  NA: 'na',
}

const ordinalsEnum = {
  PRIMERO: '1',
  SEGUNDO: '2',
  TERCERO: '3',
  CUARTO: '4',
  QUINTO: '5',
  SEXTO: '6',
  SEPTIMO: '7',
  OCTAVO: '8',
  NA: 'na',
}

const levels = {
  [levelsEnum.PRIMARIA]: {
    grades: [
      gradesEnum.PRIMERO,
      gradesEnum.SEGUNDO,
      gradesEnum.TERCERO,
      gradesEnum.CUARTO,
      gradesEnum.QUINTO,
      gradesEnum.SEXTO,
    ],
    gradesOrdinals: [
      ordinalsEnum.PRIMERO,
      ordinalsEnum.SEGUNDO,
      ordinalsEnum.TERCERO,
      ordinalsEnum.CUARTO,
      ordinalsEnum.QUINTO,
      ordinalsEnum.SEXTO,
    ],
  },
  [levelsEnum.SECUNDARIA]: {
    grades: [gradesEnum.PRIMERO, gradesEnum.SEGUNDO, gradesEnum.TERCERO],
    gradesOrdinals: [
      ordinalsEnum.PRIMERO,
      ordinalsEnum.SEGUNDO,
      ordinalsEnum.TERCERO,
    ],
  },
  [levelsEnum.PREPARATORIA]: {
    grades: [
      gradesEnum.PRIMERO,
      gradesEnum.SEGUNDO,
      gradesEnum.TERCERO,
      gradesEnum.CUARTO,
      gradesEnum.QUINTO,
      gradesEnum.SEXTO,
    ],
    gradesOrdinals: [
      ordinalsEnum.PRIMERO,
      ordinalsEnum.SEGUNDO,
      ordinalsEnum.TERCERO,
      ordinalsEnum.CUARTO,
      ordinalsEnum.QUINTO,
      ordinalsEnum.SEXTO,
    ],
  },
  [levelsEnum.UNIVERSIDAD]: {
    grades: [gradesEnum.NA],
    gradesOrdinals: [ordinalsEnum.NA],
  },
  [levelsEnum.INGLES]: {
    grades: [gradesEnum.NA],
    gradesOrdinals: [ordinalsEnum.NA],
  },
  [levelsEnum.OTRO]: {
    grades: [gradesEnum.NA],
    gradesOrdinals: [ordinalsEnum.NA],
  },
}

const CONTACT_FORM = [
  { label: 'Nombre', placeholder: 'Juan Doe' },
  { label: 'Email', placeholder: 'email@example.com' },
  { label: 'Teléfono', placeholder: '444 123 4567' },
  { label: 'Mensaje', placeholder: 'Tu Mensaje...' },
]

const MENU_ITEMS = [
  {
    text: 'inicio',
    path: '/',
  },
  {
    text: 'cursos',
    path: '/cursos',
  },
  {
    text: 'nosotros',
    path: '/nosotros',
  },
  {
    text: 'ayuda',
    path: '/preguntas-frecuentes',
  },
  {
    text: 'contacto',
    path: '/contacto',
  },
]

const PRIMARY_COURSE_INFO = {
  title: 'Curso de Regularización',
  price: {
    [levelsEnum.PRIMARIA]: '3,240',
    [levelsEnum.SECUNDARIA]: '3,600',
    [levelsEnum.PREPARATORIA]: '3,960',
    [levelsEnum.UNIVERSIDAD]: '6,500',
  },
  description: 'Ac odio tempor orci dapibus ultrices in iaculis.',
  items: [
    'Acorde con el plan de estudios de la SEP',
    'Retroalimentación y evaluación constante',
    'Grupos pequeños ',
    'Docentes con experiencia en el grado',
    '36 horas de curso ',
  ],
}

const SECONDARY_COURSE_INFO = {
  title: 'Asesoría Particular',
  price: {
    [levelsEnum.PRIMARIA]: '120',
    [levelsEnum.SECUNDARIA]: '130',
    [levelsEnum.PREPARATORIA]: '140',
    [levelsEnum.UNIVERSIDAD]: '160',
  },
  description: 'Ac odio tempor orci dapibus ultrices in iaculis.',
  items: [
    'Preparación de exámenes',
    'Asesoría en tareas',
    'Enfocado en tus necesidades',
    'Avance a tu ritmo',
    'Tú decides el número de clases',
  ],
}

export {
  levels,
  gradesEnum,
  levelsEnum,
  CONTACT_FORM,
  MENU_ITEMS,
  PRIMARY_COURSE_INFO,
  SECONDARY_COURSE_INFO,
}
