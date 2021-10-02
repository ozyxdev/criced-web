import React from 'react'
import styled from 'styled-components'

const EmployeeStyles = styled.section`
  margin-bottom: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  h4 {
    font-weight: bold;
    font-size: 22px;
    color: var(--dark);
    line-height: 1;
  }

  small {
    font-size: 12px;
    color: #8c8ca1;
    text-transform: uppercase;
  }

  .team {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      margin-bottom: 2rem;
      border-radius: 50%;
      box-shadow: 0px 0px 3.6px rgba(0, 0, 0, 0.024),
        0px 0px 10px rgba(0, 0, 0, 0.035), 0px 0px 24.1px rgba(0, 0, 0, 0.046),
        0px 0px 80px rgba(0, 0, 0, 0.07);
    }
  }

  @media (min-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
const OurTeamSlice = ({ slice }) => (
  <EmployeeStyles>
    {slice?.items?.map(({ title, photo, name }, i) => (
      <div className="team">
        <img src={photo.url} alt={photo.alt} />
        <h4>{name}</h4>
        <small>{title}</small>
      </div>
    ))}
  </EmployeeStyles>
)

export default OurTeamSlice
