const levelsEnum = {
  PRIMARIA: 'primaria',
  SECUNDARIA: 'secundaria',
  PREPARATORIA: 'preparatoria',
  UNIVERSIDAD: 'universidad',
  INGLES: 'ingles',
  OTRO: 'otros',
}

const gradesEnum = {
  PRIMERO: 'primero',
  SEGUNDO: 'segundo',
  TERCERO: 'tercero',
  CUARTO: 'cuarto',
  QUINTO: 'quinto',
  SEXTO: 'sexto',
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
  },
  [levelsEnum.SECUNDARIA]: {
    grades: [gradesEnum.PRIMERO, gradesEnum.SEGUNDO, gradesEnum.TERCERO],
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
  },
  [levelsEnum.UNIVERSIDAD]: {
    grades: [gradesEnum.NA],
  },
  [levelsEnum.INGLES]: {
    grades: [gradesEnum.NA],
  },
  [levelsEnum.OTRO]: {
    grades: [gradesEnum.NA],
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
    path: '/ayuda',
  },
  {
    text: 'contacto',
    path: '/contacto',
  },
]

export { levels, gradesEnum, levelsEnum, CONTACT_FORM, MENU_ITEMS }
