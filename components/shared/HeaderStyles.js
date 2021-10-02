import styled from 'styled-components'

const HeaderStyles = styled.section`
  margin-top: 4rem;
  text-align: center;

  h2 {
    font-size: 40px;
  }

  @media (min-width: 768px) {
    p {
      width: 80%;
      margin: 1rem auto;
    }
  }
`

export { HeaderStyles }
