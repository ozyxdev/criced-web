import React, { useState } from 'react'
import { RichText } from 'prismic-reactjs'
import styled from 'styled-components'
import CaretIcon from '../../components/shared/icons/CaretIcon'
import { HeaderStyles } from '../../components/shared/HeaderStyles'

const FAQStyles = styled.section`
  min-height: 70vh;
  margin-top: 4rem;

  /* Style the buttons that are used to open and close the accordion panel */
  .question {
    font-weight: 600;
    background: none;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    text-align: left;
    border: none;
    outline: none;
    transition: 0.4s;
    svg {
      fill: var(--primary);
      stroke: var(--primary);
      transition: all 200ms ease-in-out;
    }

    &.active {
      svg {
        transform: rotate(180deg);
      }
    }
  }

  /* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
  .active,
  .question:hover {
    transform: scale(1.02);
  }

  /* Style the accordion panel. Note: hidden by default */
  .answer {
    padding: 0 18px;
    /* background-color: white; */
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;

    img {
      width: 100%;
      border-radius: 2rem;
    }

    a {
      color: var(--primary);
      font-weight: 600;
    }
  }

  @media (min-width: 768px) {
    display: grid;
    grid-gap: 4rem;
    grid-template-columns: 2fr 4fr;

    .questions {
      grid-column: 2/3;
    }
  }
`

const FaqHeaderStyles = styled(HeaderStyles)`
  a {
    color: var(--primary);
    font-weight: 600;
  }

  @media (min-width: 768px) {
    text-align: left;
    margin-top: 0;
    grid-column: 1/2;

    p {
      margin: 2rem 0 0 0;
    }
  }
`

const FaqSlice = ({ slice }) => {
  function toggleFAQ(e) {
    const question = e.target
    const answer = e.target.nextElementSibling
    question.classList.toggle('active')
    answer.classList.toggle('active')
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null
    } else {
      answer.style.maxHeight = `${answer.scrollHeight}px`
    }
  }

  console.log(`${slice.items}`)
  return (
    <FAQStyles>
      <FaqHeaderStyles>
        <h2>{slice.primary.title}</h2>
        <RichText render={slice.primary.description} />
      </FaqHeaderStyles>
      <div className="questions">
        {slice?.items?.map((item, i) => (
          <>
            <button type="button" className="question" onClick={toggleFAQ}>
              {item.question}
              <CaretIcon />
            </button>
            <div className="answer">
              <RichText render={item.answer} />
            </div>
          </>
        ))}
      </div>
    </FAQStyles>
  )
}

export default FaqSlice
