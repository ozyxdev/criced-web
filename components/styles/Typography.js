import { createGlobalStyle } from 'styled-components'

const TypographyStyles = createGlobalStyle`
  p {
    line-height: 120%;
  }
  
  h1,
  h2,
  h3,
  h4 {
    margin: 0;
  }

  h1 {
    font-size: 8rem;
    line-height: 100%;
  }

  h2 {
    font-size: 3.6rem;
    font-weight: normal;
  }
  
  h3 {
    font-size: 3.6rem;
    font-weight: normal;
  }
`

export default TypographyStyles
