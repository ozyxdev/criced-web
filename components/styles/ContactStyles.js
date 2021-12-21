import styled from 'styled-components'
import FormStyles from './FormStyles'

const ContactStyles = styled.section`
  display: grid;

  .cta-line {
    text-align: center;
    margin-top: 3rem;
    a {
      color: var(--primary);
      font-weight: bold;
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;

    .cta-line {
      grid-column: 1/-1;
      grid-row: 2;
    }
  }
`

const ContactInfoStyles = styled.div`
  margin-top: 3rem;
  border-radius: 1.5rem;
  padding: 3rem 2rem;
  background: var(--primary);
  color: var(--white);
  display: grid;
  grid-gap: 3rem;

  svg {
    fill: var(--white);
  }

  .contact-info-item {
    display: flex;
    align-items: center;
    line-height: 120%;
    svg {
      margin: 0.5rem 1.5rem 0.5rem 0;
    }
  }

  .social {
    justify-self: flex-end;
    align-self: flex-end;

    a {
      margin: 0 1rem;
    }
  }

  @media (min-width: 768px) {
    grid-row: 1;
  }
`

// const FormAlert = styled.span`

// `

const ContactFormStyles = styled(FormStyles)`
  padding: 1.5rem;

  color: #4a4a68;

  fieldset {
    display: flex;
    flex-direction: column;
  }

  .cta {
    align-self: flex-end;
    display: flex;
    span.alert {
      opacity: ${({ messageSent }) => (messageSent ? 1 : 0)};
      margin-right: 3rem;
      padding: 0.5rem 1rem;
      border-radius: 1rem;
      background: var(--success-light);
      color: var(--success);
      align-self: center;
    }
  }

  .privacy {
    label {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      a {
        margin: 0.5rem 0 0 1rem;
        border-bottom: 2px dotted var(--primary);
        line-height: 130%;
      }

      input {
        width: auto;
        line-height: 2;
      }
    }
  }

  button {
    background: var(--primary);
    border: none;
    color: var(--white);
    padding: 1rem 2rem;
    border-radius: 1rem;

    cursor: pointer;

    :active {
      transform: scale(1.05);
      background: rgba(89, 86, 233, 0.9);
    }

    :disabled {
      cursor: not-allowed;
      transform: none;
      background: rgba(89, 86, 233, 0.9);
    }
  }

  label {
    font-weight: bold;
  }

  .input-container {
    position: relative;

    svg {
      fill: #4a4a68;
      height: 2.5rem;
      width: 2.5rem;
      position: absolute;
      top: 2rem;
      left: 1.5rem;
    }

    input {
      padding-left: 4.5rem;
    }
  }

  @media (min-width: 768px) {
    grid-column: 2/3;
    grid-row: 1;

    fieldset {
      margin-top: 4rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;

      .message {
        grid-row: 3/4;
        grid-column: span 2;
      }

      .cta {
        grid-row: 4/5;
        grid-column: span 2;
        justify-self: flex-end;
      }
    }
  }
`

export { ContactFormStyles, ContactInfoStyles, ContactStyles }
