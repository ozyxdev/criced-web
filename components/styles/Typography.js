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
    line-height: 120%;
    font-weight: normal;
  }
  
  h3 {
    font-size: 3.6rem;
    line-height: 120%;
    font-weight: normal;
  }

  ul {
    margin: 0;
  }
`

export default TypographyStyles
