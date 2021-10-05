import styled from 'styled-components'

const CourseHeaderStyles = styled.section`
  background: var(--off-white);
  color: var(--dark);

  .info {
    font-weight: bold;
  }

  h1 {
    font-size: 6rem;
  }

  .container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 4rem 2rem;
  }

  .schedule {
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    svg {
      width: 2.5rem;
      fill: var(--primary);
    }

    .schedule-item {
      display: flex;

      span {
        margin-left: 1rem;
      }
    }
  }

  img {
    display: none;
  }

  @media (min-width: 480px) {
    .content {
      grid-column: span 2;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  @media (min-width: 768px) {
    .container {
      display: grid;
      grid-gap: 3rem;
      grid-template-columns: repeat(3, 1fr);
    }
    img {
      display: block;
      margin: -4rem 0;
    }
  }
`

export { CourseHeaderStyles }
