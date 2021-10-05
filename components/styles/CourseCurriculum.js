import styled from 'styled-components'

const CourseCurriculumStyles = styled.section`
  margin-bottom: 4rem;
  .title {
    margin: 6rem 0 4rem 0;
    line-height: 1;

    h2 {
      font-size: 5rem;
    }
    span {
      font-weight: 500;
    }
  }

  @media (min-width: 768px) {
    .curriculum-items {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 3rem;
    }

    .title {
      h2 {
        max-width: 60%;
        font-size: 5rem;
      }
    }
  }
`

const CourseCurriculumItemStyles = styled.div`
  margin-top: 3rem;
  ul {
    list-style: none;
    padding-left: 0;
  }
  li {
    &:before {
      content: '';
      display: inline-block;
      height: 20px;
      width: 20px;
      background-image: url('/list-check.png'); // Fallback PNG
      background-image: url('/list-check.svg');
      background-size: cover;
      background-repeat: no-repeat;
      margin-right: 0.5rem;
    }
  }

  h3 {
    position: relative;
    max-width: 80%;
    margin-bottom: 2rem;
    color: #4a4a68;
    font-size: 26px;

    &:before {
      z-index: -1;
      content: '${(props) => props.number}';
      line-height: 1;
      color: #def8f4;
      font-size: 24rem;
      position: absolute;
      right: -8rem;
      top: -8rem;
    }
  }
`
export { CourseCurriculumStyles, CourseCurriculumItemStyles }
